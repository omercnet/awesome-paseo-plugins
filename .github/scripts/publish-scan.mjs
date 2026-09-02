#!/usr/bin/env node

import { appendFile, readFile } from "node:fs/promises";
import process from "node:process";
import { pathToFileURL } from "node:url";


const MARKER = "<!-- paseo-plugin-security-scan -->";
const MAX_COMMENT_BYTES = 60_000;

async function githubRequest(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
      "User-Agent": "awesome-paseo-plugin-scanner",
      "X-GitHub-Api-Version": "2022-11-28",
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${path} returned ${response.status}: ${await response.text()}`);
  return response.status === 204 ? null : response.json();
}

function boundedComment(report) {
  if (Buffer.byteLength(report) <= MAX_COMMENT_BYTES) return report;
  let truncated = report.slice(0, MAX_COMMENT_BYTES);
  while (Buffer.byteLength(truncated) > MAX_COMMENT_BYTES) truncated = truncated.slice(0, -1_000);
  return `${truncated.trim()}\n\n[Report truncated; see the workflow job summary for complete output.]\n`;
}
export function shouldPublishPullRequestComment(event, repository, eventName) {
  return Boolean(repository && event.pull_request?.number && eventName === "pull_request_target");
}


async function publishPullRequestComment(event, report) {
  if (!process.env.GITHUB_TOKEN) {
    console.log("No GITHUB_TOKEN is available; skipping pull request comment");
    return;
  }
  const repository = process.env.GITHUB_REPOSITORY;
  if (!shouldPublishPullRequestComment(event, repository, process.env.GITHUB_EVENT_NAME)) {
    console.log("Only pull_request_target runs publish comments; report is available in the job summary");
    return;
  }
  const pullNumber = event.pull_request.number;

  const comments = await githubRequest(`/repos/${repository}/issues/${pullNumber}/comments?per_page=100`);
  const previous = comments.find((comment) => comment.user?.type === "Bot" && comment.body?.includes(MARKER));
  const body = boundedComment(report);
  if (previous) {
    await githubRequest(`/repos/${repository}/issues/comments/${previous.id}`, {
      method: "PATCH",
      body: JSON.stringify({ body }),
    });
    console.log(`Updated scan comment ${previous.id}`);
  } else {
    const comment = await githubRequest(`/repos/${repository}/issues/${pullNumber}/comments`, {
      method: "POST",
      body: JSON.stringify({ body }),
    });
    console.log(`Created scan comment ${comment.id}`);
  }
}

async function main() {
  const [reportPath, eventPath] = process.argv.slice(2);
  if (!reportPath || !eventPath) throw new Error("Usage: publish-scan.mjs REPORT EVENT_JSON");

  const report = await readFile(reportPath, "utf8").catch(
    () => `${MARKER}\n# Paseo plugin security scan\n\nThe scan did not produce a report. Inspect the failed workflow step.\n`,
  );
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, report);

  const event = JSON.parse(await readFile(eventPath, "utf8"));
  if (event.pull_request) await publishPullRequestComment(event, report);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
