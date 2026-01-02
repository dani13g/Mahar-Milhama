#!/usr/bin/env node

/**
 * Basic Accessibility Check Script
 * 
 * Performs basic accessibility checks on the HTML:
 * - Missing alt attributes on images
 * - Missing aria-labels on interactive elements
 * - Missing semantic HTML tags
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];

console.log('♿ Accessibility Check\n');

const indexPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found');
    process.exit(1);
}

const content = fs.readFileSync(indexPath, 'utf8');

// Check for images without alt
const imgRegex = /<img[^>]*>/gi;
const images = content.match(imgRegex) || [];
images.forEach((img, i) => {
    if (!img.includes('alt=')) {
        warnings.push(`Image ${i + 1} missing alt attribute: ${img.substring(0, 50)}...`);
    }
});

// Check for buttons without aria-label
const buttonRegex = /<button[^>]*>/gi;
const buttons = content.match(buttonRegex) || [];
let buttonsWithoutLabel = 0;
buttons.forEach((btn) => {
    if (!btn.includes('aria-label') && !btn.includes('aria-labelledby')) {
        buttonsWithoutLabel++;
    }
});

// Check for semantic HTML
const hasNav = content.includes('<nav') || content.includes('role="navigation"');
const hasMain = content.includes('<main') || content.includes('role="main"');
const hasFooter = content.includes('<footer');

// Summary
console.log('📊 Results:');
console.log(`  - Images: ${images.length} found`);
console.log(`  - Buttons: ${buttons.length} found`);
if (buttonsWithoutLabel > 0) {
    warnings.push(`${buttonsWithoutLabel} buttons without aria-label`);
    console.log(`  ⚠️  ${buttonsWithoutLabel} buttons missing aria-label`);
} else {
    console.log(`  ✅ All buttons have aria-labels`);
}

console.log(`\n🏗️  Semantic HTML:`);
console.log(`  ${hasNav ? '✅' : '❌'} Navigation element`);
console.log(`  ${hasMain ? '✅' : '❌'} Main element`);
console.log(`  ${hasFooter ? '✅' : '❌'} Footer element`);

if (warnings.length > 0) {
    console.log(`\n⚠️  Warnings (${warnings.length}):`);
    warnings.slice(0, 5).forEach(w => console.log(`  - ${w}`));
    if (warnings.length > 5) {
        console.log(`  ... and ${warnings.length - 5} more`);
    }
}

if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(e => console.log(`  - ${e}`));
    process.exit(1);
}

console.log('\n✅ Basic accessibility checks passed');
process.exit(0);

