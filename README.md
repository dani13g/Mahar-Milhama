# מחר מלחמה - Mahar Milhama Website

**Production build output** - Static React SPA for military fitness training preparation.

## Quick Start

```bash
# Start local server
npm run serve          # Port 8000
npm run serve:3001     # Port 3001

# Validation & Checks
npm run validate       # Check project structure
npm run check:images   # Check image URLs
npm run check:accessibility  # Check accessibility
npm run check:all      # Run all checks

# Production build (Tailwind CSS + Babel-compiled React)
npm run build         # Build css/tailwind.build.css and dist/app.js
npm run build:prep    # Prepare for deployment
npm run pre-deploy    # Run all checks + build + build:prep

# Testing
npm run headless-check # Run smoke tests
```

## 📁 Project Structure

```
Mahar-Milhama/
├── index.html              # Main React application
├── css/custom.css          # Custom styles
├── data/                   # Content data (team, FAQs, articles, etc.)
├── constants/              # Configuration constants
├── config/                 # Environment configuration
├── utils/                  # Utility functions
├── hooks/                  # Custom React hooks
├── components/ui/          # Reusable UI components
├── scripts/                # Build & validation scripts
├── images/                 # Local image assets
└── docs/                   # Documentation
```

## 📚 Documentation

All documentation is in the `docs/` folder:

- **[CODE_AUDIT_REPORT.md](./docs/CODE_AUDIT_REPORT.md)** - Complete code audit
- **[PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md)** - Detailed structure
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Architecture overview
- **[PHASE_3_SUMMARY.md](./docs/PHASE_3_SUMMARY.md)** - Phase 3 improvements
- **[IMAGE_MIGRATION_GUIDE.md](./docs/IMAGE_MIGRATION_GUIDE.md)** - Image migration guide
- **[QUICK_START.md](./docs/QUICK_START.md)** - Quick reference

## 🚀 Recent Improvements

### Phase 1: Data & Constants Organization
✅ Extracted all data to `data/` files (team, FAQs, articles, testimonials)  
✅ Created `constants/` folder (images, routes, site config)  
✅ Added JSDoc type definitions for better IDE support  
✅ Organized documentation into `docs/` folder

### Phase 2: Utilities & Components
✅ Created utility functions (routing, formatting, validation)  
✅ Added custom React hooks (useAccordion)  
✅ Created reusable UI component templates  
✅ Enhanced package.json with validation scripts

### Phase 3: Build & Configuration
✅ Environment configuration with auto-detection  
✅ Build preparation script with manifest generation  
✅ Accessibility validation script  
✅ Component registry system  
✅ Comprehensive validation suite

### Core Improvements
✅ Production React builds (replaced development versions)  
✅ SEO meta tags (description, Open Graph, Twitter)  
✅ Accessibility (aria-labels, semantic HTML)  
✅ Image constants (centralized URL management)  
✅ Lazy loading (images optimized)

## 📝 Notes

This folder contains the production build output. Use the commands below to run and perform quick checks locally.

## Serve the build (quick)

Start a simple static server (Python):

```bash
cd /Users/dani/Downloads/drive-download-20251222T182659Z-3-001/build
python3 -m http.server 8000
# open in browser (macOS)
open http://localhost:8000
```

Stop the server with `Ctrl+C` in the terminal.

If you prefer a Node-based static server (single-command):

```bash
# using npx (no global install required)
npx serve -s . -l 8000
open http://localhost:8000
```

## Headless smoke test (captures console/page errors + screenshot)

This repo includes a small helper `tools/headless_check.py` which uses Playwright.

Install Playwright and browsers (one-time):

```bash
python3 -m pip install --user playwright
# install chromium for Playwright
/Users/$(whoami)/Library/Python/3.12/bin/playwright install chromium
```

Run the headless check from the `build` folder:

```bash
cd /Users/dani/Downloads/drive-download-20251222T182659Z-3-001/build
python3 tools/headless_check.py

# Output includes a summary and saves a screenshot at:
# headless_check.png
```

If the script reports `SUMMARY: NO_ERRORS_DETECTED` the page loaded without console or page errors during the check.

## Quick manual checks

- Open browser DevTools (Console, Network) and browse the app to surface runtime issues.
- Run Lighthouse (Chrome) for performance/accessibility/SEO suggestions.
- Use `pa11y` or axe DevTools for deeper accessibility scanning.

## Troubleshooting

- If port 8000 is in use, change the port and update the URL.
- To kill a hung server on macOS:

```bash
# find process using port 8000
lsof -i :8000
# kill <pid>
kill <pid>
```

## Next steps (suggested)

- Add CI checks: linting, Playwright smoke test, and accessibility audit.
- If you want, I can add a minimal `package.json` and npm scripts to standardize these commands.
