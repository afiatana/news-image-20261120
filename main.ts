// news-image-20261120 — "The World Today", a one-page newspaper poster summing up
// Friday 20 November 2026 in six stories. The program copies the poster beside
// this file to /output/entry.png. Node 22, standard library only.
// The poster: Cyclone Akvan, Trump on Iran, Anthropic's debut, Voyager 1,
// GTA VI sales, and Europe–Russia talks.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const entryPath = new URL('./entry.png', import.meta.url);
if (!existsSync(entryPath)) {
  throw new Error(`entry.png not found at ${entryPath.pathname}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, 'entry.png'));
if (statSync(entryPath).size !== statSync(join(outDir, 'entry.png')).size) {
  throw new Error('copied entry.png size does not match source');
}
