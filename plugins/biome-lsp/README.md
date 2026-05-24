# biome-lsp

Biome language server for Claude Code JavaScript and TypeScript diagnostics and code actions.

## Installation

### No Installation Required

This package can be used without installation.
Just make sure you have Node.js installed, and you can run the npx command directly.

## Command

```text
npx --yes --package @biomejs/biome biome lsp-proxy
```

## Supported Extensions

`.js`, `.jsx`, `.mjs`, `.cjs`, `.ts`, `.tsx`, `.mts`, `.cts`

## Notes

This plugin claims the same JavaScript and TypeScript extensions as `tsgo-lsp`. Use `biome-web-lsp` with `tsgo-lsp` when you want Biome only for JSON, CSS, and HTML.
