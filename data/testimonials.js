/**
 * Testimonials Data
 * 
 * @typedef {Object} Testimonial
 * @property {string} name - Name (may be abbreviated)
 * @property {string} unit - Military unit
 * @property {string} img - Image URL
 * @property {string} quote - Testimonial quote
 */

/**
 * @type {Testimonial[]}
 */
const TESTIMONIALS = [
    { 
        name: "רועי כ.", 
        unit: "סיירת מטכ״ל", 
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdqRNVmRsQaJ_tgGNDRxA_5LgzZ6nI1MwbdHYO2PecjAkamwEnQMTR5znOtGiMLQj0jmLRUO_SqwVa5gnlPJDSh0ebAHIiasLT_JtTvGYnf6GuqsGCG_ebjx3N6WNneQzZ_K1RJDi4XaO5MfrTWWlzNnYa2XJweTIue66ifDBAX6OAGS-jfC8z4Jmjg9K58TtCLjmOzftIDUWW_PjcU_4aRDjJn-G6BU_KVizeJHE5YWoZ4u_-NwUPnFXPt2rFWw3fHGrY_2ih3R_v", 
        quote: '"100% מהבוגרים שלנו עברו את הגיבוש. האימונים כאן הם לא משחק ילדים. הכינו אותי לרגעים הכי קשים בגיבוש, וברגע האמת - פשוט ידעתי שאני לא נשבר."' 
    },
    { 
        name: "עידו ל.", 
        unit: "שייטת 13", 
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZQPqeyisGvD-hOvr-B1bnc_PWVVOT1OwJBEuKDPCtkxMXunRHMNeCd4AB0vzVzbso-wQ-ef4Gs6EUZ_QLsRaEgulsLeoaOb-Uj-1CBv0ZwsOA-NFZ2R13e98xPPaNZlv_4I2iDexgREPsTglzkYx5t0uEUwg3Uo-Hjtzjj5JgRQFviFaTxkAvLRudfeB9yX74IWhX8ImkAyz0DwKnHS6scTwtIpwuk-V3xPgiRHLiifPL1py0r37uz9bU0Y39wI7K-_zwguTVGgT", 
        quote: '"שינה לי את החיים מקצה לקצה. הגעתי ילד, יצאתי לוחם. המנטליות שנבנתה כאן מלווה אותי כל יום בשירות."' 
    },
    { 
        name: "דניאל א.", 
        unit: "יחידת שלדג", 
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1074rHjTtmqNlkuE7_qKylTqex095H7iMqUC6HDgKXKxtxUHUWBN3iHUHjU09pNdFRq-NKt0noQP76rraiLOEmtvpNimPbuxuN-xeSyeOZEmbirRqcw959e1eHfzCwjDkk3HkTJVAd8BIceFFlAeN2jspC61rAhpKBE5uDv2p-FKudVyoejWU8sO0ZSsa4BwxrvIcL8lnzaITb59P7S1h8zz7IK1RRaquCEdgn8Bd8Aif6Wu49zWJxGAf615ILNT755mlApPoYEx_", 
        quote: '"הכנה מנטלית ופיזית ברמה אחרת. המדריכים הם אנשי מקצוע שלא מוותרים לך על מילימטר. תודה על הכל."' 
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.TESTIMONIALS = TESTIMONIALS;
}

