/**
 * Team Members Data
 * 
 * @typedef {Object} TeamMember
 * @property {string} name - Full name in Hebrew
 * @property {string} role - Job title/role (empty string if none)
 * @property {string} unit - Military unit background
 * @property {string} icon - Material Symbols icon name
 * @property {string} img - Image URL
 * @property {string} desc - Description/bio
 * @property {string[]} badges - Array of achievement badges
 */

/**
 * @type {TeamMember[]}
 */
const TEAM_MEMBERS = [
    { 
        name: "שחריה לופט", 
        role: "מנהל ראשי", 
        unit: "מייסד ומנכ\"ל", 
        icon: "military_tech",
        img: "/images/team/Manager.jpg?v=2", 
        desc: "מייסד ומנהל מחר מלחמה. מוביל את החזון וההכשרה ליחידות העילית.",
        badges: ["מייסד", "מנכ\"ל"]
    },
    { 
        name: "ד", 
        role: "", 
        unit: "יוצא דובדבן", 
        icon: "military_tech",
        img: "/images/team/Instructor_Duvdevan.jpg", 
        desc: "מומחה בלוחמה בטרור וקרב מגע. 5 שנות ניסיון בהכשרת לוחמים ביחידות המובחרות ביותר.",
        badges: ["מאמן כושר קרבי בכיר", "מדריך לוט\"ר מוסמך"]
    },
    { 
        name: "מ", 
        role: "", 
        unit: "יוצא מגלן", 
        icon: "sailing",
        img: "/images/team/Instructor_Maglan.jpg", 
        desc: "מדריך קרוספיט ומתמחה בבניית תוכניות אימון ובניית חוסן מנטלי.",
        badges: ["מדריך קרוספיט", "בניית תוכניות אימון", "חוסן מנטלי"]
    },
    { 
        name: "ד", 
        role: "", 
        unit: "יוצא שייטת 13", 
        icon: "pets",
        img: "/images/team/Instructor_shayetet.jpg", 
        desc: "חובב אקסטרים, בעל נסיון מבצעי רב. יורד לפרטים הכי קטנים.",
        badges: ["מדריכת ניווט מבצעי", "קצינה מצטיינת"]
    },
    { 
        name: "ס׳", 
        role: "", 
        unit: "יוצא יחידת מגלן", 
        icon: "target",
        img: "/images/team/Paramedic.jpg", 
        desc: "פרמדיק ופיזיותרפיסט מוסמך בעל קליניקה מובילה. אחראי על תחום הפציעות ובניית תוכניות האימון ב\"מחר מלחמה\".",
        badges: ["פרמדיק", "פיזיותרפיסט", "תחום פציעות"]
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.TEAM_MEMBERS = TEAM_MEMBERS;
}

