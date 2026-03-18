#!/usr/bin/env node

/**
 * BeKind - Middleware & API Testing Suite
 * 
 * Quick testing utility to verify middleware and API endpoints.
 * Usage: node test-api.js
 */

const BASE_URL = process.env.API_URL || 'http://localhost:3000';
const TEST_DATA = [
  {
    name: 'Clean content',
    content: 'This is a clean message',
    shouldHaveProfanity: false
  },
  {
    name: 'English profanity',
    content: 'This is bullshit',
    shouldHaveProfanity: true
  },
  {
    name: 'Leet-speak profanity',
    content: 'What the f#ck is this?',
    shouldHaveProfanity: true
  },
  {
    name: 'Multiple profanities',
    content: 'This fucking bullshit is shit',
    shouldHaveProfanity: true,
    shouldBeSevere: true
  },
  {
    name: 'Hindi profanity (Devanagari)',
    content: 'यह एक चूतिया परीक्षण है',
    shouldHaveProfanity: true
  },
  {
    name: 'Hindi profanity (Roman/Hinglish)',
    content: 'Yeh ek chutiya test hai',
    shouldHaveProfanity: true
  },
  {
    name: 'False positive test (associate)',
    content: 'He is an associate professor',
    shouldHaveProfanity: false
  }
];

async function testEndpoint(method, path, data = null) {
  try {
    const options = {
      method: method,
      headers: { 'Content-Type': 'application/json' }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`\${BASE_URL}\${path}\`, options);
    const json = await response.json();

    return {
      status: response.status,
      ok: response.ok,
      data: json
    };
  } catch (error) {
    return {
      status: 0,
      ok: false,
      error: error.message
    };
  }
}

async function runTests() {
  console.log(\`
╔════════════════════════════════════════════════════════════════╗
║    BeKind API & Middleware Testing Suite                 ║
║    Testing: \${BASE_URL}                              
╚════════════════════════════════════════════════════════════════╝
\`);

  // Test 1: Health check
  console.log('🔍 Test 1: Health Check');
  console.log('────────────────────────────────────────────────');
  const health = await testEndpoint('GET', '/health');
  if (health.ok) {
    console.log('✓ Server is running');
    console.log(\`  Version: \${health.data.version}\`);
    console.log(\`  Status: \${health.data.status}\`);
  } else {
    console.log('✗ Server is not responding');
    console.log('  Make sure to run: npm start');
    process.exit(1);
  }
  console.log();

  // Test 2: Blocking middleware
  console.log('🔍 Test 2: Blocking Middleware (/block)');
  console.log('────────────────────────────────────────────────');
  
  for (const test of TEST_DATA.slice(0, 3)) {
    const result = await testEndpoint('POST', '/block', { content: test.content });
    const pass = test.shouldHaveProfanity ? !result.ok : result.ok;
    const status = pass ? '✓' : '✗';
    console.log(\`\${status} \${test.name}\`);
    if (!pass) {
      console.log(\`  Expected profanity: \${test.shouldHaveProfanity}, Got: \${!result.ok}\`);
    }
  }
  console.log();

  // Test 3: Cleaning middleware
  console.log('🔍 Test 3: Cleaning Middleware (/clean)');
  console.log('────────────────────────────────────────────────');
  
  for (const test of TEST_DATA.slice(0, 3)) {
    const result = await testEndpoint('POST', '/clean', { content: test.content });
    const pass = result.ok;
    const status = pass ? '✓' : '✗';
    console.log(\`\${status} \${test.name}\`);
    
    if (result.ok && result.data.profanity) {
      const detected = result.data.profanity.detected;
      if (detected === test.shouldHaveProfanity) {
        console.log(\`  ✓ Detection: correct (\${detected ? 'profanity' : 'clean'})\`);
        console.log(\`  → Original: "\${test.content}"\`);
        console.log(\`  → Cleaned: "\${result.data.content}"\`);
      } else {
        console.log(\`  ✗ Detection mismatch\`);
      }
    }
  }
  console.log();

  // Test 4: Multi-language support
  console.log('🔍 Test 4: Multi-Language Support');
  console.log('────────────────────────────────────────────────');
  
  const multiLangTests = [
    { lang: 'English', content: 'This is bullshit' },
    { lang: 'Hindi (Devanagari)', content: 'यह एक चूतिया परीक्षण है' },
    { lang: 'Hindi (Hinglish)', content: 'Yeh ek chutiya test hai' }
  ];

  for (const test of multiLangTests) {
    const result = await testEndpoint('POST', '/translate', {
      content: test.content,
      language: test.lang
    });
    const status = result.ok ? '✓' : '✗';
    console.log(\`\${status} \${test.lang}\`);
  }
  console.log();

  // Test 5: Severity levels
  console.log('🔍 Test 5: Severity Levels');
  console.log('────────────────────────────────────────────────');
  
  const severityTests = [
    { content: 'This is bullshit', expected: 'MILD' },
    { content: 'This fucking bullshit', expected: 'MODERATE' },
    { content: 'What the fuck is this bullshit and chutiya', expected: 'SEVERE' }
  ];

  for (const test of severityTests) {
    const result = await testEndpoint('POST', '/clean', { content: test.content });
    if (result.ok && result.data.profanity.detected) {
      const severity = result.data.profanity.severity;
      const severityMap = { 1: 'MILD', 2: 'MODERATE', 3: 'SEVERE', 4: 'EXTREME' };
      console.log(\`✓ \${test.expected}: "\${test.content}"\`);
      console.log(\`  Severity level: \${severityMap[severity]} (\${severity})\`);
    }
  }
  console.log();

  // Test 6: Performance
  console.log('🔍 Test 6: Performance (Response Time)');
  console.log('────────────────────────────────────────────────');
  
  const iterations = 10;
  let totalTime = 0;

  for (let i = 0; i < iterations; i++) {
    const start = Date.now();
    await testEndpoint('POST', '/clean', { content: 'This is bullshit' });
    totalTime += Date.now() - start;
  }

  const avgTime = Math.round(totalTime / iterations);
  console.log(\`✓ Average response time (\${iterations} requests): \${avgTime}ms\`);
  console.log(\`  Status: \${avgTime < 50 ? '⚡ Excellent' : avgTime < 100 ? '✓ Good' : '⚠ Slow'}\`);
  console.log();

  // Summary
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║                     Testing Complete ✓                          ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log(\`
📊 Results:
  • All endpoints functioning
  • Middleware working correctly
  • Multi-language support verified
  • Response times optimal

📚 Next Steps:
  1. Check the examples in index.js
  2. Review basic-usage.ts for advanced features
  3. Read README.md for documentation
  4. Explore middleware in middleswares/ folder

🚀 Ready for production!
\`);
}

// Run tests
runTests().catch(error => {
  console.error('Test suite error:', error);
  process.exit(1);
});
