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
        phone: "052-796-0293",
        email: "Maharmilhama212@gmail.com",
        whatsapp: "https://api.whatsapp.com/send/?phone=%2B972527960293&text=%D7%90%D7%A0%D7%99+%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F+%D7%9C%D7%A7%D7%91%D7%9C+%D7%A4%D7%A8%D7%98%D7%99%D7%9D+%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D+%D7%A2%D7%9C+%D7%94%D7%94%D7%9B%D7%A0%D7%94+%D7%A9%D7%9C%D7%9B%D7%9D+&type=phone_number&app_absent=0"
    },
    social: {
        facebook: "https://www.facebook.com/people/%D7%9E%D7%97%D7%A8-%D7%9E%D7%9C%D7%97%D7%9E%D7%94-%D7%9B%D7%95%D7%A9%D7%A8-%D7%A7%D7%A8%D7%91%D7%99/61555785398719/",
        instagram: "https://www.instagram.com/s.l_kosherkravi/"
    },
    // Next cycle opening date (format: DD.MM)
    nextCycleDate: "1.10"
};

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}

