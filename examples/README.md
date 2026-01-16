# AllProfanity Examples

Complete examples demonstrating AllProfanity v2.2.0 features with Express.js middleware and advanced configurations.

## 📁 Files Included

- **index.js** - Express server with profanity filtering middleware
- **basic-usage.ts** - Comprehensive feature demonstrations
- **allprofanity.config.json** - Pre-configured hybrid algorithm setup
- **middleswares/blockAll.js** - Blocking middleware (reject if profanity)
- **middleswares/cleanWithCustomPlaceholder.js** - Cleaning middleware (sanitize content)

## 🚀 Quick Start

### 1. Installation

```bash
npm install
```

### 2. Run Express Server

```bash
npm start
# Server runs at http://localhost:3000
```

### 3. Test the API

```bash
# Test blocking mode (rejects profanity)
curl -X POST http://localhost:3000/block \
  -H "Content-Type: application/json" \
  -d '{"content":"This is bullshit"}'

# Test cleaning mode (sanitizes profanity)
curl -X POST http://localhost:3000/clean \
  -H "Content-Type: application/json" \
  -d '{"content":"What the fuck is this?"}'

# Test chat message (real-world example)
curl -X POST http://localhost:3000/send-message \
  -H "Content-Type: application/json" \
  -d '{"content":"This is fucking bullshit","userId":"user123"}'
```

## 📚 Examples Overview

### Express Server (`index.js`)

Four complete example routes demonstrating different use cases:

#### 1. **Blocking Mode** - `/block`
Rejects requests that contain profanity.

```javascript
app.post("/block", blockAllProfanity, (req, res) => {
  // Only reached if content is clean
  res.json({ message: "Content accepted", content: req.body.content });
});
```

**Response (with profanity):**
```json
{
  "error": "Profanity detected in content.",
  "details": {
    "severity": 1,
    "detectedWords": ["bullshit"],
    "cleanedContent": "This is ********"
  }
}
```

#### 2. **Cleaning Mode** - `/clean`
Automatically cleans profanity and allows request to proceed.

```javascript
app.post("/clean", cleanWithCustomPlaceholder("###"), (req, res) => {
  // Content is automatically cleaned
  res.json({
    message: "Content processed",
    content: req.body.content,  // Already cleaned!
    profanity: req.profanity    // Metadata about what was found
  });
});
```

#### 3. **Chat Messages** - `/send-message`
Real-world example showing how to clean chat messages before storage/broadcast.

```javascript
app.post("/send-message", cleanWithCustomPlaceholder("[CENSORED]"), (req, res) => {
  // Log profanity for moderation dashboard
  if (req.profanity.detected) {
    console.log("Profanity detected:", req.profanity);
  }
  // Save cleaned content to DB or broadcast to users
  res.json({ cleanedMessage: req.body.content });
});
```

#### 4. **Multi-language** - `/translate`
Handle content in different languages (English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Portuguese).

### Basic Usage (`basic-usage.ts`)

Comprehensive demonstrations including:

1. **Basic Profanity Checking** - Multiple languages (English, Hindi, Hinglish)
2. **Advanced Detection** - Severity scoring and position tracking
3. **Text Cleaning** - Character vs word-level replacement
4. **Word Management** - Add, remove, whitelist words dynamically
5. **Leet-Speak Detection** - Detects obfuscated variants (f#ck, a55hole)
6. **Multi-Language** - Load 9+ language packs
7. **Algorithm Modes** - Trie vs Aho-Corasick vs Hybrid
8. **Context Analysis** - Reduce false positives
9. **Caching** - Performance optimization
10. **Configuration** - Runtime and file-based config

## ⚙️ Configuration

### Default Setup (Hybrid Mode)

The `allprofanity.config.json` uses the optimized **Hybrid algorithm**:

```json
{
  "algorithm": {
    "matching": "hybrid",
    "useAhoCorasick": true,
    "useBloomFilter": true,
    "useContextAnalysis": true
  },
  "performance": {
    "enableCaching": true,
    "cacheSize": 1000
  }
}
```

### Configuration Presets

Load different configs based on use case:

**1. Chat/Comments (Fastest)**
```javascript
const filter = new AllProfanity({
  algorithm: { matching: "trie" },
  performance: { enableCaching: true }
});
// ~27K ops/sec - best for <500 char texts
```

**2. Document Processing (Balanced)**
```javascript
const filter = new AllProfanity({
  algorithm: { matching: "aho-corasick" },
  performance: { enableCaching: true }
});
// ~9.6K ops/sec - 664% faster on large texts
```

**3. Content Moderation (Accurate)**
```javascript
const filter = new AllProfanity({
  algorithm: {
    matching: "hybrid",
    useContextAnalysis: true
  },
  contextAnalysis: {
    enabled: true,
    scoreThreshold: 0.7
  }
});
// Balanced accuracy - reduces false positives
```

## 🧪 Testing Middleware

### Test Blocking Middleware
```bash
# With profanity (should fail)
curl -X POST http://localhost:3000/block \
  -H "Content-Type: application/json" \
  -d '{"content":"This is bullshit"}'
# Returns: 400 Bad Request

# Without profanity (should pass)
curl -X POST http://localhost:3000/block \
  -H "Content-Type: application/json" \
  -d '{"content":"This is clean content"}'
# Returns: 200 OK
```

### Test Cleaning Middleware
```bash
# With profanity (should clean)
curl -X POST http://localhost:3000/clean \
  -H "Content-Type: application/json" \
  -d '{"content":"What the fuck is this bullshit?"}'
# Returns: 200 OK with cleaned content

# Multi-language
curl -X POST http://localhost:3000/translate \
  -H "Content-Type: application/json" \
  -d '{"content":"यह एक चूतिया परीक्षण है","language":"hindi"}'
```

## 📊 Performance Characteristics

| Use Case | Algorithm | Speed | Best For |
|----------|-----------|-------|----------|
| Chat messages | Trie | ~27K ops/sec | <500 char texts |
| Documents | Aho-Corasick | ~9.6K ops/sec | Large texts (1KB+) |
| Cached results | Any + Cache | 123x faster | Repeated inputs |
| Content moderation | Hybrid + Context | Moderate | Reducing false positives |

## 🌍 Multi-Language Support

All 9 languages supported out-of-the-box:

```javascript
// Load specific languages
filter.loadLanguages(['english', 'french', 'hindi']);

// Load all Indian languages
filter.loadIndianLanguages();

// Load custom dictionary
filter.loadCustomDictionary('pirate', ['barnacle-head', 'landlubber']);
```

### Supported Languages
- English (Roman)
- Hindi (Devanagari + Roman/Hinglish)
- French (Roman)
- German (Roman)
- Spanish (Roman)
- Bengali (Bengali script + Roman)
- Tamil (Tamil script + Roman)
- Telugu (Telugu script + Roman)
- Brazilian Portuguese (Roman)

## 🔧 Middleware API

### blockAllProfanity

Blocks requests containing profanity.

```javascript
export function blockAllProfanity(req, res, next)
```

**Features:**
- ✓ Returns 400 Bad Request if profanity found
- ✓ Includes severity, detected words, positions
- ✓ Provides cleaned version of content
- ✓ Safe fallback for missing/invalid fields

### cleanWithCustomPlaceholder

Cleans profanity automatically.

```javascript
export function cleanWithCustomPlaceholder(placeholder = "[CENSORED]")
```

**Features:**
- ✓ Auto-cleans content with custom placeholder
- ✓ Allows request to proceed
- ✓ Attaches profanity metadata to req.profanity
- ✓ Tracks original vs cleaned content

**req.profanity object:**
```javascript
{
  detected: boolean,              // Was profanity found?
  severity: 1-4,                 // Severity level
  words: string[],               // Detected profane words
  count: number,                 // Total matches
  positions: Array<{...}>,       // Exact locations
  cleaned: string,               // Cleaned version
  original: string               // Original text
}
```

## 📈 Advanced Features

### 1. Leet-Speak Detection
Automatically detects and normalizes:
- `f#ck` → detects as "fuck"
- `a55hole` → detects as "asshole"
- `5h1t` → detects as "shit"
- 30+ character mappings supported

### 2. Context Analysis
Reduces false positives:
- Medical terms: "anal fissure"
- Negation: "not bad"
- Possessive: "dog's ass"
- Proper nouns: "Hell, Michigan"
- Quotations: "'What the hell'"

### 3. Severity Scoring
```javascript
const result = filter.detect(text);
// MILD (1) - 1 word
// MODERATE (2) - 2 words
// SEVERE (3) - 3 words
// EXTREME (4) - 4+ words
```

### 4. Performance Caching
123x faster on repeated inputs:
```javascript
const filter = new AllProfanity({
  performance: {
    enableCaching: true,
    cacheSize: 1000
  }
});
```

## 🛠️ Troubleshooting

### Port already in use
```bash
# Use different port
PORT=3001 npm start
```

### Module not found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### TypeScript compilation error
```bash
# Install TypeScript globally
npm install -g typescript

# Or use ts-node
npx ts-node basic-usage.ts
```

## 📚 Resources

- **GitHub:** https://github.com/ayush-jadaun/AllProfanity
- **NPM:** https://www.npmjs.com/package/allprofanity
- **Performance Benchmarks:** See `../docs/SPEED_VS_ACCURACY.md`
- **Roadmap:** See `../ROADMAP.md`
- **Configuration Schema:** See `./config.schema.json`

## 📝 License

MIT - See LICENSE file in parent directory

## 🤝 Contributing

Contributions welcome! Check CONTRIBUTORS.md in the parent directory for guidelines.

---

**AllProfanity v2.2.0** - Professional-grade multilingual profanity filtering 🚀
