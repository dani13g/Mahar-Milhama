/**
 * Training Method Pillars Data
 * 
 * @typedef {Object} MethodPillar
 * @property {string} num - Number/identifier (e.g., "01")
 * @property {string} icon - Material Symbols icon name
 * @property {string} title - Pillar title in Hebrew
 * @property {string} subtitle - Subtitle in English
 * @property {string} desc - Description in Hebrew
 * @property {string[]} items - Array of key points/items
 */

/**
 * @type {MethodPillar[]}
 */
const METHOD_PILLARS = [
    { 
        num: "01", 
        icon: "fitness_center", 
        title: "פיזי", 
        subtitle: "(Physical)", 
        desc: "בניית בסיס אירובי רחב, כוח פונקציונלי ומסעות משקל הדרגתיים. הכנה מדויקת לעומסים של גיבושי מטכ״ל ושייטת.", 
        items: ["ספרינטים ושינויי כיוון", "זחילות וטיפוס חבל", "אימוני כוח מתפרץ"] 
    },
    { 
        num: "02", 
        icon: "psychology", 
        title: "מנטלי", 
        subtitle: "(Mental)", 
        desc: "הראש נשבר הרבה לפני הגוף. סימולציות קיצון, חוסר ודאות ולחץ קבוצתי לפיתוח חוסן נפשי וקבלת החלטות תחת אש.", 
        items: ["דינמיקה קבוצתית", "התמודדות עם כישלון", "מנהיגות שקטה"] 
    },
    { 
        num: "03", 
        icon: "monitor_heart", 
        title: "ניהול עומסים", 
        subtitle: "(Science)", 
        desc: "שימוש בסרגל מאמצים מדעי כדי להגיע לשיא ביום הגיבוש מבלי להישחק. התאוששות היא נשק טקטי.", 
        items: ["מעקב התקדמות אישי", "תזונה ושינה", "פריודיזציה שנתית"] 
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.METHOD_PILLARS = METHOD_PILLARS;
}

