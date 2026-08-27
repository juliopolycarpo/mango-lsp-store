# typescript-lsp

TypeScript and JavaScript language server for Claude Code using `tsc`'s
native LSP mode.

Since the TypeScript 7.0 release, the Go-native compiler ships as the regular
`typescript` package and its `tsc` binary answers `--lsp --stdio` directly, so
no separate language-server wrapper is needed.

## Installation

Install TypeScript 7 globally so `tsc` is on `PATH`:

```sh
npm install -g typescript@7
```

The major is pinned rather than floating on `latest` so that a future
TypeScript 8 cannot change or drop `--lsp` under you. Bumping it is a
deliberate release here.

A project pinned to TypeScript 5 or 6 has a local `tsc` that rejects `--lsp`
with `error TS5023: Unknown compiler option '--lsp'`. The server is launched
from `PATH`, not from the project's `node_modules`, so the global 7.x install
is what answers — the project stays free to pin whatever version it compiles
with.

## Command

```text
tsc --lsp --stdio
```

## Supported Extensions

`.ts`, `.tsx`, `.mts`, `.cts`, `.js`, `.jsx`, `.mjs`, `.cjs`

## Relationship to `tsgo-lsp`

`tsgo-lsp` is kept for users still relying on the standalone
`@typescript/native-preview` package and the `tsgo` binary name from before
TypeScript 7.0 folded the native compiler into `typescript`/`tsc`. New
installs should prefer `typescript-lsp`.
