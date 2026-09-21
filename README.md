# Awesome Paseo Plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> See also [paseo-cafe/paseo-cafe](https://github.com/paseo-cafe/paseo-cafe)

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

- [advanced-markdown](https://github.com/custyhs/paseo-advanced-markdown) - Renders math formulas and Mermaid diagrams inside assistant messages in [Paseo](https://paseo.sh) 0.8.x and 0.9.x, as an installable plugin. No Paseo fork, no patch: the official app, daemon, and plugin SDK are the only dependencies.
- [agent-health](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/agent-health) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [agent-monitor](https://github.com/omercnet/paseo-agent-monitor) - One roster for every agent on a daemon. Triage buckets (Attention / Running / Idle / Closed), project-first grouping, text filter, live diff stats, and one-tap archive sweep. Answers "which of my 38 agents needs me right now" without walking the workspace tree. Web and desktop.
- [branch-garden](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/branch-garden) - Release **v0.1.0-rc.3** targets final **Paseo 0.8.0**. See [final-version checks and remaining runtime limits](../../docs/verification/paseo-0.8.0-release.md). Screenshots below show the installed Paseo 0.8.0 Windows app.
- [command-deck](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/command-deck) - Release **v0.1.0-rc.3** targets final **Paseo 0.8.0**. See [final-version checks and remaining runtime limits](../../docs/verification/paseo-0.8.0-release.md). Screenshots below show the installed Paseo 0.8.0 Windows app.
- [cubesandbox](https://github.com/shekohex/dotai/tree/main/paseo/cubesandbox) - Paseo v0.8 plugin for one Work Sandbox per unit of work. Each plugin installation persists only the sandbox IDs it creates; it never lists or manages unrelated CubeSandbox workloads.
- [forge](https://github.com/dwyanewang/paseo-plugins/tree/main/forge) - 在一个 [Paseo](https://paseo.sh/) 插件内，通过个人访问令牌连接 **Codeup OpenAPI** 和 **Gitee API v5**。 所有平台请求直接使用 HTTP；没有 `aliyun`、`gh`、`glab` 等平台 CLI 依赖。 本地 Git 仅用于读取工作区 `origin`，检出、推送和工作树仍由 Paseo 宿主管理。
- [forges](https://github.com/xpufx/paseo/tree/main/plugins/forges) - Work with Forge/Gitea-family issues from inside Paseo via the embedded fetch API client.
- [gas-city](https://github.com/omercnet/paseo-plugins/tree/main/paseo-gas-city) - A Paseo control plane for observing and operating Gas City supervisors.
- [git-graph](https://github.com/huangcb01/paseo-git-graph) - 在 Paseo 右侧 **Explorer** 中浏览 Git 提交拓扑、分支、标签和文件差异。插件跟随当前工作区，支持仓库子目录和 Git worktree。
- [github-board](https://github.com/gpambrozio/paseo-plugins/tree/main/github-board) - A sidebar surface with four columns — issues, draft PRs, open PRs, and discussions — covering what you authored plus what is open on the repositories you own. Cards carry CI check counts, editable labels, and a "Send to chat" button that creates a workspace on the project matching that repository and starts an agent on the card. Requires `gh` installed and authenticated on the daemon machine. Install with `paseo plugin add gpambrozio/paseo-plugins --path github-board`.
- [github-workbench](https://github.com/AllenReder/paseo-github-workbench) - A workbench for GitHub issues and pull requests, with account and repository views, resource refresh, and workspace actions.
- [lessons](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/lessons) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [machine-status](https://github.com/dutchakdev/paseo-plugin-machine-status) - Machine dashboard, open ports and Docker control inside Paseo.
- [om-status](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/om-status) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [opencode-mcp-toggle](https://github.com/Davnn1/opencode-mcp-toggle) - Manage and toggle OpenCode MCP servers on the fly directly from Paseo to save context tokens.
- [orchestration-graph](https://github.com/JinHoonPark/SkyAgentPlugins/tree/main/paseo-plugins/orchestration-graph) - - Claude Code용: [`.claude-plugin/marketplace.json`](.claude-plugin/marketplace.json) - Codex CLI용: [`.agents/plugins/marketplace.json`](.agents/plugins/marketplace.json)
- [parent-wake](https://github.com/EPISTEX0/paseo-parent-wake) - Wake an orchestrating parent agent on every question and every finished turn of its child agents, not only the first one.
- [paseo-ado](https://github.com/jegork/paseo-ado) - Azure DevOps support for Paseo, built on the `az` CLI (`azure-devops` extension). No credentials are stored by the plugin; `az login` on the daemon machine is the only setup.
- [paseo-cafe](https://github.com/paseo-cafe/paseo-cafe/tree/main/plugin) - Browse the paseo.cafe plugin catalog inside Paseo and install plugins without leaving the app.
- [paseo-clusters](https://github.com/thisjrodriguez/paseo-plugin-clusters) - Clusters de proyectos para la barra lateral de Paseo.
- [paseo-director](https://github.com/lalaze/paseo-plugins/tree/main/director) - 在 Paseo 正常聊天界面里提出需求、讨论方案和追加修改。主 Agent 通过 MCP 管理任务；后台按保存的分工串行派发子 Agent，统一审核后等待你验收。插件保留协作设置，不再提供独立的任务仪表盘。
- [paseo-firstmate](https://github.com/aborakati/paseo-firstmate) - Paseo plugin: FirstMate fleet dashboard, crew supervision, and command surface.
- [paseo-grafana](https://github.com/jegork/paseo-grafana) - Grafana alerts and dashboards in Paseo, built on the `gcx` CLI. The plugin uses whatever `gcx` context is current on the daemon machine; `gcx login` is the only setup.
- [paseo-helper-demo](https://github.com/xpufx/paseo/tree/main/plugins/demo) - This plugin is a demo for showcasing some of the capabilities of [`paseo-plugin-helper`](https://github.com/xpufx/paseo-plugin-helper) ([npm](https://www.npmjs.com/package/paseo-plugin-helper)), namely the UI design system, lifecycle primitives, and daemon utilities for building Paseo plugins. It does not necessarily do anything useful to end users. Install this one to see every pattern running li.
- [paseo-latex-renderer](https://github.com/lingluo831/paseo-latex-renderer) - Native LaTeX math formula renderer for Paseo desktop and mobile clients.
- [paseo-minimax-resumer](https://github.com/ilteoood/paseo-minimax-resumer) - A Paseo plugin that automatically handles Minimax API rate limiting by detecting rate limit errors and resuming agents after the quota resets.
- [paseo-mise-env](https://github.com/seniorkonung/paseo-mise-env) - A lightweight plugin for [Paseo](https://paseo.sh/) that automatically loads the correct [mise](https://mise.jdx.dev/) environment for every agent session.
- [paseo-ntfy](https://github.com/seniorkonung/paseo-ntfy) - Paseo plugin that sends [ntfy](https://ntfy.sh/) notifications when an opted-in agent finishes, fails, or requests permission/input.
- [paseo-pi-kit](https://github.com/springkill/paseo-plugins/tree/main/paseo-pi-kit) - Four features for [Pi](https://www.npmjs.com/package/@earendil-works/pi-coding-agent) sessions in [Paseo](https://github.com/getpaseo/paseo). All on by default.
- [paseo-plain](https://github.com/scowalt/paseo-plain) - Rewrite assistant answers in plain English inside Paseo, only when you ask. The coding agent keeps its original conversation.
- [paseo-tool-ui-plugin](https://github.com/midodimori/paseo-tool-ui-plugin) - Automatically expands Paseo's native **Edit** and **Write** tool cards on desktop and web, so their existing file details and diffs are visible.
- [paseo-translate](https://github.com/lalaze/paseo-plugins/tree/main/translate) - 在 Paseo 的 AI 对话中选中文字，点击选区旁的「翻译」，即可在原地查看结果。插件 ID：`paseo-translate`。
- [paseo-usage-glance](https://github.com/lalaze/paseo-plugins/tree/main/usage-glance) - 适用于 Paseo daemon 和客户端 **0.8.x / 0.9.x（含 beta）**。本插件位于多插件仓库 [`lalaze/paseo-plugins`](https://github.com/lalaze/paseo-plugins) 的 [`usage-glance/`](.) 目录。电脑端的工作区右上角直接显示额度摘要，例如「Codex 余28%」。默认显示所有可用供应商中最低的剩余百分比，并标明供应商；点击展开后可把顶栏固定到某一个供应商，该选择保存在当前主机，刷新或重开工作区后仍有效。未固定时继续跟随最低剩余。在聊天、终端和文件标签之间切换时仍可查看。点击展开全部明细。顶部按钮宽度由 Paseo 限制为 160px，因此使用短名称；AGY 表示 Antigravity。窄窗口或顶部有多个其他插件按钮时，Paseo 可能将按钮放入更多菜单。
- [plan](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/plan) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [plugin-updates](https://github.com/xpufx/paseo/tree/main/plugins/plugin-updates) - Read-only monitor for installed Paseo plugin source status, links, and per-subdirectory Git diagnostics.
- [pr-radar](https://github.com/omercnet/paseo-pr-radar) - Turns pull requests linked to active workspaces into a viewer-aware delivery queue grouped by needs you, being handled, waiting externally, and ready, with actions to prompt an existing agent or start one; requires `gh` installed and authenticated on the daemon machine and Paseo 0.6 or later.
- [preset-switcher](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/preset-switcher) - Paseo 0.8 插件：一键以指定**人格 + 技能 + 模型**启动 agent。预设即数据——一个目录一个预设，扫描即注册；zip 预设包可导入导出，换机/分享直接带走。（要求 Paseo >= 0.8.0）.
- [q5m-math](https://github.com/q5m-ai/paseo-math) - Markdown and LaTeX rendering for math-bearing assistant responses in Paseo, with inline formulas, display equations, and a **Copy source** action that preserves the original Markdown and TeX.
- [queens](https://github.com/omercnet/paseo-plugins/tree/main/queens) - A cross-platform Queens logic puzzle for Paseo.
- [runtime-radar](https://github.com/jegork/paseo-runtime-radar) - A Paseo plugin that shows which ports and Docker containers belong to which worktree.
- [server-monitor](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/server-monitor) - Paseo 0.8 插件：在一个面板里监控多台 VPS 的 **CPU / 内存 / 磁盘 / 网络**，SSH 采集，密钥与密码认证均可（密码用 AES-256-GCM 本地加密存储）。（要求 Paseo >= 0.8.0）.
- [smart-session](https://github.com/tomgrin10/paseo-smart-session) - Records Claude plan-usage history and lets a Paseo agent manage its own context.
- [snip](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/snip) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [task](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/task) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [twofado](https://github.com/xpufx/paseo/tree/main/plugins/twofado) - Approval-gate UI for the **2fado** privileged-command daemon, for [Paseo](https://github.com/getpaseo/paseo) (v0.8+).
- [usage-monitor](https://github.com/ABorakati/paseo-usage-monitor) - Live quota, balance, and rate-limit cards for 34 AI providers plus a token-and-cost history chart rebuilt from local agent transcripts. Web and desktop.
- [video-embeds](https://github.com/kschniedergers/paseo-plugins/tree/main/video-embeds) - Renders ![clip](/path.mp4) in assistant messages as an inline video player. Desktop and web playback; iOS/Android show a placeholder card.
- [worknaru-agent-service](https://github.com/SWBaek/worknaru-dev/tree/main/apps/agent-service) - `module-runs.sqlite`는 입력·결과·요청 ID·업무 귀속·수명을 저장한다. SQL 유일 제약으로 접수 ID를 중복 방지하고, 조건부 상태 전이·WAL·FULL 동기화를 사용한다. 앱 생성 DDL과 quick_check를 확인하며 알 수 없는 스키마와 DB/부속 파일 링크는 거부한다. 시작 시 미완료 실행을 uncertain으로 기록하고 자동 실행하지 않는다. 정확한 수명은 [ADR 0016](../../docs/adr/0016-module-run-idempotency-and-recovery.md)에 있다.

## Workspace panels

*Plugins that add panels to workspace tabs or the explorer.*

- [activity](https://github.com/koinzhang/paseo-plugins/tree/main/activity) - Local usage analytics and workspace agent ops for Paseo: tools, agents, messages, models, Explorer fleet list, and terminals.
- [agent-crew](https://github.com/omercnet/paseo-plugins/tree/main/agent-crew) - A Paseo Explorer panel for visualizing and controlling every managed agent crew in a workspace.
- [agents-dash-list](https://github.com/panrafal/paseo-plugins/tree/main/agents-dash-list) - Sidebar dashboard of workspaces grouped by waiting, unread, in progress, failing, approved, idle, or closed, with archive and unread actions.
- [agents-history](https://github.com/panrafal/paseo-plugins/tree/main/agents-history) - Sidebar history of every workspace and agent, including archived ones, with filters and ranked search over on-disk conversation transcripts.
- [beads](https://github.com/pasteley/paseo-beads) - A [Paseo](https://github.com/getpaseo/paseo) plugin that wraps [`bd`](https://github.com/gastownhall/beads), the hierarchical, dependency-aware issue tracker built for agent workflows, into a workspace panel. Paseo has no built-in task tracker (yet?). But `bd` already does hierarchical IDs, a blocking-dependency graph, priorities, and it auto-installs agent guidance, so this just brings that into the app instead of a terminal.
- [board](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/board) - Paseo conversation board. The Board sidebar item opens Running and Just finished columns. Requires Paseo daemon and client 0.8.x. Uses standard plugin surfaces, sidebar registration, RPCs, and lifecycle hooks.
- [colorful-agent-activity](https://github.com/mcowger/paseo-plugins/tree/main/colorful-agent-activity) - Colorful agent activity replaces Paseo's public reasoning and agent tool-call rows with dense, IDE-style activity rows across desktop, web, and native mobile (iOS and Android). It keeps the latest thinking block and latest tool call open, shows useful details on demand, and uses Prism for shell and code output.
- [compact-agent-activity](https://github.com/cnaron/compact-agent-activity) - Compact and folded agent activity for Paseo with single-line turn summaries, dense line spacing, and rich inspection.
- [daemon-link](https://github.com/itsjustanks/paseo-plugin-daemon) - Daemon Link for Paseo: Hosts: private localhost links, reviewed Git project transfers, and project-scoped monitoring.
- [devin-integration](https://github.com/cmulittlechild/devin-paseo) - Run [Devin CLI](https://devin.ai) inside [Paseo](https://paseo.sh) with near-native fidelity: streamed subagent cards, per-turn token statistics, message-level rewind, and access to Paseo's agent tools from inside Devin.
- [direnv](https://github.com/guaraqe/paseo-direnv) - A Paseo 0.8 plugin that loads each workspace's `.envrc` with direnv before launching an agent session, so agents start with the project's environment.
- [discord-rich-presence](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/discord-rich-presence) - Show your current Paseo activity on Discord.
- [fleet-dashboard](https://github.com/ahoereth/paseo-fleet-dashboard) - A read-only Paseo 0.8 sidebar dashboard showing active workspaces and agents across this daemon and configured remote daemons, grouped by what needs attention.
- [git-tree](https://github.com/ZFhuang/paseo-git-tree) - Git branch tree panel for Paseo: a lane-based commit graph (git log --graph) as a workspace tab, with branch actions, search, and commit diffs.
- [github-dashboard](https://github.com/tensorcopy/github-dashboard) - GitHub inside [Paseo](https://paseo.sh): the issues and pull requests you are attached to, the ones waiting on your review, your Projects boards, and the review actions that finish a pull request — without leaving the app, and with one click to hand any of them to a coding agent.
- [github-integration](https://github.com/alysnnix/paseo-github-integration) - GitHub inside [Paseo](https://paseo.sh): the issues and pull requests you are attached to, the ones waiting on your review, your Projects boards, and the review actions that finish a pull request — without leaving the app, and with one click to hand any of them to a coding agent.
- [http-tunnel](https://github.com/lyhu/paseo-plugin-tunnel) - Connect an HTTP or HTTPS service you manage to another trusted Paseo host through the Paseo Relay and end-to-end encryption. Manage each connection from the **HTTP Tunnel** entry in Paseo's sidebar.
- [linear-tickets](https://github.com/Vokturz/paseo-plugins/tree/main/linear-tickets) - Paseo sidebar plugin that lists your assigned Linear tickets and starts an agent with the ticket context, comments and relationships.
- [linear-to-paseo](https://github.com/chrisjanwust/linear-to-paseo) - A [Paseo](https://paseo.sh) plugin that puts your Linear issues inside Paseo and turns "I'll take this one" into a fresh worktree workspace with an agent already briefed on the whole ticket: description, threaded comments, links, and images.
- [math-renderer](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/math-renderer) - Render block LaTeX in completed Paseo replies, with source viewing, copying and native-reply mode. Experimental beta for Paseo 0.9.
- [mermaid](https://github.com/dutchakdev/paseo-plugin-mermaid) - Built on the plugin timeline API introduced in Paseo 0.8.
- [om-panel](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/om-panel) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [opencode-session-overview](https://github.com/mcowger/paseo-plugins/tree/main/opencode-session-overview) - Adds an agent-scoped activity pane for OpenCode sessions with session details, usage, context, tasks, loaded skills and commands, workspace metadata, and observed subagents. Requires Paseo 0.7.0-beta.2 or later.
- [paseo-be-concise](https://github.com/yannelli/paseo-plugin-concise) - Live be-concise activity, configuration, and hook previews inside Paseo.
- [paseo-beads](https://github.com/omercnet/paseo-plugins/tree/main/paseo-beads) - A dependency-aware Beads work queue for each Paseo workspace.
- [paseo-canvas](https://github.com/supermomonga/paseo-plugin-canvas) - Write, review, and share Markdown documents with agents in your Paseo workspace.
- [paseo-codex-account-watch](https://github.com/hanryyu/paseo-codex-account-watch) - A host-local Paseo plugin that notices when CC Switch or another tool changes Codex's file-backed account, then lets you review and reload each monitored agent.
- [paseo-display-switcher](https://github.com/nerveband/paseo-display-switcher) - A [Paseo](https://paseo.sh) plugin that lets you toggle and switch sidebar display modes (Project listing vs. Status listing) via keyboard shortcuts and the Command Center (`⌘K` / `Ctrl+K`).
- [paseo-github-panel](https://github.com/timpurdum/paseo-github-panel) - A read-only-except-merge Paseo workspace panel for the GitHub repository and branch checked out in the current workspace. It shows the branch pull request, checks, review state, linked issue, comment conversations, and the repository's open issues and pull requests without sending credentials to the client.
- [paseo-gsd-observer](https://github.com/drungrin/paseo-gsd-observer) - A read-only Paseo plugin for understanding the persisted state of a GSD project. It turns the selected workspace's planning evidence into an accessible board of milestones, phases, and plans—without running GSD, creating worktrees, merging code, or declaring work complete.
- [paseo-kanban](https://github.com/breathi3552/paseo-kanban) - A lightweight, responsive Kanban board plugin for Paseo workspaces.
- [paseo-markdown-viewer](https://github.com/opsb/paseo-markdown-viewer) - Read-only markdown side panel for Paseo: tabs, live file updates, and follow mode for files agents edit.
- [paseo-pet](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/paseo-pet) - Independent community plugins for Paseo: readable activity, DeepSeek Harness, math and pets.
- [pi-tasks-timeline](https://github.com/mcowger/paseo-plugins/tree/main/pi-tasks-timeline) - Keeps Pi task lists visible in Paseo timelines and workspace or explorer panels, with a composer pill for active tasks.
- [pr-views](https://github.com/pmusaraj/paseo-pr-views) - Saved GitHub pull request views for Paseo.
- [readable-agent-activity](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/agent-activity) - Formatted and highlighted tool-call JSON, twenty-line previews and tool icons for Paseo 0.8/0.9. Full detail only.
- [reasoning-display](https://github.com/mcowger/paseo-plugins/tree/main/reasoning-display) - Replaces built-in agent reasoning blocks with expandable Markdown cards that match Paseo's native tool-call styling, with expand-last, collapsed, and always-expand display modes. Requires Paseo 0.7.0-beta.2 or later.
- [review-deck](https://github.com/mentalfl0w/review-deck) - Human-in-the-loop code review workspace for Paseo with inline file comments and project-level AI processing.
- [sayr](https://github.com/dorasto/sayr/tree/main/packages/paseo-plugin) - A paseo plugin for viewing and managing your Sayr tasks.
- [setup-monitor](https://github.com/stevecastaneda/paseo-plugins/tree/main/setup-monitor) - Paseo 0.8 live view of worktree setup. Paseo already tracks `worktree.setup` from `paseo.json`. After 0.3 it only opens the built-in Setup tab when that script fails, so a long `npm install` is silent. This plugin reads the same `workspace_setup_status` stream and shows it while it runs.
- [skills](https://github.com/gpambrozio/paseo-plugins/tree/main/skills) - Lists the skills and commands an agent session can run, shows where each one comes from, renders its `SKILL.md`, and invokes it on the live session. Claude and Codex sessions get their skill files read off the daemon's filesystem; every other provider shows what the running session reports. Install with `paseo plugin add gpambrozio/paseo-plugins --path skills`.
- [subagent-activity](https://github.com/mcowger/paseo-plugins/tree/main/subagent-activity) - Adds an agent-scoped activity pane for monitoring managed Paseo descendants and provider-native subagent activity. Requires Paseo 0.7.0-beta.2 or later.
- [subagent-reply](https://github.com/SilverKnightKMA/paseo-plugins/tree/main/subagent-reply) - Trusted, unsandboxed plugins for the Paseo daemon. Split-runtime: server part (`index.ts`) runs in the daemon, client part (`*.client.tsx`) runs in the app.
- [tell-agent](https://github.com/omercnet/paseo-plugins/tree/main/tell-agent) - Send messages to agents in other workspaces on the same Paseo host.
- [thread-board](https://github.com/samgbafa/paseo-thread-board) - A live Kanban and filterable list view of every coding-agent thread on a Paseo host.
- [tidy-timeline](https://github.com/jegork/paseo-tidy-timeline) - A Paseo plugin that folds noisy user messages into compact cards.
- [turn-changes](https://github.com/Laokashouji/paseo-turn-changes) - Review per-turn agent file changes in Paseo with inline diff cards, a file tree, guarded undo, and an in-panel source editor.
- [workspace-activity](https://github.com/ABorakati/paseo-workspace-activity) - Adds Agent Monitor and Tasks panels to any workspace for live subagent trees, tool-call inspection, steering, cancellation, and per-agent todo progress. Web and desktop.
- [workspace-agent-count](https://github.com/zackyjz/paseo-workspace-agent-count) - Paseo 0.8.0 插件：让你随时看到每个 workspace 下有几个会话（agent）。
- [workspace-preflight](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/workspace-preflight) - Read-only workspace readiness checks for Paseo daemon and clients **0.8.0+**.

## Themes

*App themes contributed through the plugin API.*

- [catppuccin-theme](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/catppuccin-theme) - Adds all four Catppuccin flavours — Latte, Frappé, Macchiato, and Mocha — as Paseo app themes.
- [gruvbox](https://github.com/juanlatorre/paseo-gruvbox) - Gruvbox Dark & Light themes for Paseo, under Settings → Appearance.
- [miku-future](https://github.com/ZhonghuaYi/paseo-miku-theme/tree/main/miku-future) - A polished Hatsune Miku-inspired light and dark theme pack for [Paseo](https://github.com/getpaseo/paseo), with lossless illustrated wallpapers and carefully scoped frosted-glass surfaces.
- [monokai-pro](https://github.com/jrdw0/paseo-monokai-pro) - Monokai Pro's filter schemes as Paseo app themes. Seven entries in **Settings → Appearance**, each contributed with one `addTheme` call. Client-only plugin: no server entry, no subprocess, no RPC.
- [paseo-dracula](https://github.com/omercnet/paseo-dracula) - Dracula Classic and Alucard Classic app themes using the official dark and light palettes across Paseo surfaces and derived terminal colors; requires Paseo 0.7.2 or later.
- [paseo-feishu-ui](https://github.com/Laokashouji/paseo-feishu-ui) - Feishu themes and desktop skin for Paseo 0.8; native mobile palette support.
- [paseo-monokai-pro](https://github.com/JrDw0/paseo-monokai-pro) - Monokai Pro's Pro, Light, Classic, Machine, Ristretto, Octagon, and Spectrum filter schemes as app themes, with each of the eight palette tokens mapped to a named color from the scheme rather than an approximation, and syntax colors left to Paseo's built-in highlight theme.
- [paseo-theme-wye](https://github.com/phyzess/paseo-theme-wye) - [Wye](https://github.com/phyzess/vscode-theme-wye) themes for [Paseo](https://paseo.sh) — five themes contributed to **Settings → Appearance**.
- [solarized](https://github.com/mousebomb/paseo-solarized) - Solarized light and dark themes for Paseo.
- [theme-studio](https://github.com/mcowger/paseo-plugins/tree/main/theme-studio) - Theme Studio is an interactive, live theme designer and palette playground for [Paseo](https://paseo.sh/).

## Daemon and automation

*Plugins that add daemon-side behavior: schedulers, webhooks, notifications, integrations.*

- [acp-manager](https://github.com/alhassanaraouf/paseo-acp-manager) - Paseo sidebar plugin for managing ACP custom providers: add, edit, enable/disable, test, and quick-add from the ACP agent registry.
- [advance-paseo](https://github.com/ZhonghuaYi/advance-paseo/tree/main/advance-paseo) - A Paseo plugin that bundles incremental enhancements for the Paseo app — arbitrary wallpapers, automatic provider-catalog refresh, a Chinese / English interface, and live chat overlays (a floating TODO card with the current plan plus a tokens/sec meter) — built as a feature-module system so new capabilities slot in without touching existing ones.
- [agent-link-9router](https://github.com/itsjustanks/paseo-plugin-9router/tree/main/apps/paseo) - The runtime ID is `agent-link-9router`. Open **9Router** in the Paseo sidebar.
- [agy-provider](https://github.com/3ae3ae/paseo-plugin-agy-provider) - Paseo 0.8 and 0.9 provider plugin for Google's official Antigravity ACP server.
- [antigravity-provider](https://github.com/jimmy668765/paseo-antigravity-provider) - A native Paseo provider for Google's official `agy` CLI. It speaks the CLI's `stream-json` protocol directly: authentication, model discovery, tool execution, browser automation, and inference remain inside `agy`.
- [archive-branch-cleanup](https://github.com/MaplumeX/paseo-archive-branch-cleanup) - A [Paseo](https://paseo.sh) plugin that automatically deletes the local git branch when a Paseo-owned worktree workspace is archived.
- [auto-jev-codex-for-paseo](https://github.com/obetomuniz/auto-jev-codex-for-paseo) - Auto Jev-Codex for Paseo is a model router for [Paseo](https://github.com/getpaseo/paseo). It uses TypeSafe Jev to classify each new message. It then starts a Codex turn with the selected model, reasoning effort, work mode, and speed.
- [auto-pin](https://github.com/stv1024/paseo-auto-pin) - A [Paseo](https://paseo.sh) plugin that automatically pins newly created workspaces to the top of the sidebar.
- [background-jobs](https://github.com/yoseptf/paseo-background-jobs) - A [Paseo](https://paseo.sh) plugin that shows what your agents left running — the dev server, the `tail -f`, the stuck `until` loop — and lets you stop it.
- [beam](https://github.com/maxwell-01/paseo-beam) - Beam a Paseo workspace's working tree into your one running dev environment; beam out safely restores your checkout.
- [chat-resume](https://github.com/panrafal/paseo-plugins/tree/main/chat-resume) - Composer pills that continue a quota-exhausted agent now, resume after allowance renewal, or prepare a handover to another provider.
- [claude-tty](https://github.com/sleeyax/paseo-plugins/tree/main/plugins/claude-tty) - Adds **Claude TTY** to Paseo's provider list: the genuine interactive Claude Code CLI, driven in a PTY by the [Claude TTY ACP adapter](../../apps/claude-tty-acp).
- [commandcode-provider](https://github.com/alhassanaraouf/paseo-commandcode-provider) - Paseo provider plugin for the Command Code coding agent.
- [deepseek-harness](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/deepseek-harness) - DeepSeek Harness through its official ACP profile for Paseo 0.8 and 0.9 beta.
- [defer](https://github.com/tomgrin10/paseo-defer) - Queues a message for an agent and delivers it after a delay, at a chosen local time, or when the Claude usage window resets, waiting for the session to go idle so the message starts a new turn. Requires Paseo 0.7 or later.
- [fresh-worktrees](https://github.com/omercnet/paseo-plugins/tree/main/fresh-worktrees) - Fast-forwards clean local base branches before Paseo creates branch-off worktrees.
- [hermes-pack](https://github.com/midodimori/paseo-hermes-pack-plugin) - A personal assistant package with a native Hermes profile, character, memory and diary skills, a guided installer, and a Paseo provider. Names, preferences, credentials, and conversations stay private.
- [jev-agent-router](https://github.com/omerbentov/paseo-jev-agent-router) - Type `/route <task>` in a [Paseo](https://paseo.sh) workspace. The plugin asks [TypeSafe's Jev](https://typesafe.ai) which of **your** agent profiles fits the task, then starts an agent with that profile's provider, model, mode and thinking level.
- [jev-evaluator](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/jev-evaluator) - Expose Vercel's `typesafe-ai/jev` Evaluation API as the MCP tool `jev_evaluate`. New Paseo Codex and Claude agents, including subagents created through Paseo's `create_agent`, receive the tool while enabled. Provider-internal subagents are not covered by this hook. Use your normal Codex or Claude provider to run the agent. Jev evaluates decisions; it cannot run a coding-agent session through the Responses API.
- [jev-orchestrator](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/jev-orchestrator) - Delegate bounded tasks to real Paseo children using saved profiles, Jev routing, and independently executed checks. Requires Paseo daemon/client 0.8.0 and Node 22+. No Paseo application source changes or worktree creation.
- [k8s](https://github.com/jeroenfrenken/paseo-k8s) - Kubernetes workloads, logs, GitOps and a kubectl command bar, as a Paseo plugin.
- [launchd-jobs](https://github.com/gpambrozio/paseo-plugins/tree/main/launchd-jobs) - A sidebar surface that schedules shell commands as LaunchAgents, on a five-field cron expression or a fixed interval, so launchd runs them whether or not Paseo is open. Each job shows what launchd reports, its last twenty runs with durations and exit codes, and the tail of its log. The daemon must run on macOS. Install with `paseo plugin add gpambrozio/paseo-plugins --path launchd-jobs`.
- [maka](https://github.com/geoqiao/paseo-stuff/tree/main/plugins/maka) - MaKa through its ACP provider for Paseo 0.9.
- [mcp-manager](https://github.com/ypjun100/paseo-mcp-manager-plugin) - A Paseo plugin that shows the MCP servers registered with Claude Code and Codex, and starts their authentication flows, without leaving Paseo.
- [mcp-tools](https://github.com/xpufx/paseo/tree/main/plugins/mcp-tools) - > **⚠️ WIP — use at your own risk.** Not release-ready; APIs and behavior may change without notice.
- [model-pricing](https://github.com/gpambrozio/paseo-plugins/tree/main/model-pricing) - Paseo plugin: a sidebar table of what every model costs, across Anthropic, OpenAI, Fireworks AI, Ollama Cloud and OpenRouter.
- [obol](https://github.com/broomva/obol) - A Paseo plugin for running more than one subscription behind the same provider, switching which one your agents use without restarting the daemon, and seeing what they are consuming.
- [omo](https://github.com/hakubisual/pase-omo) - OmO agent provider and workflow UI for Paseo - DAG graphs, live todo cards, approval popups, mobile-ready.
- [openrouter-dashboard](https://github.com/dtheofr/paseo-plugins/tree/main/openrouter-dashboard) - A Paseo plugin that adds an **OpenRouter** entry to the sidebar (next to History, Search, and Schedules). It shows account and workspace usage from the OpenRouter API through a daemon-side RPC, so the API key never reaches the app.
- [paseo-auto-sync](https://github.com/hsiangron/paseo-auto-sync) - Paseo plugin that imports local Codex and Pi sessions and removes Paseo records whose provider sessions no longer exist. It follows Gaseo's link-not-copy model: original JSONL transcripts remain in their provider directories, while Paseo stores the provider session handle needed to resume them.
- [paseo-defer](https://github.com/tomgrin10/paseo-defer) - Defer messages to Paseo coding agents until a chosen time or usage-window reset.
- [paseo-limits](https://github.com/ortschun/paseo-limits) - Subscription limits for the active agent's provider as a composer pill in Paseo: 5-hour and weekly usage at a glance, full breakdown on press.
- [paseo-mcp](https://github.com/itsjustanks/paseo-mcp) - Manage MCP servers, project connections, credentials, and OAuth from Paseo.
- [paseo-muse](https://github.com/chrisjanwust/paseo-muse-plugin) - A native, server-only Paseo v0.8 provider using `@muse-code/sdk` and `muse serve` over MSP. No ACP adapter or per-turn CLI wrapper is required.
- [paseo-omp](https://github.com/omercnet/paseo-plugins/tree/main/paseo-omp) - Paseo integration for OMP, including its direct provider and workspace tooling.
- [paseo-openspec-orchestrator](https://github.com/seniorkonung/paseo-openspec-orchestrator) - `paseo-openspec-orchestrator` is a [Paseo](https://github.com/getpaseo/paseo) plugin that runs a resumable OpenSpec development workflow inside a Paseo workspace. It provides lifecycle controls, durable progress, recovery after plugin restarts, and scoped agent sessions for the interactive stages.
- [paseo-plugin-zcode](https://github.com/lianxin255/paseo-plugin-zcode) - A [Paseo](https://paseo.sh) provider plugin that registers **ZCode** (Z.ai's coding agent, backed by GLM) as an agent backend. It wraps the community [zcode-acp-server](https://www.npmjs.com/package/zcode-acp-server) ACP bridge with Paseo's `runAcpProvider()` shim — models, modes, permissions, steering and session resume come through the standard ACP capability mapping.
- [paseo-prompt-manager](https://github.com/yannelli/paseo-prompt-manager) - Markdown prompt library for Paseo with local version history, imports, and optional Git sync.
- [paseo-response-speed](https://github.com/lalaze/paseo-plugins/tree/main/response-speed) - Shows the generation speed of the current provider / model after every AI reply:.
- [pi-plugin-mcowger](https://github.com/mcowger/paseo-plugins/tree/main/pi-plugin-mcowger) - Pi coding agent provider for Paseo over isolated JSON-RPC subprocesses.
- [profile-routing](https://github.com/panrafal/paseo-plugins/tree/main/profile-routing) - A Paseo provider whose agent is a router. Each message runs a **model script** from plugin settings with `EFFORT` in the environment, creates a delegate from the JSON that script prints **in the same workspace**, and then either waits for that delegate or lets it run on its own.
- [provider-switcher](https://github.com/1093148685/shareyourplugins-paseo/tree/main/plugins/provider-switcher) - Paseo 0.8 插件 —— 在 Paseo 侧边栏直接管理 **Claude Code / Pi / Paseo** 三个应用的 API 提供商，不用再单独打开 cc-switch。
- [provider-usage](https://github.com/nerveband/paseo-provider-usage) - Paseo plugin that shows Claude, Codex, and Antigravity plan usage in the sidebar.
- [schedule-runs](https://github.com/panrafal/paseo-plugins/tree/main/schedule-runs) - Sidebar feed of every schedule run with status, workspace, agent, archived state, and the agent's final response.
- [session-summary](https://github.com/mcowger/paseo-plugins/tree/main/session-summary) - This Paseo `v0.8.0` plugin adds an agent-scoped live summary panel for reviewing a coding session. It uses Paseo's normalized agent and timeline APIs and does not connect directly to provider processes or expose provider credentials.
- [session-usage](https://github.com/panrafal/paseo-plugins/tree/main/session-usage) - Agent session usage from local Claude, Codex, OpenCode, Kilo, Devin CLI and Cursor records: sortable stats, provider charts, cost estimates, and CSV export.
- [slash](https://github.com/xpufx/paseo/tree/main/plugins/slash) - Slash-command console for [Paseo](https://github.com/getpaseo/paseo) (v0.8+).
- [top](https://github.com/xpufx/paseo/tree/main/plugins/top) - Live host system resource monitor and telemetry provider for [Paseo](https://github.com/getpaseo/paseo) (v0.8+).
- [usage-sidebar](https://github.com/RUIIIOVO/paseo-usage-sidebar) - Provider plan usage in the Paseo sidebar: an openable panel plus an always-visible meter under the sidebar entry, read from Paseo's own usage data so the numbers match Settings → Usage.
- [x-comms](https://github.com/xpufx/paseo/tree/main/plugins/x-comms) - [paseo](https://paseo.sh) is an agent orchestrator: AI coding agents run on paseo daemons, each managing workspaces, tools, and permissions. **paseo-x-comms** lets agents on one daemon talk to agents on another — even across hosts — via the daemon relay (WebSocket + E2EE) or direct TCP.
- [zcode-provider](https://github.com/supermomonga/paseo-plugin-zcode-provider) - Use ZCode models, tools, and conversation history in [Paseo](https://github.com/getpaseo/paseo). This plugin connects to your installed ZCode app and uses the authentication and models you have configured there.

## Composer and attachments

*Composer pills and attachment sources.*


- [account-switcher](https://github.com/dutchakdev/paseo-plugin-account-switcher) - Use multiple Claude and ChatGPT/Codex subscription accounts in Paseo. Choose an account for each agent, switch within an existing chat, and see limits across your saved accounts.
- [agent-heartbeats](https://github.com/panrafal/paseo-plugins/tree/main/agent-heartbeats) - Composer pill with the heartbeat count, plus a panel to list, create, edit, and delete that agent's heartbeats.
- [beautiful-chat](https://github.com/ABorakati/beautiful-chat) - Paseo plugin: a beautiful chat for OMP tools, reasoning, prompts, and tasks.
- [coding-plan-manager](https://github.com/huangcb01/paseo-plan-manager) - 一个本地 Paseo 插件，用于集中管理多个 Codex / ChatGPT、智谱 GLM Coding Plan 和 Kimi Coding Plan，查看额度与重置时间，并把指定 Plan 写入 OpenCode、Codex、Claude Code 或 Oh My Pi 的本机配置。
- [cswap-usage](https://github.com/creatorkoo/paseo-cswap-usage) - A [Paseo](https://paseo.sh) workspace panel that shows Claude usage for every [claude-swap](https://pypi.org/project/claude-swap/) account on one line each.
- [emoji](https://github.com/YoseptF/paseo-emoji) - Slack-style :emoji: autocomplete for the Paseo composer.
- [feishu-seance](https://github.com/wangfh5/paseo-feishu-seance) - **Hold a séance for a running [Paseo](https://paseo.sh) agent.** One keystroke channels the session you are watching into a Feishu (Lark) bot — the agent's spirit descends into the chat (降灵), and you keep the conversation going from your phone while away from your desk. Its replies arrive in Feishu as rendered Markdown cards; messages you send the bot possess the session as prompts. When you are back, one tap on the composer pill sends the spirit home (归位).
- [herald](https://github.com/gpambrozio/paseo-plugins/tree/main/herald) - Paseo plugin: speaks one sentence when an agent needs you, and lists everything waiting in a sidebar panel.
- [memory](https://github.com/lucashadfield/pi-memory/tree/master/paseo-plugin) - A durable memory store for pi agents.
- [omp-usage-plugin](https://github.com/gray-graff/paseo-omp-usage-plugin) - A local [Paseo](https://paseo.sh) plugin that surfaces your [Oh My Pi](https://omp.sh) (OMP) plan quotas — composer pill, popover, workspace panel, and a settings screen.
- [paseo-bm](https://github.com/hieunt286/paseo-bm/tree/main/plugin) - `paseo-bm` adds a small agent team to [Paseo](https://paseo.sh). You describe a change in chat, and the team turns it into documents (only when the change needs them), beads (small, dependency-aware work items tracked with `br`) and working code. A separate agent reviews each stage.
- [paseo-drafts](https://github.com/custyhs/paseo-drafts) - Durable prompt drafts for [Paseo](https://paseo.sh): write an instruction carefully, refine it over days, send it to one agent or several, and read back exactly what each one received. A draft belongs to no session, tab, or workspace, and it outlives all of them.
- [paseo-in-app-browser](https://github.com/vokturz/paseo-in-app-browser) - A Chromium-powered browser surface for [Paseo](https://paseo.sh). Chromium runs on the Paseo daemon host and is controlled through the Chrome DevTools Protocol; Paseo clients display the remote viewport and forward navigation, clicks, swipes, typing, and common key presses.
- [paseo-prometheus-status](https://github.com/infectiousstupidity/paseo-prometheus-status) - A Paseo 0.8+ plugin that shows GPU utilization, temperature, VRAM, and power from Prometheus. The composer stays clear during normal operation and only shows a GPU pill when temperature needs attention.
- [paseo-room-claude-carrier](https://github.com/cuongntr/paseo-room/tree/main/src/plugin-assets) - Room contract carrier for Claude seats as a Paseo 0.8 server plugin.
- [paseo-speak](https://github.com/kyleoliveiro/paseo-speak) - Read any completed Paseo response aloud from a speaker menu to the right of **Fork conversation**.
- [prompt-palette](https://github.com/NaruForge/Paseo-Plugin/tree/main/plugins/prompt-palette) - Release **v0.1.0-rc.3** targets final **Paseo 0.8.0**. See [final-version checks and remaining runtime limits](../../docs/verification/paseo-0.8.0-release.md). Screenshots below show the installed Paseo 0.8.0 Windows app.
- [qq-architect](https://github.com/hypermemetic-ai/qq-workflows/tree/main/paseo-plugin) - Ticket-driven planning, in-session teaching, and subagent delegation with two harnesses: **Muse Spark** (`muse`, default) and **Google Antigravity** (`agy`, opt-in).
- [remote-editor](https://github.com/alhassanaraouf/paseo-remote-editor) - Composer pill to open a workspace in VS Code or Zed over SSH, desktop only.
- [send-to-paseo](https://github.com/tomgrin10/send-to-paseo/tree/main/plugin) - Local HTTP bridge that starts a Paseo agent in the workspace belonging to a pull request.
- [shared-browser](https://github.com/omercnet/paseo-plugins/tree/main/paseo-shared-browser) - One real Chromium session per Paseo workspace, shared live across every connected client.
- [skills-usage](https://github.com/panrafal/paseo-plugins/tree/main/skills-usage) - Paseo plugin that adds a **Skills** composer pill to every active agent. The pill shows how many skills the agent has already used in this chat. Pressing it opens a popover, so you stay in the agent you are working in, with a search box and two groups:.
- [summary-fork](https://github.com/cbrostrom/dotfiles/tree/main/sources/paseo/plugins/summary-fork) - Paseo plugin: **Handover** — press the Handover pill (or `/handover <focus>`) to hand the current agent's task to a fresh conversation.
- [task-link](https://github.com/panrafal/paseo-plugins/tree/main/task-link) - Composer pill that opens a task link when a branch, title, or workspace name matches a configurable pattern.
- [time-since](https://github.com/stevecastaneda/paseo-plugins/tree/main/time-since) - Paseo 0.8 composer pill that ticks elapsed time since the last `user_message` or `assistant_message` in the agent thread.
- [timeline-ui](https://github.com/cbrostrom/dotfiles/tree/main/sources/paseo/plugins/timeline-ui) - Paseo plugin that renders Pi-style attention blocks and shows live session usage in the composer. Formerly `attention-blocks-timeline`.
- [title-style](https://github.com/zwmmm/title-style) - Rename Paseo workspaces with a configurable LLM prompt — Chinese titles by default, following the metadata-generation model config.
- [todo](https://github.com/dwyanewang/paseo-plugins/tree/main/todolist) - Host-local work items that launch [Paseo](https://paseo.sh/) agents — started directly from Todo, or handed to the native composer — and track every attempt, claim, and linked agent across all clients of one daemon.
- [vscode-open-remote](https://github.com/panrafal/paseo-plugins/tree/main/vscode-open-remote) - Composer pill that opens a remote agent's working directory in VS Code, Cursor, or vscode.dev on tablet.
- [watchtower-board](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/watchtower-board) - Read Watchtower plans in a workspace panel and attach a task brief through the composer picker. Requires Paseo daemon and client 0.8.0+, Node 22+, and enabled trusted plugins.
- [workspace-links](https://github.com/stevecastaneda/paseo-plugins/tree/main/workspace-links) - A small Paseo 0.8 plugin that reads `workspace-links.json` from the active workspace and puts those URLs on the Links trigger. Press the composer pill or header button and choose a URL to open it in the host browser. **Manage links** (or **Add links** when the file is empty or missing) opens the setup panel in Explorer. The Command Center item **Workspace Links** opens that panel too.
- [workspace-spaces](https://github.com/HiepPP/hiep-paseo-plugin/tree/main/plugins/workspace-spaces) - Arc-style numbered Spaces inside Paseo's existing desktop left sidebar. The compact bottom strip uses numbered tabs without a caption. Use **+** to create another Space. Open a project's existing context menu or three-dot menu and choose a destination under **Move to workspace**. The whole project group, including its coding sessions, follows. The menu closes after a successful move and stays open if saving fails. Horizontal trackpad gestures across the project list switch adjacent Spaces without wrapping. Right-click a numbered tab (or focus it and press Delete) to remove that Space. Its projects move atomically to the preceding Space, or the next one when removing the first. For example, removing Space 2 moves its projects to Space 1. The last Space cannot be removed. A failed save preserves both the Space and its memberships. Clicking tabs also works. The main chat stays open and running agents are untouched.

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
