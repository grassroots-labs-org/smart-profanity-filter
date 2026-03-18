#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const configFileName = 'allprofanity.config.json';
const schemaFileName = 'config.schema.json';

// Check if config already exists
if (existsSync(configFileName)) {
  console.log(`❌ ${configFileName} already exists in current directory`);
  console.log('   Delete it first or use a different name');
  process.exit(1);
}

try {
  // Copy example config to current directory
  const examplePath = join(__dirname, '..', 'allprofanity.config.example.json');
  const schemaPath = join(__dirname, '..', 'config.schema.json');

  const configContent = readFileSync(examplePath, 'utf-8');
  const schemaContent = readFileSync(schemaPath, 'utf-8');

  writeFileSync(configFileName, configContent);
  writeFileSync(schemaFileName, schemaContent);

  console.log('✅ BeKind configuration files created!');
  console.log('');
  console.log('Created files:');
  console.log(`  📄 ${configFileName} - Main configuration`);
  console.log(`  📄 ${schemaFileName} - JSON schema for IDE autocomplete`);
  console.log('');
  console.log('Next steps:');
  console.log('  1. Edit allprofanity.config.json to customize settings');
  console.log('  2. Import and use:');
  console.log('');
  console.log('     import { BeKind } from "allprofanity";');
  console.log('     import config from "./allprofanity.config.json";');
  console.log('     const filter = BeKind.fromConfig(config);');
  console.log('');

} catch (error) {
  console.error('❌ Error creating config files:', error.message);
  process.exit(1);
}
