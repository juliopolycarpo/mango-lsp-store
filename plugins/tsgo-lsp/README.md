# tsgo-lsp

TypeScript and JavaScript language server for Claude Code using `tsgo`.

> **Compatibility plugin.** Since the TypeScript 7.0 release candidate, the
> native compiler ships as the regular `typescript` package and `tsc`
> answers `--lsp --stdio` directly. `@typescript/native-preview` still
> publishes preview builds that provide the standalone `tsgo` binary, but
> ongoing development has moved to `typescript` (`typescript@next` for
> nightlies). Prefer [`typescript-lsp`](../typescript-lsp) for new installs;
> this plugin stays for users still pinned to a `tsgo` preview build.

## Installation

### Install `tsgo` globally

- With npm:

```bash
npm install -g @typescript/native-preview
```

- With bun (Recommended):

```bash
bun install -g @typescript/native-preview
```

### Or just add your `tsgo` binary to `PATH` if you have it installed locally.

## Command

```text
tsgo --lsp --stdio
```

## Supported Extensions

`.ts`, `.tsx`, `.mts`, `.cts`, `.js`, `.jsx`, `.mjs`, `.cjs`

## Runtime Requirement

Install `@typescript/native-preview` so `tsgo` is available on `PATH`.
