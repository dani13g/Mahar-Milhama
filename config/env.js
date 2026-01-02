/**
 * Environment Configuration
 * 
 * Centralized environment settings for different deployment environments.
 * Automatically detects environment based on hostname/URL.
 */

const ENV = {
    // Detect environment
    isDevelopment: typeof window !== 'undefined' && (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname.includes('localhost')
    ),
    isProduction: typeof window !== 'undefined' && (
        window.location.hostname === 'mahar-milhama.co.il' ||
        window.location.hostname.includes('mahar-milhama')
    ),
    
    // API Configuration (if needed in future)
    apiUrl: '',
    
    // Analytics (if needed)
    googleAnalyticsId: '',
    
    // Feature Flags
    features: {
        enableAnalytics: false,
        enableErrorTracking: false,
        enablePerformanceMonitoring: false
    },
    
    // Debug Mode
    debug: typeof window !== 'undefined' && window.location.search.includes('debug=true'),
    
    // Logging
    logLevel: typeof window !== 'undefined' && (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    ) ? 'debug' : 'error'
};

// Helper functions
ENV.isDev = () => ENV.isDevelopment;
ENV.isProd = () => ENV.isProduction;
ENV.isDebug = () => ENV.debug;

// Logging utility
ENV.log = (level, ...args) => {
    if (ENV.debug || ENV.logLevel === 'debug' || level === 'error') {
        console[level](`[${ENV.isDevelopment ? 'DEV' : 'PROD'}]`, ...args);
    }
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.ENV = ENV;
}

