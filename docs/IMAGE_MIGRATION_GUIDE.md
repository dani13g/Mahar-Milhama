# Image Migration Guide

## Quick Answer: Should We Extract URLs to Constants?

**YES!** Even though images will change soon, extracting them to constants is **MORE important** because:

1. ✅ **Easier Updates:** Change images in one place instead of searching through 1,400+ lines
2. ✅ **Less Errors:** No risk of missing an image URL when updating
3. ✅ **Better Organization:** Clear overview of all images used
4. ✅ **Smooth Migration:** When you replace images, just update the constants

## Migration Strategy

### Phase 1: Extract to Constants (DONE ✅)
All image URLs are now in the `IMAGE_URLS` constant object at the top of `index.html`.

### Phase 2: Download & Optimize Images
1. Download all images from Google URLs
2. Optimize them (compress, convert to WebP)
3. Place in `images/` folder with proper naming

### Phase 3: Update Constants
Replace external URLs with local paths:

```javascript
// Current (external)
const IMAGE_URLS = {
    heroHome: "https://lh3.googleusercontent.com/aida-public/...",
    // ...
};

// After migration (local)
const IMAGE_URLS = {
    heroHome: "/images/heroes/hero-home.webp",
    teamMember1: "/images/team/team-idan-levy.webp",
    // ...
};
```

### Phase 4: Test & Deploy
1. Test all pages locally
2. Verify images load correctly
3. Check file sizes in Network tab
4. Deploy

## File Naming Best Practices

### Current Issues
- ❌ Hebrew filenames: `מחר מלחמה.png` (hard to work with)
- ❌ Spaces in names: `background image 1.png`
- ❌ Mixed case: `HeroImage.jpg`

### Recommended Pattern
```
{category}-{descriptor}-{optional-id}.{ext}

Examples:
- hero-home.webp
- team-idan-levy.webp
- article-fitness-training.webp
- testimonial-roei-cohen.webp
```

## Image Optimization Checklist

For each image:
- [ ] Compressed to target size (< 200KB for heroes)
- [ ] Converted to WebP (or optimized JPG/PNG)
- [ ] Named using kebab-case
- [ ] Placed in correct subdirectory
- [ ] Updated in `IMAGE_URLS` constant
- [ ] Tested locally

## Quick Reference: Current Image URLs

All image URLs are centralized in `index.html`:

```javascript
const IMAGE_URLS = {
    heroHome: "...",
    heroTeam: "...",
    // ... see index.html for full list
};
```

**Location:** Lines ~193-230 in `index.html`

