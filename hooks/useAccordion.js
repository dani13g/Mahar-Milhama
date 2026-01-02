/**
 * useAccordion Hook
 * 
 * Custom React hook for managing accordion/collapsible state
 * 
 * @param {number} defaultIndex - Default open index (-1 for none, 0+ for specific index)
 * @returns {Object} { openIndex, toggle, setOpen }
 * 
 * @example
 * const { openIndex, toggle } = useAccordion(0);
 * // In component:
 * <details open={openIndex === i} onClick={() => toggle(i)}>
 */

// Note: This is a template for when React hooks can be properly imported
// For now, we'll use it inline in components, but this shows the pattern

const useAccordion = (defaultIndex = -1) => {
    const [openIndex, setOpenIndex] = React.useState(defaultIndex);
    
    /**
     * Toggle accordion item
     * @param {number} index - Index to toggle
     */
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };
    
    /**
     * Set specific index as open
     * @param {number} index - Index to open (-1 to close all)
     */
    const setOpen = (index) => {
        setOpenIndex(index);
    };
    
    return { openIndex, toggle, setOpen };
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.useAccordion = useAccordion;
}

