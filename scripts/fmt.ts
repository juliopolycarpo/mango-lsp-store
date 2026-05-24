#!/usr/bin/env bun
// Apply fixes, then format.
// 1. biome lint --write  -> safe lint autofixes (biome's formatter is disabled)
// 2. dprint fmt          -> the formatter of record
import { run } from "./run.ts";

await run(
  [
    { name: "biome", cmd: ["bunx", "biome", "lint", "--write", "."] },
    { name: "dprint", cmd: ["bunx", "dprint", "fmt"] },
  ],
  "serial",
);
