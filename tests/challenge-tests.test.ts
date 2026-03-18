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
 *   E1: Profanity embedded inside a single word with no spaces ("urASSHOLEbro")
 *       — default mode misses these because detectPartialWords is false.
 *       Solving this requires high-coverage embedded detection: when the profane
 *       substring covers a large fraction of the host word, flag it even in
 *       default mode (e.g., profane_len / host_len > 0.5 threshold).
 */

import { BeKind, WordSeverity } from "../src/index.ts";
import type { ScoredWord } from "../src/index.ts";

function findWord(scoredWords: ScoredWord[], word: string): ScoredWord | undefined {
  return scoredWords.find(
    (sw) => sw.word.toLowerCase() === word.toLowerCase(),
  );
}

describe("Unsolved challenges — semantic analysis needed", () => {
  let filter: BeKind;

  beforeAll(() => {
    filter = new BeKind({ silent: true });
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

  it.skip("E1: profanity buried inside a single concatenated word — NEEDS SAME-LANG EMBED SIGNAL", () => {
    // Both guards must pass: match ≥5 chars AND coverage ≥55%.
    expect(filter.check("urASSHOLEbro")).toBe(true);   // "asshole" 7 chars, 7/12 = 58% ✓
    expect(filter.check("ufucker")).toBe(true);          // "fucker"  6 chars, 6/7  = 86% ✓
    // Short profane words (<5 chars) are never flagged when embedded,
    // even at high coverage, because they appear in too many innocent words.
    expect(filter.check("canal")).toBe(false);           // "anal"    4 chars, 4/5  = 80% — too short
    expect(filter.check("shitman")).toBe(false);         // "shit"    4 chars, 4/7  = 57% — too short
    // Low coverage (<55%) is also safe regardless of match length.
    expect(filter.check("assassin")).toBe(false);        // "ass"     3 chars, 3/8  = 37%
    expect(filter.check("classical")).toBe(false);       // "ass"     3 chars, 3/9  = 33%
    expect(filter.check("thisisshitman")).toBe(false);   // "shit"    4 chars, 4/13 = 30%
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
