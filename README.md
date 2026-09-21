# Awesome Paseo Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> See also [paseo-cafe/paseo-cafe](https://github.com/paseo-cafe/paseo-cafe)

A curated list of plugins for Paseo, the self-hosted orchestrator for coding agents (Claude Code, Codex, Copilot, OpenCode, Pi, and more).

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
- [activity](https://github.com/koinzhang/paseo-plugins/tree/main/activity) - Local usage analytics and workspace agent ops for Paseo: tools, agents, messages, models, Explorer fleet list, and terminals.
- [agent-crew](https://github.com/omercnet/paseo-plugins/tree/main/agent-crew) - A Paseo Explorer panel for visualizing and controlling every managed agent crew in a workspace.
- [agent-heartbeats](https://github.com/panrafal/paseo-plugins/tree/main/agent-heartbeats) - Composer pill with the heartbeat count, plus a panel to list, create, edit, and delete that agent's heartbeats.
- [agent-monitor](https://github.com/omercnet/paseo-plugins/tree/main/agent-monitor) - A Paseo plugin that provides a host-wide agent triage roster.
- [agents-dash-list](https://github.com/panrafal/paseo-plugins/tree/main/agents-dash-list) - Sidebar dashboard of workspaces grouped by waiting, unread, in progress, failing, approved, idle, or closed, with archive and unread actions.
- [agents-history](https://github.com/panrafal/paseo-plugins/tree/main/agents-history) - Sidebar history of every workspace and agent, including archived ones, with filters and ranked search over on-disk conversation transcripts.
- [beautiful-chat](https://github.com/ABorakati/beautiful-chat) - Paseo plugin: a beautiful chat for OMP tools, reasoning, prompts, and tasks.
- [board](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/board) - Local Paseo plugin exposing Jev evaluations through MCP.
- [branch-garden](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/branch-garden) - Release v0.1.0-rc.3 targets final Paseo 0.8.0. See final-version checks and remaining runtime limits. Screenshots below show the installed Paseo 0.8.0 Windows app.
- [chat-resume](https://github.com/panrafal/paseo-plugins/tree/main/chat-resume) - Composer pills that continue a quota-exhausted agent now, resume after allowance renewal, or prepare a handover to another provider.
- [colorful-agent-activity](https://github.com/mcowger/paseo-plugins/tree/main/colorful-agent-activity) - Replaces Paseo's public reasoning and agent tool-call rows with dense, IDE-style activity rows across desktop, web, and native mobile (iOS and Android). It keeps the latest thinking block and latest tool call open, shows useful details on demand, and uses Prism for shell and code output.
- [command-deck](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/command-deck) - Release v0.1.0-rc.3 targets final Paseo 0.8.0. See final-version checks and remaining runtime limits. Screenshots below show the installed Paseo 0.8.0 Windows app.
- [compact-agent-activity](https://github.com/cnaron/compact-agent-activity) - Compact and folded agent activity for Paseo with single-line turn summaries, dense line spacing, and rich inspection.
- [cubesandbox](https://github.com/shekohex/dotai/tree/main/paseo/cubesandbox) - Paseo v0.8 plugin for one Work Sandbox per unit of work. Each plugin installation persists only the sandbox IDs it creates; it never lists or manages unrelated CubeSandbox workloads.
- [daemon-link](https://github.com/itsjustanks/paseo-plugin-daemon) - For Paseo: hosts private localhost links, reviewed Git project transfers, and project-scoped monitoring.
- [direnv](https://github.com/guaraqe/paseo-direnv) - Load direnv environments before Paseo launches agents.
- [discord-rich-presence](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/discord-rich-presence) - Show your current Paseo activity on Discord.
- [emoji](https://github.com/YoseptF/paseo-emoji) - Slack-style :emoji: autocomplete for the Paseo composer.
- [forge](https://github.com/dwyanewang/paseo-plugins/tree/main/forge) - Local Paseo plugins: a Todo board that launches agents, and Forge adapters for Codeup and Gitee.
- [forges](https://github.com/xpufx/paseo/tree/main/plugins/forges) - Work with Forge/Gitea-family issues from inside Paseo via the embedded fetch API client.
- [gas-city](https://github.com/omercnet/paseo-plugins/tree/main/paseo-gas-city) - A Paseo control plane for observing and operating Gas City supervisors.
- [git-graph](https://github.com/huangcb01/paseo-git-graph) - Browse Git commit topology, branches, tags, and file diffs in Paseo's Explorer. The plugin follows the current workspace and supports repository subdirectories and Git worktrees.
- [git-tree](https://github.com/ZFhuang/paseo-git-tree) - Git branch tree panel for Paseo: a lane-based commit graph (`git log --graph`) as a workspace tab, with branch actions, search, and commit diffs.
- [github-board](https://github.com/gpambrozio/paseo-plugins/tree/main/github-board) - A sidebar surface with four columns — issues, draft PRs, open PRs, and discussions — covering what you authored plus what is open on the repositories you own. Cards carry CI check counts, editable labels, and a "Send to chat" button that creates a workspace on the project matching that repository and starts an agent on the card. Requires gh installed and authenticated on the daemon machine. Install with paseo plugin add gpambrozio/paseo-plugins --path github-board.
- [github-integration](https://github.com/alysnnix/paseo-github-integration) - GitHub inside Paseo: the issues and pull requests you are attached to, the ones waiting on your review, your Projects boards, and the review actions that finish a pull request — without leaving the app, and with one click to hand any of them to a coding agent.
- [github-workbench](https://github.com/AllenReder/paseo-github-workbench) - A workbench for GitHub issues and pull requests, with account and repository views, resource refresh, and workspace actions.
- [herald](https://github.com/gpambrozio/paseo-plugins/tree/main/herald) - Paseo plugin: speaks one sentence when an agent needs you, and lists everything waiting in a sidebar panel.
- [http-tunnel](https://github.com/lyhu/paseo-plugin-tunnel) - Connect approved HTTP services across trusted Paseo hosts with end-to-end encryption.
- [jev-evaluator](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/jev-evaluator) - Local Paseo plugin exposing Jev evaluations through MCP.
- [linear-tickets](https://github.com/Vokturz/paseo-plugins/tree/main/linear-tickets) - Paseo sidebar plugin that lists your assigned Linear tickets and starts an agent with the ticket context, comments and relationships.
- [machine-status](https://github.com/dutchakdev/paseo-plugin-machine-status) - Machine dashboard, open ports and Docker control inside Paseo.
- [math-renderer](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/math-renderer) - Render block LaTeX in completed Paseo replies, with source viewing, copying and native-reply mode. Experimental beta for Paseo 0.9.
- [model-pricing](https://github.com/gpambrozio/paseo-plugins/tree/main/model-pricing) - Paseo plugin: a sidebar table of what every model costs, across Anthropic, OpenAI, Fireworks AI, Ollama Cloud and OpenRouter.
- [opencode-mcp-toggle](https://github.com/Davnn1/opencode-mcp-toggle) - Manage and toggle OpenCode MCP servers on the fly directly from Paseo to save context tokens.
- [parent-wake](https://github.com/EPISTEX0/paseo-parent-wake) - Wake an orchestrating parent agent on every question and every finished turn of its child agents, not only the first one.
- [paseo-ado](https://github.com/jegork/paseo-ado) - Azure DevOps support for Paseo, built on the az CLI (azure-devops extension). No credentials are stored by the plugin; az login on the daemon machine is the only setup.
- [paseo-be-concise](https://github.com/yannelli/paseo-plugin-concise) - Live be-concise activity, configuration, and hook previews inside Paseo.
- [paseo-beads](https://github.com/omercnet/paseo-plugins/tree/main/paseo-beads) - A dependency-aware Beads work queue for each Paseo workspace.
- [paseo-bm](https://github.com/hieunt286/paseo-bm/tree/main/plugin) - Bead Reporter / Tracker / Implementation workspace panel for Paseo.
- [paseo-cafe](https://github.com/paseo-cafe/paseo-cafe/tree/main/plugin) - Browse the paseo.cafe plugin catalog inside Paseo and install plugins without leaving the app.
- [paseo-clusters](https://github.com/thisjrodriguez/paseo-plugin-clusters) - Clusters de proyectos para la barra lateral de Paseo.
- [paseo-director](https://github.com/lalaze/paseo-plugins/tree/main/director) - Discuss requirements, plans, and follow-up changes in Paseo's normal chat UI while the main agent coordinates serialized subagents through MCP and waits for your approval.
- [paseo-display-switcher](https://github.com/nerveband/paseo-display-switcher) - A Paseo plugin that lets you toggle and switch sidebar display modes (Project listing vs. Status listing) via keyboard shortcuts and the Command Center (⌘K / Ctrl+K).
- [paseo-firstmate](https://github.com/aborakati/paseo-firstmate) - Paseo plugin: FirstMate fleet dashboard, crew supervision, and command surface.
- [paseo-grafana](https://github.com/jegork/paseo-grafana) - Grafana alerts and dashboards in Paseo, built on the gcx CLI. The plugin uses whatever gcx context is current on the daemon machine; gcx login is the only setup.
- [paseo-gsd-observer](https://github.com/drungrin/paseo-gsd-observer) - A read-only Paseo plugin for understanding the persisted state of a GSD project. It turns the selected workspace's planning evidence into an accessible board of milestones, phases, and plans—without running GSD, creating worktrees, merging code, or declaring work complete.
- [paseo-helper-demo](https://github.com/xpufx/paseo/tree/main/plugins/demo) - This plugin is a demo for showcasing some of the capabilities of [`paseo-plugin-helper`](https://github.com/xpufx/paseo-plugin-helper), namely the UI design system, lifecycle primitives, and daemon utilities for building Paseo plugins. It does not necessarily do anything useful to end users. Install this one to see every pattern running live; depend on the helper to build your own.
- [paseo-kanban](https://github.com/breathi3552/paseo-kanban) - A lightweight, responsive Kanban board plugin for Paseo workspaces.
- [paseo-latex-renderer](https://github.com/lingluo831/paseo-latex-renderer) - Native LaTeX math formula renderer for Paseo desktop and mobile clients.
- [paseo-limits](https://github.com/ortschun/paseo-limits) - Subscription limits for the active agent's provider as a composer pill in Paseo: 5-hour and weekly usage at a glance, full breakdown on press.
- [paseo-markdown-viewer](https://github.com/opsb/paseo-markdown-viewer) - Read-only markdown side panel for Paseo: tabs, live file updates, and follow mode for files agents edit.
- [paseo-minimax-resumer](https://github.com/ilteoood/paseo-minimax-resumer) - A Paseo plugin for resuming agents after Minimax API rate limits.
- [paseo-mise-env](https://github.com/seniorkonung/paseo-mise-env) - A lightweight plugin for [Paseo](https://paseo.sh/) that automatically loads the correct [mise](https://mise.jdx.dev/) environment for every agent session.
- [paseo-ntfy](https://github.com/seniorkonung/paseo-ntfy) - Paseo plugin that sends [ntfy](https://ntfy.sh/) notifications when an opted-in agent finishes, fails, or requests permission/input.
- [paseo-pi-kit](https://github.com/springkill/paseo-plugins/tree/main/paseo-pi-kit) - Four features for `@earendil-works/pi-coding-agent` sessions in [Paseo](https://github.com/getpaseo/paseo). All on by default.
- [paseo-plain](https://github.com/scowalt/paseo-plain) - Rewrite assistant answers in plain English inside Paseo, only when you ask. The coding agent keeps its original conversation.
- [paseo-prometheus-status](https://github.com/infectiousstupidity/paseo-prometheus-status) - A Paseo 0.8+ plugin that shows GPU utilization, temperature, VRAM, and power from Prometheus. The composer stays clear during normal operation and only shows a GPU pill when temperature needs attention.
- [paseo-prompt-manager](https://github.com/yannelli/paseo-prompt-manager) - Markdown prompt library for Paseo with local version history, imports, and optional Git sync.
- [paseo-tool-ui-plugin](https://github.com/midodimori/paseo-tool-ui-plugin) - Auto-expand Paseo's native Edit and Write tool cards on desktop and web.
- [paseo-translate](https://github.com/lalaze/paseo-plugins/tree/main/translate) - Translate selected text inline in Paseo's AI conversation view.
- [paseo-usage-glance](https://github.com/lalaze/paseo-plugins/tree/main/usage-glance) - Shows a usage-glance panel for Paseo 0.8.x and 0.9.x on desktop, highlighting the lowest remaining provider percentage and letting you pin a provider in the top bar.
- [plugin-updates](https://github.com/xpufx/paseo/tree/main/plugins/plugin-updates) - Read-only monitor for installed Paseo plugin source status, links, and per-subdirectory Git diagnostics.
- [pr-radar](https://github.com/omercnet/paseo-plugins/tree/main/pr-radar) - A viewer-aware delivery queue for pull requests linked to Paseo workspaces.
- [pr-views](https://github.com/pmusaraj/paseo-pr-views) - Saved GitHub pull request views for Paseo.
- [preset-switcher](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/preset-switcher) - Paseo plugins community repo.
- [prompt-palette](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/prompt-palette) - Release v0.1.0-rc.3 targets final Paseo 0.8.0. See final-version checks and remaining runtime limits. Screenshots below show the installed Paseo 0.8.0 Windows app.
- [queens](https://github.com/omercnet/paseo-plugins/tree/main/queens) - A cross-platform Queens logic puzzle for Paseo.
- [readable-agent-activity](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/agent-activity) - Formatted and highlighted tool-call JSON, twenty-line previews and tool icons for Paseo 0.8/0.9. Full detail only.
- [remote-editor](https://github.com/alhassanaraouf/paseo-remote-editor) - Composer pill to open a workspace in VS Code or Zed over SSH, desktop only.
- [review-deck](https://github.com/mentalfl0w/review-deck) - Human-in-the-loop code review workspace for Paseo with inline file comments and project-level AI processing.
- [runtime-radar](https://github.com/jegork/paseo-runtime-radar) - A Paseo plugin that shows which ports and Docker containers belong to which worktree.
- [sayr](https://github.com/dorasto/sayr/tree/main/packages/paseo-plugin) - A paseo plugin for viewing and managing your Sayr tasks.
- [schedule-runs](https://github.com/panrafal/paseo-plugins/tree/main/schedule-runs) - Sidebar feed of every schedule run with status, workspace, agent, archived state, and the agent's final response.
- [send-to-paseo](https://github.com/tomgrin10/send-to-paseo/tree/main/plugin) - Local HTTP bridge that starts a Paseo agent in the workspace belonging to a pull request.
- [server-monitor](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/server-monitor) - Paseo 0.8 插件：在一个面板里监控多台 VPS 的 **CPU / 内存 / 磁盘 / 网络**，SSH 采集，密钥与密码认证均可（密码用 AES-256-GCM 本地加密存储）。（要求 Paseo >= 0.8.0）.
- [session-summary](https://github.com/mcowger/paseo-plugins/tree/main/session-summary) - This Paseo v0.8.0 plugin adds an agent-scoped live summary panel for reviewing a coding session. It uses Paseo's normalized agent and timeline APIs and does not connect directly to provider processes or expose provider credentials.
- [session-usage](https://github.com/panrafal/paseo-plugins/tree/main/session-usage) - Agent session usage from local Claude, Codex, OpenCode, Kilo, Devin CLI and Cursor records: sortable stats, provider charts, cost estimates, and CSV export.
- [setup-monitor](https://github.com/stevecastaneda/paseo-plugins/tree/main/setup-monitor) - Paseo 0.8 live view of worktree setup. Paseo already tracks worktree.setup from paseo.json. After 0.3 it only opens the built-in Setup tab when that script fails, so a long npm install is silent. This plugin reads the same workspace_setup_status stream and shows it while it runs.
- [shared-browser](https://github.com/omercnet/paseo-plugins/tree/main/paseo-shared-browser) - One real Chromium session per Paseo workspace, shared live across every connected client.
- [smart-session](https://github.com/tomgrin10/paseo-smart-session) - Records Claude plan-usage history and lets a Paseo agent manage its own context.
- [summary-fork](https://github.com/cbrostrom/dotfiles/tree/main/sources/paseo/plugins/summary-fork) - My personal dotfiles repo.
- [task-link](https://github.com/panrafal/paseo-plugins/tree/main/task-link) - Composer pill that opens a task link when a branch, title, or workspace name matches a configurable pattern.
- [tell-agent](https://github.com/omercnet/paseo-plugins/tree/main/tell-agent) - Send messages to agents in other workspaces on the same Paseo host.
- [time-since](https://github.com/stevecastaneda/paseo-plugins/tree/main/time-since) - Paseo 0.8 composer pill that ticks elapsed time since the last user_message or assistant_message in the agent thread.
- [title-style](https://github.com/zwmmm/title-style) - Rename Paseo workspaces with a configurable LLM prompt — Chinese titles by default, following the metadata-generation model config.
- [todo](https://github.com/dwyanewang/paseo-plugins/tree/main/todolist) - Local Paseo plugins: a Todo board that launches agents, and Forge adapters for Codeup and Gitee.
- [top](https://github.com/xpufx/paseo/tree/main/plugins/top) - Live host system resource monitor and telemetry provider for Paseo (v0.8+).
- [turn-changes](https://github.com/Laokashouji/paseo-turn-changes) - Review per-turn agent file changes in Paseo with inline diff cards, a file tree, guarded undo, and an in-panel source editor.
- [twofado](https://github.com/xpufx/paseo/tree/main/plugins/twofado) - Plugins, tools, libraries for Paseo.
- [usage-monitor](https://github.com/ABorakati/paseo-usage-monitor) - Live quota, balance, and rate-limit cards for 34 AI providers plus a token-and-cost history chart rebuilt from local agent transcripts. Web and desktop.
- [usage-sidebar](https://github.com/RUIIIOVO/paseo-usage-sidebar) - Provider plan usage in the Paseo sidebar: an openable panel plus an always-visible meter under the sidebar entry, read from Paseo's own usage data so the numbers match Settings → Usage.
- [video-embeds](https://github.com/kschniedergers/paseo-plugins/tree/main/video-embeds) - Renders MP4 clips in assistant messages as an inline video player. Desktop and web playback; iOS/Android show a placeholder card.
- [vscode-open-remote](https://github.com/panrafal/paseo-plugins/tree/main/vscode-open-remote) - Composer pill that opens a remote agent's working directory in VS Code, Cursor, or vscode.dev on tablet.
- [watchtower-board](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/watchtower-board) - Local Paseo plugin exposing Jev evaluations through MCP.
- [worknaru-agent-service](https://github.com/SWBaek/worknaru-dev/tree/main/apps/agent-service) - `module-runs.sqlite`는 입력·결과·요청 ID·업무 귀속·수명을 저장한다. SQL 유일 제약으로 접수 ID를 중복 방지하고, 조건부 상태 전이·WAL·FULL 동기화를 사용한다. 앱 생성 DDL과 quick_check를 확인하며 알 수 없는 스키마와 DB/부속 파일 링크는 거부한다. 시작 시 미완료 실행을 uncertain으로 기록하고 자동 실행하지 않는다. 정확한 수명은 ADR 0016에 있다.
- [workspace-links](https://github.com/stevecastaneda/paseo-plugins/tree/main/workspace-links) - A small Paseo 0.8 plugin that reads workspace-links.json from the active workspace and puts those URLs on the Links trigger. Press the composer pill or header button and choose a URL to open it in the host browser. Manage links (or Add links when the file is empty or missing) opens the setup panel in Explorer. The Command Center item Workspace Links opens that panel too.

## Workspace panels

*Plugins that add panels to workspace tabs or the explorer.*

- [advanced-markdown](https://github.com/custyhs/paseo-advanced-markdown) - Renders math formulas and Mermaid diagrams inside assistant messages in Paseo 0.8.x and 0.9.x, as an installable plugin. No Paseo fork, no patch: the official app, daemon, and plugin SDK are the only dependencies.
- [beads](https://github.com/pasteley/paseo-beads) - A bead (bd) tracker workspace panel for Paseo.
- [fleet-dashboard](https://github.com/ahoereth/paseo-fleet-dashboard) - A read-only Paseo 0.8 sidebar dashboard showing active workspaces and agents across this daemon and configured remote daemons, grouped by what needs attention.
- [github-dashboard](https://github.com/tensorcopy/github-dashboard) - GitHub inside [Paseo](https://paseo.sh): the issues and pull requests you are attached to, the ones waiting on your review, your Projects boards, and the review actions that finish a pull request — without leaving the app, and with one click to hand any of them to a coding agent.
- [linear-to-paseo](https://github.com/chrisjanwust/linear-to-paseo) - Paseo plugin: browse your Linear issues and start work on any of them in a fresh workspace with the whole ticket as the first message.
- [opencode-session-overview](https://github.com/mcowger/paseo-plugins/tree/main/opencode-session-overview) - Adds an agent-scoped activity pane for OpenCode sessions with session details, usage, context, tasks, loaded skills and commands, workspace metadata, and observed subagents. Requires Paseo 0.7.0-beta.2 or later.
- [paseo-canvas](https://github.com/supermomonga/paseo-plugin-canvas) - Write, review, and share Markdown documents with agents in your Paseo workspace.
- [paseo-codex-account-watch](https://github.com/hanryyu/paseo-codex-account-watch) - A host-local Paseo plugin that notices when CC Switch or another tool changes Codex's file-backed account, then lets you review and reload each monitored agent.
- [paseo-github-panel](https://github.com/timpurdum/paseo-github-panel) - Read-only GitHub workspace panel for Paseo.
- [paseo-pet](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/paseo-pet) - Independent community plugins for Paseo: readable activity, DeepSeek Harness, math and pets.
- [pi-tasks-timeline](https://github.com/mcowger/paseo-plugins/tree/main/pi-tasks-timeline) - Keeps Pi task lists visible in Paseo timelines and workspace or explorer panels, with a composer pill for active tasks.
- [q5m-math](https://github.com/q5m-ai/paseo-math) - Cross-platform math timeline plugin for Paseo 0.8+ completed-message formulas with preserved Markdown and source copy.
- [qq-architect](https://github.com/hypermemetic-ai/qq-workflows/tree/main/paseo-plugin) - A Paseo plugin for planning software changes with you, then researching, implementing, reviewing, and merging them.
- [reasoning-display](https://github.com/mcowger/paseo-plugins/tree/main/reasoning-display) - Replaces built-in agent reasoning blocks with expandable Markdown cards that match Paseo's native tool-call styling, with expand-last, collapsed, and always-expand display modes. Requires Paseo 0.7.0-beta.2 or later.
- [skills](https://github.com/gpambrozio/paseo-plugins/tree/main/skills) - Lists the skills and commands an agent session can run, shows where each one comes from, renders its SKILL.md, and invokes it on the live session. Claude and Codex sessions get their skill files read off the daemon's filesystem; every other provider shows what the running session reports. Install with paseo plugin add gpambrozio/paseo-plugins --path skills.
- [subagent-activity](https://github.com/mcowger/paseo-plugins/tree/main/subagent-activity) - Adds an agent-scoped activity pane for monitoring managed Paseo descendants and provider-native subagent activity. Requires Paseo 0.7.0-beta.2 or later.
- [thread-board](https://github.com/samgbafa/paseo-thread-board) - A live Kanban view of Paseo agent threads.
- [tidy-timeline](https://github.com/jegork/paseo-tidy-timeline) - A Paseo plugin that folds noisy user messages into compact cards.
- [timeline-ui](https://github.com/cbrostrom/dotfiles/tree/main/sources/paseo/plugins/timeline-ui) - My personal dotfiles repo.
- [workspace-activity](https://github.com/ABorakati/paseo-workspace-activity) - Adds Agent Monitor and Tasks panels to any workspace for live subagent trees, tool-call inspection, steering, cancellation, and per-agent todo progress. Web and desktop.
- [workspace-agent-count](https://github.com/zackyjz/paseo-workspace-agent-count) - Paseo 0.8.x 插件：随时看到每个 workspace 下有几个会话 —— Agent 总览页（只读）+ 可选标题前缀 (3) 原标题.
- [workspace-preflight](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/workspace-preflight) - Local Paseo plugin exposing Jev evaluations through MCP.
- [workspace-spaces](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/workspace-spaces) - Local Paseo plugin exposing Jev evaluations through MCP.

## Themes

*App themes contributed through the plugin API.*

- [catppuccin-theme](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/catppuccin-theme) - Adds all four Catppuccin flavours — Latte, Frappé, Macchiato, and Mocha — as Paseo app themes.
- [gruvbox](https://github.com/juanlatorre/paseo-gruvbox) - Dark and light themes for Paseo under Settings → Appearance.
- [miku-future](https://github.com/ZhonghuaYi/paseo-miku-theme/tree/main/miku-future) - Unofficial Hatsune Miku-inspired light and dark themes for Paseo, with lossless illustrated wallpapers and frosted chat surfaces.
- [paseo-dracula](https://github.com/omercnet/paseo-plugins/tree/main/paseo-dracula) - Dracula Classic and Alucard Classic themes for Paseo.
- [paseo-feishu-ui](https://github.com/Laokashouji/paseo-feishu-ui) - Feishu themes and desktop skin for Paseo 0.8; native mobile palette support.
- [paseo-monokai-pro](https://github.com/JrDw0/paseo-monokai-pro) - Monokai Pro's Pro, Light, Classic, Machine, Ristretto, Octagon, and Spectrum filter schemes as app themes, with each of the eight palette tokens mapped to a named color from the scheme rather than an approximation, and syntax colors left to Paseo's built-in highlight theme.
- [paseo-theme-wye](https://github.com/phyzess/paseo-theme-wye) - Wye themes for Paseo, generated from phyzess/vscode-theme-wye.
- [solarized](https://github.com/mousebomb/paseo-solarized) - Light and dark themes for Paseo.
- [theme-studio](https://github.com/mcowger/paseo-plugins/tree/main/theme-studio) - Theme Studio is an interactive, live theme designer and palette playground for [Paseo](https://paseo.sh/).

## Daemon and automation

*Plugins that add daemon-side behavior: schedulers, webhooks, notifications, integrations.*

- [acp-manager](https://github.com/alhassanaraouf/paseo-acp-manager) - Paseo sidebar plugin for managing ACP custom providers: add, edit, enable/disable, test, and quick-add from the ACP agent registry.
- [advance-paseo](https://github.com/ZhonghuaYi/advance-paseo/tree/main/advance-paseo) - A Paseo plugin that bundles incremental enhancements for the Paseo app — arbitrary wallpapers, automatic provider-catalog refresh, a Chinese / English interface, and live chat overlays (a floating TODO card with the current plan plus a tokens/sec meter) — built as a feature-module system so new capabilities slot in without touching existing ones.
- [agent-link-9router](https://github.com/itsjustanks/paseo-plugin-9router/tree/main/apps/paseo) - The runtime ID is agent-link-9router. Open 9Router in the Paseo sidebar.
- [agy-provider](https://github.com/3ae3ae/paseo-plugin-agy-provider) - Paseo 0.8 and 0.9 provider plugin for Google's official Antigravity ACP server.
- [antigravity-provider](https://github.com/jimmy668765/paseo-antigravity-provider) - Native Paseo provider for Google antigravity (agy) CLI.
- [archive-branch-cleanup](https://github.com/MaplumeX/paseo-archive-branch-cleanup) - A Paseo plugin that automatically deletes the local Git branch when a Paseo-owned worktree workspace is archived.
- [auto-jev-codex-for-paseo](https://github.com/obetomuniz/auto-jev-codex-for-paseo) - A Paseo provider that uses TypeSafe Jev to route each Codex turn.
- [auto-pin](https://github.com/stv1024/paseo-auto-pin) - Paseo plugin that auto-pins newly created workspaces, with a sidebar panel to view and toggle the switch.
- [background-jobs](https://github.com/yoseptf/paseo-background-jobs) - See the shells your Claude Code agents left running in Paseo, and stop them.
- [beam](https://github.com/maxwell-01/paseo-beam) - Splits a Paseo workspace's working tree into a separate dev environment and restores the checkout safely.
- [claude-tty](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/claude-tty) - Adds **Claude TTY** to Paseo's provider list: the genuine interactive Claude Code CLI, driven in a PTY by the Claude TTY ACP adapter.
- [commandcode-provider](https://github.com/alhassanaraouf/paseo-commandcode-provider) - Paseo provider plugin for the Command Code coding agent.
- [deepseek-harness](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/deepseek-harness) - Uses its official ACP profile for Paseo 0.8 and 0.9 beta.
- [devin-integration](https://github.com/cmulittlechild/devin-paseo) - Paseo plugin: run Devin CLI as a near-native provider — subagent cards, usage stats, rewind, Paseo agent tools.
- [fresh-worktrees](https://github.com/omercnet/paseo-plugins/tree/main/fresh-worktrees) - Fast-forwards clean local base branches before Paseo creates branch-off worktrees.
- [hermes-pack](https://github.com/midodimori/paseo-hermes-pack-plugin) - Configurable Hermes Pack providers, controls, and direct scheduled findings for Paseo.
- [jev-agent-router](https://github.com/omerbentov/paseo-jev-agent-router) - Type `/route <task>` in a [Paseo](https://paseo.sh) workspace. The plugin asks [TypeSafe's Jev](https://typesafe.ai) which of **your** agent profiles fits the task, then starts an agent with that profile's provider, model, mode and thinking level.
- [jev-orchestrator](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/jev-orchestrator) - Local Paseo plugin exposing Jev evaluations through MCP.
- [Kubernetes](https://github.com/jeroenfrenken/paseo-k8s) - A kubectl command bar for Paseo workloads.
- [launchd-jobs](https://github.com/gpambrozio/paseo-plugins/tree/main/launchd-jobs) - A sidebar surface that schedules shell commands as LaunchAgents, on a five-field cron expression or a fixed interval, so launchd runs them whether or not Paseo is open. Each job shows what launchd reports, its last twenty runs with durations and exit codes, and the tail of its log. The daemon must run on macOS. Install with paseo plugin add gpambrozio/paseo-plugins --path launchd-jobs.
- [maka](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/maka) - ACP provider for Paseo 0.9.
- [mcp-manager](https://github.com/ypjun100/paseo-mcp-manager-plugin) - Paseo plugin to inspect and authenticate Claude Code and Codex MCP servers without leaving Paseo.
- [mcp-tools](https://github.com/xpufx/paseo/tree/main/plugins/mcp-tools) - > ⚠️ WIP — use at your own risk. Not release-ready; APIs and behavior may change without notice.
- [obol](https://github.com/broomva/obol) - A Paseo plugin for running more than one subscription behind the same provider, switching which one your agents use without restarting the daemon, and seeing what they are consuming.
- [omo](https://github.com/hakubisual/pase-omo) - Agent provider and workflow UI for Paseo with DAG graphs, live todo cards, approval popups, and mobile-ready layouts.
- [openrouter-dashboard](https://github.com/dtheofr/paseo-plugins/tree/main/openrouter-dashboard) - Plugins for Paseo. One folder per plugin, each self-contained.
- [paseo-auto-sync](https://github.com/hsiangron/paseo-auto-sync) - Paseo plugin that imports local Codex and Pi sessions when the client loads.
- [paseo-defer](https://github.com/tomgrin10/paseo-defer) - Defer messages to Paseo coding agents until a chosen time or usage-window reset.
- [paseo-mcp](https://github.com/itsjustanks/paseo-mcp) - Manage MCP servers, project connections, credentials, and OAuth from Paseo.
- [paseo-muse](https://github.com/chrisjanwust/paseo-muse-plugin) - Native Meta Muse Code provider for Paseo v0.8 via MSP.
- [paseo-omp](https://github.com/omercnet/paseo-plugins/tree/main/paseo-omp) - Paseo integration for OMP, including its direct provider and workspace tooling.
- [paseo-openspec-orchestrator](https://github.com/seniorkonung/paseo-openspec-orchestrator) - Runs a resumable OpenSpec development workflow inside a Paseo workspace. It provides lifecycle controls, durable progress, recovery after plugin restarts, and scoped agent sessions for the interactive stages.
- [paseo-plugin-zcode](https://github.com/lianxin255/paseo-plugin-zcode) - A Paseo provider plugin that registers ZCode (Z.ai's coding agent, backed by GLM) as an agent backend. It wraps the community zcode-acp-server ACP bridge with Paseo's runAcpProvider() shim - models, modes, permissions, steering and session resume come through the standard ACP capability mapping.
- [pi-plugin-mcowger](https://github.com/mcowger/paseo-plugins/tree/main/pi-plugin-mcowger) - Pi coding agent provider for Paseo over isolated JSON-RPC subprocesses.
- [profile-routing](https://github.com/panrafal/paseo-plugins/tree/main/profile-routing) - A Paseo provider whose agent is a router. Each message runs a **model script** from plugin settings with `EFFORT` in the environment, creates a delegate from the JSON that script prints **in the same workspace**, and then either waits for that delegate or lets it run on its own.
- [provider-switcher](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/provider-switcher) - Paseo 0.8 插件 —— 在 Paseo 侧边栏直接管理 **Claude Code / Pi / Paseo** 三个应用的 API 提供商，不用再单独打开 cc-switch.
- [provider-usage](https://github.com/nerveband/paseo-provider-usage) - Paseo plugin that shows Claude, Codex, and Antigravity plan usage in the sidebar.
- [slash](https://github.com/xpufx/paseo/tree/main/plugins/slash) - Command console for Paseo (v0.8+).
- [zcode-provider](https://github.com/supermomonga/paseo-plugin-zcode-provider) - Use ZCode models, tools, and conversation history in Paseo. This plugin connects to your installed ZCode app and uses the authentication and models you have configured there.

## Composer and attachments

*Composer pills and attachment sources.*

- [account-switcher](https://github.com/dutchakdev/paseo-plugin-account-switcher) - Per-agent Claude and Codex accounts, browser sign-in, and quota monitoring for Paseo.
- [coding-plan-manager](https://github.com/huangcb01/paseo-plan-manager) - 一个本地 Paseo 插件，用于集中管理多个 Codex / ChatGPT、智谱 GLM Coding Plan 和 Kimi Coding Plan，查看额度与重置时间，并把指定 Plan 写入 OpenCode、Codex、Claude Code 或 Oh My Pi 的本机配置.
- [cswap-usage](https://github.com/creatorkoo/paseo-cswap-usage) - Paseo workspace panel showing usage for every claude-swap account.
- [feishu-seance](https://github.com/wangfh5/paseo-feishu-seance) - **Hold a séance for a running [Paseo](https://paseo.sh) agent.** One keystroke channels the session you are watching into a Feishu (Lark) bot — the agent's spirit descends into the chat (降灵), and you keep the conversation going from your phone while away from your desk. Its replies arrive in Feishu as rendered Markdown cards; messages you send the bot possess the session as prompts. When you are back, one tap on the composer pill sends the spirit home (归位).
- [memory](https://github.com/lucashadfield/pi-memory/tree/master/paseo-plugin) - A durable memory store for pi agents.
- [mermaid](https://github.com/dutchakdev/paseo-plugin-mermaid) - Render Mermaid diagrams inside the Paseo chat timeline.
- [omp-usage-plugin](https://github.com/gray-graff/paseo-omp-usage-plugin) - Paseo plugin that surfaces Oh My Pi (OMP) plan usage and credit quotas directly in the UI — composer pill, popover, workspace panel, and settings screen.
- [paseo-drafts](https://github.com/custyhs/paseo-drafts) - Durable prompt drafts for Paseo, delivered as a plugin: write, plan, send, and search drafts that outlive every session.
- [paseo-in-app-browser](https://github.com/vokturz/paseo-in-app-browser) - Chromium-powered in-app browser workspace panel for Paseo.
- [paseo-room-claude-carrier](https://github.com/cuongntr/paseo-room/tree/main/src/plugin-assets) - Room contract carrier for Claude seats as a Paseo 0.8 server plugin.
- [paseo-speak](https://github.com/kyleoliveiro/paseo-speak) - Read a summary or full Paseo response aloud using its existing voice capabilities.
- [skills-usage](https://github.com/panrafal/paseo-plugins/tree/main/skills-usage) - Paseo plugin that adds a **Skills** composer pill to every active agent. The pill shows how many skills the agent has already used in this chat. Pressing it opens a popover, so you stay in the agent you are working in, with a search box and two groups: used in this chat and all skills.
- [x-comms](https://github.com/xpufx/paseo/tree/main/plugins/x-comms) - Plugins, tools, libraries for Paseo.

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
