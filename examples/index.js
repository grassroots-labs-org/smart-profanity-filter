import express from "express";
import bodyParser from "body-parser";
import { blockBeKind } from "./middleswares/blockAll.js";
import { cleanWithCustomPlaceholder } from "./middleswares/cleanWithCustomPlaceholder.js";

const app = express();
app.use(bodyParser.json());

/**
 * BeKind Express Middleware Examples
 * 
 * This file demonstrates two common patterns for integrating profanity filtering
 * into Express.js applications:
 * 
 * 1. Blocking Mode (blockBeKind)
 *    - Rejects requests with profanity
 *    - Returns detailed error information
 *    - Good for strict moderation
 * 
 * 2. Cleaning Mode (cleanWithCustomPlaceholder)
 *    - Cleans profanity automatically
 *    - Allows request to proceed
 *    - Good for user-generated content
 * 
 * Performance Notes:
 *   - ~27K ops/sec with default Trie algorithm
 *   - 664% faster with Aho-Corasick on large texts
 *   - 123x faster with caching on repeated inputs
 */

// ============================================================================
// ROUTE 1: Blocking Mode - Rejects if profanity detected
// ============================================================================
/**
 * POST /block
 * 
 * Blocks requests that contain profanity and returns error details.
 * 
 * @example
 * // Request
 * POST /block HTTP/1.1
 * Content-Type: application/json
 * 
 * { "content": "This is bullshit" }
 * 
 * // Response (Error)
 * HTTP/1.1 400 Bad Request
 * {
 *   "error": "Profanity detected in content.",
 *   "details": {
 *     "severity": 1,
 *     "detectedWords": ["bullshit"],
 *     "count": 1,
 *     "positions": [{ "word": "bullshit", "start": 10, "end": 18 }],
 *     "cleanedContent": "This is ********"
 *   },
 *   "timestamp": "2026-01-16T18:59:36.768Z"
 * }
 */
app.post("/block", blockBeKind, (req, res) => {
  // This handler is ONLY reached if middleware allows it (no profanity detected)
  res.status(200).json({
    status: "success",
    message: "✓ Content accepted. No profanity detected.",
    content: req.body.content,
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// ROUTE 2: Cleaning Mode - Auto-cleans and passes through
// ============================================================================
/**
 * POST /clean
 * 
 * Automatically cleans profanity with custom placeholder and allows request to proceed.
 * Useful for chat, comments, or any user-generated content that should be sanitized.
 * 
 * @example
 * // Request
 * POST /clean HTTP/1.1
 * Content-Type: application/json
 * 
 * { "content": "This is bullshit" }
 * 
 * // Response (Success)
 * HTTP/1.1 200 OK
 * {
 *   "message": "Content processed (profane words cleaned if needed).",
 *   "content": "This is ###########",
 *   "profanity": {
 *     "detected": true,
 *     "severity": 1,
 *     "words": ["bullshit"],
 *     "count": 1,
 *     "positions": [{ "word": "bullshit", "start": 10, "end": 18 }],
 *     "cleaned": "This is ###########",
 *     "original": "This is bullshit"
 *   }
 * }
 */
app.post("/clean", cleanWithCustomPlaceholder("###"), (req, res) => {
  res.json({
    message: "Content processed (profane words cleaned if needed).",
    content: req.body.content,
    profanity: req.profanity,
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// ROUTE 3: Chat Message - Cleaning before broadcast
// ============================================================================
/**
 * POST /send-message
 * 
 * Real-world example: Clean chat messages before storing/broadcasting.
 * 
 * Use Case:
 *   - User sends: "This is fucking bullshit"
 *   - Cleaned to: "This is [CENSORED]"
 *   - Stored in DB and broadcast to other users
 *   - req.profanity can be logged for moderation analytics
 * 
 * @example
 * // Request
 * POST /send-message HTTP/1.1
 * Content-Type: application/json
 * 
 * { "content": "What the fuck is this bullshit?", "userId": "user123" }
 * 
 * // Response
 * HTTP/1.1 200 OK
 * {
 *   "status": "success",
 *   "cleanedMessage": "What the [CENSORED] is this [CENSORED]?",
 *   "profanityDetected": true
 * }
 */
app.post("/send-message", cleanWithCustomPlaceholder("[CENSORED]"), (req, res) => {
  const { userId } = req.body;
  const cleanedContent = req.body.content;
  
  // Example: Log profanity detection for moderation dashboard
  if (req.profanity.detected) {
    console.log(`[MODERATION] User ${userId} sent profanity:`, {
      severity: req.profanity.severity,
      words: req.profanity.words,
      original: req.profanity.original,
      cleaned: req.profanity.cleaned,
      timestamp: new Date().toISOString()
    });
  }
  
  // Example: Save to DB or broadcast to other users
  // await chatDB.save({ userId, message: cleanedContent, timestamp: new Date() });
  // chatSocket.emit('message', { userId, message: cleanedContent });
  
  res.json({
    status: "success",
    cleanedMessage: cleanedContent,
    profanityDetected: req.profanity.detected,
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// ROUTE 4: Multi-language support example
// ============================================================================
/**
 * POST /translate
 * 
 * Handle content in multiple languages.
 * The default filter loads English and Hindi.
 * For other languages, use filter.loadLanguage() on startup.
 * 
 * Supported: English, Hindi, French, German, Spanish, Bengali, Tamil, Telugu, Portuguese
 */
app.post("/translate", cleanWithCustomPlaceholder("***"), (req, res) => {
  const { content, language } = req.body;
  
  res.json({
    language: language,
    original: content,
    cleaned: req.body.content,
    profanity: req.profanity,
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// Health check endpoint
// ============================================================================
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "BeKind API",
    version: "2.2.0",
    endpoints: {
      "/block": "Block requests with profanity",
      "/clean": "Auto-clean profanity with placeholder",
      "/send-message": "Example: Chat message cleaning",
      "/translate": "Multi-language support example"
    }
  });
});

// ============================================================================
// Error handling
// ============================================================================
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    error: "Internal server error",
    message: err.message,
    timestamp: new Date().toISOString()
  });
});

// ============================================================================
// Start server
// ============================================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║        BeKind Express Middleware Examples            ║
║                   Server running...                        ║
╚════════════════════════════════════════════════════════════╝

✓ Server: http://localhost:${PORT}

📍 Available Endpoints:
   └─ GET  /health              - Health check
   └─ POST /block               - Block on profanity
   └─ POST /clean               - Auto-clean profanity
   └─ POST /send-message        - Chat example
   └─ POST /translate           - Multi-language example

🧪 Quick Test:
   curl -X POST http://localhost:${PORT}/clean \\
     -H "Content-Type: application/json" \\
     -d '{"content":"What the fuck is this?"}'

📚 Features:
   • 664% faster on large texts
   • Multi-language (9 languages)
   • Advanced leet-speak detection
   • Context analysis for false positives
   • ~27K ops/sec baseline performance
   • 123x faster with caching

🔗 Learn More:
   • GitHub: https://github.com/ayush-jadaun/BeKind
   • Docs: https://www.npmjs.com/package/allprofanity
  `);
});
