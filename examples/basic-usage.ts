import allProfanity, {
  englishBadWords,
  hindiBadWords,
  frenchBadWords,
  germanBadWords,
  spanishBadWords,
  bengaliBadWords,
  tamilBadWords,
  teluguBadWords,
  brazilianBadWords,
  AllProfanity,
  ProfanitySeverity,
  ProfanityDetectionResult,
} from "../src/index";

/**
 * AllProfanity Library - Example Usage (v2.2.0)
 *
 * This example demonstrates the advanced features of AllProfanity:
 * - Multiple algorithm modes (Trie, Aho-Corasick, Hybrid)
 * - 664% faster performance on large texts
 * - Advanced leet-speak detection (30+ character mappings)
 * - Pattern-based context analysis for reducing false positives
 * - Multi-language support (9 languages with native scripts)
 * - Intelligent word boundary detection
 * - Result caching and severity scoring
 * - Custom dictionaries and whitelisting
 * - Performance optimization options
 */

// Display section headers
function displaySection(title: string): void {
  console.log("\n" + "=".repeat(50));
  console.log(`  ${title}`);
  console.log("=".repeat(50) + "\n");
}

// Display check results (simple boolean)
function displayCheck(text: string): void {
  const result = allProfanity.check(text);
  console.log(`"${text}" ${result ? "✘ CONTAINS PROFANITY" : "✓ CLEAN"}`);
}

// Display advanced detection results
function displayDetect(text: string): void {
  const result: ProfanityDetectionResult = allProfanity.detect(text);
  if (result.hasProfanity) {
    console.log(
      `"${text}" ✘ PROFANITY DETECTED | Words: [${result.detectedWords.join(
        ", "
      )}] | Severity: ${ProfanitySeverity[result.severity]}`
    );
    if (result.positions.length) {
      result.positions.forEach((p, idx) =>
        console.log(
          `  Match #${idx + 1}: "${p.word}" (pos ${p.start}-${p.end})`
        )
      );
    }
  } else {
    console.log(`"${text}" ✓ CLEAN`);
  }
}

// Display cleaning results
function displayClean(
  text: string,
  method: "character" | "word" = "character",
  placeholder?: string
): void {
  let cleaned: string;

  if (method === "character") {
    cleaned = allProfanity.clean(text, placeholder);
    console.log(
      `Character cleaning${placeholder ? ` (with '${placeholder}')` : ""}:`
    );
  } else {
    cleaned = allProfanity.cleanWithPlaceholder(text, placeholder);
    console.log(
      `Word cleaning${placeholder ? ` (with '${placeholder}')` : ""}:`
    );
  }

  console.log(`  Original: "${text}"`);
  console.log(`  Cleaned:  "${cleaned}"`);
}

// Start the demo
displaySection("WELCOME TO ALLPROFANITY v2.2.0 DEMO");
console.log(
  "This example demonstrates advanced features including algorithms, caching, and context analysis.\n"
);

// 1. Basic profanity checking
displaySection("1. BASIC PROFANITY CHECKING");

// English examples
console.log("English content:");
displayCheck("This is a clean sentence.");
displayCheck("This is a bullshit sentence.");
displayCheck("What the fuck is this?");

// Hindi examples (Devanagari script)
console.log("\nHindi content (Devanagari script):");
displayCheck("यह एक अच्छा वाक्य है।"); // Clean
displayCheck("यह एक चूतिया वाक्य है।"); // Profanity

// Hindi examples (Roman script)
console.log("\nHindi content (Roman script):");
displayCheck("Yeh ek accha vakya hai."); // Clean
displayCheck("Yeh ek chutiya vakya hai."); // Profanity

// Hinglish examples
console.log("\nHinglish content:");
displayCheck("Kya scene hai bhai?"); // Clean
displayCheck("BC kya kar raha hai?"); // Profanity abbreviation

// Mixed language content
console.log("\nMixed language content:");
displayCheck("This sentence has the Hindi word अच्छा which means good.");
displayCheck("This sentence has the Hindi word चूतिया which is a profanity.");

// 2. Advanced detection (NEW)
displaySection("2. ADVANCED PROFANITY DETECTION");
displayDetect("This is a clean sentence.");
displayDetect("What the fuck is this?");
displayDetect("यह एक चूतिया परीक्षण है।");
displayDetect("This is a bullshit and chutiya example.");

// 2b. Severity analysis
console.log("\n[Additional examples showing severity levels]");
displayDetect("This is bullshit!"); // MILD
displayDetect("This fucking bullshit needs to end."); // SEVERE
displayDetect("What the fuck is this bullshit and chutiya nonsense?"); // EXTREME

// 3. Cleaning profanity
displaySection("3. CLEANING PROFANITY");

// Character-by-character cleaning
console.log("Default character-by-character cleaning:");
displayClean("This is a bullshit example.", "character");
displayClean("This contains the word fuck in it.", "character");
displayClean("यह एक चूतिया उदाहरण है।", "character");

// Whole word cleaning
console.log("\nWhole word cleaning:");
displayClean("This is a bullshit example.", "word");
displayClean("This contains the word fuck in it.", "word");
displayClean("यह एक चूतिया उदाहरण है।", "word");

// Custom placeholder character
console.log("\nCustom character placeholder:");
displayClean("This is a bullshit example.", "character", "#");

// Custom placeholder word
console.log("\nCustom word placeholder:");
displayClean("This is a bullshit example.", "word", "[CENSORED]");

// 4. Handling punctuation and word boundaries
displaySection("4. PUNCTUATION & WORD BOUNDARIES");

console.log("Handling punctuation:");
displayClean("This is bullshit!", "word");
displayClean("Is this bullshit? Yes, it is.", "word");

console.log("\nWord boundaries (avoiding false positives):");
displayCheck("He is an associate professor."); // Should not detect 'ass'
displayCheck("I work as an analyst."); // Should not detect 'anal'
displayCheck("That was a great assignment!"); // Should not detect 'ass'

// Add custom words
console.log("\nAdding custom words to the list:");
const customWord = "badword123";
console.log(`Adding "${customWord}" to the list...`);
displayCheck(`This contains ${customWord}.`); // Should be clean
allProfanity.add(customWord);
displayCheck(`This contains ${customWord}.`); // Should detect profanity now

// Add multiple words at once
console.log("\nAdding multiple custom words at once:");
const customWords = ["customBadWord1", "customBadWord2"];
allProfanity.add(customWords);
displayCheck(`Testing ${customWords[0]} and ${customWords[1]}.`); // Should detect

// Remove words
console.log("\nRemoving words from the list:");
console.log(`Removing "${customWord}" from the list...`);
allProfanity.remove(customWord);
displayCheck(`This contains ${customWord}.`); // Should be clean again

// Clean up our custom words to leave the list as we found it
allProfanity.remove(customWords);

// 6. Placeholder settings
displaySection("6. PLACEHOLDER SETTINGS");

// Change default placeholder for character cleaning
console.log("Default placeholder result:");
displayClean("This is bullshit.", "character");

console.log('\nChanging placeholder to "#":');
allProfanity.setPlaceholder("#");
displayClean("This is bullshit.", "character");

// Reset placeholder to default
console.log('\nResetting placeholder to "*":');
allProfanity.setPlaceholder("*");
displayClean("This is bullshit.", "character");

// 7. Language loading and export
displaySection("7. LANGUAGE LOADING & EXPORT");

// Show available languages
console.log("Available languages:", allProfanity.getAvailableLanguages());

// Show loaded languages
console.log("Currently loaded languages:", allProfanity.getLoadedLanguages());

// Load a new language (e.g., French)
console.log("Loading French...");
allProfanity.loadLanguage("french");
console.log("Now loaded:", allProfanity.getLoadedLanguages());

// Use exported dictionaries directly
console.log("First 3 French bad words:", frenchBadWords.slice(0, 3));

// 8. Whitelist demo
displaySection("8. WHITELIST DEMO");
console.log('Whitelisting "anal" and "ass"...');
allProfanity.addToWhitelist(["anal", "ass"]);
displayCheck("He is an associate professor."); // Should never detect 'ass'
displayCheck("I work as an analyst."); // Should never detect 'anal'
allProfanity.removeFromWhitelist(["anal", "ass"]);

// 9. Leet-speak detection (NEW)
displaySection("9. LEET-SPEAK DETECTION");
console.log('Checking "f#ck" and "a55hole":');
displayDetect("You are a f#cking a55hole!"); // Should detect leet-speak variants

// 10. Multi-language and Indian language loading (NEW)
displaySection("10. MULTI-LANGUAGE SUPPORT");
console.log("Loading Indian languages in bulk...");
allProfanity.loadIndianLanguages();
console.log("Loaded languages:", allProfanity.getLoadedLanguages());
displayCheck("This is a Tamil profanity: புண்டை");
displayCheck("This is a Telugu profanity: బూతులు");

// 11. Advanced algorithm configuration (NEW in v2.2.0)
displaySection("11. ADVANCED ALGORITHM MODES");

// Example 1: Default Trie (fastest for short texts)
console.log("✓ Default Trie Algorithm (~27K ops/sec):");
console.log("  Best for: Chat messages, comments, short texts (<500 chars)");
const trieFilter = new AllProfanity();
displayDetect("This is fucking bullshit");

// Example 2: Aho-Corasick (fastest for large texts)
console.log("\n✓ Aho-Corasick Algorithm (~9.6K ops/sec on 1KB+):");
console.log("  Best for: Documents, articles, large text processing");
console.log("  Performance: 664% faster on large texts with O(n) complexity");
const acFilter = new AllProfanity({
  algorithm: { matching: "aho-corasick" }
});
displayDetect("This is fucking bullshit");

// Example 3: Hybrid mode with caching (balanced for production)
console.log("\n✓ Hybrid Mode with Caching:");
console.log("  Best for: Production systems with mixed workloads");
console.log("  Performance: 123x speedup on repeated inputs (cache hits)");
const hybridFilter = new AllProfanity({
  algorithm: {
    matching: "hybrid",
    useAhoCorasick: true,
    useBloomFilter: true,
    useContextAnalysis: true
  },
  performance: {
    enableCaching: true,
    cacheSize: 1000
  }
});
displayDetect("This is fucking bullshit");

// 12. Context Analysis for false positive reduction (NEW in v2.2.0)
displaySection("12. CONTEXT ANALYSIS (Reducing False Positives)");
console.log("Context analysis recognizes:");
console.log("  • Medical terms: 'anal fissure', 'rectal exam'");
console.log("  • Negation patterns: 'not bad', 'don\\'t call me that'");
console.log("  • Possessive constructions: 'dog\\'s ass'");
console.log("  • Proper nouns: 'Hell, Michigan'");
console.log("  • Quotations: \"'I said what the hell'\"");

const contextFilter = new AllProfanity({
  algorithm: {
    matching: "hybrid",
    useContextAnalysis: true
  },
  contextAnalysis: {
    enabled: true,
    contextWindow: 50,
    languages: ["en"],
    scoreThreshold: 0.5
  }
});

console.log("\nExamples with context awareness:");
contextFilter.addToWhitelist(["anal", "ass"]);
console.log('After whitelisting "anal" and "ass":');
console.log("  ✓ Associate professor:", !contextFilter.check("He is an associate professor."));
console.log("  ✓ Analyst:", !contextFilter.check("I work as an analyst."));

// 13. Configuration from file (NEW in v2.2.0)
displaySection("13. CONFIG FILE SUPPORT");
console.log("Generate config files with: npx allprofanity");
console.log("\nAlternatively, load config programmatically:");
console.log("  const config = require('./allprofanity.config.json');");
console.log("  const filter = AllProfanity.fromConfig(config);");

// Example config usage
const configBasedFilter = AllProfanity.fromConfig({
  algorithm: { matching: "hybrid" },
  profanityDetection: { enableLeetSpeak: true },
  performance: { enableCaching: true, cacheSize: 500 }
});
console.log("\nFilter created from config object.");

// 14. Dynamic configuration update
displaySection("14. RUNTIME CONFIGURATION");
console.log("Update settings without creating new instance:");
const runtimeFilter = new AllProfanity();
console.log("  enableLeetSpeak: true (default)");
runtimeFilter.updateConfig({ enableLeetSpeak: false });
console.log("  enableLeetSpeak: false (after update)");
console.log("\nAvailable options for updateConfig:");
console.log("  • caseSensitive, enableLeetSpeak, strictMode");
console.log("  • detectPartialWords, defaultPlaceholder");
console.log("  • languages, whitelistWords");

// Finish the demo
displaySection("END OF ALLPROFANITY v2.2.0 DEMO");
console.log("Thank you for exploring the AllProfanity library!\n");
console.log("📚 Resources:");
console.log("  • GitHub: https://github.com/ayush-jadaun/AllProfanity");
console.log("  • Benchmarks: ./docs/SPEED_VS_ACCURACY.md");
console.log("  • Roadmap: ./ROADMAP.md");
console.log("  • Config Schema: ./config.schema.json\n");
