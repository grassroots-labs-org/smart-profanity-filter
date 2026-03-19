// benchmark/accuracy-benchmark.ts
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { BeKind, allLanguagesBadWords } from "../src/index.js";
// @ts-ignore CJS interop
import leoProfanity from "leo-profanity";
import { Filter as BadWordsFilter } from "bad-words";
import { ProfanityFilter as GlinFilter, collapseRepeatedCharacters } from "glin-profanity";

import {
  DATASET,
  DATASET_VERSION,
  Category,
  type AccuracyCase,
} from "./accuracy-dataset.js";

// ── Library instances ────────────────────────────────────────────────────────

const bekind = new BeKind({ silent: true });

const bekindSensitive = new BeKind({ silent: true, sensitiveMode: true });

const bekindContext = new BeKind({
  silent: true,
  contextAnalysis: { enabled: true },
  algorithm: { useContextAnalysis: true },
});

const leo = leoProfanity as { check: (t: string) => boolean; add: (words: string | string[]) => void };
leo.add(Object.keys(allLanguagesBadWords));

const badWords = new BadWordsFilter({ list: Object.keys(allLanguagesBadWords) });

const GLIN_ALL_LANGS = [
  'arabic','chinese','czech','danish','dutch','english','esperanto','finnish',
  'french','german','hindi','hungarian','italian','japanese','korean',
  'norwegian','persian','polish','portuguese','russian','spanish','turkish',
  'swedish','thai',
] as const;

const glinBasic = new GlinFilter({
  detectLeetspeak: false,
  enableContextAware: false,
  languages: [...GLIN_ALL_LANGS],
  customWords: Object.keys(allLanguagesBadWords),
});

const glinEnhanced = new GlinFilter({
  detectLeetspeak: true,
  enableContextAware: true,
  languages: [...GLIN_ALL_LANGS],
  customWords: Object.keys(allLanguagesBadWords),
});

// ── Library checker type ─────────────────────────────────────────────────────

interface LibraryChecker {
  name: string;
  check: (text: string) => boolean;
}

const LIBRARIES: LibraryChecker[] = [
  {
    name: "be-kind",
    check: (t) => bekind.check(t),
  },
  {
    name: "be-kind (sensitive)",
    check: (t) => bekindSensitive.check(t),
  },
  {
    name: "leo + dict",
    check: (t) => leo.check(t),
  },
  {
    name: "bad-words + dict",
    check: (t) => { try { return badWords.isProfane(t); } catch { return false; } },
  },
  {
    name: "glin (enhanced) + dict",
    check: (t) => glinEnhanced.isProfane(t),
  },
  {
    name: "be-kind (ctx)",
    check: (t) => bekindContext.check(t),
  },
  {
    name: "glin (collapsed) + dict",
    check: (t) => glinBasic.isProfane(collapseRepeatedCharacters(t)),
  },
];

// ── Types ────────────────────────────────────────────────────────────────────

interface CategoryResult {
  library: string;
  truePositives: number;
  falseNegatives: number;
  falsePositives: number;
  trueNegatives: number;
  tpRate: number | null;   // null = no profane cases
  fpRate: number | null;   // null = no clean cases
  precision: number | null;
  f1: number | null;
  casesScored: number;
}

interface CategorySummary {
  category: Category;
  totalCases: number;
  profaneCases: number;
  cleanCases: number;
  results: CategoryResult[];
}

interface LibrarySummary {
  library: string;
  overallF1: number | null;
  categoriesScored: number;
  avgFpRate: number | null;
}

// ── Scoring engine ───────────────────────────────────────────────────────────

function scoreCases(
  cases: AccuracyCase[],
  checker: (text: string) => boolean
): Omit<CategoryResult, "library" | "skipped"> {
  let tp = 0, fn = 0, fp = 0, tn = 0;

  for (const c of cases) {
    const predicted = checker(c.text);
    if (c.expected && predicted)  tp++;
    if (c.expected && !predicted) fn++;
    if (!c.expected && predicted) fp++;
    if (!c.expected && !predicted) tn++;
  }

  const profane = tp + fn;
  const clean   = fp + tn;
  const flagged = tp + fp;

  const tpRate    = profane > 0 ? tp / profane : null;
  const fpRate    = clean   > 0 ? fp / clean   : null;
  const precision = flagged > 0 ? tp / flagged  : null;
  const f1 = (tpRate !== null && precision !== null && (tpRate + precision) > 0)
    ? (2 * precision * tpRate) / (precision + tpRate)
    : null;

  return {
    truePositives: tp,
    falseNegatives: fn,
    falsePositives: fp,
    trueNegatives: tn,
    tpRate,
    fpRate,
    precision,
    f1,
    casesScored: cases.length,
  };
}

function runCategory(
  category: Category,
  allCases: AccuracyCase[],
  libraries: LibraryChecker[]
): CategorySummary {
  const cases = allCases.filter(c => c.category === category);
  const profaneCases = cases.filter(c => c.expected).length;
  const cleanCases   = cases.filter(c => !c.expected).length;

  const results: CategoryResult[] = libraries.map(lib => {
    const scored = scoreCases(cases, lib.check);
    return { library: lib.name, ...scored };
  });

  return { category, totalCases: cases.length, profaneCases, cleanCases, results };
}

// ── Output formatter ─────────────────────────────────────────────────────────

const pct = (v: number | null) => v === null ? "—" : `${Math.round(v * 100)}%`;
const f1fmt = (v: number | null) => v === null ? "—" : v.toFixed(2);

function printCategoryTable(summary: CategorySummary): void {
  const { category, totalCases, profaneCases, cleanCases, results } = summary;
  const header = `[ ${category} — ${totalCases} cases (${profaneCases} profane, ${cleanCases} clean) ]`;
  const col = 20;
  const label = 24;

  console.log(`\n${header}`);
  console.log("Library".padEnd(label) + "TP Rate".padStart(col) + "FP Rate".padStart(col) + "F1".padStart(col));
  console.log("-".repeat(label + col * 3));

  for (const r of results) {
    {
      console.log(
        r.library.padEnd(label) +
        pct(r.tpRate).padStart(col) +
        pct(r.fpRate).padStart(col) +
        f1fmt(r.f1).padStart(col)
      );
    }
  }
}

function buildSummary(categorySummaries: CategorySummary[], libs: LibraryChecker[]): LibrarySummary[] {
  return libs.map(lib => {
    const f1s: number[] = [];
    const fpRates: number[] = [];

    for (const cat of categorySummaries) {
      const r = cat.results.find(x => x.library === lib.name);
      if (!r) continue;
      if (r.f1 !== null) f1s.push(r.f1);
      if (r.fpRate !== null) fpRates.push(r.fpRate);
    }

    return {
      library: lib.name,
      overallF1: f1s.length > 0 ? f1s.reduce((a, b) => a + b, 0) / f1s.length : null,
      categoriesScored: f1s.length,
      avgFpRate: fpRates.length > 0 ? fpRates.reduce((a, b) => a + b, 0) / fpRates.length : null,
    };
  });
}

function printSummaryTable(summaries: LibrarySummary[]): void {
  const col = 20;
  const label = 24;
  console.log("\n[ Summary — macro-average F1 across F1-computable scored categories ]");
  console.log("Library".padEnd(label) + "Overall F1".padStart(col) + "FP Rate (avg)".padStart(col));
  console.log("-".repeat(label + col * 2));
  for (const s of summaries) {
    const f1str = s.overallF1 !== null
      ? `${s.overallF1.toFixed(2)}  (${s.categoriesScored} cat)`
      : "—";
    const fpStr = s.avgFpRate !== null ? pct(s.avgFpRate) : "—";
    console.log(s.library.padEnd(label) + f1str.padStart(col) + fpStr.padStart(col));
  }
  console.log("\n* be-kind (ctx) = be-kind with contextAnalysis enabled (Semantic category only)");
}

// ── Main ─────────────────────────────────────────────────────────────────────

const timestamp = new Date().toISOString();
console.log("\n=== Accuracy Benchmark ===");
console.log(`Timestamp: ${timestamp}`);
console.log(`Dataset version: ${DATASET_VERSION}  |  Total cases: ${DATASET.length}`);

const CATEGORIES = [
  Category.SINGLE_LANG,
  Category.MULTI_LANG,
  Category.FALSE_POSITIVE,
  Category.ROMANIZATION,
  Category.SEMANTIC,
  Category.REPEATED_CHARS,
  Category.CONCATENATED,
  Category.CHALLENGE,
];

const categorySummaries: CategorySummary[] = CATEGORIES.map(cat =>
  runCategory(cat, DATASET, LIBRARIES)
);

for (const summary of categorySummaries) {
  printCategoryTable(summary);
}

const libSummaries = buildSummary(categorySummaries, LIBRARIES);
printSummaryTable(libSummaries);

// ── JSON output ───────────────────────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const jsonOut = {
  timestamp,
  datasetVersion: DATASET_VERSION,
  totalCases: DATASET.length,
  categories: categorySummaries.map(cat => ({
    category: cat.category,
    totalCases: cat.totalCases,
    profaneCases: cat.profaneCases,
    cleanCases: cat.cleanCases,
    results: cat.results.map(r => ({
      library: r.library,
      tpRate: r.tpRate,
      fpRate: r.fpRate,
      precision: r.precision,
      f1: r.f1,
      truePositives: r.truePositives,
      falseNegatives: r.falseNegatives,
      falsePositives: r.falsePositives,
      trueNegatives: r.trueNegatives,
      casesScored: r.casesScored,
    })),
  })),
  summary: libSummaries,
};

await fs.writeFile(
  join(__dirname, "accuracy-results.json"),
  JSON.stringify(jsonOut, null, 2)
);

console.log("\nResults saved → benchmark/accuracy-results.json\n");
