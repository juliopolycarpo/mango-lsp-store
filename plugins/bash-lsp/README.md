# bash-lsp

Bash language server for shell scripts.

## Installation

### Install `bash-language-server` globally

- With npm:

```bash
npm install -g bash-language-server
```

- With bun (Recommended):

```bash
bun install -g bash-language-server
```

### Or just add your `bash-language-server` binary to `PATH` if you have it installed locally.

## Command

```text
bash-language-server start
```

## Supported Extensions

`.sh`, `.bash`, `.inc`, `.command`

## Runtime Requirement

Install `bash-language-server` so the `bash-language-server` binary is available on `PATH`.

For the best diagnostics, also install [shellcheck](https://github.com/koalaman/shellcheck) on `PATH`; the server uses it when available.
