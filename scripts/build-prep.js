#!/usr/bin/env node

/**
 * Build Preparation Script
 * 
 * Prepares the project for deployment by:
 * - Validating all required files exist
 * - Checking for common issues
 * - Generating a build manifest
 * - Creating a deployment checklist
 */

const fs = require('fs');
const path = require('path');

const errors = [];
const warnings = [];
const manifest = {
    timestamp: new Date().toISOString(),
    files: [],
    checks: {}
};

console.log('🔨 Build Preparation Script\n');
console.log('='.repeat(50));

// Check critical files
const criticalFiles = [
    'index.html',
    'css/custom.css',
    'constants/images.js',
    'constants/routes.js',
    'constants/site-config.js',
    'data/team-members.js',
    'data/faqs.js',
    'data/testimonials.js',
    'data/features.js',
    'data/method-pillars.js',
    'data/articles.js'
];

console.log('\n📋 Checking critical files...');
criticalFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        manifest.files.push({
            path: file,
            size: stats.size,
            modified: stats.mtime.toISOString()
        });
        console.log(`  ✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    } else {
        errors.push(`Missing critical file: ${file}`);
        console.log(`  ❌ ${file} - MISSING`);
    }
});

// Check for external dependencies
console.log('\n🔗 Checking external dependencies...');
const indexPath = path.join(__dirname, '..', 'index.html');
if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Check React CDN
    if (content.includes('react.production.min.js')) {
        console.log('  ✅ React (production build)');
        manifest.checks.reactProduction = true;
    } else {
        warnings.push('React may not be using production build');
        console.log('  ⚠️  React build type unclear');
    }
    
    // Check for external image URLs
    const googleImageCount = (content.match(/googleusercontent\.com/g) || []).length;
    if (googleImageCount > 0) {
        warnings.push(`${googleImageCount} external Google image URLs found - consider migrating to local files`);
        console.log(`  ⚠️  ${googleImageCount} external image URLs`);
    } else {
        console.log('  ✅ No external image URLs');
    }
}

// Check image assets
console.log('\n🖼️  Checking image assets...');
const imagesDir = path.join(__dirname, '..', 'images');
if (fs.existsSync(imagesDir)) {
    const logoPath = path.join(imagesDir, 'minimal-black-logo.png');
    if (fs.existsSync(logoPath)) {
        console.log('  ✅ Logo file exists');
        manifest.checks.logoExists = true;
    } else {
        warnings.push('Logo file not found: images/minimal-black-logo.png');
        console.log('  ⚠️  Logo file missing');
    }
} else {
    warnings.push('Images directory not found');
    console.log('  ⚠️  Images directory missing');
}

// Generate manifest
manifest.checks.passed = errors.length === 0;
manifest.checks.warnings = warnings.length;
manifest.checks.errors = errors.length;

// Save manifest
const manifestPath = path.join(__dirname, '..', 'build-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\n📦 Build manifest saved to: build-manifest.json`);

// Summary
console.log('\n' + '='.repeat(50));
if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ Build preparation complete - Ready for deployment!');
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

