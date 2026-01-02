# Architecture Documentation

## Project Structure

```
Mahar-Milhama/
├── index.html              # Main React application (Babel-transpiled JSX)
├── css/
│   └── custom.css          # Custom styles and utilities
├── js/                     # JavaScript modules (ready for component extraction)
│   ├── app.js              # Application entry point
│   ├── component-registry.js  # Component registry system
│   ├── components/         # Shared components (Navbar, Footer)
│   └── pages/              # Page components (ready for extraction)
├── data/                   # Content data (JSON-like JS files)
│   ├── team-members.js
│   ├── faqs.js
│   ├── testimonials.js
│   ├── features.js
│   ├── method-pillars.js
│   └── articles.js
├── constants/              # Configuration constants
│   ├── images.js           # Image URL constants
│   ├── routes.js           # Route path constants
│   ├── site-config.js      # Site-wide settings
│   └── index.js            # Constants documentation
├── config/                 # Environment configuration
│   └── env.js              # Environment detection and settings
├── utils/                  # Utility functions
│   ├── routing.js          # Route utilities
│   ├── formatting.js       # Data formatting
│   └── validation.js       # Form validation
├── hooks/                  # Custom React hooks
│   └── useAccordion.js     # Accordion state management
├── components/ui/          # Reusable UI components (templates)
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Section.jsx
├── scripts/                # Build and validation scripts
│   ├── validate.js         # Project structure validation
│   ├── check-images.js     # Image URL validation
│   ├── check-accessibility.js  # Accessibility checks
│   └── build-prep.js       # Build preparation
├── images/                 # Local image assets
├── docs/                   # Documentation
└── static/                 # Build artifacts (legacy)
```

## Architecture Overview

### 1. Data Layer
- **Location**: `data/` folder
- **Purpose**: Centralized content management
- **Format**: JavaScript files exporting global variables
- **Benefits**: Single source of truth, easy updates

### 2. Constants Layer
- **Location**: `constants/` folder
- **Purpose**: Configuration and constants
- **Includes**: Image URLs, routes, site config
- **Benefits**: Easy refactoring, type safety hints

### 3. Utilities Layer
- **Location**: `utils/` folder
- **Purpose**: Reusable helper functions
- **Includes**: Routing, formatting, validation
- **Benefits**: DRY principle, testability

### 4. Components Layer
- **Location**: `index.html` (Babel script) + `js/components/`
- **Purpose**: React components
- **Structure**: Shared components (Navbar, Footer) + Page components
- **Note**: Currently inline for Babel compatibility, ready for extraction

### 5. Configuration Layer
- **Location**: `config/` folder
- **Purpose**: Environment-specific settings
- **Features**: Auto-detection, feature flags, logging

## Data Flow

```
1. HTML loads → Scripts load in order:
   - React libraries (CDN)
   - Constants (images, routes, config)
   - Data (team, FAQs, articles, etc.)
   - Utilities & Hooks
   - Environment config

2. Babel transpiles JSX in index.html:
   - Components defined inline
   - Uses global variables from loaded scripts
   - Renders to #root

3. React Router handles navigation:
   - HashRouter for static hosting compatibility
   - Routes defined in App component
   - Components receive data from globals
```

## Component Dependencies

```
App
├── Navbar (uses: ROUTES, IMAGE_URLS, RoutingUtils)
├── Footer (uses: IMAGE_URLS, SITE_CONFIG, ROUTES)
└── Routes
    ├── HomePage (uses: FEATURES, TESTIMONIALS, HOME_BLOG_ARTICLES, IMAGE_URLS, SITE_CONFIG)
    ├── TeamPage (uses: TEAM_MEMBERS, IMAGE_URLS)
    ├── MethodPage (uses: METHOD_PILLARS, IMAGE_URLS)
    ├── ArticlesPage (uses: FEATURED_ARTICLE, SIDEBAR_ARTICLES, ALL_ARTICLES, IMAGE_URLS)
    ├── ContactPage (uses: SITE_CONFIG, IMAGE_URLS)
    └── FAQPage (uses: FAQS, useAccordion, IMAGE_URLS)
```

## Loading Order

**Critical**: Scripts must load in this order:

1. React libraries (React, ReactDOM, React Router)
2. Constants (IMAGE_URLS, ROUTES, SITE_CONFIG)
3. Data (TEAM_MEMBERS, FAQS, etc.)
4. Utilities & Hooks
5. Environment config
6. Babel script (components)

## Best Practices

1. **Always use constants** - Never hardcode routes or image URLs
2. **Check for globals** - Use `typeof window !== 'undefined'` checks
3. **Provide fallbacks** - Always have default values
4. **Update data in one place** - Edit data files, not components
5. **Run validation** - Use `npm run check:all` before deployment

## Future Enhancements

- Extract components to separate JSX files
- Implement proper build system (Webpack/Vite)
- Add TypeScript support
- Create component library
- Implement proper module system

