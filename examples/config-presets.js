#!/usr/bin/env node

/**
 * AllProfanity - Advanced Configuration Presets
 * 
 * This file demonstrates different configuration presets for various use cases.
 * Copy and modify these configurations based on your specific needs.
 */

export const PRESETS = {
  /**
   * PRESET 1: Chat & Comments (Fastest)
   * Best for: Real-time chat, comment sections, short texts (<500 chars)
   * Performance: ~27K ops/sec
   * Tradeoff: Requires caching for production use
   */
  CHAT_FAST: {
    algorithm: { matching: "trie" },
    profanityDetection: {
      enableLeetSpeak: true,
      caseSensitive: false
    },
    performance: {
      enableCaching: true,
      cacheSize: 1000
    }
  },

  /**
   * PRESET 2: Large Documents (Balanced)
   * Best for: Articles, documents, large texts (1KB+)
   * Performance: ~9.6K ops/sec, 664% faster than Trie on large texts
   * Tradeoff: Lower ops/sec but better for batch processing
   */
  DOCUMENT_BALANCED: {
    algorithm: {
      matching: "aho-corasick",
      useAhoCorasick: true
    },
    ahoCorasick: {
      enabled: true,
      prebuild: true
    },
    profanityDetection: {
      enableLeetSpeak: true
    }
  },

  /**
   * PRESET 3: Production Hybrid (Recommended)
   * Best for: General-purpose production systems
   * Performance: Balanced speed with advanced features
   * Features: Bloom filters, context analysis, caching
   */
  PRODUCTION_HYBRID: {
    algorithm: {
      matching: "hybrid",
      useAhoCorasick: true,
      useBloomFilter: true,
      useContextAnalysis: true
    },
    bloomFilter: {
      enabled: true,
      expectedItems: 10000,
      falsePositiveRate: 0.01
    },
    ahoCorasick: {
      enabled: true,
      prebuild: true
    },
    contextAnalysis: {
      enabled: true,
      contextWindow: 50,
      languages: ["en"],
      scoreThreshold: 0.5
    },
    performance: {
      enableCaching: true,
      cacheSize: 1000
    }
  },

  /**
   * PRESET 4: Content Moderation (Strict)
   * Best for: User-generated content moderation
   * Features: Context analysis to reduce false positives
   * Performance: Moderate (prioritizes accuracy)
   */
  CONTENT_MODERATION: {
    algorithm: {
      matching: "hybrid",
      useContextAnalysis: true
    },
    contextAnalysis: {
      enabled: true,
      contextWindow: 100,
      languages: ["en"],
      scoreThreshold: 0.5
    },
    profanityDetection: {
      enableLeetSpeak: true,
      strictMode: false,
      detectPartialWords: false
    },
    performance: {
      enableCaching: true,
      cacheSize: 500
    }
  },

  /**
   * PRESET 5: Medical/Professional (Strictest)
   * Best for: Medical, academic, technical content
   * Features: Highest context threshold to reduce medical term false positives
   * Performance: Slowest but most accurate
   */
  MEDICAL_STRICT: {
    algorithm: {
      matching: "hybrid",
      useContextAnalysis: true
    },
    contextAnalysis: {
      enabled: true,
      contextWindow: 150,
      languages: ["en"],
      scoreThreshold: 0.7  // Higher threshold = less sensitive
    },
    profanityDetection: {
      enableLeetSpeak: false,
      strictMode: true,
      detectPartialWords: false,
      caseSensitive: false
    }
  },

  /**
   * PRESET 6: Multi-Language Global
   * Best for: International applications
   * Languages: All 9 supported languages
   */
  GLOBAL_MULTILANG: {
    languages: ["english", "hindi", "french", "german", "spanish", "bengali", "tamil", "telugu", "brazilian"],
    algorithm: {
      matching: "hybrid",
      useContextAnalysis: true
    },
    contextAnalysis: {
      enabled: true,
      languages: ["en", "hi", "fr", "de", "es", "bn", "ta", "te", "pt"]
    },
    performance: {
      enableCaching: true,
      cacheSize: 2000
    }
  },

  /**
   * PRESET 7: Minimal (Smallest Footprint)
   * Best for: Edge deployments, low-resource environments
   * Features: Trie only, no advanced algorithms
   */
  MINIMAL_FOOTPRINT: {
    algorithm: { matching: "trie" },
    profanityDetection: {
      enableLeetSpeak: false,
      caseSensitive: false
    },
    performance: {
      enableCaching: false
    }
  },

  /**
   * PRESET 8: Real-time Analytics
   * Best for: Chat applications with profanity tracking
   * Features: Caching for speed, detailed metadata
   */
  REALTIME_CHAT: {
    algorithm: {
      matching: "trie",
      useBloomFilter: false
    },
    profanityDetection: {
      enableLeetSpeak: true,
      caseSensitive: false
    },
    performance: {
      enableCaching: true,
      cacheSize: 5000
    }
  }
};

export const USAGE_GUIDE = `
╔═══════════════════════════════════════════════════════════════════╗
║          AllProfanity Configuration Presets Guide                 ║
╚═══════════════════════════════════════════════════════════════════╝

Choose the preset that best matches your use case:

1. CHAT_FAST
   └─ For: Chat apps, comments, real-time messaging
   └─ Speed: ~27K ops/sec
   └─ Features: Leet-speak, caching

2. DOCUMENT_BALANCED
   └─ For: Content processing, document moderation
   └─ Speed: ~9.6K ops/sec (664% faster on large texts)
   └─ Features: Aho-Corasick algorithm

3. PRODUCTION_HYBRID (Recommended)
   └─ For: General-purpose production systems
   └─ Speed: Balanced
   └─ Features: Bloom filters, context analysis, caching

4. CONTENT_MODERATION
   └─ For: User-generated content
   └─ Speed: Moderate
   └─ Features: Context awareness, leet-speak

5. MEDICAL_STRICT
   └─ For: Medical, academic, technical content
   └─ Speed: Slower but more accurate
   └─ Features: Strictest context analysis

6. GLOBAL_MULTILANG
   └─ For: International applications
   └─ Languages: 9 languages supported
   └─ Features: Multi-language context analysis

7. MINIMAL_FOOTPRINT
   └─ For: Edge deployments, low-resource environments
   └─ Speed: Very fast
   └─ Features: Minimal dependencies

8. REALTIME_CHAT
   └─ For: Chat with analytics
   └─ Speed: ~27K ops/sec
   └─ Features: Large cache, detailed metadata

Usage:
  import { AllProfanity } from 'allprofanity';
  import { PRESETS } from './config-presets.js';

  const filter = new AllProfanity(PRESETS.PRODUCTION_HYBRID);
`;

// Export a helper function to get preset by name
export function getPreset(name) {
  const presetName = \`\${name.toUpperCase()}\`;
  if (PRESETS[presetName]) {
    return PRESETS[presetName];
  }
  throw new Error(\`Unknown preset: \${name}\`);
}

// Print guide if run directly
if (import.meta.url === \`file://\${process.argv[1]}\`) {
  console.log(USAGE_GUIDE);
  console.log("\nAvailable presets:");
  Object.keys(PRESETS).forEach(key => {
    console.log(\`  • \${key}\`);
  });
}
