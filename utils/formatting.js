/**
 * Formatting Utilities
 * 
 * Helper functions for formatting data (dates, phone numbers, etc.)
 */

/**
 * Format phone number for display
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
const formatPhone = (phone) => {
    if (!phone) return '';
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Format: XXX-XXX-XXXX
    if (digits.length === 10) {
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return phone;
};

/**
 * Format date string
 * @param {string|Date} date - Date to format
 * @param {string} format - Format string (default: 'DD.MM.YY')
 * @returns {string} Formatted date
 */
const formatDate = (date, format = 'DD.MM.YY') => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return date; // Return original if invalid
    
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2);
    
    return format
        .replace('DD', day)
        .replace('MM', month)
        .replace('YY', year)
        .replace('YYYY', d.getFullYear());
};

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
const truncate = (text, maxLength, suffix = '...') => {
    if (!text || text.length <= maxLength) return text;
    return text.slice(0, maxLength - suffix.length) + suffix;
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.FormattingUtils = {
        formatPhone,
        formatDate,
        truncate
    };
}

