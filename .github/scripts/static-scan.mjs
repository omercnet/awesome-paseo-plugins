import { spawnSync } from "node:child_process";
import { access, mkdir, readFile, readdir } from "node:fs/promises";
import { basename, join, relative } from "node:path";

const MAX_FINDINGS_PER_TOOL = 100;

function execute(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd,
    encoding: "utf8",
    env: options.env ?? process.env,
    maxBuffer: 20 * 1024 * 1024,
    timeout: options.timeout ?? 180_000,
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (result.error) throw result.error;
  return result;
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    if (fallback !== undefined) return fallback;
    throw error;
  }
}

function relativePath(root, path) {
  if (!path) return ".";
  const value = relative(root, path);
  return value && !value.startsWith("..") ? value : path;
}

function finding({ blocking = false, line = null, message, path = ".", ruleId, severity, tool }) {
  return { blocking, line, message, path, ruleId, severity, tool };
}

export function parseGitleaksReport(report, sourceRoot) {
  if (!Array.isArray(report)) return [];
  return report.slice(0, MAX_FINDINGS_PER_TOOL).map((item) =>
    finding({
      blocking: true,
      line: item.StartLine ?? item.Line ?? null,
      message: item.Description ?? "Potential committed credential",
      path: relativePath(sourceRoot, item.File),
      ruleId: item.RuleID ?? "secret",
      severity: "HIGH",
      tool: "gitleaks",
    }),
  );
}

export function parseSemgrepReport(report, sourceRoot) {
  const findings = (report?.results ?? []).slice(0, MAX_FINDINGS_PER_TOOL).map((item) => {
    const severity = String(item.extra?.severity ?? "WARNING").toUpperCase();
    return finding({
      blocking: severity === "ERROR",
      line: item.start?.line ?? null,
      message: item.extra?.message ?? "Semgrep rule matched",
      path: relativePath(sourceRoot, item.path),
      ruleId: item.check_id ?? "semgrep",
      severity,
      tool: "semgrep",
    });
  });
  for (const error of (report?.errors ?? []).slice(0, 20)) {
    findings.push(
      finding({
        blocking: false,
        message: error.message ?? String(error),
        path: error.path ? relativePath(sourceRoot, error.path) : ".",
        ruleId: "scan-error",
        severity: "WARNING",
        tool: "semgrep",
      }),
    );
  }
  return findings;
}

function osvSeverity(vulnerability) {
  const databaseSeverity = vulnerability?.database_specific?.severity;
  if (typeof databaseSeverity === "string") return databaseSeverity.toUpperCase();
  return "UNKNOWN";
}

export function parseOsvReport(report, sourceRoot) {
  const findings = [];
  for (const result of report?.results ?? []) {
    const path = relativePath(sourceRoot, result.source?.path);
    for (const packageResult of result.packages ?? []) {
      const packageName = packageResult.package?.name ?? "unknown package";
      const version = packageResult.package?.version ? `@${packageResult.package.version}` : "";
      for (const vulnerability of packageResult.vulnerabilities ?? []) {
        const severity = osvSeverity(vulnerability);
        findings.push(
          finding({
            blocking: severity === "HIGH" || severity === "CRITICAL",
            message: `${packageName}${version}: ${vulnerability.summary ?? vulnerability.details ?? vulnerability.id}`,
            path,
            ruleId: vulnerability.id ?? "osv",
            severity,
            tool: "osv-scanner",
          }),
        );
        if (findings.length >= MAX_FINDINGS_PER_TOOL) return findings;
      }
    }
  }
  return findings;
}

export function parseZizmorReport(report, sourceRoot) {
  if (!Array.isArray(report)) return [];
  return report.slice(0, MAX_FINDINGS_PER_TOOL).map((item) => {
    const severity = String(item.determinations?.severity ?? "UNKNOWN").toUpperCase();
    const location = item.locations?.[0] ?? {};
    const path = location.symbolic?.key ?? location.symbolic?.path ?? location.concrete?.path ?? ".";
    const row = location.concrete?.location?.row;
    return finding({
      blocking: severity === "HIGH",
      line: Number.isInteger(row) ? row + 1 : null,
      message: item.desc ?? "GitHub Actions security finding",
      path: relativePath(sourceRoot, path),
      ruleId: item.ident ?? "zizmor",
      severity,
      tool: "zizmor",
    });
  });
}

export function parseActionlintOutput(output, sourceRoot) {
  return output
    .split(/\r?\n/)
    .filter(Boolean)
    .slice(0, MAX_FINDINGS_PER_TOOL)
    .map((line) => {
      const match = line.match(/^(.+?):(\d+):(\d+): (.+?)(?: \[([^\]]+)])?$/);
      return finding({
        blocking: true,
        line: match ? Number(match[2]) : null,
        message: match?.[4] ?? line,
        path: match ? relativePath(sourceRoot, match[1]) : ".github/workflows",
        ruleId: match?.[5] ?? "workflow-error",
        severity: "ERROR",
        tool: "actionlint",
      });
    });
}

async function pathExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export async function deterministicPluginChecks(pluginRoot, repositoryRoot = pluginRoot) {
  const findings = [];
  const manifestPath = join(pluginRoot, "paseo-plugin.json");
  const packagePath = join(pluginRoot, "package.json");
  const readmeNames = ["README.md", "README", "readme.md"];

  let manifest;
  try {
    manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  } catch (error) {
    findings.push(
      finding({
        blocking: true,
        message: `Manifest is missing or invalid JSON: ${error.message}`,
        path: "paseo-plugin.json",
        ruleId: "valid-manifest",
        severity: "ERROR",
        tool: "plugin-checks",
      }),
    );
  }
  if (manifest && !/^[a-z][a-z0-9-]*$/.test(manifest.id ?? "")) {
    findings.push(
      finding({
        blocking: true,
        message: "Plugin id must start with a lowercase letter and contain only lowercase letters, numbers, or hyphens.",
        path: "paseo-plugin.json",
        ruleId: "valid-plugin-id",
        severity: "ERROR",
        tool: "plugin-checks",
      }),
    );
  }
  if (!(await pathExists(join(pluginRoot, "index.ts")))) {
    findings.push(
      finding({
        blocking: true,
        message: "Required plugin entrypoint index.ts is missing.",
        path: "index.ts",
        ruleId: "entrypoint",
        severity: "ERROR",
        tool: "plugin-checks",
      }),
    );
  }
  if (!(await Promise.all(readmeNames.map(pathExists))).some(Boolean)) {
    findings.push(
      finding({
        blocking: true,
        message: "Plugin README is missing.",
        path: ".",
        ruleId: "readme",
        severity: "ERROR",
        tool: "plugin-checks",
      }),
    );
  }
  const rootEntries = [
    ...(await readdir(pluginRoot)),
    ...(pluginRoot === repositoryRoot ? [] : await readdir(repositoryRoot)),
  ];
  if (!rootEntries.some((name) => /^licen[cs]e(?:\.|$)/i.test(name))) {
    findings.push(
      finding({
        blocking: true,
        message: "Plugin license file is missing.",
        path: ".",
        ruleId: "license",
        severity: "ERROR",
        tool: "plugin-checks",
      }),
    );
  }

  if (await pathExists(packagePath)) {
    try {
      const packageJson = JSON.parse(await readFile(packagePath, "utf8"));
      for (const script of ["preinstall", "install", "postinstall"]) {
        if (packageJson.scripts?.[script]) {
          findings.push(
            finding({
              message: `Package defines a ${script} script; Paseo does not run it during Git installation.`,
              path: "package.json",
              ruleId: `package-${script}`,
              severity: "WARNING",
              tool: "plugin-checks",
            }),
          );
        }
      }
      const runtimeDependencies = Object.keys(packageJson.dependencies ?? {});
      if (runtimeDependencies.length) {
        findings.push(
          finding({
            message: `Runtime dependencies require bundling or Paseo host support: ${runtimeDependencies.join(", ")}`,
            path: "package.json",
            ruleId: "runtime-dependencies",
            severity: "WARNING",
            tool: "plugin-checks",
          }),
        );
      }
    } catch (error) {
      findings.push(
        finding({
          blocking: true,
          message: `package.json is invalid JSON: ${error.message}`,
          path: "package.json",
          ruleId: "valid-package-json",
          severity: "ERROR",
          tool: "plugin-checks",
        }),
      );
    }
  }
  return findings;
}

async function workflowFiles(sourceRoot) {
  const directory = join(sourceRoot, ".github", "workflows");
  if (!(await pathExists(directory))) return [];
  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && /\.ya?ml$/i.test(entry.name))
    .map((entry) => join(directory, entry.name));
}

export async function runStaticAnalysis({ configRoot, pluginRoot, reportsRoot, reviewRoot, sourceRoot, tools = {} }) {
  await mkdir(reportsRoot, { recursive: true });
  const findings = await deterministicPluginChecks(pluginRoot, reviewRoot);

  const gitleaksReport = join(reportsRoot, "gitleaks.json");
  const gitleaks = execute(
    tools.gitleaks ?? "gitleaks",
    [
      "dir",
      sourceRoot,
      "--config",
      join(configRoot, "gitleaks.toml"),
      "--report-format",
      "json",
      "--report-path",
      gitleaksReport,
      "--no-banner",
      "--redact=100",
    ],
    { timeout: 180_000 },
  );
  if (![0, 1].includes(gitleaks.status)) throw new Error(`gitleaks failed: ${gitleaks.stderr}`);
  findings.push(...parseGitleaksReport(await readJson(gitleaksReport, []), sourceRoot));

  const semgrepReport = join(reportsRoot, "semgrep.json");
  const semgrep = execute(
    tools.semgrep ?? "semgrep",
    [
      "scan",
      "--config",
      join(configRoot, "semgrep.yml"),
      "--json",
      "--output",
      semgrepReport,
      "--metrics=off",
      "--disable-version-check",
      "--exclude=*.d.ts",
      reviewRoot,
    ],
    { timeout: 180_000 },
  );
  if (semgrep.status !== 0) throw new Error(`semgrep failed: ${semgrep.stderr || semgrep.stdout}`);
  findings.push(...parseSemgrepReport(await readJson(semgrepReport), reviewRoot));

  const osvReport = join(reportsRoot, "osv.json");
  const osv = execute(
    tools.osv ?? "osv-scanner",
    ["scan", "source", "--recursive", "--format=json", "--output-file", osvReport, reviewRoot],
    { timeout: 240_000 },
  );
  if (![0, 1].includes(osv.status)) throw new Error(`osv-scanner failed: ${osv.stderr}`);
  findings.push(...parseOsvReport(await readJson(osvReport, { results: [] }), reviewRoot));

  const workflows = await workflowFiles(reviewRoot);
  if (workflows.length) {
    const actionlint = execute(tools.actionlint ?? "actionlint", workflows, { timeout: 120_000 });
    if (![0, 1].includes(actionlint.status)) throw new Error(`actionlint failed: ${actionlint.stderr}`);
    findings.push(...parseActionlintOutput(`${actionlint.stdout}${actionlint.stderr}`, reviewRoot));

    const zizmor = execute(
      tools.zizmor ?? "zizmor",
      ["--no-config", "--offline", "--strict-collection", "--format=json-v1", reviewRoot],
      { timeout: 180_000 },
    );
    let zizmorReport;
    try {
      zizmorReport = JSON.parse(zizmor.stdout || "[]");
    } catch {
      throw new Error(`zizmor failed: ${zizmor.stderr || zizmor.stdout}`);
    }
    findings.push(...parseZizmorReport(zizmorReport, reviewRoot));
  }

  return findings;
}

export function formatStaticFindings(findings) {
  if (!findings.length) return "No deterministic findings.";
  return findings
    .map((item) => {
      const location = `${item.path}${item.line ? `:${item.line}` : ""}`;
      return `- [${item.blocking ? "BLOCK" : "ADVISORY"}] ${item.tool}/${item.ruleId} ${item.severity} at ${location}: ${item.message}`;
    })
    .join("\n");
}
