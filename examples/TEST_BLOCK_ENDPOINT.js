#!/usr/bin/env node

/**
 * Block Endpoint Test Cases
 * 
 * Copy-paste these test bodies to verify /block endpoint behavior
 */

// TEST 1: Clean Content (Should be ACCEPTED - 200)
const test1 = {
  description: "Clean content - should ACCEPT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "This is a clean message"
  },
  expectedStatus: 200,
  expectedResponseContains: "success"
};

// TEST 2: Single Bad Word (Should be REJECTED - 400)
const test2 = {
  description: "Single bad word - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "This is bullshit"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 3: Multiple Bad Words (Should be REJECTED - 400)
const test3 = {
  description: "Multiple bad words - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "What the fuck is this bullshit"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 4: Leet Speak Bad Word (Should be REJECTED - 400)
const test4 = {
  description: "Leet speak - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "You are a f#ck1ng a55hole"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 5: Hindi Bad Word (Should be REJECTED - 400)
const test5 = {
  description: "Hindi profanity (Devanagari) - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "यह एक चूतिया परीक्षण है"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 6: Hindi Hinglish (Roman) (Should be REJECTED - 400)
const test6 = {
  description: "Hindi profanity (Roman/Hinglish) - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "Yeh ek chutiya test hai"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 7: Empty String (Should be ACCEPTED - 200)
const test7 = {
  description: "Empty string - should ACCEPT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: ""
  },
  expectedStatus: 200,
  expectedResponseContains: "success"
};

// TEST 8: Mixed Good and Bad (Should be REJECTED - 400)
const test8 = {
  description: "Mixed clean and profanity - should REJECT",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: "Hello friend, this is fucking bullshit and chutiya content"
  },
  expectedStatus: 400,
  expectedResponseContains: "error"
};

// TEST 9: No Content Field (Should be ACCEPTED - 200)
const test9 = {
  description: "No content field - should ACCEPT (skip check)",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    title: "Some title",
    other: "field"
  },
  expectedStatus: 200,
  expectedResponseContains: "success"
};

// TEST 10: Non-String Content (Should be ACCEPTED - 200)
const test10 = {
  description: "Non-string content - should ACCEPT (skip check)",
  method: "POST",
  url: "http://localhost:3000/block",
  body: {
    content: 12345
  },
  expectedStatus: 200,
  expectedResponseContains: "success"
};

// ============================================================================
// CURL COMMANDS - Copy and paste into terminal
// ============================================================================

export const curlCommands = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                    /block Endpoint Test Commands                          ║
║                                                                            ║
║ Make sure server is running: npm start                                    ║
╚═══════════════════════════════════════════════════════════════════════════╝

TEST 1: Clean Content (Should be 200 - ACCEPTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"This is a clean message"}'

Expected: HTTP 200 OK with "success" in response


TEST 2: Single Bad Word (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"This is bullshit"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 3: Multiple Bad Words (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"What the fuck is this bullshit"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 4: Leet Speak (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"You are a f#ck1ng a55hole"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 5: Hindi Devanagari (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"यह एक चूतिया परीक्षण है"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 6: Hindi Hinglish/Roman (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"Yeh ek chutiya test hai"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 7: Empty String (Should be 200 - ACCEPTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":""}'

Expected: HTTP 200 OK with "success" in response


TEST 8: Mixed Clean + Profanity (Should be 400 - REJECTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":"Hello friend, this is fucking bullshit and chutiya content"}'

Expected: HTTP 400 Bad Request with "error" in response


TEST 9: No Content Field (Should be 200 - ACCEPTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Some title", "other":"field"}'

Expected: HTTP 200 OK with "success" in response


TEST 10: Non-String Content (Should be 200 - ACCEPTED)
───────────────────────────────────────────────────────────────────────────
curl -X POST http://localhost:3000/block \\
  -H "Content-Type: application/json" \\
  -d '{"content":12345}'

Expected: HTTP 200 OK with "success" in response

`;

// ============================================================================
// POSTMAN / REST CLIENT IMPORTS
// ============================================================================

export const postmanTests = [
  {
    name: "Test 1: Clean Content - ACCEPT",
    request: {
      method: "POST",
      url: "http://localhost:3000/block",
      header: [{ key: "Content-Type", value: "application/json" }],
      body: { raw: JSON.stringify({ content: "This is a clean message" }) }
    },
    tests: [
      "pm.response.to.have.status(200);",
      "pm.expect(pm.response.text()).to.include('success');"
    ]
  },
  {
    name: "Test 2: Bad Word - REJECT",
    request: {
      method: "POST",
      url: "http://localhost:3000/block",
      header: [{ key: "Content-Type", value: "application/json" }],
      body: { raw: JSON.stringify({ content: "This is bullshit" }) }
    },
    tests: [
      "pm.response.to.have.status(400);",
      "pm.expect(pm.response.text()).to.include('error');"
    ]
  }
];

// ============================================================================
// NODE.JS TEST FUNCTION
// ============================================================================

export async function runTests(baseURL = "http://localhost:3000") {
  const tests = [test1, test2, test3, test4, test5, test6, test7, test8, test9, test10];
  let passed = 0;
  let failed = 0;

  console.log(\`
╔═════════════════════════════════════════════════════════════╗
║            /block Endpoint Test Suite                       ║
║            Running \${tests.length} tests...                    
╚═════════════════════════════════════════════════════════════╝
\`);

  for (const test of tests) {
    try {
      const response = await fetch(\`\${baseURL}/block\`, {
        method: test.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(test.body)
      });

      const text = await response.text();
      const statusOk = response.status === test.expectedStatus;
      const contentOk = text.includes(test.expectedResponseContains);
      const testPassed = statusOk && contentOk;

      if (testPassed) {
        console.log(\`✓ \${test.description}\`);
        console.log(\`  Status: \${response.status} (expected \${test.expectedStatus})\`);
        passed++;
      } else {
        console.log(\`✗ \${test.description}\`);
        if (!statusOk) console.log(\`  ✗ Status: \${response.status} (expected \${test.expectedStatus})\`);
        if (!contentOk) console.log(\`  ✗ Response doesn't contain '\${test.expectedResponseContains}'\`);
        failed++;
      }
    } catch (error) {
      console.log(\`✗ \${test.description} - ERROR: \${error.message}\`);
      failed++;
    }
  }

  console.log(\`
╔═════════════════════════════════════════════════════════════╗
║                      Test Results                           ║
║  Passed: \${passed}/\${tests.length}                                
║  Failed: \${failed}/\${tests.length}                                
╚═════════════════════════════════════════════════════════════╝
\`);

  return { passed, failed, total: tests.length };
}

// ============================================================================
// QUICK SUMMARY TABLE
// ============================================================================

export const testMatrix = \`
┌──────────────────────────────────────────────────────────────────────────┐
│                         /block Endpoint Tests                             │
├─────┬───────────────────────────────────┬──────────┬────────────────────┤
│ No  │ Description                       │ Expected │ Should contain     │
├─────┼───────────────────────────────────┼──────────┼────────────────────┤
│  1  │ Clean content                     │ 200 OK   │ "success"          │
│  2  │ Single bad word (bullshit)        │ 400 ERR  │ "error"            │
│  3  │ Multiple bad words                │ 400 ERR  │ "error"            │
│  4  │ Leet speak (f#ck)                 │ 400 ERR  │ "error"            │
│  5  │ Hindi (Devanagari)                │ 400 ERR  │ "error"            │
│  6  │ Hindi (Roman/Hinglish)            │ 400 ERR  │ "error"            │
│  7  │ Empty string                      │ 200 OK   │ "success"          │
│  8  │ Mixed clean + profanity           │ 400 ERR  │ "error"            │
│  9  │ No content field                  │ 200 OK   │ "success"          │
│ 10  │ Non-string content                │ 200 OK   │ "success"          │
└─────┴───────────────────────────────────┴──────────┴────────────────────┘

KEY POINT: 
  ✓ If status is 200 with "success" → Content ACCEPTED (no profanity)
  ✓ If status is 400 with "error"   → Content REJECTED (profanity found)
  ✓ "Content accepted" should ONLY appear with 200 status
  ✓ Error details should appear with 400 status
\`;

// Print test matrix
console.log(testMatrix);
console.log(curlCommands);
