/**
 * Card Component
 * 
 * Reusable card component with hover effects
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.variant - Card variant: 'default' | 'elevated' | 'bordered'
 * @param {boolean} props.hover - Enable hover effects
 * @param {string} props.className - Additional CSS classes
 */

// Note: This is a template for when React components can be properly imported
// For now, we'll use it inline in components, but this shows the pattern

export const Card = ({ 
    children, 
    variant = 'default',
    hover = true,
    className = '',
    ...props 
}) => {
    const baseClasses = 'bg-surface-card border transition-all duration-300';
    
    const variants = {
        default: 'border-white/5',
        elevated: 'border-white/10 shadow-lg',
        bordered: 'border-white/20'
    };
    
    const hoverClasses = hover 
        ? 'hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,42,42,0.2)]'
        : '';
    
    const classes = `
        ${baseClasses}
        ${variants[variant] || variants.default}
        ${hoverClasses}
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.Card = Card;
}

