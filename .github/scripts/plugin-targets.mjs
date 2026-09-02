#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import process from "node:process";
import { pathToFileURL } from "node:url";

const PLUGIN_SECTIONS = new Set([
  "Monitoring and orchestration",
  "Workspace panels",
  "Themes",
  "Daemon and automation",
  "Composer and attachments",
]);

const ENTRY_PATTERN = /^- \[([^\]]+)]\(([^)]+)\) - (.+)$/;
const OWNER_PATTERN = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})$/;
const SEGMENT_PATTERN = /^[A-Za-z0-9._-]+$/;
const NAME_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;

function parseGitHubTarget(name, link, description, raw) {
  if (!NAME_PATTERN.test(name)) {
    throw new Error(`Plugin name must contain only letters, numbers, dots, underscores, or hyphens: ${name}`);
  }

  let url;
  try {
    url = new URL(link);
  } catch {
    throw new Error(`Plugin ${name} has an invalid URL: ${link}`);
  }

  if (
    url.protocol !== "https:" ||
    url.hostname !== "github.com" ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new Error(`Plugin ${name} must use a plain public https://github.com URL`);
  }

  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length < 2) {
    throw new Error(`Plugin ${name} URL must identify a GitHub repository`);
  }

  const [owner, repository] = segments;
  if (!OWNER_PATTERN.test(owner) || !SEGMENT_PATTERN.test(repository) || repository.endsWith(".git")) {
    throw new Error(`Plugin ${name} has an invalid GitHub owner or repository`);
  }

  let ref = null;
  let pluginPath = ".";
  if (segments.length > 2) {
    if (segments.length < 5 || segments[2] !== "tree") {
      throw new Error(`Plugin ${name} URL may only point to a repository or a tree path`);
    }
    ref = segments[3];
    const pathSegments = segments.slice(4);
    if (
      !SEGMENT_PATTERN.test(ref) ||
      pathSegments.some((segment) => !SEGMENT_PATTERN.test(segment) || segment === "." || segment === "..")
    ) {
      throw new Error(`Plugin ${name} has an unsafe ref or plugin path`);
    }
    pluginPath = pathSegments.join("/");
  }

  return {
    name,
    repository: `${owner}/${repository}`,
    ref,
    path: pluginPath,
    url: url.toString(),
    description,
    raw,
  };
}

export function parsePluginTargets(markdown) {
  const targets = [];
  let section = null;

  for (const rawLine of markdown.split(/\r?\n/)) {
    const heading = rawLine.match(/^## (.+)$/);
    if (heading) {
      section = heading[1];
      continue;
    }
    if (!PLUGIN_SECTIONS.has(section) || !rawLine.startsWith("- [")) continue;

    const entry = rawLine.match(ENTRY_PATTERN);
    if (!entry) throw new Error(`Malformed plugin entry in ${section}: ${rawLine}`);
    targets.push(parseGitHubTarget(entry[1], entry[2], entry[3], rawLine));
  }

  const seen = new Set();
  for (const target of targets) {
    const key = `${target.repository}@${target.ref ?? "default"}:${target.path}`;
    if (seen.has(key)) throw new Error(`Duplicate plugin target: ${key}`);
    seen.add(key);
  }

  return targets;
}

export function selectChangedTargets(before, after) {
  const previousEntries = new Set(parsePluginTargets(before).map((target) => target.raw));
  return parsePluginTargets(after).filter((target) => !previousEntries.has(target.raw));
}

function publicTargets(targets) {
  return targets.map(({ raw: _raw, ...target }) => target);
}

async function fetchRepositoryFile(repository, ref, token) {
  const response = await fetch(
    `https://api.github.com/repos/${repository}/contents/README.md?ref=${encodeURIComponent(ref)}`,
    {
      headers: {
        Accept: "application/vnd.github.raw+json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "awesome-paseo-plugin-scanner",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );
  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status} while reading ${repository}@${ref}:README.md`);
  }
  return response.text();
}

export function selectTargetsForEvent(eventName, targets) {
  return eventName === "pull_request" ? targets.slice(0, 1) : targets;
}

async function targetsForEvent(eventPath, localReadmePath, token) {
  const event = JSON.parse(await readFile(eventPath, "utf8"));
  if (process.env.GITHUB_EVENT_NAME !== "pull_request_target") {
    const targets = parsePluginTargets(await readFile(localReadmePath, "utf8"));
    return selectTargetsForEvent(process.env.GITHUB_EVENT_NAME, targets);
  }
  if (!token) throw new Error("GITHUB_TOKEN is required for pull_request_target scans");

  const pullRequest = event.pull_request;
  if (!pullRequest?.base?.repo?.full_name || !pullRequest?.head?.repo?.full_name) {
    throw new Error("Pull request event is missing repository metadata");
  }

  const [before, after] = await Promise.all([
    fetchRepositoryFile(pullRequest.base.repo.full_name, pullRequest.base.sha, token),
    fetchRepositoryFile(pullRequest.head.repo.full_name, pullRequest.head.sha, token),
  ]);
  return selectChangedTargets(before, after);
}

async function main(argv) {
  const outputIndex = argv.indexOf("--output");
  const outputPath = outputIndex >= 0 ? argv[outputIndex + 1] : null;
  if (!outputPath) throw new Error("Usage: plugin-targets.mjs [--event EVENT_JSON | --readme README] --output FILE");

  const eventIndex = argv.indexOf("--event");
  const readmeIndex = argv.indexOf("--readme");
  let targets;
  if (eventIndex >= 0) {
    targets = await targetsForEvent(argv[eventIndex + 1], argv[readmeIndex + 1] ?? "README.md", process.env.GITHUB_TOKEN);
  } else {
    targets = parsePluginTargets(await readFile(argv[readmeIndex + 1] ?? "README.md", "utf8"));
  }

  const { writeFile } = await import("node:fs/promises");
  await writeFile(outputPath, `${JSON.stringify(publicTargets(targets), null, 2)}\n`);
  if (process.env.GITHUB_OUTPUT) {
    const { appendFile } = await import("node:fs/promises");
    await appendFile(process.env.GITHUB_OUTPUT, `count=${targets.length}\n`);
  }
  console.log(`Prepared ${targets.length} plugin target${targets.length === 1 ? "" : "s"}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2)).catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
