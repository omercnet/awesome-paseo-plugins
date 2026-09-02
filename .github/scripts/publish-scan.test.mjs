import assert from "node:assert/strict";
import test from "node:test";

import { shouldPublishPullRequestComment } from "./publish-scan.mjs";

const event = {
  pull_request: {
    number: 6,
    head: { repo: { full_name: "omercnet/awesome-paseo-plugins" } },
  },
};

test("does not publish from pull_request runs with potentially read-only tokens", () => {
  assert.equal(
    shouldPublishPullRequestComment(event, "omercnet/awesome-paseo-plugins", "pull_request"),
    false,
  );
});

test("publishes from the trusted pull_request_target workflow", () => {
  assert.equal(
    shouldPublishPullRequestComment(event, "omercnet/awesome-paseo-plugins", "pull_request_target"),
    true,
  );
});
