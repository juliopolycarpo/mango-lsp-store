# typescript-lsp

TypeScript and JavaScript language server for Claude Code using `tsc`'s
native LSP mode.

Since the TypeScript 7.0 release candidate, the Go-native compiler ships as
the regular `typescript` package and its `tsc` binary answers `--lsp --stdio`
directly, so no separate language-server wrapper is needed.

## Installation

### No Installation Required

This package can be used without installation. Just make sure Node.js (or
Bun) is available so the `npx` command can run directly. `npx` resolves the
project's own installed `typescript` dependency first, matching whatever
version each repo already pins.

If a repo has no `typescript` dependency installed, `npx` falls back to
fetching the latest `typescript` release on demand.

## Command

```text
npx --yes --package typescript tsc -- --lsp --stdio
```

## Supported Extensions

`.ts`, `.tsx`, `.mts`, `.cts`, `.js`, `.jsx`, `.mjs`, `.cjs`

## Relationship to `tsgo-lsp`

`tsgo-lsp` is kept for users still relying on the standalone
`@typescript/native-preview` package and the `tsgo` binary name from before
TypeScript 7.0 folded the native compiler into `typescript`/`tsc`. New
installs should prefer `typescript-lsp`.
