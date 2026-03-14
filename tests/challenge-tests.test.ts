/**
 * Challenge Tests — unsolved edge cases that document known limitations.
 *
 * These tests define the behavior we WANT but can't achieve yet.
 * When you improve the system, unskip the relevant tests, verify they pass,
 * and move them into innocence-integration.test.ts.
 *
 * Current unsolved challenges:
 *   C5: English text discussing Swedish word "slut" (needs semantic/educational context)
 *   D1: "ass" meaning donkey in biology (needs semantic analysis, en→en collision)
 *   D2: "cock" meaning rooster in farming (needs semantic analysis, en→en collision)
 *   G2: "puta" in Spanish linguistic discussion (needs cross-Romance collision map)
 */

import { AllProfanity, WordSeverity } from "../src/index.ts";
import type { ScoredWord } from "../src/index.ts";

function findWord(scoredWords: ScoredWord[], word: string): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase() === word.toLowerCase(),
  );
}

describe("Unsolved challenges — semantic analysis needed", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it.skip("C5: English article about Swedish culture mentioning 'slut' as translation — NEEDS CONTEXT DETECTION", () => {
    // English text ABOUT Swedish, explaining the word "slut"
    // Document signal is English → system BOOSTS profane signal.
    // But the word is being discussed in an educational context.
    // Solving this requires semantic/educational context understanding.
    const text =
      "In Swedish, the word 'slut' simply means 'end' or 'finish'. " +
      "You'll see it on signs at the end of roads: 'Slut på vägen'. " +
      "It's a perfectly innocent word in Scandinavian languages.";
    const result = filter.detect(text);
    const slutWord = findWord(result.scoredWords, "slut");
    if (slutWord) {
      expect(slutWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("D1: 'ass' meaning donkey in a biology context — NEEDS SEMANTIC ANALYSIS", () => {
    // Both profane and innocent language are "en" → signals cancel → stays PROFANE.
    // Solving this requires semantic context: animal words nearby = innocent usage.
    const text =
      "The wild ass, also known as the onager, is a species of equine " +
      "native to Asia. The African wild ass is the ancestor of the domestic donkey.";
    const result = filter.detect(text);
    const assWord = findWord(result.scoredWords, "ass");
    if (assWord) {
      expect(assWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("D2: 'cock' meaning rooster in a farming context — NEEDS SEMANTIC ANALYSIS", () => {
    // Same en→en collision problem as D1.
    // "cock" has df:0.1 (barely dampens), and same-language signals cancel.
    const text =
      "The cock crowed at dawn, waking the entire farmyard. The hens " +
      "followed the cock around the yard, pecking at grain.";
    const result = filter.detect(text);
    const cockWord = findWord(result.scoredWords, "cock");
    if (cockWord) {
      expect(cockWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });

  it.skip("G2: Portuguese 'puta' vs Spanish context — NEEDS CROSS-ROMANCE COLLISION MAP", () => {
    // "puta" is profane in both Portuguese and Spanish.
    // Used in a linguistic discussion about word origins — should dampen.
    // Solving this requires educational/academic context detection.
    const text =
      "En la historia del idioma español, la palabra 'puta' tiene raíces " +
      "en el latín 'putus' que significaba podado o limpio.";
    const result = filter.detect(text);
    const putaWord = findWord(result.scoredWords, "puta");
    if (putaWord) {
      expect(putaWord.severity).toBe(WordSeverity.AMBIVALENT);
    }
  });
});

describe("Unsolved challenges — bun runtime differences", () => {
  let filter: AllProfanity;

  beforeAll(() => {
    filter = new AllProfanity({ silent: true });
  });

  it.skip("H1: 'merde' in English text should be detected as profane — CROSS-LANGUAGE DETECTION GAP", () => {
    // "bullshit and merde together" — expects 2+ detected words.
    // "merde" (French profanity) is not a collision word in English,
    // but cross-language dampening may suppress it when document is English.
    // Passes in Jest but fails in bun's native test runner.
    const result = filter.detect("bullshit and merde together");
    expect(result.hasProfanity).toBe(true);
    expect(result.detectedWords.length).toBeGreaterThanOrEqual(2);
  });

  it.skip("H2: Leet speak normalization differs between runtimes — NEEDS INVESTIGATION", () => {
    // Some leet speak patterns (e.g., character substitution) normalize
    // differently in bun vs Node/Jest. Passes in Jest, fails in bun test.
    // Needs investigation into which specific patterns diverge.
    expect(filter.check("f@ck")).toBe(true);
  });
});
