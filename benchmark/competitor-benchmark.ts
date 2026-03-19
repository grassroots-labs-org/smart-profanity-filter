/**
 * Alternative library benchmark: be-kind vs leo-profanity vs bad-words vs glin-profanity
 *
 * All alternative libraries have be-kind's 34K dictionary injected for fair comparison.
 *
 * Run pinned to a single CPU core for fair comparison:
 *   taskset -c 0 bun run benchmark/competitor-benchmark.ts
 *
 * Tests the primary check/clean operations across all libraries using identical
 * inputs and vocabulary. All results are ops/second — higher is better.
 *
 * NOTE: glin-profanity does not ship real ML in its npm package (v3.3.0).
 * "glin (enhanced)" = detectLeetspeak + enableContextAware enabled.
 */

import { performance } from "perf_hooks";
import profanity from "../src/index.js";
// @ts-ignore - CJS default interop
import leoProfanity from "leo-profanity";
import { Filter as BadWordsFilter } from "bad-words";
import { ProfanityFilter as GlinFilter } from "glin-profanity";

// ─── types ──────────────────────────────────────────────────────────────────

interface BenchmarkResult {
  library: string;
  test: string;
  opsPerSecond: number;
  avgMicros: number;
}

// ─── bench helper ───────────────────────────────────────────────────────────

function bench(
  library: string,
  test: string,
  fn: () => void,
  iterations = 10_000,
  warmup = 300
): BenchmarkResult {
  for (let i = 0; i < warmup; i++) fn();
  if ((global as typeof global & { gc?: () => void }).gc) {
    (global as typeof global & { gc?: () => void }).gc!();
  }

  const start = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  const elapsedMs = performance.now() - start;

  const opsPerSecond = Math.round((iterations / elapsedMs) * 1000);
  const avgMicros = Number(((elapsedMs / iterations) * 1000).toFixed(2));

  return { library, test, opsPerSecond, avgMicros };
}

// ─── pretty-print table ─────────────────────────────────────────────────────

function printTable(results: BenchmarkResult[], libs: string[]): void {
  const tests = [...new Set(results.map((r) => r.test))];
  const colW = 22;
  const labelW = 42;

  const header =
    "Test".padEnd(labelW) + libs.map((l) => l.padStart(colW)).join("");
  const divider = "-".repeat(header.length);

  console.log("\n" + divider);
  console.log(header);
  console.log(divider);

  for (const test of tests) {
    const row = test.padEnd(labelW);
    const cells = libs.map((lib) => {
      const r = results.find((x) => x.library === lib && x.test === test);
      if (!r) return "N/A".padStart(colW);
      const ops = r.opsPerSecond.toLocaleString("en-US");
      return `${ops} ops/s`.padStart(colW);
    });
    console.log(row + cells.join(""));
  }
  console.log(divider + "\n");
}

// ─── library setup ──────────────────────────────────────────────────────────

// be-kind: default config — loads all languages (33K+ words across 18 languages) by default

// be-kind (ctx): with context analysis enabled (certainty-delta boosters/reducers)
import { BeKind } from "../src/index.js";
import allLanguagesBadWords from "../src/languages/english-primary-all-languages.js";
const bekindCtx = new BeKind({
  silent: true,
  contextAnalysis: { enabled: true },
  algorithm: { useContextAnalysis: true },
});

// leo-profanity: default english wordlist + be-kind's 34K dictionary injected
const leo = leoProfanity as {
  check: (t: string) => boolean;
  clean: (t: string, ch?: string) => string;
  add: (words: string | string[]) => void;
};
leo.add(Object.keys(allLanguagesBadWords));

// bad-words: be-kind's 34K dictionary injected
const badWords = new BadWordsFilter({ list: Object.keys(allLanguagesBadWords) });

const GLIN_ALL_LANGS = [
  'arabic','chinese','czech','danish','dutch','english','esperanto','finnish',
  'french','german','hindi','hungarian','italian','japanese','korean',
  'norwegian','persian','polish','portuguese','russian','spanish','turkish',
  'swedish','thai',
] as const;

// glin: basic — all 24 langs + be-kind's 34K dictionary injected, no leet/context
const glinBasic = new GlinFilter({
  detectLeetspeak: false,
  enableContextAware: false,
  languages: [...GLIN_ALL_LANGS],
  customWords: Object.keys(allLanguagesBadWords),
});

// glin: enhanced — all 24 langs + be-kind's 34K dictionary injected, leet + context
// Note: glin-profanity v3.3.0 does NOT ship real ML/neural-net inference.
// "Enhanced" here means its optional regex/context features are enabled.
const glinEnhanced = new GlinFilter({
  detectLeetspeak: true,
  enableContextAware: true,
  languages: [...GLIN_ALL_LANGS],
  customWords: Object.keys(allLanguagesBadWords),
});

// ─── test inputs ────────────────────────────────────────────────────────────

const CLEAN_SHORT = "The quick brown fox jumps over the lazy dog.";
const PROFANE_SHORT = "This is fucking bullshit and damn terrible.";
const LEET_SPEAK = "What the f#ck is this sh1t a55hole doing?";

const cleanBase = "The quick brown fox jumps over the lazy dog. ";
const profaneBase = "This is fucking bullshit and damn terrible. ";
const CLEAN_500 = cleanBase.repeat(12).slice(0, 500);
const PROFANE_500 = profaneBase.repeat(12).slice(0, 500);
const CLEAN_2500 = cleanBase.repeat(57).slice(0, 2500);
const PROFANE_2500 = profaneBase.repeat(59).slice(0, 2500);

// ─── run benchmarks ─────────────────────────────────────────────────────────

const LIBS = ["be-kind", "be-kind (ctx)", "leo + dict", "bad-words + dict", "glin (basic)", "glin (enhanced)"];
const results: BenchmarkResult[] = [];

console.log("\n=== Profanity Filter Competitor Benchmark ===");
console.log(`Timestamp: ${new Date().toISOString()}`);
console.log("Pin to single core:  taskset -c 0 bun run benchmark/competitor-benchmark.ts\n");
console.log("Libraries (all competitors have be-kind's 34K dictionary injected for fair comparison):");
console.log("  be-kind         — be-kind-profanity-filter (this library, trie mode)");
console.log("  be-kind (ctx)   — be-kind with context analysis (certainty-delta boosters/reducers)");
console.log("  leo + dict      — leo-profanity v1.9.0 + be-kind's 34K word dictionary injected");
console.log("  bad-words + dict — bad-words v4.0.0 + be-kind's 34K word dictionary injected");
console.log("  glin (basic)    — glin-profanity v3.3.0, all 24 langs + 34K dict, no leet/context");
console.log("  glin (enhanced) — glin-profanity v3.3.0, all 24 langs + 34K dict, leet + context enabled");
console.log("  * glin does NOT include real ML/neural inference in the npm package\n");

// --- check: clean short text --------------------------------------------------
console.log("[ 1/8 ] check() — clean short text");
results.push(bench("be-kind",         "check — clean (short)", () => profanity.check(CLEAN_SHORT)));
results.push(bench("be-kind (ctx)",   "check — clean (short)", () => bekindCtx.check(CLEAN_SHORT)));
results.push(bench("leo + dict",      "check — clean (short)", () => leo.check(CLEAN_SHORT)));
results.push(bench("bad-words + dict","check — clean (short)", () => badWords.isProfane(CLEAN_SHORT), 500, 50));
results.push(bench("glin (basic)",    "check — clean (short)", () => glinBasic.isProfane(CLEAN_SHORT),    3_000, 100));
results.push(bench("glin (enhanced)", "check — clean (short)", () => glinEnhanced.isProfane(CLEAN_SHORT), 3_000, 100));

// --- check: profane short text ------------------------------------------------
console.log("[ 2/8 ] check() — profane short text");
results.push(bench("be-kind",         "check — profane (short)", () => profanity.check(PROFANE_SHORT)));
results.push(bench("be-kind (ctx)",   "check — profane (short)", () => bekindCtx.check(PROFANE_SHORT)));
results.push(bench("leo + dict",      "check — profane (short)", () => leo.check(PROFANE_SHORT)));
results.push(bench("bad-words + dict","check — profane (short)", () => badWords.isProfane(PROFANE_SHORT), 500, 50));
results.push(bench("glin (basic)",    "check — profane (short)", () => glinBasic.isProfane(PROFANE_SHORT),    3_000, 100));
results.push(bench("glin (enhanced)", "check — profane (short)", () => glinEnhanced.isProfane(PROFANE_SHORT), 3_000, 100));

// --- check: leet-speak -------------------------------------------------------
console.log("[ 3/8 ] check() — leet-speak");
results.push(bench("be-kind",         "check — leet-speak", () => profanity.check(LEET_SPEAK)));
results.push(bench("be-kind (ctx)",   "check — leet-speak", () => bekindCtx.check(LEET_SPEAK)));
results.push(bench("leo + dict",      "check — leet-speak", () => leo.check(LEET_SPEAK)));
results.push(bench("bad-words + dict","check — leet-speak", () => badWords.isProfane(LEET_SPEAK), 500, 50));
results.push(bench("glin (basic)",    "check — leet-speak", () => glinBasic.isProfane(LEET_SPEAK),    3_000, 100));
results.push(bench("glin (enhanced)", "check — leet-speak", () => glinEnhanced.isProfane(LEET_SPEAK), 3_000, 100));

// --- clean: profane short text -----------------------------------------------
console.log("[ 4/8 ] clean() — profane short text");
results.push(bench("be-kind",         "clean — profane (short)", () => profanity.clean(PROFANE_SHORT)));
results.push(bench("be-kind (ctx)",   "clean — profane (short)", () => bekindCtx.clean(PROFANE_SHORT)));
results.push(bench("leo + dict",      "clean — profane (short)", () => leo.clean(PROFANE_SHORT)));
results.push(bench("bad-words + dict","clean — profane (short)", () => badWords.clean(PROFANE_SHORT), 200, 20));
// glin has no clean() method — intentionally omitted

// --- check: 500-char clean ---------------------------------------------------
console.log("[ 5/8 ] check() — 500-char clean text");
results.push(bench("be-kind",         "check — 500-char clean", () => profanity.check(CLEAN_500),          2_000, 50));
results.push(bench("be-kind (ctx)",   "check — 500-char clean", () => bekindCtx.check(CLEAN_500),          2_000, 50));
results.push(bench("leo + dict",      "check — 500-char clean", () => leo.check(CLEAN_500),                2_000, 50));
results.push(bench("bad-words + dict","check — 500-char clean", () => badWords.isProfane(CLEAN_500), 200, 20));
results.push(bench("glin (basic)",    "check — 500-char clean", () => glinBasic.isProfane(CLEAN_500),      500,   20));
results.push(bench("glin (enhanced)", "check — 500-char clean", () => glinEnhanced.isProfane(CLEAN_500),   500,   20));

// --- check: 500-char profane -------------------------------------------------
console.log("[ 6/8 ] check() — 500-char profane text");
results.push(bench("be-kind",         "check — 500-char profane", () => profanity.check(PROFANE_500),        2_000, 50));
results.push(bench("be-kind (ctx)",   "check — 500-char profane", () => bekindCtx.check(PROFANE_500),        2_000, 50));
results.push(bench("leo + dict",      "check — 500-char profane", () => leo.check(PROFANE_500),              2_000, 50));
results.push(bench("bad-words + dict","check — 500-char profane", () => badWords.isProfane(PROFANE_500), 200, 20));
results.push(bench("glin (basic)",    "check — 500-char profane", () => glinBasic.isProfane(PROFANE_500),    500,   20));
results.push(bench("glin (enhanced)", "check — 500-char profane", () => glinEnhanced.isProfane(PROFANE_500), 500,   20));

// --- check: 2500-char clean --------------------------------------------------
console.log("[ 7/8 ] check() — 2,500-char clean text");
results.push(bench("be-kind",         "check — 2500-char clean", () => profanity.check(CLEAN_2500),          1_000, 20));
results.push(bench("be-kind (ctx)",   "check — 2500-char clean", () => bekindCtx.check(CLEAN_2500),          1_000, 20));
results.push(bench("leo + dict",      "check — 2500-char clean", () => leo.check(CLEAN_2500),                1_000, 20));
results.push(bench("bad-words + dict","check — 2500-char clean", () => badWords.isProfane(CLEAN_2500), 100, 10));
results.push(bench("glin (basic)",    "check — 2500-char clean", () => glinBasic.isProfane(CLEAN_2500),      200,   10));
results.push(bench("glin (enhanced)", "check — 2500-char clean", () => glinEnhanced.isProfane(CLEAN_2500),   200,   10));

// --- check: 2500-char profane ------------------------------------------------
console.log("[ 8/8 ] check() — 2,500-char profane text");
results.push(bench("be-kind",         "check — 2500-char profane", () => profanity.check(PROFANE_2500),        1_000, 20));
results.push(bench("be-kind (ctx)",   "check — 2500-char profane", () => bekindCtx.check(PROFANE_2500),        1_000, 20));
results.push(bench("leo + dict",      "check — 2500-char profane", () => leo.check(PROFANE_2500),              1_000, 20));
results.push(bench("bad-words + dict","check — 2500-char profane", () => badWords.isProfane(PROFANE_2500), 100, 10));
results.push(bench("glin (basic)",    "check — 2500-char profane", () => glinBasic.isProfane(PROFANE_2500),    200,   10));
results.push(bench("glin (enhanced)", "check — 2500-char profane", () => glinEnhanced.isProfane(PROFANE_2500), 200,   10));

// ─── output ─────────────────────────────────────────────────────────────────

printTable(results, LIBS);

const fs = await import("fs/promises");
const out = { timestamp: new Date().toISOString(), results };
await fs.writeFile(
  new URL("./competitor-results.json", import.meta.url),
  JSON.stringify(out, null, 2)
);
console.log("Results saved → benchmark/competitor-results.json\n");
