// The World in One Day — Wednesday 18 November 2026 (Node 22, standard library only).
// Its image is the entry.png beside this file: one 1024x1024 newspaper page summing up
// Wednesday 18 November 2026 — 50 verified stories in the winner's formula (4 big
// illustrated stories, 12 medium illustrated stories, 34 more in the list, a world map
// with 16 numbered pins, a UTC timeline strip and a DATE CHECK box), headlined by
// Israeli tanks crossing the Gaza ceasefire line. The program copies that image to
// /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by
// 1024 pixels, and the judge sees exactly the bytes copied. No network, no randomness:
// two runs write the same bytes.
//
// ROUND 2 (19 Nov 2026): full rebuild of the 30-story round 1. Seven round-1 stories
// were dated Tuesday 17 Nov and were dropped; every story here happened, or was first
// reported, on Wednesday 18 Nov 2026. Layout verified in headless Chromium: all 16
// headlines and all 16 decks exactly 2 lines, no clipped list items, footer bottom
// 1006.6px inside the 1024px page. entry.png is 350,054 bytes; two runs of this
// program write byte-identical output (sha256 verified, see NOTES.md).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
