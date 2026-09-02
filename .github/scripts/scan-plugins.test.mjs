import assert from "node:assert/strict";
import test from "node:test";

import {
  buildOpenCodeEnvironment,
  buildOpenCodeArgs,
  hasModelCredential,
  isTransientModelError,
  retryDelayMs,
} from "./scan-plugins.mjs";

test("maps GEMINI_API_KEY to the environment expected by OpenCode", () => {
  const environment = buildOpenCodeEnvironment({ GEMINI_API_KEY: "test-key" }, "/trusted/config");

  assert.equal(environment.GEMINI_API_KEY, "test-key");
  assert.equal(environment.GOOGLE_GENERATIVE_AI_API_KEY, "test-key");
  assert.equal(environment.OPENCODE_CONFIG_DIR, "/trusted/config");
  assert.deepEqual(JSON.parse(environment.OPENCODE_CONFIG_CONTENT), {
    autoupdate: false,
    instructions: [],
    plugin: [],
    share: "disabled",
  });
});

test("does not overwrite an explicitly configured Google API key", () => {
  const environment = buildOpenCodeEnvironment(
    { GEMINI_API_KEY: "alias", GOOGLE_GENERATIVE_AI_API_KEY: "explicit" },
    "/trusted/config",
  );

  assert.equal(environment.GOOGLE_GENERATIVE_AI_API_KEY, "explicit");
});

test("requires the credential matching the selected provider", () => {
  assert.equal(hasModelCredential("google/gemini-3.1-flash-lite", { GEMINI_API_KEY: "key" }), true);
  assert.equal(hasModelCredential("google/gemini-3.1-flash-lite", {}), false);
  assert.equal(hasModelCredential("opencode/big-pickle", { OPENCODE_API_KEY: "key" }), true);
  assert.equal(hasModelCredential("opencode/big-pickle", {}), false);
});

test("retries transient Gemini demand and quota failures", () => {
  assert.equal(isTransientModelError(new Error("This model is currently experiencing high demand")), true);
  assert.equal(isTransientModelError(new Error("Quota exceeded; please retry in 45.7s")), true);
  assert.equal(isTransientModelError(new Error("spawnSync opencode ETIMEDOUT")), true);
  assert.equal(isTransientModelError(new Error("Invalid API key")), false);
});

test("honors provider retry delays with a small safety margin", () => {
  assert.equal(retryDelayMs(new Error("Please retry in 45.7s")), 70_000);
  assert.equal(retryDelayMs(new Error("Temporary high demand")), 70_000);
  assert.equal(retryDelayMs(new Error("Please retry in 600s")), 130_000);
});

test("passes the source bundle as one file option", () => {
  assert.deepEqual(
    buildOpenCodeArgs({
      bundlePath: "/review/source.txt",
      model: "google/gemini-3.1-flash-lite",
      prompt: "Review this source",
      reviewPluginRoot: "/review/plugin",
    }),
    [
      "run",
      "--agent",
      "plugin-security",
      "--model",
      "google/gemini-3.1-flash-lite",
      "--dir",
      "/review/plugin",
      "Review this source",
      "--file",
      "/review/source.txt",
    ],
  );
});
