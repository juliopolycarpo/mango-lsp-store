# Repository Guidelines

## Project Structure & Module Organization

This repository is a Claude Code plugin marketplace for LSP-only plugins. Store metadata lives in `.claude-plugin/marketplace.json`. Individual plugins live under `plugins/<name>/` and should contain `.claude-plugin/plugin.json`, `.lsp.json`, and a plugin-specific `README.md`. Shared project automation is in `scripts/`, with `scripts/check.ts` and `scripts/fmt.ts` orchestrating validation and formatting. GitHub policy, PR, and CI files live in `.github/`.

## Build, Test, and Development Commands

- `bun install`: install dependencies from `package.json` and `bun.lock`.
- `bun run check`: run formatting checks, Biome linting, and TypeScript type checking in parallel.
- `bun run fmt`: apply safe Biome lint fixes, then format with dprint.
- `bun run lint`: run `biome lint .` only.
- `bun run typecheck`: run `tsgo --noEmit` against `tsconfig.json`.

CI also runs `claude plugin validate . --strict`; use it locally when changing marketplace or plugin metadata.

## Coding Style & Naming Conventions

Use TypeScript ESM and Bun APIs for scripts. Formatting is controlled by dprint: 2-space indentation, double quotes, semicolons, and 100-character line width for TypeScript, JSON, and Markdown. Biome provides linting only; its formatter is disabled. Prefer `const`, avoid unused imports and variables, and treat explicit `any` and non-null assertions as warnings to justify or remove.

Plugin names use lowercase kebab-case ending in `-lsp`, such as `tsgo-lsp` or `biome-web-lsp`. Keep server IDs inside `.lsp.json` short and descriptive.

## Commit & Pull Request Guidelines

This checkout has no local Git history, so no commit convention can be inferred. Use short, imperative commit subjects, for example `Add astro LSP plugin metadata` or `Document Biome web ownership`.

Pull requests should follow `.github/pull_request_template.md`: include a summary, confirm `bun run check`, update plugin docs when behavior changes, and keep plugins focused on LSP configuration only. Document intentional language ownership overlap, especially between `tsgo-lsp` and `biome-lsp`.

## Agent-Specific Instructions

Do not add formatter hooks, shell scripts, or JavaScript wrapper scripts to plugin packages. Prefer direct language-server commands in `.lsp.json`, and update both marketplace metadata and the relevant plugin README when commands, languages, or runtime requirements change.
