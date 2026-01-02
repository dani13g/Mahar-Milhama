/**
 * Navbar Component
 * 
 * Shared navigation component used across all pages.
 * Features:
 * - Active route highlighting (uses React Router's useLocation)
 * - Sticky positioning with backdrop blur
 * - Responsive design (mobile menu button visible on small screens)
 * - Accessibility: ARIA labels for screen readers
 * 
 * Note: Mobile menu functionality (toggle) not yet implemented.
 * 
 * Dependencies: React, React Router DOM, IMAGE_URLS, ROUTES (global)
 */

(function() {
    'use strict';
    
    // Ensure React and React Router are available
    if (typeof React === 'undefined' || typeof ReactRouterDOM === 'undefined') {
        console.error('Navbar: React or React Router not loaded');
        return;
    }
    
    const { Link, useLocation } = ReactRouterDOM;
    
    const Navbar = () => {
        const location = useLocation();
        // Use utility function for route checking (if available, fallback to inline)
        const isActive = (path) => {
            if (typeof window !== 'undefined' && window.RoutingUtils) {
                return window.RoutingUtils.isActiveRoute(location.pathname, path);
            }
            return location.pathname === path;
        };

        return (
            React.createElement('nav', {
                className: "sticky top-0 z-50 border-b border-white/10 bg-background-dark/95 backdrop-blur-md",
                'aria-label': "ניווט ראשי"
            },
                React.createElement('div', { className: "flex justify-center w-full" },
                    React.createElement('div', { className: "flex max-w-[1400px] flex-1 flex-col" },
                        React.createElement('header', { className: "flex items-center whitespace-nowrap px-6 py-4 lg:px-10" },
                            React.createElement(Link, {
                                to: window.ROUTES?.HOME || '/',
                                className: "flex items-center text-white flex-shrink-0",
                                'aria-label': "עבור לדף הבית"
                            },
                                React.createElement('img', {
                                    src: window.IMAGE_URLS?.logo || '/images/minimal-black-logo.png',
                                    alt: "מחר מלחמה - לוגו",
                                    className: "h-10 w-auto",
                                    loading: "eager"
                                })
                            ),
                            React.createElement('div', {
                                className: "hidden md:flex flex-1 justify-center gap-8 items-center",
                                role: "navigation",
                                'aria-label': "תפריט ניווט"
                            },
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.HOME || '/') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.HOME || '/',
                                    'aria-label': "עבור לדף הבית"
                                }, "דף הבית"),
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.TEAM || '/team') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.TEAM || '/team',
                                    'aria-label': "עבור לדף הצוות"
                                }, "הצוות"),
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.METHOD || '/method') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.METHOD || '/method',
                                    'aria-label': "עבור לדף השיטה"
                                }, "השיטה"),
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.ARTICLES || '/articles') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.ARTICLES || '/articles',
                                    'aria-label': "עבור לדף המאמרים"
                                }, "מאמרים"),
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.CONTACT || '/contact') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.CONTACT || '/contact',
                                    'aria-label': "עבור לדף יצירת קשר"
                                }, "צור קשר"),
                                React.createElement(Link, {
                                    className: `text-sm font-bold transition-colors ${isActive(window.ROUTES?.FAQ || '/faq') ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
                                    to: window.ROUTES?.FAQ || '/faq',
                                    'aria-label': "עבור לדף שאלות נפוצות"
                                }, "שאלות נפוצות")
                            ),
                            React.createElement('div', { className: "flex items-center gap-4 flex-shrink-0" },
                                React.createElement('button', {
                                    className: "group relative px-6 py-2 bg-transparent overflow-hidden rounded-none border border-white/30 hover:border-primary transition-all duration-300",
                                    'aria-label': "הצטרף עכשיו"
                                },
                                    React.createElement('div', { className: "absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full" }),
                                    React.createElement('span', { className: "relative text-white text-sm font-black tracking-widest uppercase group-hover:text-white" }, "הצטרף עכשיו")
                                ),
                                React.createElement('button', {
                                    className: "md:hidden text-white hover:text-primary",
                                    'aria-label': "פתח תפריט",
                                    'aria-expanded': "false"
                                },
                                    React.createElement('span', {
                                        className: "material-symbols-outlined",
                                        'aria-hidden': "true"
                                    }, "menu")
                                )
                            )
                        )
                    )
                )
            )
        );
    };
    
    // Export to global scope
    if (typeof window !== 'undefined') {
        window.Navbar = Navbar;
    }
})();

