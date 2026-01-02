/**
 * Validation Utilities
 * 
 * Helper functions for form validation
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
const validateEmail = (email) => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate phone number (Israeli format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
const validatePhone = (phone) => {
    if (!phone) return false;
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Israeli phone: 9-10 digits, starting with 0 or +972
    return digits.length >= 9 && digits.length <= 10;
};

/**
 * Validate required field
 * @param {string} value - Value to check
 * @returns {boolean} True if value exists
 */
const validateRequired = (value) => {
    return value !== null && value !== undefined && String(value).trim().length > 0;
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.ValidationUtils = {
        validateEmail,
        validatePhone,
        validateRequired
    };
}

