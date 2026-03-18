import profanity from 'allprofanity';

/**
 * Express middleware that blocks requests containing profanity and responds with error details.
 * 
 * ✓ Features:
 *   - Blocks request if any profanity detected in req.body.content
 *   - Returns detailed error response including severity and word positions
 *   - Safe fallback if content is not a string
 *   - Perfect for user-generated content validation
 * 
 * ✓ Use Cases:
 *   - Post/comment submission forms
 *   - User profile updates
 *   - Message validation
 *   - Content moderation
 * 
 * @example
 * app.post('/submit-post', blockBeKind, (req, res) => {
 *   // Will only reach here if content is clean
 *   db.save(req.body.content);
 *   res.json({ status: 'accepted' });
 * });
 */
export function blockBeKind(req, res, next) {
  const { content } = req.body || {};
  
  // Skip if content field missing or invalid
  if (typeof content !== "string") {
    return next();
  }

  const result = profanity.detect(content);

  if (result.hasProfanity) {
    return res.status(400).json({
      error: 'Profanity detected in content.',
      details: {
        severity: result.severity,            // 1=MILD, 2=MODERATE, 3=SEVERE, 4=EXTREME
        detectedWords: result.detectedWords,   // Actual words found
        count: result.detectedWords.length,    // Total matches
        positions: result.positions,           // Precise locations
        cleanedContent: result.cleanedText     // Censored version
      },
      timestamp: new Date().toISOString()
    });
  }

  next();
}