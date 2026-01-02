/**
 * Site Configuration
 * 
 * Centralized site-wide settings and configuration.
 * Update contact information, social links, and other site metadata here.
 */

const SITE_CONFIG = {
    name: "מחר מלחמה",
    description: "הכנה פיזית ומנטלית לשירות משמעותי",
    contact: {
        phone: "050-123-4567",
        email: "info@mahar-milhama.co.il",
        whatsapp: "#" // TODO: Add actual WhatsApp link
    },
    social: {
        facebook: "#",
        instagram: "#",
        github: "#"
    },
    // Next cycle opening date (format: DD.MM)
    nextCycleDate: "1.10"
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}

