// News-image entry for 21 November 2026 (Node 22, standard library only).
// The day's news poster lives in entry.png beside this file; the program
// copies it to the output directory so the grader sees exactly those bytes.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
