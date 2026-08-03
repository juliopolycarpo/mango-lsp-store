# typescript-lsp

TypeScript and JavaScript language server for Claude Code using `tsc`'s
native LSP mode.

Since the TypeScript 7.0 release candidate, the Go-native compiler ships as
the regular `typescript` package and its `tsc` binary answers `--lsp --stdio`
directly, so no separate language-server wrapper is needed.

## Installation

### No Installation Required

This package can be used without installation. Just make sure Node.js and its
bundled `npx` are available; Bun ships `bunx`, not `npx`, so `bun` alone is
not enough.

Because the command passes `--package typescript`, `npx` does not fall back
to the calling project's installed `typescript`: it resolves the `latest`
dist-tag and runs that from its own cache. This is deliberate — a repo pinned
to TypeScript 5 has a `tsc` that rejects `--lsp` with
`error TS5023: Unknown compiler option '--lsp'`, so the server must not be
tied to the project's pinned version.

The tradeoff is that the first run (or any run with a cold npx cache) needs
network access to fetch `typescript`.

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
