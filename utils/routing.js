/**
 * Routing Utilities
 * 
 * Helper functions for routing and navigation
 */

/**
 * Check if current route matches target path
 * @param {string} currentPath - Current route pathname
 * @param {string} targetPath - Target path to check
 * @returns {boolean} True if paths match
 */
const isActiveRoute = (currentPath, targetPath) => {
    return currentPath === targetPath;
};

/**
 * Get route path from route constant
 * @param {string} routeKey - Key from ROUTES object (e.g., 'HOME', 'TEAM')
 * @returns {string} Route path
 */
const getRoute = (routeKey) => {
    if (typeof window !== 'undefined' && window.ROUTES) {
        return window.ROUTES[routeKey] || '/';
    }
    return '/';
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.RoutingUtils = {
        isActiveRoute,
        getRoute
    };
}

