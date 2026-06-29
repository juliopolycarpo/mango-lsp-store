# yaml-lsp

YAML language server for YAML documents and schema-aware editing.

## Installation

### Install `yaml-language-server` globally

- With npm:

```bash
npm install -g yaml-language-server
```

- With bun (Recommended):

```bash
bun install -g yaml-language-server
```

### Or just add your `yaml-language-server` binary to `PATH` if you installed it manually.

## Command

```text
yaml-language-server --stdio
```

## Supported Extensions

`.yaml`, `.yml`, `.cff`

## Runtime Requirement

Install `yaml-language-server` so the `yaml-language-server` binary is available on `PATH`.

The plugin invokes the binary directly and does not use `npx`, `bunx`, or wrapper scripts at
runtime.

YAML schema associations, validation, completion, hover, and formatting come from the upstream
language server and can be configured through normal YAML language server settings.
