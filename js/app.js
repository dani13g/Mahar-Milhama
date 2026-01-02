/**
 * Main Application Entry Point
 * 
 * This file initializes the React application and sets up routing.
 * Components are loaded from the main index.html Babel script, but this
 * provides a clean entry point for the app logic.
 * 
 * Dependencies: React, ReactDOM, ReactRouterDOM (loaded via CDN)
 */

(function() {
    'use strict';
    
    // Wait for DOM and all dependencies to be ready
    function initApp() {
        if (typeof React === 'undefined' || typeof ReactDOM === 'undefined' || typeof ReactRouterDOM === 'undefined') {
            console.error('App: Required dependencies not loaded');
            return;
        }
        
        const { createRoot } = ReactDOM;
        const { HashRouter, Routes, Route } = ReactRouterDOM;
        
        // App component will be defined in index.html Babel script
        // This file serves as documentation and can be extended for app-level logic
        
        // Initialize app when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                const rootElement = document.getElementById('root');
                if (rootElement && window.App) {
                    const root = createRoot(rootElement);
                    root.render(React.createElement(window.App));
                }
            });
        } else {
            const rootElement = document.getElementById('root');
            if (rootElement && window.App) {
                const root = createRoot(rootElement);
                root.render(React.createElement(window.App));
            }
        }
    }
    
    // Initialize when script loads
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initApp, 1);
    } else {
        window.addEventListener('load', initApp);
    }
})();

