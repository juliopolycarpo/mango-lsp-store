#!/usr/bin/env bun
// Verify without writing. All three run in parallel:
//   dprint check -> formatting is correct
//   biome lint   -> no lint violations
//   tsgo         -> no type errors (tsconfig has noEmit)
import { run } from "./run.ts";

await run(
  [
    { name: "dprint", cmd: ["bunx", "dprint", "check"] },
    { name: "biome", cmd: ["bunx", "biome", "lint", "."] },
    { name: "tsgo", cmd: ["bunx", "tsgo", "--noEmit"] },
  ],
  "parallel",
);
