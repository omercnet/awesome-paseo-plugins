# Contributing

Thanks for helping curate Awesome Paseo Plugins. This is a shortlist of useful, maintained plugins, not a catalog of every plugin.

## Adding a plugin

Open one pull request per plugin. The plugin must:

- Be hosted in a public Git repository.
- Install successfully with `paseo plugin add` without running package manager or install scripts.
- Be usable and actively maintained, with a clear license.
- Have a README that explains what the plugin does, how it reads or changes state, its security implications, and known limitations.
- State its minimum Paseo daemon version when it does not support the current stable release.

Add the entry to an existing category in alphabetical order using this format:

```markdown
- [plugin-name](https://github.com/owner/repository) - Factual one-sentence description. Web and desktop. Requires Paseo 1.2 or later.
```

Only include platform limits and a minimum version when they apply. Keep the description factual and end it with a period.

In the pull request, explain why the plugin belongs on a curated list and how you verified installation. New categories need a clear scope and enough plugins to justify the split.

## Automated security review

Plugin submissions are scanned as untrusted source code. The scanner clones the public repository without running its code, package manager, install scripts, submodules, or Git hooks. It checks secrets with Gitleaks, dependencies with OSV-Scanner, source patterns with curated Semgrep rules, and GitHub workflows with actionlint and zizmor. It then sends a filtered text-only copy and those deterministic findings to the configured model provider for advisory review. Google Gemini is the default; maintainers may select an OpenCode Zen model. Do not submit repositories containing secrets, personal information, or confidential material. Automated review can miss vulnerabilities and does not replace maintainer or user review.

## Updating or removing a plugin

Corrections and removals are welcome. Include evidence when reporting an archived repository, broken installation, unsupported compatibility claim, misleading description, or security concern.

Use an issue for a problem that needs investigation. Open a pull request directly when the correction is clear.
