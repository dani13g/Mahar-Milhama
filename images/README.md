# Images Directory

This folder contains all local image assets for the Mahar Milhama website.

## Directory Structure

```
images/
├── heroes/          # Hero section background images
├── team/            # Team member photos
├── testimonials/    # Testimonial profile images
├── articles/        # Article featured images
├── icons/           # Icon files (if any)
└── textures/        # Background textures and patterns
```

## Image Naming Convention

Use kebab-case (lowercase with hyphens) for all image files:

**Good:**
- `hero-home.jpg`
- `team-member-idan-levy.jpg`
- `article-fitness-training.jpg`

**Bad:**
- `Hero_Home.jpg` (mixed case, underscore)
- `team member 1.png` (spaces)
- `מחר מלחמה.png` (Hebrew characters - use English names)

## Image Requirements

### Format
- **Preferred:** WebP (best compression)
- **Fallback:** JPG for photos, PNG for graphics with transparency
- **Avoid:** GIF (unless animated)

### Size Guidelines
- **Hero images:** Max 1920px width, < 200KB
- **Team photos:** 800x800px, < 100KB
- **Article thumbnails:** 1200x675px (16:9), < 150KB
- **Icons:** 64x64px or SVG, < 20KB

### Optimization
Before adding images:
1. Compress using [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
2. Convert to WebP when possible
3. Ensure file size is under guidelines above

## Migration from External URLs

When replacing Google-hosted images:

1. Download the image
2. Optimize and rename according to convention
3. Place in appropriate subdirectory
4. Update `IMAGE_URLS` constant in `index.html`
5. Test locally before committing

Example:
```javascript
// Before (external)
heroHome: "https://lh3.googleusercontent.com/aida-public/..."

// After (local)
heroHome: "/images/heroes/hero-home.webp"
```

## Current Status

- [ ] Hero images migrated
- [ ] Team photos migrated
- [ ] Testimonial images migrated
- [ ] Article images migrated
- [ ] All images optimized

