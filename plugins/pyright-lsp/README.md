# pyright-lsp

Python language server for Claude Code Python code intelligence via the Pyright language server.

## Installation

### Install `pyright` globally

- With npm:

```bash
npm install -g pyright
```

- With bun:

```bash
bun install -g pyright
```

### Or just add your `pyright-langserver` binary to `PATH` if you have it installed locally.

## Command

```text
pyright-langserver --stdio
```

## Supported Extensions

`.py`, `.pyi`, `.pyw`

## Runtime Requirement

Install Pyright so `pyright-langserver` is available on `PATH`. Pyright is distributed as an npm package and runs on Node.js, so Node must also be on `PATH`.

## Notes

The server is launched from `PATH`, not from the project's `node_modules`, so it uses the version you installed globally rather than any `pyright` a repo pins as a dev dependency. It still honors the project's Pyright configuration (`pyrightconfig.json`, or a `[tool.pyright]` section in `pyproject.toml`).

[basedpyright](https://github.com/detachhead/basedpyright) is a drop-in, PyPI-first fork that also ships a `pyright-langserver` binary; install `basedpyright` instead and this plugin configuration works unchanged.
