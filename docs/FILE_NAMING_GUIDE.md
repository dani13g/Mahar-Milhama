# File Naming Guide

## Current Issues Found

### ❌ Problem Files
- `מחר מלחמה.png` - Hebrew characters in filename (hard to work with in terminals, some systems)
- Files in `static/media/` with Hebrew names and spaces

### ✅ Good Examples
- `index.html` - lowercase, descriptive
- `package.json` - standard naming
- `robots.txt` - standard naming

## Naming Standards

### HTML Files
✅ **DO:**
- Use lowercase: `index.html`, `about.html`
- Use kebab-case for new files: `contact-page.html`, `faq-page.html`
- Keep it descriptive but short

❌ **DON'T:**
- Use spaces: `contact page.html`
- Use underscores: `contact_page.html` (kebab-case preferred)
- Use mixed case: `ContactPage.html`

### Image Files
✅ **DO:**
- Use kebab-case: `hero-home.webp`
- Use descriptive names: `team-idan-levy.jpg`
- Include category: `article-fitness-training.webp`
- Use lowercase: `background-texture.png`

❌ **DON'T:**
- Use Hebrew: `מחר מלחמה.png` → `mahar-milhama.png`
- Use spaces: `background image.png` → `background-image.png`
- Use mixed case: `HeroImage.jpg` → `hero-image.jpg`
- Use special chars: `image@2x.png` → `image-2x.png`

### Documentation Files
✅ **DO:**
- Use SCREAMING_SNAKE_CASE for reports: `CODE_AUDIT_REPORT.md`
- Use kebab-case for guides: `image-migration-guide.md`
- Use UPPERCASE for main README: `README.md`

### JavaScript/CSS
- Build artifacts use hashed names (auto-generated): `main.b2520711.js`
- Don't manually rename these files

## Migration Checklist

For existing files with bad names:

- [ ] Rename `מחר מלחמה.png` → `mahar-milhama-logo.png`
- [ ] Check `static/media/` for Hebrew/spaced filenames
- [ ] Update any references in code after renaming
- [ ] Test that images still load after rename

## Quick Reference

| Type | Format | Example |
|------|--------|---------|
| HTML | lowercase, kebab-case | `contact-page.html` |
| Images | kebab-case, lowercase | `hero-home.webp` |
| Docs | kebab-case or SCREAMING_SNAKE | `README.md`, `AUDIT_REPORT.md` |
| Config | lowercase, dots | `package.json`, `.gitignore` |

