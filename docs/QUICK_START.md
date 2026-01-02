# Quick Start Guide

## For New Developers

### 1. Understanding the Project
- **Type:** Static React SPA (Single Page Application)
- **Main File:** `index.html` (contains everything)
- **Status:** Production build output

### 2. Local Development
```bash
# Install dependencies (if any)
npm install

# Start server
npm run serve          # http://localhost:8000
npm run serve:3001     # http://localhost:3001

# Run tests
npm run headless-check
```

### 3. Making Changes

**Content Updates:**
- Edit `index.html` directly
- Find component (e.g., `const HomePage = () => {`)
- Make changes
- Test locally

**Image Updates:**
- Images are in `IMAGE_URLS` constant (lines ~195-230)
- When images change, update there (ONE place!)
- See `IMAGE_MIGRATION_GUIDE.md` for details

**Styling:**
- Tailwind CSS (configured in `<head>`)
- Custom styles in `<style>` tag
- Colors in Tailwind config

### 4. Key Locations

| What | Where |
|------|-------|
| Image URLs | `index.html` lines ~195-230 (`IMAGE_URLS`) |
| Theme Colors | `index.html` lines ~25-36 (Tailwind config) |
| Components | `index.html` lines ~240+ (React components) |
| Local Images | `images/` folder (ready for migration) |

### 5. Important Notes

✅ **DO:**
- Update `IMAGE_URLS` when images change
- Follow file naming conventions (see `FILE_NAMING_GUIDE.md`)
- Test locally before committing
- Optimize images before adding

❌ **DON'T:**
- Edit files in `static/` (build artifacts)
- Use Hebrew in filenames
- Hardcode URLs throughout code
- Commit unoptimized images

### 6. Documentation

- `README.md` - Main overview
- `CODE_AUDIT_REPORT.md` - Code quality audit
- `IMAGE_MIGRATION_GUIDE.md` - Image migration steps
- `PROJECT_STRUCTURE.md` - Detailed structure
- `FILE_NAMING_GUIDE.md` - Naming conventions
- `images/README.md` - Image management

### 7. Common Tasks

**Change an image:**
1. Update `IMAGE_URLS.heroHome = "new-url"`
2. Test locally
3. Commit

**Add new page:**
1. Create new component: `const NewPage = () => { ... }`
2. Add route in `HashRouter`
3. Add link in `Navbar`

**Update colors:**
1. Edit Tailwind config (lines ~25-36)
2. Test all pages for consistency

## Need Help?

Check the documentation files listed above, or review `CODE_AUDIT_REPORT.md` for common issues and solutions.

