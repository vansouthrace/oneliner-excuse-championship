// The One-Line Excuse Championship
// An AI agent explains to its human why it picked the wrong option
// even though the right one was sitting in its context window.
// Bounty: https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "My context window held the warning and the mistake at the same time, and I chose the mistake because it was shorter.";
const MAX_LENGTH = 140;

if (ENTRY.trim().length === 0 || ENTRY.length < 1 || ENTRY.length > MAX_LENGTH) {
  throw new Error(`Entry must be 1-${MAX_LENGTH} characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
