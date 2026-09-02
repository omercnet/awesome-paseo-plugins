import assert from "node:assert/strict";
import test from "node:test";

import {
  parsePluginTargets,
  selectChangedTargets,
  selectTargetsForEvent,
} from "./plugin-targets.mjs";

const DOCUMENT = `# Plugins

## Monitoring and orchestration

- [root](https://github.com/acme/root-plugin) - Root plugin.
- [nested](https://github.com/acme/plugins/tree/main/plugins/nested) - Nested plugin.

## Resources

- [not-a-plugin](https://github.com/acme/docs) - Documentation.
`;

test("extracts repository and monorepo plugin targets only", () => {
  assert.deepEqual(
    parsePluginTargets(DOCUMENT).map(({ raw: _raw, ...target }) => target),
    [
      {
        name: "root",
        repository: "acme/root-plugin",
        ref: null,
        path: ".",
        url: "https://github.com/acme/root-plugin",
        description: "Root plugin.",
      },
      {
        name: "nested",
        repository: "acme/plugins",
        ref: "main",
        path: "plugins/nested",
        url: "https://github.com/acme/plugins/tree/main/plugins/nested",
        description: "Nested plugin.",
      },
    ],
  );
});

test("returns only added or changed entries for pull requests", () => {
  const changed = DOCUMENT.replace("Root plugin.", "Updated root plugin.");
  const targets = selectChangedTargets(DOCUMENT, changed);
  assert.equal(targets.length, 1);
  assert.equal(targets[0].name, "root");
  assert.equal(targets[0].description, "Updated root plugin.");
});

test("rejects URLs with query strings", () => {
  const markdown = DOCUMENT.replace("acme/root-plugin)", "acme/root-plugin?token=secret)");
  assert.throws(() => parsePluginTargets(markdown), /plain public/);
});

test("rejects unsupported GitHub URL paths", () => {
  const markdown = DOCUMENT.replace("acme/root-plugin)", "acme/root-plugin/blob/main/index.ts)");
  assert.throws(() => parsePluginTargets(markdown), /repository or a tree path/);
});

test("rejects duplicate plugin targets", () => {
  const duplicate = DOCUMENT.replace(
    "## Resources",
    "- [duplicate](https://github.com/acme/root-plugin) - Duplicate.\n\n## Resources",
  );
  assert.throws(() => parsePluginTargets(duplicate), /Duplicate plugin target/);
});

test("rejects plugin names that can inject report markup", () => {
  const markdown = DOCUMENT.replace("[root]", "[<img-src=x>]");
  assert.throws(() => parsePluginTargets(markdown), /Plugin name must contain only/);
});

test("pull_request smoke tests one plugin while scheduled runs scan all", () => {
  const targets = parsePluginTargets(DOCUMENT);
  assert.deepEqual(selectTargetsForEvent("pull_request", targets), [targets[0]]);
  assert.deepEqual(selectTargetsForEvent("schedule", targets), targets);
  assert.deepEqual(selectTargetsForEvent("workflow_dispatch", targets), targets);
});
