import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import {
  deterministicPluginChecks,
  formatStaticFindings,
  parseActionlintOutput,
  parseGitleaksReport,
  parseOsvReport,
  parseSemgrepReport,
  parseZizmorReport,
} from "./static-scan.mjs";

test("normalizes blocking Gitleaks findings without secret material", () => {
  const findings = parseGitleaksReport(
    [{ RuleID: "github-pat", Description: "GitHub token", File: "/repo/index.ts", StartLine: 4, Secret: "redacted" }],
    "/repo",
  );
  assert.deepEqual(findings, [
    {
      blocking: true,
      line: 4,
      message: "GitHub token",
      path: "index.ts",
      ruleId: "github-pat",
      severity: "HIGH",
      tool: "gitleaks",
    },
  ]);
  assert.doesNotMatch(JSON.stringify(findings), /redacted/);
});

test("blocks Semgrep ERROR findings and preserves advisory warnings", () => {
  const findings = parseSemgrepReport(
    {
      errors: [{ message: "unsupported declaration syntax", path: "/repo/types.d.ts" }],
      results: [
        { check_id: "eval", path: "/repo/a.ts", start: { line: 2 }, extra: { severity: "ERROR", message: "eval" } },
        { check_id: "fetch", path: "/repo/b.ts", start: { line: 3 }, extra: { severity: "WARNING", message: "network" } },
      ],
    },
    "/repo",
  );
  assert.deepEqual(findings.map(({ blocking }) => blocking), [true, false, false]);
});

test("normalizes OSV, actionlint, and zizmor results", () => {
  const osv = parseOsvReport(
    {
      results: [{
        source: { path: "/repo/package-lock.json" },
        packages: [{
          package: { name: "bad", version: "1.0.0" },
          vulnerabilities: [{ id: "OSV-1", summary: "critical", database_specific: { severity: "HIGH" } }],
        }],
      }],
    },
    "/repo",
  );
  assert.equal(osv[0].blocking, true);

  const actionlint = parseActionlintOutput("/repo/.github/workflows/ci.yml:7:3: invalid expression [expression]", "/repo");
  assert.equal(actionlint[0].path, ".github/workflows/ci.yml");
  assert.equal(actionlint[0].blocking, true);

  const zizmor = parseZizmorReport(
    [{
      ident: "template-injection",
      desc: "unsafe expression",
      determinations: { severity: "High" },
      locations: [{ concrete: { path: "/repo/.github/workflows/ci.yml", location: { row: 6 } } }],
    }],
    "/repo",
  );
  assert.equal(zizmor[0].line, 7);
  assert.equal(zizmor[0].blocking, true);
});

test("validates plugin structure while accepting a repository-level license", async () => {
  const root = await mkdtemp(join(tmpdir(), "plugin-checks-"));
  const plugin = join(root, "plugins", "sample");
  try {
    await mkdir(plugin, { recursive: true });
    await writeFile(join(root, "LICENSE"), "MIT");
    await writeFile(join(plugin, "README.md"), "# Sample");
    await writeFile(join(plugin, "index.ts"), "export default () => () => {};");
    await writeFile(join(plugin, "paseo-plugin.json"), '{"id":"sample"}');
    await writeFile(
      join(plugin, "package.json"),
      JSON.stringify({ dependencies: { example: "1.0.0" }, scripts: { postinstall: "echo no" } }),
    );

    const findings = await deterministicPluginChecks(plugin, root);
    assert.equal(findings.some((item) => item.blocking), false);
    assert.deepEqual(
      findings.map((item) => item.ruleId).sort(),
      ["package-postinstall", "runtime-dependencies"],
    );
    assert.match(formatStaticFindings(findings), /ADVISORY/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
