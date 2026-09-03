# mango-lsp-store

LSP-only Claude Code plugin store for TypeScript, Biome, YAML, Vue, Svelte,
Astro, Markdown, Bash, and Python.

This V1 intentionally contains no formatter hooks, shell scripts, or JavaScript wrapper scripts. Each plugin points directly at a language-server command through `.lsp.json`.

## Plugins

| Plugin           | Command                                                      | Languages                                          |
| ---------------- | ------------------------------------------------------------ | -------------------------------------------------- |
| `typescript-lsp` | `tsc --lsp --stdio`                                          | TypeScript and JavaScript                          |
| `tsgo-lsp`       | `tsgo --lsp --stdio` (compatibility, pre-7.0 preview builds) | TypeScript and JavaScript                          |
| `biome-lsp`      | `biome lsp-proxy`                                            | TypeScript and JavaScript diagnostics/actions      |
| `biome-web-lsp`  | `biome lsp-proxy`                                            | JSON, JSONC, CSS, HTML                             |
| `yaml-lsp`       | `yaml-language-server --stdio`                               | YAML documents (`.yaml`, `.yml`, `.cff`)           |
| `vue-lsp`        | `vue-language-server --stdio`                                | Vue single-file components                         |
| `svelte-lsp`     | `svelteserver --stdio`                                       | Svelte components                                  |
| `astro-lsp`      | `astro-ls --stdio`                                           | Astro components                                   |
| `marksman-lsp`   | `marksman server`                                            | Markdown documents                                 |
| `bash-lsp`       | `bash-language-server start`                                 | Shell scripts (`.sh`, `.bash`, `.inc`, `.command`) |
| `pyright-lsp`    | `pyright-langserver --stdio`                                 | Python (`.py`, `.pyi`, `.pyw`)                     |

## Add The Store

```text
/plugin marketplace add juliopolycarpo/mango-lsp-store
```

Install only the LSP owners you want:

```text
/plugin install typescript-lsp@mango-lsp
/plugin install biome-web-lsp@mango-lsp
/plugin install yaml-lsp@mango-lsp
/plugin install vue-lsp@mango-lsp
/plugin install svelte-lsp@mango-lsp
/plugin install astro-lsp@mango-lsp
/plugin install marksman-lsp@mango-lsp
/plugin install bash-lsp@mango-lsp
/plugin install pyright-lsp@mango-lsp
```

## Runtime Requirements

Install the direct binaries somewhere on `PATH`:

```sh
npm install -g typescript@7
npm install -g @typescript/native-preview # tsgo-lsp only, compatibility
npm install -g yaml-language-server
npm install -g @vue/language-server typescript@5
npm install -g svelte-language-server typescript@5
npm install -g @astrojs/language-server typescript@5
npm install -g bash-language-server
npm install -g pyright
brew install marksman
brew install biome
```

`typescript-lsp` runs the `tsc` on `PATH`, so it needs the global `typescript@7` install above. The major is pinned rather than floating on `latest` so a future TypeScript 8 cannot change or drop `--lsp` under every user at once. Because the server is launched from `PATH` and not from the project's `node_modules`, a repo pinned to TypeScript 5 or 6 — whose `tsc` rejects `--lsp` — still gets a working language server.

`biome-lsp` and `biome-web-lsp` run the `biome` on `PATH`, so any install channel works: Homebrew, Winget, `pacman -S biome`, a standalone release binary, or a global `@biomejs/biome` from npm or bun. Only the last of those needs Node.js — the npm package ships a Node shim that dispatches to the platform's `@biomejs/cli-*` binary, while the standalone executables run on their own.

Because the server is launched from `PATH` and not from the project's `node_modules`, its version is your global install rather than the Biome a repo pins as a dev dependency; the two can report different diagnostics if they drift apart.

`pyright-lsp` runs the `pyright-langserver` on `PATH`, so it needs the global
`pyright` install above. Pyright is a Node.js server, so Node must also be on
`PATH`; it still honors the project's `pyrightconfig.json` or
`[tool.pyright]` in `pyproject.toml`. [basedpyright](https://github.com/detachhead/basedpyright)
is a drop-in fork that also ships a `pyright-langserver` binary, so installing
`basedpyright` instead works unchanged.

Marksman can also be installed with Nix, Snap, or a prebuilt release binary; just make sure
`marksman` is available on `PATH`.

`bash-language-server` provides richer diagnostics when [shellcheck](https://github.com/koalaman/shellcheck)
is also installed on `PATH`; it is optional but recommended.

## Conflict Policy

Claude Code should have one LSP owner per file extension. `typescript-lsp`, `tsgo-lsp`, and `biome-lsp` all claim JavaScript and TypeScript files; install only one at a time unless you intentionally want them to compete. The usual setup is `typescript-lsp` for JS/TS code intelligence plus `biome-web-lsp` for JSON, CSS, and HTML. `tsgo-lsp` remains for users still pinned to a pre-7.0 `tsgo` preview build.
