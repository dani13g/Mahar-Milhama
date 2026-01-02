/**
 * Section Component
 * 
 * Reusable section wrapper with consistent styling
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.variant - Section variant: 'default' | 'dark' | 'light'
 * @param {boolean} props.container - Wrap in max-width container
 * @param {string} props.className - Additional CSS classes
 */

// Note: This is a template for when React components can be properly imported
// For now, we'll use it inline in components, but this shows the pattern

export const Section = ({ 
    children, 
    variant = 'default',
    container = true,
    className = '',
    ...props 
}) => {
    const baseClasses = 'py-16 lg:py-32';
    
    const variants = {
        default: 'bg-surface-dark',
        dark: 'bg-background-dark',
        light: 'bg-surface-light'
    };
    
    const classes = `
        ${baseClasses}
        ${variants[variant] || variants.default}
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    const content = container ? (
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            {children}
        </div>
    ) : children;
    
    return (
        <section className={classes} {...props}>
            {content}
        </section>
    );
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.Section = Section;
}

