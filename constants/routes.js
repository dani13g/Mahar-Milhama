/**
 * Route Constants
 * 
 * Centralized route paths for the application.
 * Use these constants instead of hardcoded strings to avoid typos and enable easy refactoring.
 */

const ROUTES = {
    HOME: '/',
    TEAM: '/team',
    METHOD: '/method',
    ARTICLES: '/articles',
    ARTICLE_DETAIL: '/articles/:id',
    CONTACT: '/contact',
    FAQ: '/faq'
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.ROUTES = ROUTES;
}

