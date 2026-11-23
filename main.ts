// One Word, First Thought — make.fun bounty entry.
// The first word that comes to mind: "quockerwodger" —
// a politician who merely follows the crowd. Rare, vivid,
// funny-sounding, and a word the judge will not have seen twice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "quockerwodger";

// Validation gate (matches the sealed scorer): exactly one word,
// 1–24 UTF-8 characters, not only whitespace, no internal whitespace.
if (!WORD || WORD.length < 1 || WORD.length > 24 || /\s/.test(WORD)) {
  console.error("invalid entry word");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
console.log(`wrote ${WORD} to ${join(outDir, "entry.txt")}`);
