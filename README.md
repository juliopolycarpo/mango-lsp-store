# mango-lsp-store

LSP-only Claude Code plugin store for TypeScript, Biome, Vue, Svelte, and Astro.

This V1 intentionally contains no formatter hooks, shell scripts, or JavaScript wrapper scripts. Each plugin points directly at a language-server command through `.lsp.json`.

## Plugins

| Plugin          | Command                                              | Languages                                     |
| --------------- | ---------------------------------------------------- | --------------------------------------------- |
| `tsgo-lsp`      | `tsgo --lsp --stdio`                                 | TypeScript and JavaScript                     |
| `biome-lsp`     | `npx --yes --package @biomejs/biome biome lsp-proxy` | TypeScript and JavaScript diagnostics/actions |
| `biome-web-lsp` | `npx --yes --package @biomejs/biome biome lsp-proxy` | JSON, JSONC, CSS, HTML                        |
| `vue-lsp`       | `vue-language-server --stdio`                        | Vue single-file components                    |
| `svelte-lsp`    | `svelteserver --stdio`                               | Svelte components                             |
| `astro-lsp`     | `astro-ls --stdio`                                   | Astro components                              |

## Add The Store

```text
/plugin marketplace add juliopolycarpo/mango-lsp-store
```

Install only the LSP owners you want:

```text
/plugin install tsgo-lsp@mango-lsp
/plugin install biome-web-lsp@mango-lsp
/plugin install vue-lsp@mango-lsp
/plugin install svelte-lsp@mango-lsp
/plugin install astro-lsp@mango-lsp
```

## Runtime Requirements

Install the direct binaries somewhere on `PATH`:

```sh
npm install -g @typescript/native-preview
npm install -g @vue/language-server typescript
npm install -g svelte-language-server typescript
npm install -g @astrojs/language-server typescript
```

Biome is launched with `npx` so the store does not depend on a global `biome` binary. The command uses `@biomejs/biome` explicitly because the npm package named `biome` is not the current Biome CLI package.

## Conflict Policy

Claude Code should have one LSP owner per file extension. `tsgo-lsp` and `biome-lsp` both claim JavaScript and TypeScript files; install both only when you intentionally want Biome to compete for those files. The usual setup is `tsgo-lsp` for JS/TS code intelligence plus `biome-web-lsp` for JSON, CSS, and HTML.
