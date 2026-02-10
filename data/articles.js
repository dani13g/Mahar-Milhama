/**
 * Articles Data
 *
 * @typedef {Object} Article
 * @property {string} id - Unique article id for routing
 * @property {string} title - Article title in Hebrew
 * @property {string} desc - Article description/summary
 * @property {string} category - Article category in Hebrew
 * @property {string} date - Publication date or read time
 * @property {string} img - Article image URL
 * @property {string} [readTime] - Optional read time (for sidebar articles)
 * @property {string[]} tags - Tags for filtering (e.g. כושר קרבי, מנטלי, תזונה)
 */

/**
 * All 9 articles in one list (featured = first, sidebar = 2–3, grid = 4–9).
 * Each has id and tags for detail page and filters.
 */
const ARTICLES = [
  {
    id: "1",
    title: "איך לשרוד את\nשבוע הגיהנום",
    desc: "טיפים מעשיים מבוגרי סיירות על איך לעבור את השבוע הקשה ביותר בגיבוש, מה לאכול, ואיך לשמור על הראש למעלה כשקשה.",
    category: "גיבושים",
    date: "12.10.23",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSDaYUGVTMegSBqHi0_J_IJKKa5pOVmq3_B-LnMaaV9qJ4Hn3_A_boScln_S_kgbMvrXqiAUSwldE4IPiE0nxHhrKiIYGnekERn0hULMPEV6nHwnAyI7CQprHo0C8VNlgsslnS1ZVGlt_el6CE1oQ25_Ekn31lkp6NeBV3NV9F4z-tnMuwALJIaGd58dfYKIp0m7zeO3AOlE9k1Cvnd0RM1q0vreP72Kk2obT9SGIgRtVZsd6e3SH7Lu2OZUyN8V-gSGp2_p-8xxhs",
    tags: ["גיבושים", "מנטלי", "כושר קרבי"],
  },
  {
    id: "2",
    title: "תזונה נכונה לשטח: דלק ללוחמים",
    desc: "מה לאכול לפני מסע ואיך להתאושש אחריו.",
    category: "תזונה",
    readTime: "5 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvqCh5gSABVQ8D_zeEx01ac2TGPv_fv8BpLU2zYEfQtIJfXHPvqeciAAUD86vziVJsTSjHIzdIgCLdjO-XaAYinUzZHWCpgiv2OTvCPVZw6jKw5gNjYOPbsUu6glhyfp-lxrFvQg7I8ZcMS9JFVc09AXCPvRpFzwa57K5GSNSfuZvK2NBhku_RO7FDnth7rUtjIKGOccUGdxHv1lm9wrpULWFeGOzCCjdCil6WHdpmXZBGlGw3Ae1OZA0rgVai9coXy7WVRorD9gN",
    tags: ["תזונה", "בריאות", "גיבושים"],
  },
  {
    id: "3",
    title: "חוסן מנטלי 101: הראש קובע",
    desc: "הטכניקות של היחידות המיוחדות לשליטה במתח.",
    category: "מנטלי",
    readTime: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMIv9wBOGuBCPchMZCxyg3DgV2STQ_HqlxvUPKtmC8MINeGkb73b__oy4834kYoee8pUsw-AWKNfeaYY2fMt1hsa5KkTu7c-F3Wb870ZfJZzAkxpXILoAJuvV65oyd4Zsh3mYP4gN1LZx7H5b7DhpgDiDa45GuBknYMRVp9DNs5iCKCOoTajMH46IBfKicsYGgEX9FnJCckICqYZurw36B7vZRUQCOElFd6bnZzM-Dp3FaA7DzlQa2oB3SliMmmCY1oP5ToBKK2PyB",
    tags: ["מנטלי", "גיבושים", "פיקוד"],
  },
  {
    id: "4",
    title: "הכנה ליום סיירות",
    desc: "כל מה שצריך לדעת לקראת היום הגדול: תחנות, דגשים והכנה מנטלית כדי להגיע מוכן.",
    category: "כושר קרבי",
    date: "22.10.23",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfpkRp9Dgy1z0eKChGSscLyEXHsmtF11-DQ1ZrgLofvMAw2BRa5IDtSLJk0LSOAo388xgozuhYHnRi3xIYM9SNuIJldaRHxakwe3RCV7YOI94sc6aGw9U_NfiHSng5H6d85CC0l9rKCOora6lvRnrfL7OWizycS02YMd-Iq7GGpmCNJUvM7tvuYAUZ98vrx3GVQwdn2spV_ng_62JgEZTSHqE7DFvo7G2Q8VvnLZKHJLUwhkngTn52GR5Ayq9CbD4z-KCRiGjY99d",
    tags: ["כושר קרבי", "גיבושים", "אימונים"],
  },
  {
    id: "5",
    title: "שינה והתאוששות",
    desc: "למה שינה היא הנשק הסודי שלך לשיפור ביצועים ומניעת פציעות עומס מיותרות.",
    category: "בריאות",
    date: "15.10.23",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2wI-4vnNg2vJznc6r6EmpW9JtYDHzmgs1DqBEl0TSDdiTNZsf_pa2qIqppkDjfqL2nj61enoryO9sbPm-Cfv1Lwp8jKUavNNBmC0NbUQbyELUXneXxG0pw5hBbzfUluwqDxo61luPCDUDlQ8JDSj4V1x1MpgCFXQmFM98oorFGLZz8zRqdrqmsjY2fOf1OdQJmVnks4MR5UlAY2fgIMYNsF6bQhHBiNAQBwMmwYenuPW45uhqQ-QuDCCWqkeI_JO1FNiap8pxvvhy",
    tags: ["בריאות", "תזונה", "אימונים"],
  },
  {
    id: "6",
    title: "ציוד חובה למתגייס",
    desc: "רשימת הציוד המלאה שתציל אותך בטירונות ותעשה לך חיים קלים יותר בשטח.",
    category: "ציוד",
    date: "10.10.23",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoPBhin9HbdBK19EgxhAJODe-CScEW3wR2z8DYm1TuUUrQd7dRPsOcYFFhFxWhx8xp-8p6SKjjANoqZZXe8ATeLd8r5MeOhov5wZcWDIBdEY1V9KLCoIwZBxxI4r4TEd1whO-UHQRv73ih_Xz3Qr9XY-_hSi7SDnAUWdQ3XmBEOw-VSwvHIvXODeQJkHVv7halHheYowIkegfBKlAncpLham8B3ot4WonwSMTdSZ112yuT5byZeqBFaP5kitUtryP7PZylIT9wi3de",
    tags: ["ציוד", "גיבושים", "טירונות"],
  },
  {
    id: "7",
    title: "פציעות ספורט בצבא",
    desc: "איך להימנע מפציעות עומס, שברי הליכה ומה לעשות אם בכל זאת נפצעת במהלך ההכשרה.",
    category: "רפואה",
    date: "10 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbs2UyGvi0OO_sgQP9ScUWhKt6oLr0FF-Rj9YAiNgsU-t1tpNT_jvHAfVM8e4e1ysNkcL0n7vWP7WX2wLTn_ETBx6vqwGbUQNeS9sX2XbVjrmqrjYNaKirOKqg5ccmRLz_VgDDZAtCori6T87Ul74mRcdPtObPj1i9NBZWdHdbN5QHuqmtmdLtKm0_KHMqgpMCFmTQyf3xc9JujUpQzL5FqNW2LO_Fec_IBRLwiXDfgP-S1cBqkaTgmsCprvxVPwtYDW3T4qZugNAb",
    tags: ["רפואה", "בריאות", "אימונים"],
  },
  {
    id: "8",
    title: "ראיון עם מפקד צוות",
    desc: "תובנות מיוחדות על פיקוד, מנהיגות ומה באמת מחפשים במגבשים אצל המועמדים.",
    category: "פיקוד",
    date: "5 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBDGXfS2FgIClwCx_f6bZml_ZBX7aCcaoLQ6B-QbaqnmC_AI6XzCzqGznXhctslZsZiFKXWG8PJde9yi8dEHwAgOm7zBXY6Oci_IA_W3rIolDgNwcVSFabqCJo9QB1dRjUuToq2BI-KFrJqmxF4yZnWtXyd_yhOk_ubz0BZiA-H0zf1mLcsISHjnLbnxbdw2Bzi5rla2CAd1W1gjPSxn9MdH5L-7AxqIvQCpF4gV25LHD5NAsnnvgCliCW9puzw9_pb7kvxpIyT-1A",
    tags: ["פיקוד", "גיבושים", "ראיונות"],
  },
  {
    id: "9",
    title: "אימוני כוח ללוחמים",
    desc: "תרגילים לשיפור הכוח המתפרץ שיעזרו לך לסחוב אלונקה לאורך זמן.",
    category: "אימונים",
    date: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuComezQiL8mk0EezpaW59dAlUSP0bFd7guCMksPdrDwNbNUnOPtQe0Emq_5-lvPmZsPrls8yCcp_N44YVGOWAeCZUcBCWswnNPMXGuqfuP901w7H1is6hDmId_nCheB0ODPSnb6ZuessdHxWjeNjNpZCznZekQzuGAjL0Z7OzeaY-RDXYDYU1doi5-MRg3rFkYfXePditdsquMDps0pzPTX8_QiOmqtcozf15RkzSkfJcJxr7hPYLc9rPxliFAdMmIxI6yV3wk1Y7Bc",
    tags: ["אימונים", "כושר קרבי", "בריאות"],
  },
];

// Derived for backward compatibility
const FEATURED_ARTICLE = ARTICLES[0];
const SIDEBAR_ARTICLES = ARTICLES.slice(1, 3);
const ALL_ARTICLES = ARTICLES.slice(3); // 6 articles in grid (כל המאמרים)

// Home page blog preview (subset)
const HOME_BLOG_ARTICLES = [
  { title: "איך לשפר את ריצת ה-2000 שלך ב-30 יום", date: "12 SEP, 2023 // 14:00", category: "אימונים", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD60L04AL19-HTUN-l_f5KRuFjYxUcMQ57IFI1UIdnSbGz4uWKoRkvxOYJD_rnr7QOOz-8aw8QMfCi9MLC0sEE4AfS7rDny1TgG0YNgHoSKSnQO9gMA0yD4DPWKI9aT8SCwgPzngogy5dyYv6Ep8y-rbidq6iue7TAXBHZMA9b9wpMlzegYeMNTc0NrWfDOsWhOZjjXUXasIS6tZW6rBj_uT3zBzwnpxmQYbA3_kpgFsvkg4cKJkkSjY8rBBmWIebzcXu_5kd0L1NjT" },
  { title: "חוסן מנטלי: הנשק הסודי של הלוחם", date: "05 SEP, 2023 // 09:30", category: "מנטלי", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDh6qRR2L9qesEs67aGzOhSNt9CIpTWth5bInlbwHtKalSpiIZgkdH2l6O9yHYJj0yWjVqsN9q8ERIBY7eR6sM5MNdPb1Yy0eUZjuoSv6XHVrf7iCDXjP8mArNPn_WBYFSctCPQjTO0DYLGBvulICfH8LQ_8qoUIpihYjQ0xY5tnDy8HqJxE2Xz8KiLxjvOWH2j_XOYreHyp3MQgWJBL3If7wUOFxxkpGbWd0-FQtAtVo2-KafsaYuePD-tkgqPpFuO8JQ6sT46tGCF" },
  { title: "תזונה קרבית: מה לאכול לפני מסע כומתה", date: "28 AUG, 2023 // 18:45", category: "תזונה", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADhMGx-tvGi_T_-YD3POECAz4v6VllY_85Y8Q2NN0Ql6iDQo3xyBpSq6hVG5vFkxXNYIvksh-GaXPbNkZPKRlFtl5aDNnOtBE45LQS-iLt3bhc2g25o5xcMMyjf3Vr5wX1uzfSdOaOScjrr4Y89Foc4BvQiTTEQ0SliEa2_jygsnyGzwnLmRTottRT0qDyO3mrrVso6PZketX-9EbdDlzbrMfTN0X3-UcbbK2Guli9uO1iPtnuK0lo0IzDD1q73YpqXncp0s1tOIAP" },
];

if (typeof window !== 'undefined') {
  window.ARTICLES = ARTICLES;
  window.FEATURED_ARTICLE = FEATURED_ARTICLE;
  window.SIDEBAR_ARTICLES = SIDEBAR_ARTICLES;
  window.ALL_ARTICLES = ALL_ARTICLES;
  window.HOME_BLOG_ARTICLES = HOME_BLOG_ARTICLES;
}
