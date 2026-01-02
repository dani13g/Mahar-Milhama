/**
 * Features/Highlights Data
 * 
 * @typedef {Object} Feature
 * @property {string} icon - Material Symbols icon name
 * @property {string} title - Feature title in Hebrew
 * @property {string} desc - Feature description in Hebrew
 */

/**
 * @type {Feature[]}
 */
const FEATURES = [
    { 
        icon: "military_tech", 
        title: "מדריכים יוצאי סיירות", 
        desc: "כל המדריכים שלנו הם בוגרי יחידות עילית (מטכ״ל, שייטת, שלדג) עם ניסיון פיקודי והדרכתי מוכח בשטח." 
    },
    { 
        icon: "fitness_center", 
        title: "סימולציות קרב", 
        desc: "אנחנו לא רק רצים. אנחנו מדמים מצבי קיצון, זחילות, סחיבת פצועים ואלונקות בתנאים המדויקים של ימי הגיבוש." 
    },
    { 
        icon: "psychology", 
        title: "חוסן מנטלי", 
        desc: "הכושר הפיזי הוא רק ההתחלה. אנחנו בונים לך את הראש הכי חזק בצוות, כדי שברגע האמת - אתה תהיה זה שמוביל." 
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.FEATURES = FEATURES;
}

