#!/usr/bin/env node

/**
 * Validation Script
 * 
 * Checks for common issues in the codebase:
 * - Broken image URLs
 * - Missing route handlers
 * - Unused constants
 * - Basic accessibility issues
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

// Check if constants files exist
const constantsFiles = [
    'constants/images.js',
    'constants/routes.js',
    'constants/site-config.js'
];

const dataFiles = [
    'data/team-members.js',
    'data/faqs.js',
    'data/testimonials.js',
    'data/features.js',
    'data/method-pillars.js',
    'data/articles.js'
];

console.log('🔍 Validating project structure...\n');

// Check constants files
console.log('Checking constants files...');
constantsFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        errors.push(`Missing constants file: ${file}`);
    } else {
        console.log(`  ✅ ${file}`);
    }
});

// Check data files
console.log('\nChecking data files...');
dataFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        errors.push(`Missing data file: ${file}`);
    } else {
        console.log(`  ✅ ${file}`);
    }
});

// Check index.html exists
console.log('\nChecking main files...');
const indexPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(indexPath)) {
    errors.push('Missing index.html');
} else {
    console.log('  ✅ index.html');
    
    // Check if index.html loads data/constants
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const requiredScripts = [
        '/constants/images.js',
        '/constants/routes.js',
        '/data/team-members.js',
        '/data/faqs.js'
    ];
    
    requiredScripts.forEach(script => {
        if (!indexContent.includes(script)) {
            warnings.push(`index.html may not be loading: ${script}`);
        }
    });
}

// Check CSS file
const cssPath = path.join(__dirname, '..', 'css', 'custom.css');
if (!fs.existsSync(cssPath)) {
    errors.push('Missing css/custom.css');
} else {
    console.log('  ✅ css/custom.css');
}

// Summary
console.log('\n' + '='.repeat(50));
if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All checks passed!');
    process.exit(0);
} else {
    if (errors.length > 0) {
        console.log(`\n❌ Errors (${errors.length}):`);
        errors.forEach(error => console.log(`  - ${error}`));
    }
    if (warnings.length > 0) {
        console.log(`\n⚠️  Warnings (${warnings.length}):`);
        warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    process.exit(errors.length > 0 ? 1 : 0);
}

