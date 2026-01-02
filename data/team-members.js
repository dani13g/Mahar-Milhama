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
        name: "עידן לוי", 
        role: "מנהל ראשי", 
        unit: "יוצא סיירת מטכ״ל", 
        icon: "military_tech",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtNoRS2yZLP116_m4kKtlkboYbNbR1snkPGJo4QO5CfV8pvomqam2Iz1aiLnFEOrN-Cj2ru9Iz3tnmj_wjc76Cd7uC50olYzQT_Dupo_xoSoGwfGt3b0rTBVlAobxE6EUpS588Yr_IjE5HB3iF7wzfqsUk1AGLUFvRPxih0paRwzm3WGslcgPcpKqQ4V1mMKoXDdeGWStP9hDC4zqvswzveUwA4H3rLcOVvOXbXL4Ziq9g5OT7ZqTUV29VtRfYQk49Ue1j9FS9yjDV", 
        desc: "מומחה בלוחמה בטרור וקרב מגע. 5 שנות ניסיון בהכשרת לוחמים ביחידות המובחרות ביותר.",
        badges: ["מאמן כושר קרבי בכיר", "מדריך לוט\"ר מוסמך"]
    },
    { 
        name: "רועי כהן", 
        role: "", 
        unit: "יוצא שייטת 13", 
        icon: "sailing",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0NHhk7VZUc2I0AME8XFwpU7wZ341ni6UPJy7OFNFPre8SjfsVFzbUa1V4CrqbgdRzyHgWBze4ENfRjdMih8Ufj0zBDFg5OwJ00bcyiS50j23IcnsYSp_ECE87E-568XHBTWx-AAV5l2X4TUy16mFWtXEKdk6Lvp2LRP-kL9M0t5XDX9MJgQsk7RUT55mxln5PeCwQbcgAnprfMqiQrN0sbh40xM6W70dagVg4pXvNwQ9wDcRiE3hiPO4dolSDLke2Sf72FJxdexxI", 
        desc: "מדריך צלילה קרבית וכושר מבצעי. מתמחה בבניית חוסן מנטלי תחת לחץ קיצוני.",
        badges: ["מומחה לפעילות ימית", "קואוצ'ר מנטלי"]
    },
    { 
        name: "נועה בן-ארי", 
        role: "", 
        unit: "יוצאת יחידת עוקץ", 
        icon: "pets",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq6THCIMSkfMkZaq4wSthKxREbTTg4Os5s9ijw_YhXUVpeXZ1zlm4880e9Ile10Sv8BZc9mdNmPmiLlt4a0KYyYgztXu_qX9XWIDEbltbi-X6NteTDFzxRn2r5J5XIoIvDcHlSF47n3hsoarRcIKfLuYNelOxVZ4cL-lRQF2mYlOgeOZeOeMJlZg0ZaAphzj-V9AEvuzLzEfhhLDAFBxS5D_idgeqzTkPNfomq5_749jtdyIh47ggO28ieeYhXFk5VPwwISCtCRKc3", 
        desc: "אחראית תחום ניווטים והתמצאות בשטח. מביאה גישה חדה, מדויקת ובלתי מתפשרת.",
        badges: ["מדריכת ניווט מבצעי", "קצינה מצטיינת"]
    },
    { 
        name: "סער אברהם", 
        role: "", 
        unit: "יוצא יחידת דובדבן", 
        icon: "target",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCNdha5v9qpRNMR6gZTKPrbSVy9_t4XR2IDydWYUpHW0IODK0Y0eOEjryNd_agTBKVgS_7b3tBpl59mXJLJ0up5W6wREqeL4WcQFuVISNDFKt35zkMUL1SDU3uKUFOWyv69lKOhiJCvJvONpAfB2d8CYixvubmwmDQNjLjLH_C7JJD8bmRbsDBs6ceMrq-oT6EYIuUh53bhzZrnlbM_uBVaSI79TNPrcPx3uZQzD2eX2dWEI1TtqUmRUqiumySrC3p5yzx_QGUKiU7", 
        desc: "מומחה ללוחמה בשטח בנוי והסוואה. מתמקד בפיתוח זריזות וקבלת החלטות.",
        badges: ["מדריך קרב מגע", "מומחה פציעות"]
    }
];

// Export for use in browser (global variable)
if (typeof window !== 'undefined') {
    window.TEAM_MEMBERS = TEAM_MEMBERS;
}

