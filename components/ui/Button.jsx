/**
 * Button Component
 * 
 * Reusable button component with variants
 * 
 * @param {Object} props
 * @param {string} props.variant - Button variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * @param {string} props.size - Button size: 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Full width button
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {string} props.ariaLabel - Accessibility label
 */

// Note: This is a template for when React components can be properly imported
// For now, we'll use it inline in components, but this shows the pattern

export const Button = ({ 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    children, 
    className = '', 
    onClick,
    ariaLabel,
    type = 'button',
    ...props 
}) => {
    const baseClasses = 'font-black uppercase tracking-wider transition-all duration-300 rounded-none';
    
    const variants = {
        primary: 'bg-primary hover:bg-primary-hover text-white border border-primary shadow-[0_0_30px_rgba(230,26,26,0.3)]',
        secondary: 'bg-white/10 hover:bg-primary text-white border border-white/10 hover:border-primary',
        outline: 'bg-transparent border border-white/30 hover:border-primary text-white',
        ghost: 'bg-transparent hover:bg-white/5 text-white border border-transparent'
    };
    
    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-10 py-4 text-lg'
    };
    
    const classes = `
        ${baseClasses}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
    `.trim().replace(/\s+/g, ' ');
    
    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </button>
    );
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.Button = Button;
}

