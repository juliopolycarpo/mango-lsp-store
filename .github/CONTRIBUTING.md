# Contributing

Thanks for helping improve `mango-lsp-store`.

## Development Setup

Install dependencies with Bun:

```sh
bun install
```

Run the full project check before opening a pull request:

```sh
bun run check
```

Apply formatting and safe lint fixes with:

```sh
bun run fmt
```

## Repository Expectations

- Keep plugins LSP-only. Do not add formatter hooks, shell scripts, or JavaScript wrapper scripts to plugin packages.
- Prefer direct language-server commands in `.lsp.json`.
- Update the relevant plugin `README.md` when commands, languages, or runtime requirements change.
- Avoid introducing overlapping file ownership unless the conflict is intentional and documented.

## Pull Requests

Use the pull request template and include a short explanation of the behavior change. Maintainers may ask for additional checks when a change affects plugin installation, marketplace metadata, or language-server startup commands.
