# Awesome Paseo Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of plugins for [Paseo](https://paseo.sh), the self-hosted orchestrator for coding agents (Claude Code, Codex, Copilot, OpenCode, Pi, and more).

Paseo plugins add native workspace panels, composer pills, Command Center items, global surfaces, app themes, daemon behavior, and composer attachment sources. They run on every client connected to the daemon, including mobile.

> **Note:** The plugin API is experimental and evolving. Plugins may need updates between Paseo releases. Check each plugin's README for the minimum daemon version it requires.

> **Security:** Plugins are trusted local code. Backend code runs unsandboxed on the daemon machine, and client contributions run inside the Paseo app. Review the source before installing anything from this list.

## Contents

- [Monitoring and orchestration](#monitoring-and-orchestration)
- [Workspace panels](#workspace-panels)
- [Themes](#themes)
- [Daemon and automation](#daemon-and-automation)
- [Composer and attachments](#composer-and-attachments)
- [Resources](#resources)
- [Installing plugins](#installing-plugins)

## Monitoring and orchestration

- [agent-monitor](https://github.com/omercnet/paseo-agent-monitor) - One roster for every agent on a daemon. Triage buckets (Attention / Running / Idle / Closed), project-first grouping, text filter, live diff stats, and one-tap archive sweep. Answers "which of my 38 agents needs me right now" without walking the workspace tree. Web and desktop.
- [github-board](https://github.com/gpambrozio/paseo-plugins/tree/main/github-board) - A sidebar surface with four columns — issues, draft PRs, open PRs, and discussions — covering what you authored plus what is open on the repositories you own. Cards carry CI check counts, editable labels, and a "Send to chat" button that creates a workspace on the project matching that repository and starts an agent on the card. Requires `gh` installed and authenticated on the daemon machine. Install with `paseo plugin add gpambrozio/paseo-plugins --path github-board`.
- [github-workbench](https://github.com/AllenReder/paseo-github-workbench) - A workbench for GitHub issues and pull requests, with account and repository views, resource refresh, and workspace actions.
- [pr-radar](https://github.com/omercnet/paseo-pr-radar) - Turns pull requests linked to active workspaces into a viewer-aware delivery queue grouped by needs you, being handled, waiting externally, and ready, with actions to prompt an existing agent or start one; requires `gh` installed and authenticated on the daemon machine and Paseo 0.6 or later.

## Workspace panels

*Plugins that add panels to workspace tabs or the explorer.*

- [pi-tasks-timeline](https://github.com/mcowger/paseo-plugins/tree/main/pi-tasks-timeline) - Keeps Pi task lists visible in Paseo timelines and workspace or explorer panels, with a composer pill for active tasks.
- [opencode-session-overview](https://github.com/mcowger/paseo-plugins/tree/main/opencode-session-overview) - Adds an agent-scoped activity pane for OpenCode sessions with session details, usage, context, tasks, loaded skills and commands, workspace metadata, and observed subagents. Requires Paseo 0.7.0-beta.2 or later.
- [reasoning-display](https://github.com/mcowger/paseo-plugins/tree/main/reasoning-display) - Replaces built-in agent reasoning blocks with expandable Markdown cards that match Paseo's native tool-call styling, with expand-last, collapsed, and always-expand display modes. Requires Paseo 0.7.0-beta.2 or later.
- [skills](https://github.com/gpambrozio/paseo-plugins/tree/main/skills) - Lists the skills and commands an agent session can run, shows where each one comes from, renders its `SKILL.md`, and invokes it on the live session. Claude and Codex sessions get their skill files read off the daemon's filesystem; every other provider shows what the running session reports. Install with `paseo plugin add gpambrozio/paseo-plugins --path skills`.
- [subagent-activity](https://github.com/mcowger/paseo-plugins/tree/main/subagent-activity) - Adds an agent-scoped activity pane for monitoring managed Paseo descendants and provider-native subagent activity. Requires Paseo 0.7.0-beta.2 or later.

## Themes

*App themes contributed through the plugin API.*

<!-- Add theme plugins here. -->

## Daemon and automation

*Plugins that add daemon-side behavior: schedulers, webhooks, notifications, integrations.*

- [defer](https://github.com/tomgrin10/paseo-defer) - Queues a message for an agent and delivers it after a delay, at a chosen local time, or when the Claude usage window resets, waiting for the session to go idle so the message starts a new turn. Requires Paseo 0.7 or later.

## Composer and attachments

*Composer pills and attachment sources.*

<!-- Add composer and attachment plugins here. -->

## Resources

- [Plugin quickstart](https://paseo.sh/docs/plugins) - Scaffold, install, reload, and debug a plugin.
- [Plugin reference](https://paseo.sh/docs/plugins/reference) - Contribution surfaces, theme and layout tokens, lifecycle.
- [TypeScript SDK](https://paseo.sh/docs/sdk) - The workspace, agent, provider, and config API exposed inside plugins.
- [Plugin roadmap](https://github.com/getpaseo/paseo/labels/plugins) - Planned contribution surfaces and their status.
- [Paseo Discord](https://discord.gg/jz8T2uahpH) - Ask questions and share what you built.

## Installing plugins

Enable plugins on the daemon (Settings -> Plugins -> Enable plugins), then install straight from Git:

```bash
paseo plugin add owner/repository
paseo plugin add owner/monorepo --path plugins/my-plugin
paseo plugin add owner/repository --ref v1.2.0   # pin a tag
paseo plugin ls
```

Branches track updates; tags and commits are pinned. Update with:

```bash
paseo plugin status
paseo plugin update --all
```

Git installation runs no package manager or install scripts, so plugins must use Paseo's host-provided modules or bundle their source.

## Contributing

Pull requests are welcome. Read the [contribution guidelines](CONTRIBUTING.md) before submitting a plugin.
