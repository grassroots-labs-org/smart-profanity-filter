import profanity from "allprofanity";

/**
 * Express middleware that automatically cleans profane words in request content.
 * Replaces profane words with a placeholder and passes cleaned content to next handler.
 * 
 * ✓ Features:
 *   - Auto-cleans profanity without blocking the request
 *   - Configurable placeholder string
 *   - Attaches profanity metadata to req.profanity for logging/tracking
 *   - Character-by-character replacement using cleanWithPlaceholder()
 *   - Preserves word boundaries and formatting
 * 
 * ✓ Use Cases:
 *   - Chat applications (clean before broadcasting)
 *   - Comment sections (auto-moderate while allowing posting)
 *   - User forums (clean messages in real-time)
 *   - Social media feeds (sanitize UGC)
 * 
 * ✓ req.profanity object contains:
 *   - detected: boolean
 *   - severity: ProfanitySeverity (1-4)
 *   - words: string[] (detected profane words)
 *   - cleaned: string (cleaned content)
 * 
 * @param {string} placeholder - Replacement string (default: '[CENSORED]')
 * @returns {Function} Express middleware
 * 
 * @example
 * // Replace profanity with "###"
 * app.post('/message', cleanWithCustomPlaceholder("###"), (req, res) => {
 *   // req.body.content is now cleaned
 *   // req.profanity has detection metadata
 *   console.log(req.profanity); // { detected: true, severity: 2, words: [...], cleaned: "..." }
 *   db.save(req.body.content);
 *   res.json({ cleanedMessage: req.body.content });
 * });
 */
export function cleanWithCustomPlaceholder(placeholder = "[CENSORED]") {
  return (req, res, next) => {
    const { content } = req.body || {};
    
    // Skip if content is not a string
    if (typeof content !== "string") {
      req.profanity = { detected: false };
      return next();
    }

    const result = profanity.detect(content);

    if (result.hasProfanity) {
      // Clean the content with custom placeholder
      req.body.content = profanity.cleanWithPlaceholder(content, placeholder);
      
      // Attach profanity metadata
      req.profanity = {
        detected: true,
        severity: result.severity,           // 1=MILD, 2=MODERATE, 3=SEVERE, 4=EXTREME
        words: result.detectedWords,         // Words that were found
        count: result.detectedWords.length,  // Total matches
        positions: result.positions,         // Exact locations in original text
        cleaned: req.body.content,           // The cleaned version
        original: content                    // Original text (for logging)
      };
    } else {
      req.profanity = { detected: false };
    }

    next();
  };
}
