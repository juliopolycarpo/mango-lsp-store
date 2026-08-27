# biome-lsp

Biome language server for Claude Code JavaScript and TypeScript diagnostics and code actions.

## Installation

### Install `biome` globally

- With Homebrew (macOS and Linux):

```bash
brew install biome
```

- With Winget (Windows):

```bash
winget install biomejs.biome
```

- With pacman (Arch Linux):

```bash
pacman -S biome
```

- With bun:

```bash
bun install -g @biomejs/biome
```

- With npm:

```bash
npm install -g @biomejs/biome
```

### Or just add your `biome` binary to `PATH` if you installed it manually.

Biome publishes standalone executables for every supported platform on its
[releases page](https://github.com/biomejs/biome/releases); those need no
Node.js at all. The `@biomejs/biome` npm package instead installs a small
Node shim that dispatches to the platform's `@biomejs/cli-*` binary, so that
channel still needs Node on `PATH`.

## Command

```text
biome lsp-proxy
```

## Supported Extensions

`.js`, `.jsx`, `.mjs`, `.cjs`, `.ts`, `.tsx`, `.mts`, `.cts`

## Runtime Requirement

Install Biome so the `biome` binary is available on `PATH`.

## Notes

This plugin claims the same JavaScript and TypeScript extensions as `typescript-lsp` (and `tsgo-lsp`). Use `biome-web-lsp` with `typescript-lsp` when you want Biome only for JSON, CSS, and HTML.

The server is launched from `PATH`, not from the project's `node_modules`, so its version is the one you installed globally rather than the one a repo pins as a dev dependency.
