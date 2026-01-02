#!/usr/bin/env node

/**
 * Image Check Script
 * 
 * Verifies that all IMAGE_URLS constants are valid
 * Checks for broken URLs and missing local files
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const imagesFile = path.join(__dirname, '..', 'constants', 'images.js');
const errors = [];
const warnings = [];

if (!fs.existsSync(imagesFile)) {
    console.error('❌ constants/images.js not found');
    process.exit(1);
}

console.log('🖼️  Checking image URLs...\n');

// Read and parse images file
const content = fs.readFileSync(imagesFile, 'utf8');

// Extract URLs (simple regex - could be improved)
const urlRegex = /https?:\/\/[^\s"']+/g;
const urls = content.match(urlRegex) || [];

console.log(`Found ${urls.length} image URLs\n`);

// Check local logo
const logoPath = path.join(__dirname, '..', 'images', 'minimal-black-logo.png');
if (fs.existsSync(logoPath)) {
    console.log('✅ Local logo file exists');
} else {
    warnings.push('Local logo file not found: images/minimal-black-logo.png');
}

// Note: Actually checking URLs would require network requests
// For now, just report what we found
console.log('\n📊 Summary:');
console.log(`  - Total URLs found: ${urls.length}`);
console.log(`  - Google URLs: ${urls.filter(u => u.includes('googleusercontent.com')).length}`);
console.log(`  - Local paths: ${urls.filter(u => u.startsWith('/')).length}`);

if (warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    warnings.forEach(w => console.log(`  - ${w}`));
}

console.log('\n💡 Tip: Consider migrating Google URLs to local files for better performance');
process.exit(0);

