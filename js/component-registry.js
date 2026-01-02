/**
 * Component Registry
 * 
 * Central registry for all React components.
 * This provides a clean way to manage component dependencies and loading order.
 * 
 * Components are currently defined inline in index.html (Babel script),
 * but this registry can be extended to load components from separate files.
 */

(function() {
    'use strict';
    
    const ComponentRegistry = {
        // Component definitions (will be populated from index.html)
        components: {},
        
        // Register a component
        register: function(name, component) {
            this.components[name] = component;
            if (typeof window !== 'undefined') {
                window[name] = component;
            }
        },
        
        // Get a component
        get: function(name) {
            return this.components[name];
        },
        
        // Check if component exists
        has: function(name) {
            return name in this.components;
        },
        
        // List all registered components
        list: function() {
            return Object.keys(this.components);
        }
    };
    
    // Export to global scope
    if (typeof window !== 'undefined') {
        window.ComponentRegistry = ComponentRegistry;
    }
})();

