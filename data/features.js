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
        desc: "כל המאמנים שלנו לוחמי מילואים פעילים בוגרי היחידות המובחרות עם הניסיון הפיקודי וההדרכתי הדרוש." 
    },
    { 
        icon: "fitness_center", 
        title: "סימולציות קרב", 
        desc: "לא רק אימונים של שעה וחצי! אנחנו מדמים אחד לאחד את ימי הסיירות והגיבושים בסימולציות הספציפיות ביותר עם שטח מדמה ומשוב אישי מהמגבשים - כדי שלא תעשו שום טעות ברגע האמת." 
    },
    { 
        icon: "psychology", 
        title: "חוסן מנטלי", 
        desc: "הכושר הפיזי מביא אותך רק עד לגבול מסוים, אנחנו בונים לך את היכולות המנטליות הכי חזקות בצוות כדי שברגע האמת אתה תהיה זה שמוביל." 
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.FEATURES = FEATURES;
}

