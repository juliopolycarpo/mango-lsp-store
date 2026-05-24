# tsgo-lsp

TypeScript and JavaScript language server for Claude Code using `tsgo`.

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
