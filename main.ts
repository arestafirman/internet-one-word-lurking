// The Internet in One Word — entry: "lurking"
//
// Why this word: it accuses the reader directly. Whoever is reading this
// entry right now is lurking — watching, not posting — and that is true of
// the whole internet, not one app: most people watch, a few post. It is
// funny on its own, with no explanation needed, and it is not the first
// word that comes to mind (the field is full of "feral", "doomscroll" and
// "brainrot" — 0 entries in the field use "lurking"). One beat, seven
// bytes, no trailing newline: the tie-break counts bytes, so the file
// must contain exactly "lurking" and nothing else.
//
// Deterministic, offline, no dependencies, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "lurking";

// Gate: a single word, letters only, 1-30 characters.
if (!/^[A-Za-z]{1,30}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Write exactly the word — no trailing newline, so the file is 7 bytes.
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
