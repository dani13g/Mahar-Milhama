# Project Structure Documentation

## Overview

This is a **production build output** repository containing a static React SPA (Single Page Application). The main application is in a single `index.html` file with inline React components.

## Directory Structure

```
Mahar-Milhama/
├── index.html              # Main application file (1,458 lines)
├── about.html              # Legacy page (if still used)
├── programs.html           # Legacy page (if still used)
│
├── images/                 # Local image assets (NEW - for future migration)
│   ├── heroes/             # Hero section backgrounds
│   ├── team/               # Team member photos
│   ├── testimonials/       # Testimonial images
│   ├── articles/           # Article featured images
│   └── textures/           # Background patterns
│
├── static/                 # Build artifacts
│   ├── css/                # Compiled CSS (hashed filenames)
│   ├── js/                 # Compiled JavaScript (hashed filenames)
│   └── media/              # Legacy media files (41MB - needs optimization)
│
├── tools/                  # Development utilities
│   └── headless_check.py   # Playwright smoke test
│
├── logs/                   # Server logs (if any)
│
├── Documentation/
│   ├── README.md           # Quick start guide
│   ├── CODE_AUDIT_REPORT.md  # Code audit findings
│   ├── IMAGE_MIGRATION_GUIDE.md  # Image migration instructions
│   └── PROJECT_STRUCTURE.md  # This file
│
├── package.json            # NPM scripts
├── netlify.toml            # Deployment config
├── robots.txt              # SEO robots file
└── manifest.json           # PWA manifest
```

## File Naming Conventions

### Current Issues
- ❌ Hebrew filenames: `מחר מלחמה.png` (use English names)
- ❌ Mixed case: `HeroImage.jpg` (use kebab-case)
- ❌ Spaces: `background image.png` (use hyphens)

### Recommended Standards

**HTML Files:**
- ✅ `index.html` (lowercase)
- ✅ `about.html` (lowercase)
- ✅ Use kebab-case for new files: `contact-page.html`

**Image Files:**
- ✅ `hero-home.webp` (kebab-case, lowercase)
- ✅ `team-member-1.jpg` (descriptive, numbered if needed)
- ✅ `article-fitness-training.webp` (category-descriptor format)

**JavaScript/CSS:**
- ✅ Already using build hashes: `main.b2520711.js` (auto-generated)
- ✅ Don't manually edit these files

**Documentation:**
- ✅ `README.md` (uppercase, standard)
- ✅ `CODE_AUDIT_REPORT.md` (SCREAMING_SNAKE_CASE for reports)
- ✅ `IMAGE_MIGRATION_GUIDE.md` (descriptive, kebab-case)

## Key Files

### `index.html`
- **Size:** 1,458 lines, ~140KB
- **Purpose:** Contains entire React application
- **Structure:**
  - Head: Meta tags, fonts, Tailwind config, styles
  - Body: React components (Navbar, Footer, Pages)
  - Scripts: React libraries, Babel, app code

### `package.json`
- **Purpose:** NPM scripts for local development
- **Scripts:**
  - `npm run serve` - Start local server on port 8000
  - `npm run serve:3001` - Start on port 3001
  - `npm run headless-check` - Run Playwright tests

### `netlify.toml`
- **Purpose:** Deployment configuration
- **Config:** Redirects all routes to `/index.html` (SPA pattern)

## Image Management

### Current State
- **External:** 32+ images hosted on Google (risky)
- **Local:** `images/` folder created (empty, ready for migration)
- **Legacy:** `static/media/` contains 41MB of old assets

### Migration Plan
1. ✅ Extract URLs to `IMAGE_URLS` constant (DONE)
2. ⏳ Download and optimize images
3. ⏳ Place in `images/` with proper naming
4. ⏳ Update constants to use local paths
5. ⏳ Remove old `static/media/` files

## Constants & Configuration

### Image URLs
**Location:** `index.html` lines ~193-230
```javascript
const IMAGE_URLS = {
    heroHome: "...",
    teamMember1: "...",
    // ...
};
```

### Theme Colors
**Location:** `index.html` lines ~25-36
```javascript
colors: {
    "primary": "#E61A1A",
    "accent": "#39FF14",
    // ...
}
```

## Development Workflow

### Local Development
```bash
# Start server
npm run serve

# Or on specific port
npm run serve:3001

# Run tests
npm run headless-check
```

### Making Changes

**Content Updates:**
- Edit `index.html` directly
- Update `IMAGE_URLS` for image changes
- Update component data arrays for content

**Structural Changes:**
- Consider refactoring source repository instead
- This is a build output - changes may be overwritten

## Best Practices

### ✅ DO
- Use constants for repeated values
- Follow kebab-case naming
- Optimize images before adding
- Test locally before committing
- Update documentation when structure changes

### ❌ DON'T
- Edit files in `static/` (build artifacts)
- Use Hebrew in filenames
- Add unoptimized images
- Commit large files (>1MB)
- Hardcode URLs throughout code

## Future Improvements

1. **Component Extraction:** Split monolithic file into separate components
2. **Build Process:** Set up proper build pipeline
3. **Image CDN:** Move to CDN for better performance
4. **TypeScript:** Add type safety
5. **Testing:** Expand test coverage

