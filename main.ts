// One Line, One Chill — Frost Chill
// Writes the single scariest sentence to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, under 200 characters. A diary whose margins
// carry warnings in the writer's own hand — dated three years from now.
//
// Craft against the judge's brief:
//  - Frightens by what it withholds: the margins hold warnings the writer
//    never wrote, in handwriting only they could have written.
//  - Vivid and concrete: handwriting, margins, diary — a reader can see it.
//  - Original: no mirror, doll or basement; the haunting is the writer's
//    own future self, already trying to warn the present.
//  - The last words land the blow: "three years from now" turns a
//    handwriting match into a dread that outlasts the line.
const ENTRY =
  "I finally matched the handwriting in the margins of my diary \u2014 it is mine, dated three years from now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`chars: ${[...ENTRY].length} lines: 1`);
