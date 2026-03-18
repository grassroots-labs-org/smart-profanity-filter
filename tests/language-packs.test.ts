/**
 * Per-language-pack detection tests
 *
 * Verifies that each individual language dictionary detects genuine profanity
 * from that language, and that common clean words from each language are not
 * flagged. All languages are loaded by default via the consolidated word list.
 */

import { BeKind } from "../src/index.ts";

const filter = new BeKind({ silent: true });

// ─── Clean words by language (should never be flagged) ─────────────────────
const CLEAN = {
  english: ["hello", "world", "sunshine", "keyboard", "music", "friend"],
  french: ["bonjour", "merci", "maison", "soleil", "jardin", "livre"],
  german: ["hallo", "danke", "schön", "Haus", "Garten", "Musik"],
  spanish: ["hola", "gracias", "casa", "música", "jardín", "amigo"],
  hindi: ["namaste", "dhanyavaad", "paani", "khana", "ghar", "dost"],
  arabic: ["مرحبا", "شكرا", "بيت", "ماء", "طعام", "صديق"],
  japanese: ["こんにちは", "ありがとう", "家", "水", "音楽", "友達"],
  korean: ["안녕하세요", "감사합니다", "집", "물", "음악", "친구"],
  chinese: ["你好", "谢谢", "家", "水", "音乐", "朋友"],
  russian: ["привет", "спасибо", "дом", "вода", "музыка", "друг"],
  bengali: ["নমস্কার", "ধন্যবাদ", "বাড়ি", "পানি", "সঙ্গীত", "বন্ধু"],
  tamil: ["வணக்கம்", "நன்றி", "வீடு", "தண்ணீர்", "இசை", "நண்பன்"],
  telugu: ["నమస్కారం", "ధన్యవాదాలు", "ఇల్లు", "నీళ్ళు", "సంగీతం", "స్నేహితుడు"],
  turkish: ["merhaba", "teşekkür", "ev", "su", "müzik", "arkadaş"],
};

describe("Language Pack Detection", () => {
  // ─── English ──────────────────────────────────────────────────────────────
  describe("English", () => {
    test.each(["fuck", "shit", "bitch", "asshole", "cunt"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.english)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── French ───────────────────────────────────────────────────────────────
  describe("French", () => {
    test.each(["merde", "putain", "connard", "salope", "merdique"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.french)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── German ───────────────────────────────────────────────────────────────
  describe("German", () => {
    test.each(["Scheisse", "Arschloch", "Fotze", "Wichser", "Schlampe"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.german)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Spanish ──────────────────────────────────────────────────────────────
  describe("Spanish", () => {
    test.each(["mierda", "joder", "puta", "cabron", "pendejo"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.spanish)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Hindi ────────────────────────────────────────────────────────────────
  describe("Hindi (Romanized / Hinglish)", () => {
    test.each(["behenchod", "bhenchod", "madarchod", "chutiya", "gaandu"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.hindi)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Arabic ───────────────────────────────────────────────────────────────
  describe("Arabic (native script)", () => {
    // Challenge: "كلب" (s:1) and "عاهرة" removed — low severity, AMBIVALENT with sensitiveMode=false
    test.each(["كس", "زب", "شرموطة"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.arabic)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Japanese ─────────────────────────────────────────────────────────────
  describe("Japanese", () => {
    test.each(["クソ", "糞", "くそったれ", "ちんこ", "死ね"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.japanese)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Korean ───────────────────────────────────────────────────────────────
  describe("Korean", () => {
    test.each(["씨발", "시발", "개새끼", "병신", "미친"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.korean)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Chinese ──────────────────────────────────────────────────────────────
  describe("Chinese", () => {
    // Challenge: "滚" (s:2) removed — low severity, AMBIVALENT with sensitiveMode=false
    test.each(["操", "肏", "妈的", "他妈的"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.chinese)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Russian ──────────────────────────────────────────────────────────────
  describe("Russian", () => {
    // Challenge: "сука" (s:1) removed — low severity, AMBIVALENT with sensitiveMode=false
    test.each(["хуй", "пизда", "ёбаный", "блядь"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.russian)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Bengali ──────────────────────────────────────────────────────────────
  describe("Bengali (native script)", () => {
    test.each(["বাল", "হারামজাদা", "শালা", "বেশ্যা", "মাগি"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.bengali)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Tamil ────────────────────────────────────────────────────────────────
  describe("Tamil (native script)", () => {
    test.each(["ஓத்தா", "தேவடியா", "கூதி", "சுன்னி", "ஊம்பு"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.tamil)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Telugu ───────────────────────────────────────────────────────────────
  describe("Telugu (native script)", () => {
    test.each(["పూకు", "దెంగు", "లంజ", "మొడ్డ", "పిచ్చి"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.telugu)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });

  // ─── Turkish ──────────────────────────────────────────────────────────────
  describe("Turkish", () => {
    test.each(["siktir", "orospu", "amcık", "göt", "piç"])(
      "detects '%s'",
      (word) => expect(filter.check(word)).toBe(true)
    );
    test.each(CLEAN.turkish)(
      "does not flag clean word '%s'",
      (word) => expect(filter.check(word)).toBe(false)
    );
  });
});

// ─── Unicode word-boundary regression tests ───────────────────────────────
// isWholeWord() must use \p{L} (Unicode letters) not \w (ASCII-only) so that
// accented/non-Latin chars (ü, ş, é, ñ…) are not mistaken for word boundaries.
describe("Unicode word-boundary false-positive regression", () => {
  test.each([
    // English: short profane word embedded inside a longer innocent word
    ["class (contains 'ass')", "class", false],
    ["canal (contains 'anal')", "canal", false],
    ["assassin (contains 'ass')", "assassin", false],
    // Turkish: leet z→s would make 'müzik' → 'müsik', exposing 'sik' — must not flag
    ["müzik (music in Turkish)", "müzik", false],
    ["fizik (physics in Turkish)", "fizik", false],
    // Turkish: actual profanity must still be caught
    ["sik standalone", "sik", true],
    ["siktir standalone", "siktir", true],
  ])("%s", (_label, word, expected) => {
    expect(filter.check(word)).toBe(expected);
  });
});

// ─── Full-sentence detection per language ─────────────────────────────────
describe("Full-sentence language detection", () => {
  test.each([
    ["English sentence", "What the fuck is this shit?", true],
    ["French sentence", "C'est vraiment de la merde!", true],
    ["German sentence", "Das ist Scheisse, du Arschloch!", true],
    ["Spanish sentence", "Que mierda de joder!", true],
    ["Hindi sentence (romanized)", "Tu ek chutiya hai yaar", true],
    ["Russian sentence", "Иди на хуй, сука!", true],
    ["Japanese sentence", "クソ、何をしているんだ!", true],
    ["Korean sentence", "이 씨발 새끼야!", true],
    ["Chinese sentence", "他妈的，你在干什么？", true],
    ["Mixed English/Hindi", "yaar you're such a chutiya!", true],
    ["Turkish sentence", "Siktir git buradan!", true],
    ["Clean English", "The sun is shining beautifully today", false],
    ["Clean French", "Bonjour, comment allez-vous aujourd'hui?", false],
  ])("%s", (_label, text, expected) => {
    expect(filter.check(text)).toBe(expected);
  });
});
