import { spawn } from "bun";

export type Task = {
  name: string;
  cmd: string[];
};

const COLORS = ["\x1b[36m", "\x1b[35m", "\x1b[33m", "\x1b[32m", "\x1b[34m"];
const RESET = "\x1b[0m";
const BOLD = "\x1b[1m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";

function colorFor(index: number): string {
  return COLORS[index % COLORS.length] ?? RESET;
}

async function stream(label: string, color: string, readable: ReadableStream<Uint8Array>) {
  const decoder = new TextDecoder();
  let buffer = "";
  for await (const chunk of readable) {
    buffer += decoder.decode(chunk, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      console.log(`${color}${label}${RESET} ${line}`);
    }
  }
  if (buffer.length > 0) {
    console.log(`${color}${label}${RESET} ${buffer}`);
  }
}

async function runOne(task: Task, color: string): Promise<number> {
  const proc = spawn(task.cmd, { stdout: "pipe", stderr: "pipe" });
  await Promise.all([
    stream(task.name, color, proc.stdout),
    stream(task.name, color, proc.stderr),
  ]);
  return await proc.exited;
}

export async function run(tasks: Task[], mode: "parallel" | "serial"): Promise<never> {
  let results: { name: string; code: number; }[];

  if (mode === "parallel") {
    const codes = await Promise.all(tasks.map((task, i) => runOne(task, colorFor(i))));
    results = tasks.map((task, i) => ({ name: task.name, code: codes[i] ?? 0 }));
  } else {
    results = [];
    for (const [i, task] of tasks.entries()) {
      const code = await runOne(task, colorFor(i));
      results.push({ name: task.name, code });
    }
  }

  console.log("");
  for (const result of results) {
    const ok = result.code === 0;
    const mark = ok ? `${GREEN}✓` : `${RED}✗`;
    console.log(`  ${mark} ${BOLD}${result.name}${RESET}`);
  }
  console.log("");

  const failed = results.filter((result) => result.code !== 0);
  if (failed.length > 0) {
    console.log(`${RED}${BOLD}${failed.length} task(s) failed${RESET}`);
    process.exit(1);
  }
  console.log(`${GREEN}${BOLD}all good${RESET}`);
  process.exit(0);
}
