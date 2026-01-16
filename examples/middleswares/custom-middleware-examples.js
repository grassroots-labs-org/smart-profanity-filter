/**
 * AllProfanity - Custom Middleware Examples
 * 
 * Learn how to create your own Express middleware using AllProfanity.
 * These are ready-to-use examples you can customize for your needs.
 */

import profanity from 'allprofanity';

/**
 * EXAMPLE 1: Logging Middleware
 * Logs all profanity detections to console/file
 */
export function loggingMiddleware(req, res, next) {
  const originalSend = res.send;

  res.send = function(data) {
    const { content } = req.body || {};
    if (typeof content === 'string') {
      const result = profanity.detect(content);
      
      if (result.hasProfanity) {
        console.log('[PROFANITY LOG]', {
          timestamp: new Date().toISOString(),
          severity: result.severity,
          detectedWords: result.detectedWords,
          content: content.substring(0, 100),
          path: req.path,
          ip: req.ip
        });
      }
    }

    return originalSend.call(this, data);
  };

  next();
}

/**
 * EXAMPLE 2: Rating Limit Middleware
 * Limits requests based on profanity severity
 */
export function ratingLimitMiddleware(maxSeverity = 2) {
  return (req, res, next) => {
    const { content } = req.body || {};

    if (typeof content === 'string') {
      const result = profanity.detect(content);

      if (result.hasProfanity && result.severity > maxSeverity) {
        return res.status(403).json({
          error: 'Content severity too high',
          severity: result.severity,
          maxAllowed: maxSeverity,
          message: 'Please moderate your language'
        });
      }
    }

    next();
  };
}

/**
 * EXAMPLE 3: Automatic Escalation Middleware
 * Flags severe profanity for manual review
 */
export function escalationMiddleware(escalationThreshold = 3) {
  return (req, res, next) => {
    const { content, userId } = req.body || {};

    if (typeof content === 'string') {
      const result = profanity.detect(content);

      if (result.hasProfanity && result.severity >= escalationThreshold) {
        // Flag for manual review
        req.escalated = {
          userId,
          severity: result.severity,
          words: result.detectedWords,
          content,
          timestamp: new Date(),
          requiresReview: true
        };

        // Log to moderation dashboard
        console.log('[ESCALATION]', req.escalated);
      }
    }

    next();
  };
}

/**
 * EXAMPLE 4: Whitelist Management Middleware
 * Allow users to add/remove words from whitelist
 */
export function whitelistManagementMiddleware(req, res, next) {
  if (req.method === 'POST' && req.path === '/api/whitelist/add') {
    const { words } = req.body;
    
    if (Array.isArray(words)) {
      profanity.addToWhitelist(words);
      return res.json({
        status: 'success',
        message: \`Added \${words.length} words to whitelist\`
      });
    }
  }

  if (req.method === 'POST' && req.path === '/api/whitelist/remove') {
    const { words } = req.body;
    
    if (Array.isArray(words)) {
      profanity.removeFromWhitelist(words);
      return res.json({
        status: 'success',
        message: \`Removed \${words.length} words from whitelist\`
      });
    }
  }

  next();
}

/**
 * EXAMPLE 5: Multi-Field Validation Middleware
 * Checks multiple content fields
 */
export function multiFieldValidationMiddleware(fields = ['content', 'title', 'description']) {
  return (req, res, next) => {
    const profanityResults = {};
    let hasProfanity = false;

    for (const field of fields) {
      const value = req.body?.[field];
      
      if (typeof value === 'string') {
        const result = profanity.detect(value);
        profanityResults[field] = result;
        
        if (result.hasProfanity) {
          hasProfanity = true;
        }
      }
    }

    req.profanityCheck = {
      hasProfanity,
      fields: profanityResults
    };

    if (hasProfanity) {
      return res.status(400).json({
        error: 'Profanity detected in one or more fields',
        details: profanityResults
      });
    }

    next();
  };
}

/**
 * EXAMPLE 6: Analytics Middleware
 * Tracks profanity statistics
 */
export function analyticsMiddleware() {
  const stats = {
    totalRequests: 0,
    profanityCount: 0,
    severityDistribution: { 1: 0, 2: 0, 3: 0, 4: 0 },
    topWords: {},
    startTime: Date.now()
  };

  return (req, res, next) => {
    stats.totalRequests++;

    const { content } = req.body || {};

    if (typeof content === 'string') {
      const result = profanity.detect(content);

      if (result.hasProfanity) {
        stats.profanityCount++;
        stats.severityDistribution[result.severity]++;

        for (const word of result.detectedWords) {
          stats.topWords[word] = (stats.topWords[word] || 0) + 1;
        }
      }
    }

    // Attach stats endpoint
    if (req.path === '/stats') {
      const uptime = Date.now() - stats.startTime;
      const rate = ((stats.profanityCount / stats.totalRequests) * 100).toFixed(2);

      return res.json({
        ...stats,
        uptime: \`\${Math.round(uptime / 1000)}s\`,
        profanityRate: \`\${rate}%\`,
        topWords: Object.entries(stats.topWords)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 10)
          .reduce((obj, [word, count]) => ({ ...obj, [word]: count }), {})
      });
    }

    next();
  };
}

/**
 * EXAMPLE 7: Replacement Policy Middleware
 * Apply different replacement policies based on context
 */
export function replacementPolicyMiddleware(policy = 'strict') {
  return (req, res, next) => {
    const { content } = req.body || {};

    if (typeof content === 'string') {
      let cleaned;

      switch (policy) {
        case 'strict':
          cleaned = profanity.clean(content, '*');
          break;
        case 'moderate':
          cleaned = profanity.cleanWithPlaceholder(content, '[***]');
          break;
        case 'light':
          cleaned = profanity.cleanWithPlaceholder(content, 'X');
          break;
        case 'none':
          cleaned = content;
          break;
        default:
          cleaned = profanity.cleanWithPlaceholder(content);
      }

      req.body.content = cleaned;
    }

    next();
  };
}

/**
 * EXAMPLE 8: Rate Limiting per User
 * Track user's profanity usage and enforce limits
 */
export function userProfanityLimitMiddleware(requestsPerMinute = 10, profanityLimit = 3) {
  const userStats = new Map();

  return (req, res, next) => {
    const userId = req.body?.userId || req.ip;
    const now = Date.now();
    const windowStart = now - 60000; // 1 minute window

    if (!userStats.has(userId)) {
      userStats.set(userId, { requests: [], profanity: 0 });
    }

    const user = userStats.get(userId);

    // Clean old requests outside the window
    user.requests = user.requests.filter(time => time > windowStart);

    // Check rate limit
    if (user.requests.length >= requestsPerMinute) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        retryAfter: '1 minute'
      });
    }

    // Check profanity in this request
    const { content } = req.body || {};
    if (typeof content === 'string') {
      const result = profanity.detect(content);
      if (result.hasProfanity) {
        user.profanity++;
        
        if (user.profanity >= profanityLimit) {
          return res.status(403).json({
            error: 'Too many profanity violations',
            violations: user.profanity,
            limit: profanityLimit
          });
        }
      }
    }

    user.requests.push(now);
    next();
  };
}

/**
 * EXAMPLE 9: Language Detection Middleware
 * Automatically detect language and apply appropriate filter
 */
export function languageDetectionMiddleware() {
  const languageKeywords = {
    hindi: ['है', 'को', 'में', 'से', 'एक'],
    french: ['le', 'la', 'de', 'et', 'des'],
    spanish: ['el', 'la', 'de', 'y', 'los'],
    tamil: ['என்', 'ு', 'ி', 'ு', 'ை']
  };

  return (req, res, next) => {
    const { content } = req.body || {};

    if (typeof content === 'string') {
      let detectedLang = 'english';

      for (const [lang, keywords] of Object.entries(languageKeywords)) {
        const matches = keywords.filter(kw => content.includes(kw)).length;
        if (matches > 0) {
          detectedLang = lang;
          profanity.loadLanguage(lang);
          break;
        }
      }

      req.detectedLanguage = detectedLang;
    }

    next();
  };
}

/**
 * EXAMPLE 10: Caching Middleware
 * Cache profanity detection results for common inputs
 */
export function cachingMiddleware(maxSize = 1000) {
  const cache = new Map();

  return (req, res, next) => {
    const { content } = req.body || {};

    if (typeof content === 'string') {
      const cacheKey = \`content:\${content}\`;

      if (cache.has(cacheKey)) {
        req.cachedResult = cache.get(cacheKey);
        req.fromCache = true;
      } else {
        req.fromCache = false;

        // Intercept the result
        const originalSend = res.send;
        res.send = function(data) {
          if (req.body.content === content) {
            cache.set(cacheKey, data);

            // Limit cache size
            if (cache.size > maxSize) {
              const firstKey = cache.keys().next().value;
              cache.delete(firstKey);
            }
          }

          return originalSend.call(this, data);
        };
      }
    }

    next();
  };
}

/**
 * Usage Examples:
 * 
 * app.use(loggingMiddleware);
 * app.use(ratingLimitMiddleware(3));
 * app.use(escalationMiddleware(2));
 * app.use(multiFieldValidationMiddleware(['content', 'title']));
 * app.use(analyticsMiddleware());
 * app.use(replacementPolicyMiddleware('moderate'));
 * app.use(userProfanityLimitMiddleware(20, 5));
 * app.use(languageDetectionMiddleware());
 * app.use(cachingMiddleware(500));
 */
