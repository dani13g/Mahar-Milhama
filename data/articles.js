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
 * @property {string} [body] - Optional HTML body for article detail page
 */

/**
 * All 9 articles in one list (featured = first, sidebar = 2-3, grid = 4-9).
 * Each has id and tags for detail page and filters.
 */
const ARTICLES = [
  {
    id: "1",
    title: "יומן גיבוש שייטת 13 - אוקטובר 25",
    desc: "יומן יומי מגיבוש שייטת 13 (31-26 באוקטובר): הגעה והתארגנות, מבדקים פיזיים, אקטים, מסעות, יום בריכה וסיום.",
    category: "גיבושים",
    date: "26-31.10.25",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSDaYUGVTMegSBqHi0_J_IJKKa5pOVmq3_B-LnMaaV9qJ4Hn3_A_boScln_S_kgbMvrXqiAUSwldE4IPiE0nxHhrKiIYGnekERn0hULMPEV6nHwnAyI7CQprHo0C8VNlgsslnS1ZVGlt_el6CE1oQ25_Ekn31lkp6NeBV3NV9F4z-tnMuwALJIaGd58dfYKIp0m7zeO3AOlE9k1Cvnd0RM1q0vreP72Kk2obT9SGIgRtVZsd6e3SH7Lu2OZUyN8V-gSGp2_p-8xxhs",
    tags: ["גיבושים", "שייטת 13", "כושר קרבי"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">יומן שטח מגיבוש שייטת 13, 31-26 באוקטובר. מה קורה בכל יום מההגעה ועד הסיום.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">גיבוש שייטת 13: 31-26/10</h2>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום ראשון - הגעה והתארגנות</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בשעה 11:00 בבוקר התייצבנו בתחנת הרכבת בעתלית. חילקו אותנו לקבוצות עלייה לאוטובוסים לפי שמות משפחה, עלינו על האוטובוסים, קיבלנו כריכים עם פסטרמה לארוחת צהריים ונסענו לבסיס. עם ההגעה עברנו בדיקה רפואית קצרה (בדיקת דופק והאישור הרפואי שהבאנו מהבית), הפקדנו את הציוד האישי שלנו (טלפון, שעון, ארנק) וקיבלנו מספר אישי, מספר חוליה וציוד מלא: וסט, תדל שבהמשך שמנו בו שק חול, שתי מימיות של ליטר, נשק, שק שינה, מעיל, 2 שקיות ושני זוגות מדי ב׳.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לאחר מכן עשו תדריך פתיחה עם מפקד הגיבוש וצוות המגבשים. המגבשים הסבירו לנו על הציוד, אכלנו ארוחת ערב ולאחר מכן נכנסנו לישון בערך ב־20:00. כעבור כ־20 דקות בוצעה הקפצה לטבילה בים, חזרנו לישון, ובהמשך הוקפצנו שוב לעלייה עם ציוד מלא; בנוסף ישנים רק עם תחתונים ונשק במיטה. היום הראשון התאפיין בהתארגנות ללא עומס פיזי.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שני - מבדקים פיזיים והתחלת האקטים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמה בשעה 05:00. שתינו חצי ליטר איזוטונים ואכלנו פרוסת לחם עם ריבה. המדריכות כושר העבירו לנו חימום, ויצאנו לריצת ניפוי של כשני קילומטרים - כ־1.5 ק\"מ על שפת הים ו־500 מטרים על חול עמוק.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לאחר מכן בוצעה שחייה של 400 מטרים למצוף בעומק הים, ובהמשך שחייה בים עם מסיכה מושחרת למצוף שבערך 100 מטר ממך, תוך הקפדה על כמה שפחות הצצות. אכלנו ארוחת בוקר (פסטה, ביצים, לחם, סלט, גבינה ומעדן), למדנו פירוק והרכבה של נשקים מסוג קלצ'ניקוב ו־M16 וקשר הצלה, ואחרי זה נבחנו על זה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בהמשך היום התקיימו מבדקי דינמיקה קבוצתית:</p>
<ol style="list-style:decimal;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הרצאות של 5 דקות</strong> - בחלק מהקבוצות המגבשים נתנו לכל אחד נושא ולחלק לא.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">דיבייטים בזוגות</strong> - מביאים סוגייה של בעד או נגד (למשל הפלות, הגבלת גיל ברשתות החברתיות, איסור תספורת מולט בבית הספר, ניסויים בבעלי חיים וכו') והמטרה שלך היא לשכנע את הקבוצה בדעה שלך (תלוי מה הביאו לך - בעד או נגד), ולבסוף מתקיימת הצבעה של מי שיכנע יותר.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תרגיל ניווט</strong> - כל מתמודד קיבל מפה עם ציר ניווט ו־45 דקות לשנן את הדרך; המטרה לזכור כמה שיותר פרטים, ואז נבחנים בעל פה ללא המפה מול המגבש.</li>
</ol>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אכלנו ארוחת צהריים (שניצל, לחם, סלטים, אורז וגבינה) ובערך ב־16:30 ירדנו לחוף לאקטים פיזיים: מילוי שק חול אישי ו־10 שקים קבוצתיים ב־4 דקות (עשינו את זה בערך 6 פעמים), ולאחר מכן כל אחד מילא שק של 10 קילו ושם בתדל. ספרינטים ים-יבשה 15 מקצים. אלונקה סוציומטרית 15 מקצים. זחילות של כ־30 מטרים, חזרה בריצה - 15 מקצים.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בין סבב לסבב החלפנו בגדים מרטוב ליבש ושתינו מימיה של מים או איזוטונים. בסיום האקטים התקיימה משימה קבוצתית: בניית פסל סביבתי שמורכב מהשמות של חברי החולייה המסמל משהו שקשור לציונות. חזרנו למאהל (הליכה של 800 מטר עם כל הציוד האישי והקבוצתי), עלינו, התקלחנו, אכלנו ארוחת ערב (עוף, לחם, אורז, גבינה וסלטים) והלכנו לישון.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שלישי - מסע ראשון וניפויים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמה ב־04:00. שתינו מים ואיזוטונים, אכלנו לחם ויצאנו למסע ראשון: לג ראשון - 4 ק\"מ עם נשק בלבד, בקצב 11 דקות לק\"מ, 2 אלונקות סגורות. לג שני - 4 ק\"מ נוספים עם ציוד מלא (תדל, וסט, נשק, מימיות ושקיות יבש ורטוב), 2 אלונקות סגורות.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לאחר המסע בוצעו כ־15 מקצים של זחילות, וחזרנו לארוחת בוקר. בהמשך קיבלנו מפת ישראל עם משבצות ריקות למילוי שמות ערים, ומפת אוויר של הבסיס שעליה נדרשנו לזהות מבנים ומתקנים. לאחר מכן נערכו ניפויים ראשונים וחלוקה מחדש לחוליות.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אכלנו ארוחת צהריים, ירדנו לחוף, עשו לנו מלא תיזוזים, וכשהגיע הערב עשינו עוד כמה אקטים: (1) שהייה במים עם משקפת מושחרת ושנורקל - שמו לנו את המשקפות המושחרות, המגבשים לקחו אותנו למים ונטלנו בצורה שהידיים והרגליים תלויים על חבל מתוח והפנים למטה. (2) ים-יבשה 15 מקצים. (3) אלונקה סוציומטרית 15 מקצים. חזרנו למאהל, מקלחת, ארוחת ערב ולישון בערך ב־21:00.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום רביעי - אקטים ויום בריכה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמה בשעה 04:00, שתינו מימיה ואכלנו לחם. ירדנו לחוף וביצענו רצף אקטים: ים-יבשה 15 מקצים; אלונקה סוציומטרית 15 מקצים; זחילות 15 מקצים; אקט "רשת" - רשת שעומדת בצורה אנכית לקרקע, ברוחב 4 ריבועים ובגובה 4 ריבועים; המטרה להעביר את כל חברי החולייה דרך הרשת בלי לגעת בה, אבל ברגע שמישהו עבר באחד הריבועים אי אפשר לעבור בו יותר.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">חזרנו למאהל, אכלנו ארוחת בוקר וישר עלינו על בגדי ים ונסענו לבריכה ליום הבריכה. בבריכה בוצעו התחנות: פירוק והרכבה של קלצ'ניקוב מתחת למים בזמן מוגבל עם כמה שפחות נשימות; ריקון שנורקל ומסכה מתחת למים; החזקת משקולת של קילו אחד ביד אחת תוך כדי ציפה עם מרפק מעל המים; איסוף טבעות ברזל מקרקעית הבריכה בנשימה אחת - פעם אחת ללא מסכה ופעם עם מסכה מושחרת; צלילה למרחק.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לאחר מכן אכלנו כריכים עם פסטרמה ועברנו לחוף הים לאקטים נוספים: שחייה עם נעליים ומדי ב' מס\"ג אל ס\"ג - כמה שיותר סיבובים ב־20 דקות בערך; חילקו אותנו לקבוצות של 4, קיבלנו ס\"ג בלי אוויר עם חור, בלון אוויר, צינור, חבל, משוטים וקיטבג - להגיע למצוף בעומק הים ולחזור (בדרך המגבש מפיל אנשים למים ואז צריך להרים אותם בעזרת קשר הצלה ולנהל את האירוע); תחנות תרגילים - סמוך קום, זחילות וריצה עם אלונקה, כקבוצה להשיג כמה שיותר נקודות ב־10 דקות (עשינו פעמיים); דגלים מול חולייה אחרת - קו מפריד, עיגול גדול ועיגול קטן עם חידה, מחוץ לעיגול הגדול אפשר להיות על רגל אחת, בין הגדול לקטן מגנים רק בזחילה, מי שנתפס ממתין 2 דקות, המטרה לחדור לעיגול הקטן של החולייה השנייה ולפתור את החידה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">תוך כדי האקטים בחוף קידרו אותנו בטבילות והחלפות מדים. לבסוף חזרנו למאהל, עלינו על ציוד והלכנו ישר לחוף: ים-יבשה 15 מקצים; אלונקה סוציומטרית 15 מקצים; זחילות 15 מקצים; חפירת בור קבוצתי - שיהיה מספיק גדול להכניס פצועים שיגיעו מהים ולציוד, ובור אישי ב־10 דקות (בנוסף אמרו שמחבלים יגיעו מכיוון צפון); אקט קבוצתי - להעביר בכל פעם צמיג אחד מתחת לרשת בלי שיגע בה, ואסור להניח את הצמיגים על הרצפה. לאחר מכן חזרנו למאהל, מקלחת, ארוחת ערב ולישון.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום חמישי - מסע אחרון</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמה מוקדמת בשעה 03:30 למסע. המסע נערך עם כל הציוד על הגב וארבעה לגים: לג ראשון - 4 ק\"מ בקצב 10 דקות לק\"מ; לג שני - 4 ק\"מ בקצב 8 דקות לק\"מ; לג שלישי - 3 ק\"מ עם עליות בקצב 12 דקות לק\"מ; לג רביעי - 3 ק\"מ עם עליות בקצב 12 דקות לק\"מ. בין הלגים בוצעו טבילות, החלפת בגדים ושתיית מימיות.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לאחר המסע חזרנו למגורים, התקלחנו, אכלנו ארוחת בוקר ונבחנו על חוברת הלימוד שחילקו לנו בתחילת היום הרביעי. לאחר מכן נערך מבחן סוציומטרי, מילוי שאלון אישי וראיונות עם המגבשים. בשעות הצהריים שמו לנו משקפות מושחרות, העלו אותנו לאוטובוס, הכניסו אותנו לבריכה עמוקה וקטנה מאוד - המטרה לצוף כ־20 דקות בלי להוריד את המשקפת, בלי להטביע אחרים, בלי להכניס את הראש למים ובלי לגעת בקירות. לאחר מכן חזרנו לארוחת צהריים, החזרנו ציוד, שיחה של שבירת דיסטנס עם המגבשים ועבודות רס\"ר למשך כל היום. בערב התקלחנו, אכלנו ארוחת ערב והלכנו לישון ב־20:30 בערך.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שישי - סיום</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמה בשעה 05:00, ישר התחלנו עבודות רס\"ר. לאחר מכן התקיימה שיחה מסכמת על המשך התהליך והשלבים הבאים. קיבלנו כריכים, לקחנו את הציוד האישי שלנו ועלינו על אוטובוסים שהחזירו אותנו לתחנת הרכבת בעתלית ב־08:30.</p>`,
  },
  {
    id: "2",
    title: "מדריך לתזונה נכונה לפני גיבוש",
    desc: "מה לאכול בשבועות, בימים ובשעות לפני הגיבוש, איך לשתות נכון ומה לאכול בזמן ואחרי המאמץ. פשוט ולעניין.",
    category: "תזונה",
    readTime: "6 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFvqCh5gSABVQ8D_zeEx01ac2TGPv_fv8BpLU2zYEfQtIJfXHPvqeciAAUD86vziVJsTSjHIzdIgCLdjO-XaAYinUzZHWCpgiv2OTvCPVZw6jKw5gNjYOPbsUu6glhyfp-lxrFvQg7I8ZcMS9JFVc09AXCPvRpFzwa57K5GSNSfuZvK2NBhku_RO7FDnth7rUtjIKGOccUGdxHv1lm9wrpULWFeGOzCCjdCil6WHdpmXZBGlGw3Ae1OZA0rgVai9coXy7WVRorD9gN",
    tags: ["תזונה", "בריאות", "גיבושים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">לפני גיבוש אתם מתאמנים, ישנים, ומתכוננים מנטלית. אבל הרבה פעמים שוכחים את הדבר הבסיסי ביותר: לאכול נכון. הגוף שלכם הוא מכונה, והאוכל הוא הדלק. דלק לא טוב = ביצועים לא טובים. ככה פשוט.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שבוע-שבועיים לפני הגיבוש</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">זה לא הזמן לדיאטות, לא הזמן לניסויים ולא הזמן לאכול ג'אנק. המטרה: למלא את מאגרי האנרגיה של הגוף (גליקוגן בשרירים ובכבד) ולוודא שאתם לא חסרים שום דבר.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">פחמימות = דלק ראשי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">פחמימות הן מקור האנרגיה המרכזי לכל מאמץ אינטנסיבי. ספרינטים, זחילות, מסעות, אלונקה - כל אלה שורפים גליקוגן. בשבועות לפני הגיבוש, פחמימות צריכות להיות כ-60% מהאוכל שלכם.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">מה לאכול:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">אורז (לבן או מלא)</li>
<li style="margin-bottom:0.25rem">פסטה</li>
<li style="margin-bottom:0.25rem">בטטה ותפוחי אדמה</li>
<li style="margin-bottom:0.25rem">לחם (עדיף מלא)</li>
<li style="margin-bottom:0.25rem">שיבולת שועל (קוואקר)</li>
<li style="margin-bottom:0.25rem">פירות (בננות, תפוחים, תמרים)</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">חלבון = בנייה ותיקון</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">החלבון מתקן את השרירים אחרי אימונים ושומר עליהם. המלצה לספורטאים צעירים: כ-1.5-1.8 גרם חלבון לכל קילו ממשקל הגוף ביום. למשל: בן אדם של 70 קילו צריך בערך 105-126 גרם חלבון ביום.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">מקורות טובים:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">חזה עוף / הודו</li>
<li style="margin-bottom:0.25rem">ביצים</li>
<li style="margin-bottom:0.25rem">טונה ודגים</li>
<li style="margin-bottom:0.25rem">גבינה לבנה וקוטג'</li>
<li style="margin-bottom:0.25rem">קטניות (עדשים, חומוס, שעועית)</li>
<li style="margin-bottom:0.25rem">יוגורט</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שומנים בריאים = לא לפחד</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שומן הוא לא האויב. הגוף צריך שומן בריא לתפקוד הורמונלי, לספיגת ויטמינים ולאנרגיה ארוכת טווח. אבוקדו, שמן זית, טחינה, אגוזים ושקדים. לא צריך הרבה, אבל לא צריך להימנע.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">הערב לפני הגיבוש</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">ארוחת הערב האחרונה לפני הגיבוש היא חשובה. המטרה: למלא מאגרי גליקוגן לאחרונה בלי להכביד על הבטן.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">דוגמה לארוחה טובה:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">צלחת פסטה או אורז (מנה נדיבה)</li>
<li style="margin-bottom:0.25rem">חזה עוף צלוי או דג</li>
<li style="margin-bottom:0.25rem">ירקות מבושלים (לא סלט גדול - סיבים מרובים יכולים לגרום לנפיחות)</li>
<li style="margin-bottom:0.25rem">כוס מים גדולה</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">מה לא לאכול:</strong> אוכל שמן, מטוגן, חריף, או דברים שאתם לא רגילים אליהם. לא הזמן לניסויים. אם פיצה גורמת לכם לכאבי בטן, אל תאכלו פיצה.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">בוקר הגיבוש</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">לאכול 1-2 שעות לפני תחילת המאמץ. ארוחה קטנה עד בינונית, עשירה בפחמימות, דלת שומן ודלת סיבים.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">דוגמאות:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">2 פרוסות לחם לבן עם ריבה ובננה</li>
<li style="margin-bottom:0.25rem">קערת שיבולת שועל עם דבש ופירות</li>
<li style="margin-bottom:0.25rem">כריך עם חביתה קלה</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">לא לאכול:</strong> ביצים קשות בכמות, גבינה צהובה, חומוס עם הרבה שמן, סלט ירקות גדול. כל אלה כבדים ויכולים לגרום לבחילות תחת מאמץ.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שתייה: הדבר הכי חשוב</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">התייבשות היא הגורם מספר אחד לירידה בביצועים. עוד לפני שמרגישים צמא, הגוף כבר מאבד כוח.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">יומיים לפני:</strong> שתו לפחות 2.5-3 ליטר מים ביום. לא בבת אחת, אלא לאורך כל היום. תדעו שאתם שותים מספיק אם השתן בהיר</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">בבוקר הגיבוש:</strong> חצי ליטר מים, לאט, שעה לפני. לא ליטר בבת אחת כי זה פשוט ייצא</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">במהלך הגיבוש:</strong> כל פעם שנותנים לכם לשתות - תשתו. לגימות קטנות ותכופות, לא שתייה מסיבית בבת אחת. אם יש אפשרות לאיזוטונים (משקה ספורט) - עדיף על מים רגילים כי הוא מחזיר גם מלחים</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">במהלך הגיבוש: מה לאכול כשנותנים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בגיבוש אתם לא בוחרים מה אוכלים ומתי. אבל כשנותנים ארוחה או הפסקה:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תאכלו.</strong> גם אם אין תיאבון. גם אם האוכל לא טעים. הגוף צריך דלק</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">עדיפות לפחמימות:</strong> אם יש אורז, פסטה, לחם - תאכלו מזה קודם. זה מה שייתן לכם אנרגיה מהירה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">לא לאכול יותר מדי בבת אחת:</strong> בטן מלאה + ספרינטים = בחילות. תאכלו בינוני, מספיק כדי לא להיות רעבים</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">אחרי הגיבוש: התאוששות</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">ברגע שהגיבוש נגמר, הגוף שלכם במצב של פירוק. צריך לתת לו חומרי גלם כדי להתחיל לבנות מחדש.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ב-30 הדקות הראשונות:</strong> שתו הרבה מים. אם יש איזוטונים - עוד יותר טוב. תאכלו משהו עם פחמימות וחלבון: בננה + חטיף חלבון, כריך עם טונה, שוקו חלב</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ארוחה מלאה תוך 2 שעות:</strong> אורז/פסטה + חלבון (עוף, דג, ביצים) + ירקות. מנה גדולה. הגוף רעב, תנו לו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ביומיים שאחרי:</strong> אכלו טוב, שתו הרבה, ישנו. השרירים מתאוששים 48-72 שעות אחרי מאמץ כזה</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טעויות נפוצות</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני צם לפני כדי להיות קל"</strong> - טעות. בלי דלק אין אנרגיה. תגיעו ריקים ותיגמרו ראשונים (לא במובן הטוב)</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני טוען פחמימות כמו מרתון"</strong> - לא צריך טעינה קיצונית. פשוט לאכול ארוחות טובות ומלאות בימים לפני</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני שותה רק כשאני צמא"</strong> - עד שמרגישים צמא, כבר מאוחר מדי. תשתו לפי שעון, לא לפי הרגשה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אכלתי סושי ובורגר בערב לפני"</strong> - אוכל שמן מאט עיכול ויכול לגרום לבחילות. ערב לפני = ארוחה פשוטה ומוכרת</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"תוספי תזונה יעזרו לי"</strong> - בגיל שלכם, אם אתם אוכלים מגוון, אתם לא צריכים תוספים. אולי חלבון באבקה אם קשה לכם להגיע לכמות, אבל זה הכל</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">תזונה לפני גיבוש היא לא מדע טילים. תאכלו הרבה פחמימות, מספיק חלבון, תשתו מים כל הזמן ותישנו טוב. לא לנסות דברים חדשים בערב לפני, לא לצום ולא להגזים. הגוף שלכם צריך דלק כדי לעבוד. תנו לו.</p>`,
  },
  {
    id: "3",
    title: "מדריך לחוסן מנטלי - הכל בראש?",
    desc: "איך להתכונן מנטלית לגיבוש: טכניקות נשימה, ויזואליזציה, שיחה עצמית וניהול כאב.",
    category: "מנטלי",
    readTime: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMIv9wBOGuBCPchMZCxyg3DgV2STQ_HqlxvUPKtmC8MINeGkb73b__oy4834kYoee8pUsw-AWKNfeaYY2fMt1hsa5KkTu7c-F3Wb870ZfJZzAkxpXILoAJuvV65oyd4Zsh3mYP4gN1LZx7H5b7DhpgDiDa45GuBknYMRVp9DNs5iCKCOoTajMH46IBfKicsYGgEX9FnJCckICqYZurw36B7vZRUQCOElFd6bnZzM-Dp3FaA7DzlQa2oB3SliMmmCY1oP5ToBKK2PyB",
    tags: ["מנטלי", "גיבושים", "פיקוד"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">כל מי שעבר גיבוש יגיד לכם את אותו דבר: הגוף יכול הרבה יותר ממה שאתם חושבים. מה שגורם לאנשים לפרוש זה לא הרגליים, לא הידיים ולא הריאות. זה הראש. הראש הוא מה שקובע אם תמשיכו כשכל דבר בגוף צורח לכם לעצור. במאמר הזה נלמד כלים פרקטיים שעוזרים לבנות את הראש לקראת גיבוש.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">למה חוסן מנטלי חשוב יותר מכושר</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בגיבוש, כולם מגיעים בכושר סביר עד גבוה. ההבדל בין מי שנשאר למי שפורש הוא כמעט תמיד מנטלי. מחקרים על יחידות מיוחדות בצבאות שונים בעולם מראים שהגורם המנבא מספר אחת להצלחה בגיבושים הוא לא VO2max ולא כמה מקבילים אתם עושים. זה חוסן נפשי - היכולת להמשיך לתפקד תחת לחץ, עייפות וכאב.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">החדשות הטובות: חוסן מנטלי זה לא משהו שנולדים איתו. אפשר לאמן אותו, בדיוק כמו שרירים. ואם תתרגלו את הכלים האלה לפני הגיבוש, תגיעו עם יתרון משמעותי על מי שלא.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כלי 1: שיחה עצמית (Self-Talk)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כל הזמן יש לנו קול בראש שמדבר אלינו. בגיבוש, הקול הזה יכול להיות האויב הכי גדול שלכם. הוא יגיד: "אתה לא יכול", "זה יותר מדי", "מה אתה בכלל עושה פה", "כולם יותר טובים ממך". אם תקשיבו לו - תפרשו.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">מה לעשות:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תזהו את הקול השלילי.</strong> ברגע שאתם שומים אותו, תגידו לעצמכם "זו רק המחשבה, לא המציאות"</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תחליפו במשפט חיובי קצר.</strong> לא צריך משהו מסובך. "אני ממשיך", "עוד צעד אחד", "אני יכול" - זה מספיק. משפט אחד שחוזר על עצמו שוב ושוב</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">דברו בגוף שלישי.</strong> מחקרים מראים שלהגיד "[השם שלכם], אתה יכול" יותר אפקטיבי מלהגיד "אני יכול". זה יוצר מרחק מהכאב ומאפשר לכם לנהל את עצמכם מבחוץ</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">תרגול:</strong> בכל אימון קשה, תרגלו להחליף מחשבות שליליות בשיחה עצמית חיובית. ככל שתעשו את זה יותר, ככה זה יהיה יותר אוטומטי בגיבוש.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כלי 2: נשימות מבוקרות (Box Breathing)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כשהגוף בלחץ, הנשימה מתקצרת, הדופק עולה, והראש מתחיל להיכנס לפאניקה. הדרך הכי מהירה לשלוט בזה היא דרך הנשימה. צוותי יחידות מיוחדות בכל העולם משתמשים בטכניקה שנקראת Box Breathing - נשימת קופסה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">איך עושים:</strong></p>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שאיפה איטית דרך האף - 4 שניות</li>
<li style="margin-bottom:0.25rem">עצירה (ריאות מלאות) - 4 שניות</li>
<li style="margin-bottom:0.25rem">נשיפה איטית דרך הפה - 4 שניות</li>
<li style="margin-bottom:0.25rem">עצירה (ריאות ריקות) - 4 שניות</li>
</ol>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">חוזרים על זה 4-6 פעמים. תוך דקה הדופק יורד, הגוף נרגע, והראש מתפנה לחשיבה ברורה. אפשר לעשות את זה בכל רגע של מנוחה בגיבוש, לפני תרגיל, או אפילו תוך כדי הליכה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">תרגול:</strong> תתרגלו את זה כל יום, לפחות פעמיים. לפני השינה ולפני אימון. ככה הגוף יידע מה לעשות ברגע לחץ בלי שתצטרכו לחשוב.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כלי 3: ויזואליזציה (דימיון מודרך)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ספורטאים אולימפיים, טייסי קרב ולוחמים ביחידות מיוחדות משתמשים בוויזואליזציה. הרעיון פשוט: אם המוח "חווה" מצב לפני שהוא קורה, הוא מגיב אליו טוב יותר כשזה באמת קורה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">איך עושים:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem">שבו בשקט, עצמו עיניים, ודמיינו את עצמכם בגיבוש</li>
<li style="margin-bottom:0.5rem">תראו את עצמכם רצים, זוחלים, נושאים אלונקה. תרגישו את העייפות, החום, הכאב</li>
<li style="margin-bottom:0.5rem">עכשיו תדמיינו את עצמכם ממשיכים. לא עוצרים. לא פורשים. מסיימים כל תחנה ועוברים הלאה</li>
<li style="margin-bottom:0.5rem">תדמיינו את הרגע שהגיבוש נגמר ואתם עומדים בסוף, אחרי שעברתם הכל</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">תרגול:</strong> 5 דקות ביום, לפני השינה. תעשו את זה לפחות שבועיים לפני הגיבוש. כל פעם תוסיפו פרטים - ריחות, קולות, תחושות. ככל שזה יותר "אמיתי" בראש, ככה תהיו יותר מוכנים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כלי 4: חלוקה לקטעים קטנים (Chunking)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">גיבוש נמשך שעות ארוכות, לפעמים יום שלם ולפעמים יותר. אם תחשבו על כל מה שנשאר - תישברו. הטריק הוא לא לחשוב על הסוף. לחשוב רק על הדבר הבא.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">איך עושים:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מצעד?</strong> לא חושבים על הקילומטר האחרון. חושבים על 100 המטר הבאים. או על העמוד הבא. או על הצעד הבא</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ספרינטים?</strong> לא חושבים על כל 10 הספרינטים. רק על הספרינט הנוכחי</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אלונקה?</strong> לא חושבים על כמה זמן נשאר. רק על להחזיק עוד 10 שניות</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כל קטע שאתם מסיימים - זו הצלחה קטנה. והצלחות קטנות מצטברות לגיבוש שלם.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כלי 5: ניהול כאב</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">יהיה כאב. זה בטוח. שרירים ישרפו, רגליים יכאבו, כתפיים תלחצנה. השאלה היא לא "האם יהיה כאב" אלא "מה אני עושה איתו".</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">כמה גישות שעובדות:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">קבלה, לא מאבק.</strong> אל תנסו להתעלם מהכאב ואל תילחמו בו. תגידו לעצמכם "יש כאב, אני מודע לו, ואני ממשיך". כשמקבלים את הכאב במקום להילחם בו, הוא מפסיק לשלוט</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הפרדה בין כאב לפציעה.</strong> כאב מאימוץ זה נורמלי. פציעה זה משהו אחר. תלמדו להבדיל. כאב שריר שורף? נורמלי, ממשיכים. כאב חד ופתאומי במפרק? תעצרו ותבדקו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">להשתמש בכאב כדלק.</strong> יש כאלה שהכאב מניע אותם. "אם כואב, סימן שאני עובד קשה. אם אני עובד קשה, אני מתקדם". תנסו את הגישה הזו</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">"הרגע" - כשהגוף אומר לעצור</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בכל גיבוש יש רגע (לפעמים כמה) שבו הגוף צורח לכם לעצור. הרגליים כבדות כמו בטון, הנשימה לא מספיקה, והראש אומר "מספיק". זה הרגע שמפריד בין מי שנשאר למי שפורש.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">מה לעשות ברגע הזה:</strong></p>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אל תקבלו החלטה עכשיו.</strong> הגוף שלכם בפאניקה, הראש לא חושב ברור. תגידו לעצמכם "אני לא מחליט עכשיו. אני ממשיך עוד 5 דקות ואז נראה"</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תתמקדו בפעולה, לא ברגש.</strong> לא "אני עייף", לא "אני לא יכול". רק "רגל ימין, רגל שמאל, נשימה". פעולות מכניות, בלי רגש</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תיזכרו למה באתם.</strong> תיזכרו את הרגע שהחלטתם ללכת לגיבוש, את האנשים שמאמינים בכם, את מי שאתם רוצים להיות. זה לא קלישאה - זה עובד</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טיפים ליום הגיבוש עצמו</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אל תשוו את עצמכם לאחרים.</strong> לא משנה אם מישהו רץ יותר מהר או נראה פחות עייף. אתם מתחרים נגד עצמכם. המבחנים בודקים אתכם, לא אתכם ביחס לאחרים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תישארו עם הקבוצה.</strong> גם אם אתם מרגישים חזקים - אל תתנתקו קדימה יותר מדי. להיות שחקן קבוצתי זה חלק ממה שבודקים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תנצלו כל הפסקה.</strong> הפסקה של 30 שניות? תשתו מים, תנשמו עמוק, תמתחו. אל תבזבזו אנרגיה על דיבורים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תתנו 100% - אבל חכם.</strong> אין טעם לשרוף את הכל בתרגיל הראשון ולהישאר ריקים. שמרו על קצב שאתם יכולים להחזיק לאורך זמן. לגיבוש יש גם חלק שני ושלישי</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תחייכו.</strong> ברצינות. חיוך, גם מאולץ, גורם למוח לשלוח אותות של "הכל בסדר". וגם משדר לבוחנים שאתם מתמודדים טוב</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טעויות מנטליות נפוצות</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני פשוט אהיה חזק"</strong> - חוסן מנטלי הוא לא כוח רצון גולמי. זה כלים וטכניקות שצריך לתרגל. בלי תרגול, גם הראש הכי חזק ייכנע ללחץ</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אם יהיה קשה, אני פשוט אתעלם"</strong> - התעלמות לא עובדת. הכאב והעייפות לא ייעלמו. צריך לקבל אותם ולנהל אותם, לא להתעלם מהם</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני צריך להיות הכי טוב"</strong> - לא. אתם צריכים לתת את המקסימום שלכם. להתחרות עם עצמכם, לא עם אחרים. מי שמתמקד באחרים מפסיד אנרגיה מנטלית</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"הראש שלי חלש, אני לא מתאים"</strong> - שטויות. חוסן מנטלי נבנה. כל אימון קשה שאתם מסיימים, כל פעם שאתם ממשיכים כשקשה - אתם מחזקים את הראש. זה שריר מנטלי, ואתם מאמנים אותו עכשיו</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תוכנית אימון מנטלי - שבועיים לפני הגיבוש</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">שלבו את הכלים האלה ביום-יום:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">בוקר (2 דקות):</strong> נשימת קופסה - 4 סבבים. מתחילים את היום רגועים וממוקדים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">באימון:</strong> תרגלו שיחה עצמית חיובית. כל פעם שעולה מחשבה שלילית - תחליפו. תתרגלו חלוקה לקטעים קטנים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ערב לפני השינה (5 דקות):</strong> ויזואליזציה. תדמיינו את עצמכם בגיבוש, מתמודדים עם קושי וממשיכים</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הגוף שלכם יכול הרבה יותר ממה שאתם חושבים. המגבלה האמיתית היא בראש. אם תתרגלו שיחה עצמית חיובית, נשימות מבוקרות, ויזואליזציה וחלוקה לקטעים קטנים - תגיעו לגיבוש עם כלים אמיתיים להתמודד עם כל מה שיזרקו עליכם. לא מבטיחים שיהיה קל. מבטיחים שתהיו מוכנים.</p>`,
  },
  {
    id: "4",
    title: "יום סיירות (יום שדה): המדריך המלא למלש\"ב",
    desc: "החלום להגיע ליחידות העילית של צה\"ל מתחיל כאן. יום סיירות, או בשמו הרשמי \"יום שדה\", הוא שער הכניסה ליחידות כמו סיירת מטכ\"ל, שייטת 13, שלדג, 669, חובלים וצוללות.",
    category: "כושר קרבי",
    date: "22.10.23",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfpkRp9Dgy1z0eKChGSscLyEXHsmtF11-DQ1ZrgLofvMAw2BRa5IDtSLJk0LSOAo388xgozuhYHnRi3xIYM9SNuIJldaRHxakwe3RCV7YOI94sc6aGw9U_NfiHSng5H6d85CC0l9rKCOora6lvRnrfL7OWizycS02YMd-Iq7GGpmCNJUvM7tvuYAUZ98vrx3GVQwdn2spV_ng_62JgEZTSHqE7DFvo7G2Q8VvnLZKHJLUwhkngTn52GR5Ayq9CbD4z-KCRiGjY99d",
    tags: ["כושר קרבי", "גיבושים", "אימונים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">זהו יום אינטנסיבי, קשוח וממיין, שנועד לבדוק מי מכם קורץ מהחומר המתאים להמשיך לגיבושים הקדם-צבאיים. במאמר הזה נפרק את כל מה שצריך לדעת כדי לא רק לשרוד את הדיונה - אלא לנצח אותה.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מה מחכה לכם ביום הסיירות?</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">היום מתחלק למספר שלבים, החל ממבדקי סף פיזיים ועד לתרגילים מנטליים ודינמיקה קבוצתית.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">מבחן הסף: ריצת ה-1.2 ק\"מ</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לפני שמתחילים "לעבוד" על הדיונה, עליכם לעבור ריצת סף. כיום המגמה היא תחרות יחסית - כלומר, המהירים ביותר קובעים את הרף. <strong style="color:#fff">טיפ של אלופים:</strong> אל תשמרו כוחות. תזנקו חזק, תתברגו בשליש הראשון של הרצים ותראו למגבשים שאתם כאן כדי לעבוד.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">האקטים הפיזיים על הדיונה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">זהו לב היום. כאן נמדד החוסן שלכם בשישה תרגילים מרכזיים (4 פיזיים ו-2 מחשבתיים):</p>
<ul style="list-style:disc;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ספרינטים:</strong> כ-15 מקצים של ריצה אל פסגת הדיונה וחזרה. המטרה: להגיע ראשון, פעם אחר פעם. זהו האקט שבו רוב האנשים נשברים - אם שרדתם אותו, אתם בחצי הדרך למעלה.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אלונקה סוציומטרית:</strong> ריצה קבוצתית שבה ארבעת הראשונים תופסים אלונקה (או שקים) ויוצאים לסיבוב נוסף. כאן נמדדת הנחישות - היכולת להמשיך להילחם על מקום באלונקה גם כשכבר אין אוויר.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">התרגיל המשולב (שקים וזחילה):</strong> שילוב של ריצה, נשיאת שק וזחילה על הדיונה. תרגיל מנטלי מובהק שבודק את היכולת שלכם לתפקד תחת עומס משולב.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">חפירת בור:</strong> המגבש ייתן לכם מידות מדויקות (למשל: מטר על מטר). אל תזלזלו - בסוף התרגיל יבדקו את הדיוק שלכם וישאלו אתכם שאלות על התהליך.</li>
</ul>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">תרגילי מחשבה ודינמיקה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1.5rem">במתכונת החדשה, יום הסיירות כולל גם משימות חשיבה, כמו שרטוט מפה בחול או תרגיל פיקודי של בניית מערך אבטחה. המגבשים רוצים לראות איך הראש שלכם עובד כשאתם עייפים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">דגשים להצלחה ביום הסיירות</h2>
<ol style="list-style:decimal;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">יציבות היא שם המשחק:</strong> המגבשים לא מחפשים רק את זה שהגיע ראשון פעם אחת ונעלם. הם מחפשים את אלו שנמצאים ב"חמישייה הפותחת" לאורך כל היום.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">חוסן מנטלי:</strong> הדיונה תנסה לשבור אתכם. הקול בראש יגיד לכם "די, מספיק". המטרה שלכם היא להשתיק אותו ולהמשיך למקצה הבא.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">דיוק ואמינות:</strong> בסוף היום תמלאו שאלון סוציומטרי. היו כנים. המגבשים יודעים בדיוק מי עבד קשה ומי ניסה "לעגל פינות".</li>
</ol>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">למי מיועד המיון?</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">המיון מתקיים בשני מועדים:</p>
<ul style="list-style:disc;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מועד ינואר:</strong> מיועד לתלמידי כיתה י\"ב.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מועד אוקטובר:</strong> מיועד לבוגרי מכינות, שנות שירות וחיילים.</li>
</ul>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">סיכום</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">יום סיירות הוא לא רק מבחן כושר, הוא מבחן אופי. ההכנה אליו חייבת לכלול אימוני חולות, ריצות עצימות ועבודה על סיבולת לב-ריאה, אך לא פחות חשוב - הכנה מנטלית לסיטואציות של חוסר ודאות ומאמץ קיצוני.</p>
<p style="color:#d1d5db;line-height:1.75">רוצים להגיע מוכנים באמת? הצטרפו לאימון הקרוב שלנו ונתחיל לעבוד על הדיונה!</p>`,
  },
  {
    id: "5",
    title: "שינה והתאוששות: הנשק הסודי שלך",
    desc: "למה שינה היא הנשק הסודי שלך לשיפור ביצועים ומניעת פציעות עומס - כמה לישון, מה קורה כשלא ישנים מספיק, וטיפים פרקטיים להתאוששות.",
    category: "בריאות",
    date: "6 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2wI-4vnNg2vJznc6r6EmpW9JtYDHzmgs1DqBEl0TSDdiTNZsf_pa2qIqppkDjfqL2nj61enoryO9sbPm-Cfv1Lwp8jKUavNNBmC0NbUQbyELUXneXxG0pw5hBbzfUluwqDxo61luPCDUDlQ8JDSj4V1x1MpgCFXQmFM98oorFGLZz8zRqdrqmsjY2fOf1OdQJmVnks4MR5UlAY2fgIMYNsF6bQhHBiNAQBwMmwYenuPW45uhqQ-QuDCCWqkeI_JO1FNiap8pxvvhy",
    tags: ["בריאות", "תזונה", "אימונים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">אתם מתאמנים קשה, רצים, זוחלים, סוחבים אלונקות - אבל לא תמיד נותנים לגוף את הדבר הכי בסיסי שהוא צריך כדי להשתפר: שינה. הנה כל מה שצריך לדעת על שינה, התאוששות, ואיך זה משפיע ישירות על הסיכוי שלכם להצליח בגיבושים ובצבא.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">למה שינה זה לא "בזבוז זמן"</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בזמן שאתם ישנים, הגוף עובד. זה לא מצב "כבוי" - זה מצב "שיפוץ". במהלך שלבי השינה העמוקה (Slow-Wave Sleep) קורים כמה דברים קריטיים:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הורמון גדילה (GH) מופרש:</strong> רוב ההפרשה של הורמון הגדילה קורית בשינה עמוקה. ההורמון הזה אחראי על תיקון רקמות שריר, חיזוק גידים ורצועות ובניית מסת שריר חדשה. אם אתם קוצצים בשינה - אתם חותכים את התהליך הזה באמצע.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">טסטוסטרון עולה:</strong> רמות הטסטוסטרון שלכם עולות בלילה ויורדות כשלא ישנים מספיק. מחקרים הראו שחמישה לילות של פחות מ-5 שעות שינה הורידו טסטוסטרון ב-10-15%. זה ישירות פוגע בכוח, במסת שריר ובמוטיבציה.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">קורטיזול יורד:</strong> קורטיזול הוא הורמון הסטרס. כשלא ישנים מספיק הוא נשאר גבוה - מה שמפרק שריר, מגביר דלקות ומאט התאוששות. שינה מספיקה מאזנת את הרמות.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מערכת החיסון מתחזקת:</strong> בשינה הגוף מייצר חלבונים (ציטוקינים) שנלחמים בדלקות ובזיהומים. חולים? סביר שלא ישנתם מספיק.</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">כמה לישון?</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">התשובה הקצרה: <strong style="color:#fff">8-9 שעות</strong>. לא 6, לא "מספיק לי 5". הנה מה שהמחקרים אומרים:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem">מכון וינגייט ממליץ לספורטאים צעירים על <strong style="color:#fff">9-10 שעות</strong> שינה בממוצע, ומינימום של 8 שעות.</li>
<li style="margin-bottom:0.5rem">מחקרים מראים שספורטאים שישנו פחות מ-8 שעות בלילה היו בסיכון <strong style="color:#fff">פי 1.7</strong> להיפצע לעומת אלו שישנו 8 ומעלה.</li>
<li style="margin-bottom:0.5rem">צה"ל מחייב מינימום 7 שעות שינה בשגרה (מתעדכן מפעם לפעם). בגיבושים ובמסעות כמובן ישנים פחות - וזו בדיוק הסיבה ש"בנקאות שינה" לפני הגיבוש חשובה מאוד.</li>
<li style="margin-bottom:0.5rem">מחקר על טירוני צבא בריטניה הראה שהם ישנו בממוצע <strong style="color:#fff">5:40-6:20 שעות</strong> בלבד בלילה - וכ-80% דיווחו על איכות שינה גרועה. אל תגיעו לגיבוש כשאתם כבר בחוב שינה.</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מה קורה כשלא ישנים מספיק</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בואו נהיה ישירים. חוסר שינה פוגע בכל דבר שחשוב לכם:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">זמן תגובה איטי יותר:</strong> תגיבו לאט יותר בספרינטים, באלונקה, בכל מקום שצריך להזדנק ראשון.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ירידה בכוח ובסיבולת:</strong> השרירים פשוט פחות חזקים. הזחילות ארוכות יותר, האלונקה כבדה יותר.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ריכוז וקבלת החלטות:</strong> המוח עובד לאט. במשימות חשיבה, בהרצאות, בזיכרון מפות - הכל ייפגע.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מצב רוח ומוטיבציה:</strong> עייפות גורמת לעצבנות, לרגישות יתר ולחוסר סבלנות. בגיבוש זה יכול להיות ההבדל בין "אני ממשיך" ל"אני פורש".</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">סיכון גבוה לפציעות:</strong> שברי מאמץ, נקעים, מתיחות - הכל עולה כשלא ישנים. הגוף פשוט לא מספיק להתאושש.</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">"בנקאות שינה" - לישון על מנת להצליח</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מושג שכדאי להכיר: <strong style="color:#fff">Sleep Banking</strong>. הרעיון פשוט - בשבועות שלפני אירוע קשה (גיבוש, מסע, יום שדה) אתם ישנים יותר מהרגיל, כדי "לאגור" שינה. מחקרים הראו שזה עובד: ספורטאים שהאריכו את השינה שלהם ל-10 שעות למשך 6-7 שבועות שיפרו זמני ספרינט, דיוק ומצב רוח בצורה משמעותית.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בפועל: שבועיים לפני הגיבוש - תנו לשינה עדיפות על הכל. לכו לישון מוקדם, קומו בלי שעון מעורר כשאפשר, ותנו לגוף למלא את המאגרים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">8 טיפים פרקטיים לשינה טובה יותר</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.75rem"><strong style="color:#fff">שעה קבועה - כל יום:</strong> לכו לישון ותתעוררו באותה שעה, גם בסופ"ש. הגוף אוהב שגרה. ככל שהשעון הביולוגי שלכם מכויל - תירדמו מהר יותר ותתעוררו רעננים יותר.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">הורידו מסכים שעה לפני השינה:</strong> האור הכחול מהטלפון מרמה את המוח שעכשיו יום. שעה לפני - תכבו את הטלפון או לפחות תפעילו מצב לילה. תקראו, תמתחו, תנשמו.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">חדר חשוך וקריר:</strong> טמפרטורת חדר אידיאלית לשינה היא 18-20 מעלות. וילונות אטומים עוזרים. גוף קריר = שינה עמוקה יותר.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">לא קפאין אחרי הצהריים:</strong> קפה, אנרג'י דרינקס, קולה - כל אלה נשארים בגוף 6-8 שעות. שתיתם קפה בארבע אחה"צ? עדיין תרגישו את זה בעשר בלילה.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">שמש בבוקר:</strong> צאו לאור שמש טבעי ב-15 הדקות הראשונות אחרי שקמתם. זה מכייל את השעון הביולוגי ועוזר לגוף להבין מתי יום ומתי לילה.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">לא אוכל כבד לפני השינה:</strong> ארוחה כבדה מעסיקה את מערכת העיכול ומפריעה לשינה עמוקה. אם רעבים - משהו קל: יוגורט, בננה, חופן שקדים.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">נמנום קצר - כן, אבל נכון:</strong> אם חייבים לנמנם ביום (למשל אחרי אימון בוקר) - 20 דקות בלבד, לא אחרי שלוש אחה"צ. יותר מזה ותרגישו גרוע יותר.</li>
<li style="margin-bottom:0.75rem"><strong style="color:#fff">מתיחות/נשימות לפני השינה:</strong> 5 דקות מתיחות רצפה ו-10 נשימות עמוקות (שאיפה 4 שניות, עצירה 4, נשיפה 6) מורידות את הדופק ומכינות את הגוף לשינה.</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שינה בגיבוש: מה אפשר לעשות</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בגיבוש לא תמיד תבחרו מתי ואיך לישון. הקפצות, רעש ולחץ הם חלק מהעניין. אבל יש כמה דברים שכן בשליטה שלכם:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תירדמו מהר:</strong> ברגע שנותנים לכם לישון - אל תדברו, אל תחשבו על מה היה ומה יהיה. תעצמו עיניים ותנשמו לאט. אם הגעתם עם שגרת שינה מסודרת, הגוף שלכם ידע להירדם בשניות.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הגיעו מנוחים:</strong> "בנקאות שינה" עובדת. אם הגעתם לגיבוש אחרי שבוע של 9 שעות שינה בלילה, יש לכם רזרבה. אם הגעתם אחרי שבוע של 5 שעות - אתם מתחילים בחיסרון.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">נצלו מנוחות:</strong> גם 5 דקות מנוחה בין אקטים - עצמו עיניים, הורידו דופק, הירגעו. זה לא שינה, אבל זה משהו.</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שינה היא לא פינוק - היא חלק מהאימון. אם אתם רוצים להגיע חזקים יותר, מהירים יותר ועם ראש חד לגיבוש - תתייחסו לשינה כמו שאתם מתייחסים לאימון ותזונה. 8-9 שעות, שגרה קבועה, בלי מסכים לפני השינה. פשוט - אבל רוב האנשים לא עושים את זה.</p>
<p style="color:#d1d5db;line-height:1.75">התחילו הלילה. לכו לישון שעה לפני הרגיל. תודו לעצמכם בגיבוש.</p>`,
  },
  {
    id: "6",
    title: "ציוד חובה למתגייס לצה\"ל",
    desc: "רשימת הציוד המלאה ליום הגיוס ולטירונות בצה\"ל: מסמכים, ביגוד, היגיינה, ציוד שינה ופריטים שישנו לכם את החיים בבסיס.",
    category: "ציוד",
    date: "5 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoPBhin9HbdBK19EgxhAJODe-CScEW3wR2z8DYm1TuUUrQd7dRPsOcYFFhFxWhx8xp-8p6SKjjANoqZZXe8ATeLd8r5MeOhov5wZcWDIBdEY1V9KLCoIwZBxxI4r4TEd1whO-UHQRv73ih_Xz3Qr9XY-_hSi7SDnAUWdQ3XmBEOw-VSwvHIvXODeQJkHVv7halHheYowIkegfBKlAncpLham8B3ot4WonwSMTdSZ112yuT5byZeqBFaP5kitUtryP7PZylIT9wi3de",
    tags: ["ציוד", "גיבושים", "טירונות"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">יום הגיוס מתקרב ואתם לא יודעים מה לארוז? הנה הרשימה המסודרת. מה צה"ל נותן לכם, מה אתם צריכים להביא מהבית, ומה הפריטים הקטנים שיעשו לכם את החיים הרבה יותר קלים בטירונות.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מה מקבלים מצה"ל ביום הגיוס</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בשרשרת החיול תקבלו ציוד בסיסי:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">3 סטים של מדי א' (מכנסיים וחולצות)</li>
<li style="margin-bottom:0.25rem">נעליים צבאיות (זוג אחד)</li>
<li style="margin-bottom:0.25rem">מעיל חורף</li>
<li style="margin-bottom:0.25rem">חגורה וכומתה</li>
<li style="margin-bottom:0.25rem">דיסקית זיהוי</li>
<li style="margin-bottom:0.25rem">ערכת חייל בסיסית (שמפו, דאודורנט, סכין גילוח, משחת שיניים)</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הערכה הבסיסית של צה"ל מספיקה ליום-יומיים. אחרי זה תרצו ציוד שלכם.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מסמכים (חובה!)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בלי אלה לא מתגייסים:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">צו גיוס</strong> (המסמך שקיבלתם בדואר או דיגיטלי)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">תעודת זהות</strong> או רישיון נהיגה או דרכון בתוקף</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">פרטי חשבון בנק</strong> (מספר חשבון, סניף ובנק)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">שאלון קדם-גיוס</strong> (אם קיבלתם)</li>
<li style="margin-bottom:0.25rem">אישור רפואי אם יש לכם בעיה רפואית כלשהי</li>
<li style="margin-bottom:0.25rem">מרשם לתרופות קבועות (אם רלוונטי)</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">ביגוד להביא מהבית</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">המדים של צה"ל זה מה שלובשים מעל. מתחת ובשעות הפנאי, אתם צריכים דברים משלכם:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">10 זוגות תחתונים</strong> (שחור או אפור, לא צבעוני)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">10 זוגות גרביים ארוכים</strong> (שחור או אפור בלבד). גרביים זה הדבר שהכי מהר נגמר. קנו יותר מדי, לא פחות מדי</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">8 חולצות ירוקות/חאקי</strong> (חולצות ב' ללבוש מתחת למדים)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">2-3 מכנסי ספורט</strong> קצרים</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">פיג'מה נוחה</strong></li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">כפכפים למקלחות</strong> (חובה. אל תהיו יחפים במקלחות בבסיס)</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">לפי עונה</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">חורף:</strong> ביגוד תרמי (חולצה ומכנסיים), גרביים עבות, כפפות, כובע צמר, צעיף צוואר (באף). המעיל של צה"ל סביר, אבל שכבה תרמית מתחת עושה את ההבדל</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">קיץ:</strong> קרם הגנה (50+), ספריי נגד יתושים, בגדים קלים לשעות חופשיות</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">נעלי ספורט ומדרסים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הנעליים הצבאיות שתקבלו מצה"ל בסדר, אבל הן לא מה שתרצו לרוץ איתן. הביאו מהבית <strong style="color:#fff">נעלי ספורט טובות</strong> שכבר רצתם איתן לפחות שבוע-שבועיים קודם (לא חדשות מהקופסה ביום הגיוס). נעליים שלא תורגלו = שלפוחיות ביום הראשון.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אם יש לכם <strong style="color:#fff">מדרסים מותאמים</strong>, קחו אותם. אם אין, שקלו להשקיע. במיוחד אם אתם הולכים לטירונות קרבית, הרגליים שלכם הולכות לעבוד קשה והמדרסים ימנעו הרבה בעיות (כאבי ברכיים, שברי מאמץ, פאשיטיס).</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">ציוד היגיינה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">הערכה של צה"ל מספיקה ליום. קנו מראש:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">מברשת שיניים ומשחת שיניים</li>
<li style="margin-bottom:0.25rem">שמפו ומרכך (בקבוקים קטנים, לא ליטר)</li>
<li style="margin-bottom:0.25rem">סבון גוף / ג'ל רחצה</li>
<li style="margin-bottom:0.25rem">דאודורנט (סטיק, לא ספריי. ספריי עושה רעש ומשאיר ריח חזק בחדר)</li>
<li style="margin-bottom:0.25rem">קרם לחות ושפתון (בחורף זה חובה, השפתיים נסדקות)</li>
<li style="margin-bottom:0.25rem">קוצץ ציפורניים ומספריים קטנים</li>
<li style="margin-bottom:0.25rem">מגבת אישית (צה"ל לא נותן)</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">ציוד שינה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">המיטות בבסיס הן מה שהן. כמה דברים שישפרו את הלילה:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">סדין יחיד</strong> (מצויד)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">שמיכה דקה</strong> או שק שינה קל</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">כרית קטנה</strong> (לא כרית ענקית מהבית, משהו שנכנס בתיק)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">פנס ראש קטן</strong> (LED, עם אור אדום. תצטרכו אותו בלילה ובמסעות)</li>
<li style="margin-bottom:0.25rem">אטמי אוזניים (אופציונלי, אבל עוזר כשיש רעש בלילה)</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">ציוד רפואי</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">אקמול ואדוויל (כאבי ראש ושרירים. לא תמיד יש נגיש בחובשן)</li>
<li style="margin-bottom:0.25rem">פלסטרים למכות ולשלפוחיות</li>
<li style="margin-bottom:0.25rem">משחת אנטיביוטיקה בסיסית (פיוסידין)</li>
<li style="margin-bottom:0.25rem">משחה נגד עקיצות</li>
<li style="margin-bottom:0.25rem">תרופות קבועות + מרשם (חובה להביא מרשם)</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">פריטים שימושיים</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">שעון דיגיטלי עם סטופר</strong> (בסיסי, זול, עמיד במים. קסיו G-Shock או דומה. לא שעון חכם)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">מטען לטלפון ואוזניות</strong></li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">שק כביסה</strong> (לא תמיד מחלקים בבסיס)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">שקיות ניילון עמידות</strong> (לבגדים רטובים, לפרדה בין נקי ומלוכלך)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">מנעול קטן</strong> (לארון אישי)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">טוש קבוע (מרקר)</strong> (לסמן את הציוד שלכם. דברים נעלמים)</li>
<li style="margin-bottom:0.25rem">ספר (לזמן חופשי. הטלפון לא תמיד אתכם)</li>
<li style="margin-bottom:0.25rem">חטיפי אנרגיה וחטיפי חלבון (שמורים בצד, למקרה)</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מה לא לקחת</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">חפצי ערך (תכשיטים, אלקטרוניקה יקרה). דברים נעלמים בבסיס</li>
<li style="margin-bottom:0.25rem">יותר מדי בגדים אזרחיים. לא תלבשו אותם</li>
<li style="margin-bottom:0.25rem">ציוד מיותר שמכביד את התיק. תוכלו להביא דברים בחופשה הראשונה</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טיפים לאריזה</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ארזו לפי קטגוריות:</strong> שקית אחת להיגיינה, אחת לביגוד, אחת למסמכים. בבסיס תצטרכו למצוא דברים מהר</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">פריטים שימושיים בכיס חיצוני:</strong> מסמכים, טלפון, מטען, ארנק. לא בתחתית התיק</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">סמנו הכל בשם:</strong> טוש קבוע על גרביים, תחתונים, מגבת. אחרי כביסה משותפת, בלי שם לא תמצאו כלום</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">לא צריך ענק:</strong> תיק אחד בינוני מספיק. אפשר להשלים ציוד בחופשה הראשונה</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אל תעמיסו ואל תלחיצו. הימים הראשונים בבסיס הם בעיקר התאקלמות. הציוד החשוב באמת הוא: מסמכים, נעלי ספורט טובות, גרביים, ביגוד תרמי (בחורף), פנס, ושעון. כל השאר אפשר להשלים. תגיעו מוכנים אבל קלים.</p>`,
  },
  {
    id: "7",
    title: "מדריך פציעות",
    desc: "הפציעות הנפוצות בגיבושים ובצבא, איך למנוע אותן, מה לעשות אם נפצעתם ואיך לחזור לפעילות בצורה נכונה.",
    category: "רפואה",
    date: "10 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbs2UyGvi0OO_sgQP9ScUWhKt6oLr0FF-Rj9YAiNgsU-t1tpNT_jvHAfVM8e4e1ysNkcL0n7vWP7WX2wLTn_ETBx6vqwGbUQNeS9sX2XbVjrmqrjYNaKirOKqg5ccmRLz_VgDDZAtCori6T87Ul74mRcdPtObPj1i9NBZWdHdbN5QHuqmtmdLtKm0_KHMqgpMCFmTQyf3xc9JujUpQzL5FqNW2LO_Fec_IBRLwiXDfgP-S1cBqkaTgmsCprvxVPwtYDW3T4qZugNAb",
    tags: ["רפואה", "בריאות", "אימונים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">פציעה היא הסיוט של כל מי שמתכונן לגיבוש. חודשים של אימונים יכולים לרדת לפח בגלל שבר מאמץ, נקע או דלקת שאפשר היה למנוע. במדריך הזה נעבור על הפציעות הנפוצות ביותר, איך למנוע אותן, ומה לעשות אם בכל זאת קרה משהו.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">הפציעות הנפוצות</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שברי מאמץ (Stress Fractures)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">סדקים קטנים בעצם, בעיקר בכף הרגל, בשוקה (Tibia) ובעצם הירך. קורה כשהגוף לא מספיק להתאושש בין אימונים, והעצם נשברת לאט מעומס חוזר. הכאב מתחיל עמום, מחמיר עם פעילות ולא נעלם עם מנוחה. זו הפציעה הנפוצה ביותר בקרב חיילים קרביים ומתגייסים.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">דלקת גידים (Tendinitis)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">דלקת בגיד אכילס (מאחורה למטה ברגל), בברך (מתחת לפיקה), או בכתף. קורה מעומס חוזר בלי מספיק מנוחה. מרגישים כאב שורף או נוקשות באזור, בעיקר בבוקר או בתחילת פעילות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">נקעים ומתיחות</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">נקע בקרסול הוא הקלאסיקה - צעד על אבן, מעידה בזחילה, נחיתה לא טובה מקפיצה. מתיחת שריר קורית כשהשריר מתוח מדי או כשעושים תנועה חדה בלי חימום. הכי נפוץ: ירך אחורית (Hamstring), מפשעה, שוק.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">כאבי ברכיים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">Runner's Knee (כאב מסביב לפיקה), IT Band Syndrome (כאב בצד החיצוני של הברך), או דלקת ברצועות. שכיח במיוחד אצל רצים שמעלים עומסים מהר מדי, ואצל מי שרץ עם נעליים לא מתאימות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">Shin Splints (כאבי שוקיים)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כאב לאורך החלק הפנימי של השוק. נפוץ מאוד בתחילת אימונים או כשמגדילים עומס ריצה בפתאומיות. מרגישים את זה בעיקר בריצה ובהליכה מהירה. אם מתעלמים - יכול להתפתח לשבר מאמץ.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שלפוחיות</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">נשמע קטן, אבל שלפוחית במקום הלא נכון יכולה להשבית אתכם לגמרי. קורה מחיכוך של נעל או גרב, במיוחד ברגליים רטובות. בגיבוש, עם שעות של ריצה, מסעות וזחילות - זה כמעט בלתי נמנע אם לא נערכים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">איך למנוע פציעות</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">1. עלייה הדרגתית בעומסים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">זו הטעות הנפוצה ביותר: להעלות עומסים מהר מדי. הגוף צריך זמן להסתגל. הכלל הפשוט: לא להעלות יותר מ-10% בשבוע מהנפח הכולל (קילומטרים, משקלים, זמן אימון). אם רצתם 20 קילומטר השבוע, השבוע הבא תרוצו מקסימום 22. לא 30.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">2. נעליים מתאימות</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">נעלי ריצה לא נבראו שוות. לכו לחנות ספורט מקצועית ותעשו בדיקת כף רגל. סוג הריצה שלכם (Pronation), צורת כף הרגל והמשקל - כל אלה משפיעים על הנעל המתאימה. נעליים לא מתאימות = כאבי ברכיים, שוקיים ופציעות. אם יש צורך - שקלו מדרסים מותאמים אישית.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">3. חימום לפני, מתיחות אחרי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">לפני אימון:</strong> חימום דינמי - 5-10 דקות של תנועה שמעלה את הדופק ומכינה את השרירים. ריצה קלה, הליכה מהירה, סקוואטים בלי משקל, הנפות רגליים, סיבובי ידיים. לא מתיחות סטטיות לפני אימון - הן מחלישות את השריר זמנית.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">אחרי אימון:</strong> מתיחות סטטיות - 15-30 שניות לכל קבוצת שרירים. ירכיים, שוקיים, גב תחתון, כתפיים. זה מפחית נוקשות, מקדם זרימת דם ומסייע להתאוששות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">4. חיזוק שרירי ליבה וייצוב</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שרירי הליבה (בטן, גב תחתון, אגן) הם הבסיס של כל תנועה. ליבה חזקה = פחות עומס על ברכיים, קרסוליים וגב. תוסיפו לתוכנית האימון שלכם: פלאנק (30-60 שניות), Dead Bug, Bird Dog, גשרים (Bridges). 10-15 דקות, 3 פעמים בשבוע, זה מספיק כדי לעשות הבדל משמעותי.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">5. משטחי ריצה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ריצה על אספלט קשה שוחקת את המפרקים. נסו לגוון: שטח, דשא, שבילי עפר, מסלולי ריצה. אם רוב האימונים שלכם על אספלט - הקפידו על נעליים עם ריפוד טוב. בהכנה לגיבוש, כדאי לרוץ גם על חול ושטח לא ישר כי זה מה שתפגשו שם.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">6. תזונה ושתייה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">עצמות וגידים צריכים חומרי גלם כדי להתחזק. סידן (מוצרי חלב, ירקות ירוקים), ויטמין D (שמש, דגים שומניים), חלבון מספיק ומים. התייבשות מגדילה משמעותית את הסיכון לפציעה כי השרירים מאבדים גמישות והריכוז יורד.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">7. ימי מנוחה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הגוף מתחזק במנוחה, לא באימון. אימון שובר את השריר, מנוחה בונה אותו מחדש חזק יותר. לפחות יום-יומיים בשבוע בלי אימון אינטנסיבי. אפשר הליכה קלה, שחייה או יוגה - אבל לא ריצה או כוח. מי שמתאמן 7 ימים בשבוע לא מתאמן יותר, הוא נפצע יותר.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">8. מניעת שלפוחיות</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">גרביים מתאימות:</strong> גרביים סינתטיות או צמר מרינו, לא כותנה. כותנה סופגת זיעה ונשארת רטובה = חיכוך = שלפוחיות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">וזלין או Body Glide:</strong> למרוח על אזורים שנוטים לחיכוך (אצבעות, עקב, קמרון). שכבה דקה לפני אימון או גיבוש</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הרצת נעליים:</strong> לעולם אל תגיעו לגיבוש עם נעליים חדשות. תרוצו איתן לפחות 3-4 שבועות לפני</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">גרביים חלופיות:</strong> אם אפשר לקחת לגיבוש - קחו זוג גרביים יבשות. להחליף באמצע עושה הבדל עצום</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">סימני אזהרה - מתי לעצור</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">חשוב להבדיל בין כאב "נורמלי" של מאמץ לבין סימנים של פציעה אמיתית:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">כאב חד ופתאומי</strong> - במיוחד במפרק, בעצם או בגיד. עצרו מיד</li>
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">כאב שלא חולף אחרי מנוחה</strong> - אם אחרי יום-יומיים של מנוחה הכאב נשאר, זה לא סתם "שרירים תפוסים"</li>
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">נפיחות, חום מקומי או אודם</strong> - סימנים של דלקת או פגיעה ברקמה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">צליעה או שינוי בדרך ההליכה</strong> - אם אתם לא יכולים ללכת רגיל, אל תרוצו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">כאב שמחמיר עם פעילות</strong> - כאב שריר רגיל בדרך כלל משתפר עם חימום. כאב שמחמיר = בעיה</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">כלל אצבע:</strong> אם אתם מתלבטים אם לעצור - עצרו. יום מנוחה עכשיו עדיף על חודש בגבס אחר כך.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">נפצעתם? מה עושים (RICE)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">הפעולה הראשונה בכל פציעה חריפה (נקע, מתיחה, חבלה) היא פרוטוקול RICE:</p>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Rest (מנוחה)</strong> - תפסיקו את הפעילות. אל תנסו "להמשיך ולראות". אם כואב, תעצרו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Ice (קרח)</strong> - 15-20 דקות כל 2-3 שעות, ב-48 השעות הראשונות. לא ישירות על העור - עטפו בבד. הקרח מפחית נפיחות ודלקת</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Compression (לחיצה)</strong> - חבישה אלסטית על האזור הפגוע. לא חזק מדי, רק מספיק כדי לתמוך ולהפחית נפיחות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Elevation (הגבהה)</strong> - הרימו את האזור הפגוע מעל גובה הלב. שכבו ותשימו את הרגל על כרית. עוזר לניקוז נוזלים ולהורדת נפיחות</li>
</ol>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אם אחרי 48 שעות אין שיפור, או אם הנפיחות/כאב חמורים - לכו לרופא. לא לחכות.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">חזרה לפעילות אחרי פציעה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">זה החלק שהכי קשה מבחינה מנטלית. אתם רוצים לחזור מהר, חוששים להפסיד זמן אימון, מרגישים שכולם מתקדמים בלעדיכם. אבל לחזור מוקדם מדי = פציעה חוזרת, לפעמים קשה יותר.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">עקרונות לחזרה נכונה:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אישור רפואי.</strong> לא חוזרים לריצה אחרי שבר מאמץ "כי מרגישים בסדר". רופא או פיזיותרפיסט צריכים לאשר</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">חזרה הדרגתית.</strong> לא חוזרים לעומס מלא ביום הראשון. מתחילים ב-50% מהעומס ומעלים ב-10-15% כל שבוע. אם יש כאב - חוזרים שלב אחורה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">פיזיותרפיה.</strong> לא רק "תנוח וזה יעבור". שיקום פעיל עם תרגילי חיזוק, יציבות וגמישות הוא מה שמבטיח שהפציעה לא תחזור. אם יש אפשרות - לכו לפיזיותרפיסט ספורט</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הקשיבו לגוף.</strong> כאב קל בתחילת חזרה לפעילות יכול להיות נורמלי. כאב שמחמיר = עצרו. אל תדחפו דרך כאב בשיקום</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טיפים ספציפיים לגיבוש</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">טייפינג:</strong> אם יש לכם קרסול רגיש או היסטוריה של נקעים - תטייפו לפני הגיבוש. טייפ ספורט (לא פלסטר רגיל). תתרגלו את הטייפינג כמה פעמים לפני שתצטרכו לעשות את זה באמת</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">קרם הגנה ווזלין:</strong> חיכוך של ציוד, בגדים ונעליים על עור הוא בלתי נמנע. וזלין על ירכיים פנימיות, תחת הזרועות ואצבעות הרגליים יחסוך לכם הרבה סבל</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אל תגיעו פצועים.</strong> אם יש לכם פציעה פעילה - אל תלכו לגיבוש. רוב הגיבושים אפשר לעשות שוב. אם תלכו פצועים, תחמירו את הפציעה ותעשו רושם רע כי לא תוכלו לתפקד</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">פלסטרים ומגן שלפוחיות:</strong> קחו איתכם. Compeed או פלסטרים דומים. אם מרגישים "נקודה חמה" ברגל - תדביקו מיד, לפני שנהיית שלפוחית</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תוכנית מניעה בסיסית</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">שלבו את הדברים האלה בשגרת האימון שלכם:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">כל יום:</strong> מתיחות (5-10 דקות), גלגול על רולר קצף (Foam Roller) לשרירים תפוסים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">3 פעמים בשבוע:</strong> תרגילי חיזוק ליבה ויציבות (15 דקות). פלאנק, סקוואטים על רגל אחת, גשרים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">פעם בשבוע:</strong> אימון בעצימות נמוכה (Active Recovery) - שחייה, הליכה, אופניים קלים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">1-2 ימים בשבוע:</strong> מנוחה מלאה. לא אימון, לא ריצה. מנוחה</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הפציעה הכי טובה היא הפציעה שלא קורית. עלייה הדרגתית בעומסים, ציוד מתאים, חימום, מתיחות, חיזוק ומנוחה - זה כל מה שצריך כדי להגיע לגיבוש שלמים. ואם בכל זאת קורה משהו - אל תתעלמו, אל תדחפו, טפלו בזה נכון וחזרו חזק יותר. הגוף שלכם הוא הכלי הכי חשוב שיש לכם. תשמרו עליו.</p>`,
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
    desc: "תוכנית אימוני כוח בלי חדר כושר - תרגילי משקל גוף בחוץ שמכינים אתכם לגיבוש ולשירות קרבי.",
    category: "אימונים",
    date: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuComezQiL8mk0EezpaW59dAlUSP0bFd7guCMksPdrDwNbNUnOPtQe0Emq_5-lvPmZsPrls8yCcp_N44YVGOWAeCZUcBCWswnNPMXGuqfuP901w7H1is6hDmId_nCheB0ODPSnb6ZuessdHxWjeNjNpZCznZekQzuGAjL0Z7OzeaY-RDXYDYU1doi5-MRg3rFkYfXePditdsquMDps0pzPTX8_QiOmqtcozf15RkzSkfJcJxr7hPYLc9rPxliFAdMmIxI6yV3wk1Y7Bc",
    tags: ["אימונים", "כושר קרבי", "בריאות"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">לא צריך חדר כושר כדי להתחזק. חיילים בבסיסים, בני נוער שמתכוננים לגיבוש, ולוחמים באימון - רוב הזמן אין מכשירים, אין משקולות ואין מתקנים. מה שיש: את הגוף שלכם, הרצפה, ואולי מוט מתח או ספסל. וזה מספיק. במדריך הזה תמצאו תרגילים, תוכניות אימון שבועיות ועקרונות שיבנו את הכוח שאתם צריכים בשטח.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">למה אימוני משקל גוף עובדים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בגיבוש ובשירות קרבי אתם לא מרימים משקולות. אתם סוחבים אלונקה, זוחלים עם אפוד, מטפסים על חומות, רצים עם ציוד ומושכים חברים. כל הפעולות האלה דורשות כוח פונקציונלי - כוח שעובד בתנועות אמיתיות, לא בישיבה על מכשיר. תרגילי משקל גוף בונים בדיוק את הכוח הזה.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">יתרונות נוספים:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">אפשר לעשות בכל מקום - פארק, חצר בסיס, חוף, חדר</li>
<li style="margin-bottom:0.25rem">סיכון פציעה נמוך יותר ממשקולות כבדים</li>
<li style="margin-bottom:0.25rem">מחזקים יציבות, קואורדינציה ושליטה בגוף</li>
<li style="margin-bottom:0.25rem">משפרים סיבולת שרירית - לא רק כוח מקסימלי</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">התרגילים - פלג גוף עליון</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שכיבות שמיכה (Push-Ups)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">התרגיל הבסיסי ביותר ואחד היעילים ביותר. עובד על חזה, כתפיים, טרייספס וליבה.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">רגיל:</strong> ידיים ברוחב כתפיים, גוף ישר כמו קרש, יורדים עד שהחזה כמעט נוגע ברצפה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">רחב:</strong> ידיים רחוק מהכתפיים - דגש על חזה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">צר (Diamond):</strong> ידיים צמודות, אצבעות יוצרות משולש - דגש על טרייספס</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">עם מחיאת כף:</strong> דוחפים חזק מספיק כדי להרים ידיים מהרצפה - כוח מתפרץ</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">ברגליים מוגבהות:</strong> רגליים על ספסל או מדרגה - מגביר את העומס על כתפיים וחזה עליון</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">מתח (Pull-Ups)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">תרגיל המלך של פלג גוף עליון. עובד על גב, ביספס וכתפיים. מוט מתח אפשר למצוא כמעט בכל פארק, מגרש משחקים או בסיס.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">אחיזה עליונה (Overhand):</strong> דגש על גב רחב (Lats)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">אחיזה תחתונה (Chin-Up):</strong> דגש יותר על ביספס, בדרך כלל יותר קל</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">לא מצליחים אפילו אחד?</strong> התחילו עם מתח שלילי: קפצו למעלה והורידו את עצמכם לאט (5 שניות). 3 סטים של 5 חזרות. תוך 2-3 שבועות תעשו את הראשון</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">אין מוט?</strong> השתמשו בענף עץ חזק, שער כדורגל, או כל מבנה יציב שאפשר להיתלות עליו</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שקיעות (Dips)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">על ספסל, מדרגה, או מוטות מקבילים (נמצאים בהרבה פארקים). ידיים מאחורה על הספסל, רגליים קדימה, יורדים עד שהמרפקים ב-90 מעלות ודוחפים למעלה. מחזק טרייספס וכתפיים. ככל שמרחיקים את הרגליים - יותר קשה.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">התרגילים - פלג גוף תחתון</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">סקוואט (Squats)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">הבסיס לכוח רגליים. עובד על ירכיים (קוואדריספס), ישבן ושרירי ליבה.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">רגיל:</strong> רגליים ברוחב כתפיים, יורדים כאילו מתיישבים על כיסא, ברכיים לא חורגות קדימה מהבהונות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">קפיצה (Jump Squat):</strong> סקוואט + קפיצה פיצוצית למעלה - כוח מתפרץ לרגליים</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">על רגל אחת (Pistol Squat):</strong> רמה מתקדמת. יורדים על רגל אחת, השנייה ישרה קדימה. מי שמגיע לזה - יש לו רגליים חזקות ברמה גבוהה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">עם החזקה למטה:</strong> יורדים ומחזיקים למטה 3-5 שניות לפני שעולים - בונה כוח סטטי</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">לאנג'ים (Lunges)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">צעד קדימה ארוך, ברך אחורית יורדת כמעט לרצפה, דוחפים חזרה. עובד על כל שרירי הרגל ומשפר שיווי משקל. וריאציות: לאנג' הליכה (Walking Lunges) - מצוין כהכנה לנשיאת אלונקה ומסעות. לאנג' לצד - מחזק שרירים פנימיים וחיצוניים של הירך.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">עליות על ספסל (Step-Ups)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ספסל, מדרגה, או סלע יציב. עולים עם רגל אחת, דוחפים למעלה, מחליפים. מחקה את התנועה של טיפוס עם ציוד. ככל שהספסל גבוה יותר - יותר קשה. אפשר להוסיף תיק גב עם משקל.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">ריצת גבעה (Hill Sprints)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מצאו מדרון. רוצו למעלה בספרינט מלא, יורדים הליכה, חוזרים. 6-10 חזרות. זה בונה כוח ברגליים וסיבולת אנאירובית בו-זמנית. אחד התרגילים הכי יעילים שאפשר לעשות בחוץ בלי כלום.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">התרגילים - ליבה (Core)</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">פלאנק (Plank)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">על המרפקים ועל קצות האצבעות, גוף ישר כמו קרש. מחזיקים. מתחילים ב-30 שניות, מגיעים לדקה ומעלה. וריאציות: פלאנק צדדי (עובד על אלכסוניים), פלאנק עם הרמת יד/רגל לסירוגין.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">V-Ups / כפיפות בטן</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שכיבה על הגב, ידיים ורגליים ישרות. מרימים ידיים ורגליים יחד לכיוון המרכז, נוגעים באצבעות הרגליים, יורדים בשליטה. יותר אפקטיבי מכפיפות בטן רגילות כי מפעיל את כל שרירי הבטן.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">Superman</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שכיבה על הבטן, מרימים ידיים ורגליים מהרצפה בו-זמנית ומחזיקים 2-3 שניות. מחזק את הגב התחתון - אזור שנוטה להיפצע מנשיאת ציוד כבד.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">Bear Crawl (זחילת דוב)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ארבע, ברכיים מרחפות מעל הרצפה, מתקדמים קדימה. עובד על הכל - כתפיים, ליבה, רגליים, קואורדינציה. 20-30 מטר, הלוך וחזור. זה קשה הרבה יותר ממה שזה נשמע.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תרגילי כל הגוף</h2>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">Burpees</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">התרגיל שכולם שונאים - ובצדק, כי הוא עובד. מעמידה יורדים לרצפה, שכיבת שמיכה, קפיצה חזרה לעמידה, קפיצה למעלה עם ידיים מורמות. חוזרים. בונה כוח, סיבולת, ומהירות. 10 ברפיז רצופים ותרגישו למה.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">נשיאת משקל (Loaded Carries)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הכי קרוב למה שתעשו בגיבוש. קחו תיק גב, מלאו אותו עם בקבוקי מים או חול (15-25 קילו), ולכו איתו. Farmer's Walk - תיק ביד אחת ולהחליף. ריצה עם תיק. לאנג'ים עם תיק. זה בונה כוח אחיזה, כתפיים, גב, רגליים - וסיבולת נפשית. התחילו עם 10 דקות הליכה ותעלו בהדרגה.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">Mountain Climbers (מטפסי הרים)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">עמדת שכיבת שמיכה, מביאים ברך לחזה לסירוגין בקצב מהיר. מחזק ליבה, כתפיים, ומעלה דופק. 30 שניות עבודה, 15 שניות מנוחה, 4-6 סטים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תוכנית אימון שבועית - 4 ימים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">אפשר לעשות את הכל בחוץ, בלי ציוד (חוץ ממוט מתח ותיק גב). כל אימון כ-40-50 דקות כולל חימום וצינון.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום א' - דחיפה + ליבה</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שכיבות שמיכה רגילות - 4x15</li>
<li style="margin-bottom:0.25rem">שכיבות שמיכה רחבות - 3x12</li>
<li style="margin-bottom:0.25rem">שכיבות שמיכה Diamond - 3x10</li>
<li style="margin-bottom:0.25rem">שקיעות על ספסל - 4x12</li>
<li style="margin-bottom:0.25rem">שכיבות שמיכה רגליים מוגבהות - 3x10</li>
<li style="margin-bottom:0.25rem">פלאנק - 3x45 שניות</li>
<li style="margin-bottom:0.25rem">V-Ups - 3x15</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום ב' - רגליים + כוח מתפרץ</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">סקוואט - 4x20</li>
<li style="margin-bottom:0.25rem">לאנג' הליכה - 3x12 לכל רגל</li>
<li style="margin-bottom:0.25rem">Jump Squats - 4x10</li>
<li style="margin-bottom:0.25rem">עליות על ספסל - 3x12 לכל רגל</li>
<li style="margin-bottom:0.25rem">ריצת גבעה - 6 ספרינטים</li>
<li style="margin-bottom:0.25rem">Superman - 3x15</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום ד' - משיכה + ליבה</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">מתח אחיזה עליונה - 4x מקסימום חזרות</li>
<li style="margin-bottom:0.25rem">מתח אחיזה תחתונה - 3x מקסימום חזרות</li>
<li style="margin-bottom:0.25rem">Australian Pull-Ups (גוף אופקי מתחת למוט נמוך) - 3x12</li>
<li style="margin-bottom:0.25rem">Bear Crawl - 4x20 מטר</li>
<li style="margin-bottom:0.25rem">פלאנק צדדי - 3x30 שניות לכל צד</li>
<li style="margin-bottom:0.25rem">Mountain Climbers - 4x30 שניות</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום ה' - כל הגוף + סיבולת</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">Burpees - 4x10</li>
<li style="margin-bottom:0.25rem">נשיאת תיק (Loaded Walk) - 3x200 מטר</li>
<li style="margin-bottom:0.25rem">שכיבות שמיכה עם מחיאת כף - 3x8</li>
<li style="margin-bottom:0.25rem">סקוואט עם החזקה למטה (3 שניות) - 3x12</li>
<li style="margin-bottom:0.25rem">לאנג' עם תיק - 3x10 לכל רגל</li>
<li style="margin-bottom:0.25rem">פלאנק - עד כשל</li>
</ul>

<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem"><strong style="color:#fff">ימי מנוחה (ג', ו', שבת):</strong> מנוחה או פעילות קלה - הליכה, מתיחות, שחייה.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">איך להתקדם</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">בלי משקולות, צריך להתקדם בדרכים אחרות:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הוסיפו חזרות:</strong> 15 שכיבות שמיכה קלות? תעלו ל-20, 25, 30</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">האטו את התנועה:</strong> 3 שניות למטה, עצירה למטה, 2 שניות למעלה. משנה את כל התרגיל</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הקשו את הווריאציה:</strong> שכיבות שמיכה רגילות קלות? תעברו ל-Diamond, לרגליים מוגבהות, או עם מחיאת כף</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הוסיפו משקל:</strong> תיק גב עם בקבוקי מים. 5-10 קילו משנים הרבה בסקוואטים, שכיבות שמיכה ולאנג'ים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הפחיתו מנוחה:</strong> 90 שניות בין סטים קלות? תורידו ל-60, ואז ל-45. בונה סיבולת שרירית</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">עקרונות חשובים</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">טכניקה לפני הכל.</strong> שכיבת שמיכה לא נכונה לא שווה כלום ויכולה לפצוע. עדיף 10 חזרות מושלמות מ-30 רשלניות. בסקוואט - גב ישר, ברכיים יציבות. בשכיבות שמיכה - גוף ישר, בלי לשקוע בגב</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">חמממו לפני כל אימון.</strong> 5-10 דקות: ריצה קלה, הנפות ידיים, סיבובי מותן, סקוואטים בלי משקל. שריר קר = פציעה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">עקביות חשובה יותר מעצימות.</strong> 4 אימונים בשבוע למשך חודשיים ישנו אתכם יותר מ-7 אימונים בשבוע למשך שבועיים (ואז פציעה ושבוע מנוחה)</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תרשמו.</strong> כתבו מה עשיתם - כמה חזרות, כמה סטים. ככה תראו שאתם מתקדמים ותדעו מתי להעלות רמה</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">חדר כושר זה נחמד, אבל לא חובה. עם שכיבות שמיכה, מתח, סקוואטים, לאנג'ים, תיק גב מלא ומדרון - אפשר לבנות גוף חזק, פונקציונלי ומוכן לכל מה שגיבוש או שירות קרבי יזרוק עליכם. תתחילו היום, תהיו עקביים, תתקדמו בהדרגה - והגוף יעשה את שלו.</p>`,
  },
  {
    id: "10",
    title: "גיבוש מטכ\"ל - המדריך המלא",
    desc: "מבנה הגיבוש האחוד של סיירת מטכ\"ל, שלדג ו-669: ימים, אקטים ומשימות חשיבה - מה צפוי ולמה כדאי להתכונן.",
    category: "גיבושים",
    date: "8 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSDaYUGVTMegSBqHi0_J_IJKKa5pOVmq3_B-LnMaaV9qJ4Hn3_A_boScln_S_kgbMvrXqiAUSwldE4IPiE0nxHhrKiIYGnekERn0hULMPEV6nHwnAyI7CQprHo0C8VNlgsslnS1ZVGlt_el6CE1oQ25_Ekn31lkp6NeBV3NV9F4z-tnMuwALJIaGd58dfYKIp0m7zeO3AOlE9k1Cvnd0RM1q0vreP72Kk2obT9SGIgRtVZsd6e3SH7Lu2OZUyN8V-gSGp2_p-8xxhs",
    tags: ["גיבושים", "סיירת מטכ\"ל", "כושר קרבי"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">גיבוש מטכ\"ל האחוד הוא אחד הגיבושים המרכזיים לפני גיוס. אליו מגיעים דרך יום הסיירות (יום שדה), והוא ממיין לסיירת מטכ\"ל, שלדג, 669 ולחטיבת הקומנדו - מגלן, דובדבן ואגוז.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מבנה כללי</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הגיבוש נמשך כמה ימים. בכל צוות יש מגבשים מכל היחידות; המגבש שמוביל את הקצב משתנה לפי התרגיל. בין האקטים יש בדרך כלל 8-10 דקות מנוחה - חשוב לנצל אותן לשתייה והתאוששות.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום ראשון</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">לאחר התארגנות, חלוקת ציוד ובדיקות - מתחילים באקטים. בין התרגילים המרכזיים:</p>
<ul style="list-style:disc;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מירוץ פילים:</strong> ספרינטים עם ציוד צבאי מלא (כ־20 ק\"ג), קיטבג ונשק - המטרה להשלים מקצים לפי הוראות המגבש.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אלונקה סוציומטרית:</strong> ריצה למרחק קבוע, ארבעת הראשונים תופסים אלונקה ויוצאים לסיבוב נוסף - כך חוזר על עצמו מספר מקצים.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">סחיבת שקים:</strong> על דיונה - ריצה למתחם שקים, נשיאת שק וזחילה לכיסא המגבש, הקפה וחזרה; המטרה לצבור כמה שיותר סיבובים.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">זחילות עד למגבש:</strong> מקצי זחילה ארוכים; המגבש יכול להפעיל נוהל \"חדל\" - מי שעוצר מאבד יתרון. בסיום היום: בניית אוהל סיירים וסידור ציוד.</li>
</ul>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שני ויום שלישי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השכמות מוקדמות, אקטים פיזיים (זחילות, אלונקה, חפירת בורות) ומתחם משימות - העברת צוות בין מקצים, שדה מוקשים, קשרים וזיכרון (כולל קשרי 669), הרצאות ודיונים. אחרי אקטים פיזיים - ראיונות וחלוקה מחדש לצוותים (\"מסדר דמעות\").</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום רביעי ויום חמישי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מסע סוגר, משימות מחשבה (מבחן זיכרון, ידע כללי, בניית מבנה), מעגל זנבות ומעגל כוח, ולבסוף מסדר סיום והכרזות. מה שמחפשים: יציבות בביצועים, חוסן מנטלי, נכונות להוביל ויכולת לעבוד בצוות. גם מגמת שיפור לאורך הגיבוש נספרת - לא רק מי שמוביל מההתחלה.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">דגשים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">השתמשו במנוחה בין האקטים - שתייה, נשימה וסדר מחשבות. במשימות החשיבה - הדרך חשובה מהתוצאה: יוזמה, ניהול זמן וחלוקת תפקידים בצוות. הגיעו מוכנים פיזית ומנטלית, והכירו את סדר היום הכללי כדי לא להילחץ משינויים בשטח.</p>`,
  },
  {
    id: "11",
    title: "גיבוש יחטיות צנחנים - דובדבן ומגלן",
    desc: "מה צפוי בגיבוש היחטיות של חטיבת הצנחנים: אקטים, משימות חשיבה ומסע - קווים מנחים להכנה.",
    category: "גיבושים",
    date: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfpkRp9Dgy1z0eKChGSscLyEXHsmtF11-DQ1ZrgLofvMAw2BRa5IDtSLJk0LSOAo388xgozuhYHnRi3xIYM9SNuIJldaRHxakwe3RCV7YOI94sc6aGw9U_NfiHSng5H6d85CC0l9rKCOora6lvRnrfL7OWizycS02YMd-Iq7GGpmCNJUvM7tvuYAUZ98vrx3GVQwdn2spV_ng_62JgEZTSHqE7DFvo7G2Q8VvnLZKHJLUwhkngTn52GR5Ayq9CbD4z-KCRiGjY99d",
    tags: ["גיבושים", "צנחנים", "דובדבן", "מגלן"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">גיבוש יחטיות צנחנים ממיין ליחידות דובדבן ומגלן (ובמקביל לגדס\"ר). הגיעו אליו מי שעברו את גיבוש הצנחנים או נפלו מסיירות ועברו ראיונות - אבל רק חלק מסיימים את הגיבוש כמנצחים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">יום ראשון</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">פותחים בספרינטים (לפי סדרי הגעה) ולעיתים מעבר ישיר לזחילות בלי מנוחה - קבוצות שלא עומדות בקצב עלולות להוריד למקצי זחילה. אחר כך:</p>
<ul style="list-style:disc;padding-right:1rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">משימות חשיבה:</strong> שינון מפה ומאמרים (או טבלאות ורמטכ\"לים) - בהמשך נבחנים על החומר; בניית אות בעיניים מכוסות; לולאה בזרועות; סידור בשורה לפי גובה/משקל/גיל בעיניים עצומות.</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אלונקה סוציומטרית \"רצה\":</strong> וריאציה עם אוהל, אלונקה ותרמוקן - מי זוכה להרים מה נקבע לפי המקצה. אחרי החלק הפיזי: משימות בנייה (המבנה הגדול ביותר, מבנה עמיד בקשת).</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אלונקה קלאסית וזחילות:</strong> מנוחה במצב שתיים עד לאחרון; מסע יחטיות על דיונה - עליות וירידות עם שקי חול ותדלים. אם עליתם על האלונקה - לא יורדים ממנה עד סיום העלייה.</li>
</ul>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">לילה ויום שני</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לעיתים יוצאים למסע לילי אחרי \"הקפצה\" - אין הקפצה שנייה, אך יש להתארגן נכון. ביום השני: ספרינטים וזחילות מוקדם, משימות קואורדינציה (פירוק/הרכבת מג), משימת זיכרון על המפות, תרגיל שקים על הדיונה, זחילות במעגל וספרינטים (לעיתים 75 מ'). המסע הסוגר עם אלונקה, ובסיום - משימות הסוואה, זיכרון ומעגל זנבות/היאבקות. בחלק מהמועדים נוסף \"בוחן סיירת\": ריצה, זחילה, תרגילים ומדידת זמנים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">דגשים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בין תרגילים - כ־5 דקות מנוחה; לנצל לשתייה. במשימות קבוצתיות - להוביל בהסכמה, לא בכוח. בהרצאות - להכין כמה נושאים; המגבשים עלולים להחליף נושא. למי שמכוון למגלן - צפוי גיבוש פנים יחידה נוסף לאחר המעבר.</p>`,
  },
  {
    id: "12",
    title: "גיבוש חובלים - המדריך המלא",
    desc: "מבנה גיבוש חובלים: ארבעה ימים, מבחן סף, משימות בים ובחוף וראיונות - מה צריך לדעת לפני שנכנסים.",
    category: "גיבושים",
    date: "7 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD60L04AL19-HTUN-l_f5KRuFjYxUcMQ57IFI1UIdnSbGz4uWKoRkvxOYJD_rnr7QOOz-8aw8QMfCi9MLC0sEE4AfS7rDny1TgG0YNgHoSKSnQO9gMA0yD4DPWKI9aT8SCwgPzngogy5dyYv6Ep8y-rbidq6iue7TAXBHZMA9b9wpMlzegYeMNTc0NrWfDOsWhOZjjXUXasIS6tZW6rBj_uT3zBzwnpxmQYbA3_kpgFsvkg4cKJkkSjY8rBBmWIebzcXu_5kd0L1NjT",
    tags: ["גיבושים", "חובלים", "חיל הים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">גיבוש חובלים מתפרס על ארבעה ימים. מגיעים אליו דרך יום הסיירות - אפשר להתמיין בפועל ביום השדה או לחתום ויתור ולקבל זימון ישיר לגיבוש חובלים/צוללות.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">יום ראשון - התארגנות ומבחן סף</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">קליטה לחיל הים, הצגת אישורים רפואיים, ציוד עיוני וחלוקת פנקס לימוד. <strong style="color:#fff">מבחן סף:</strong> ריצת 3 ק\"מ בזמן סף - מי שלא עומד מודח. אחרי הריצה - חלוקה לצוותים ותחילת הגיבוש. ראיון קצר עם מגבשים וצוהרים, טבילה במים, ואז משימות: בניית מפה דמוגרפית מציוד, חפירת בור אישי וקבוצתי (מטר אורך, רוחב ועומק), ומשיכה בחבל בין שתי קבוצות - נמדדים מנהיגות וטקטיקה.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שני - סירות ומשימות</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הקפצה מוקדמת, תזוזה למסע קצר ולסירות גומי. על הסירות: פתרון שאלה (למשל חמישה חפצים באי בודד או בחירת אנשים להצלה), גלגל הצלה במקום הגבוה ביותר, בניית תורן מציוד - יש ציוד נוסף חבוי בסירה. אחר כך \"סירת הקאות\" - טלטול הסירות ליצירת רפלקס; נדרש להתמודד בלי לפרוש. חזרה לחוף: מבחן זיכרון על החומר העיוני, התקלות ע\"י צוהר, הרצאה מול קהל (עם החלפות נושא), ספרינטים ואלונקה סוציומטרית. בסוף היום - הקפצה.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שלישי ויום רביעי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מסע עם אלונקה פתוחה ושבע תדלים, משימות דינמיות (העברת מים, העברת צוות דרך נחל/קיר, הרכבת סירת גומי או מגדל איתות). המשך מבחנים עיוניים על הפנקס, תזוזים, ראיונות אישיים ושאלון סוציומטרי. מסדר סיום - הכרזות לקורס חובלים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טיפים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הפנקס צריך להיות בהישג יד לאורך הגיבוש - לעיין בו בהפסקות. לעבור על כותרות וראשי פרקים קודם, ואז להיכנס לפרטים. בהרצאה - להציג ביטחון ולהתמודד עם החלפות נושא. קריטריונים: פרופיל 82 ומעלה, דפ\"ר 60 ומעלה.</p>`,
  },
  {
    id: "13",
    title: "גיבוש יהל\"ם - חיל ההנדסה הקרבית",
    desc: "גיבוש יהל\"ם: שלושה ימים של אקטים פיזיים, משימות חשיבה וזיכרון - מה בודקים ואיך להתכונן.",
    category: "גיבושים",
    date: "6 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2wI-4vnNg2vJznc6r6EmpW9JtYDHzmgs1DqBEl0TSDdiTNZsf_pa2qIqppkDjfqL2nj61enoryO9sbPm-Cfv1Lwp8jKUavNNBmC0NbUQbyELUXneXxG0pw5hBbzfUluwqDxo61luPCDUDlQ8JDSj4V1x1MpgCFXQmFM98oorFGLZz8zRqdrqmsjY2fOf1OdQJmVnks4MR5UlAY2fgIMYNsF6bQhHBiNAQBwMmwYenuPW45uhqQ-QuDCCWqkeI_JO1FNiap8pxvvhy",
    tags: ["גיבושים", "יהל\"ם", "הנדסה קרבית"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">גיבוש יהל\"ם ממיין ליחידת יהל\"ם וליחידות המיוחדות שתחתיה, בהן סיירת יעל. הטירונות ביחידה נמשכת לאורך המסלול; המיון לפלגות מתבצע כבר לפי הביצועים בגיבוש.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">יום ראשון</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">אחרי התארגנות והרצאות - אקטים: תרגיל שקים (מילוי שק, ריצה לפסגה, הקפה וחזרה - צבירת סיבובים), חפירת בור לפי מידות, אלונקה סוציומטרית (ארבעה על אלונקה, חמישי תרמוקן), זחילות במישור לצבירת סיבובים. בחלק מהמועדים: פירוק והרכבת נשק (גליל) ומשימת בנייה (עמדת תצפית בצורת ח'). דפי מידע על מוקשים - יש ללמוד כי נבחנים ביום שני. מנוחה בין אקטים כ־5-7 דקות.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שני - משימות חשיבה ואקטים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">עמידה מול אוהל (לעיתים כשעה וחצי), ואז משימות: זיכרון קשרים (שני קשרים לאחר תצוגה), מוקשי נ\"א בארגז חול, בניית גשר מלגו, הוצאת ראש נפץ מפגז, ומבחן עיוני על מוקשים. אחרי ארוחת צהריים - ספרינטים, אלונקה סוציומטרית, תרגיל שקים, וספרינט משולב (ריצה, פירוק/הרכבת גליל ושאלות בזמן).</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שלישי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הקפצה, קידורים (ריצה, זחילות וכו'), משימת חשיבה (הרכבת שרשור במשקפות מושחרות). אקטים: ספרינטים, אלונקה, זחילות (הלוך־חזור 30 מ'), משיכה בחבל. משימות: מבוך ומיפוי, חידון ידע כללי, משחק מחבואים (איתור מוקשים בספרייה). סיום - ראיונות, שבירת דיסטנס ופירוק אוהלים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">דגשים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בעמידות - נצפים גם כשנראה שאין מי שמסתכל. כל שעה עגולה לעיתים מפקדים על סיום מימיה. יהל\"ם לא שוברת נהלי טירונות עד סיום המסלול - הגיבוש בודק כושר, זיכרון, עבודה בצוות וחשיבה תחת עומס.</p>`,
  },
  {
    id: "14",
    title: "גיבוש ימ\"ס - יחידת המסתערבים של מג\"ב",
    desc: "גיבוש ימ\"ס: שלושה ימים של התשה פיזית ומנטלית, מסע ביער גימזו ומשימות אמינות - מה צפוי.",
    category: "גיבושים",
    date: "8 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBDGXfS2FgIClwCx_f6bZml_ZBX7aCcaoLQ6B-QbaqnmC_AI6XzCzqGznXhctslZsZiFKXWG8PJde9yi8dEHwAgOm7zBXY6Oci_IA_W3rIolDgNwcVSFabqCJo9QB1dRjUuToq2BI-KFrJqmxF4yZnWtXyd_yhOk_ubz0BZiA-H0zf1mLcsISHjnLbnxbdw2Bzi5rla2CAd1W1gjPSxn9MdH5L-7AxqIvQCpF4gV25LHD5NAsnnvgCliCW9puzw9_pb7kvxpIyT-1A",
    tags: ["גיבושים", "ימ\"ס", "מג\"ב"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">גיבוש ימ\"ס (יחידת המסתערבים של משמר הגבול) מתקיים אחרי הגיוס ונחשב לאחד הגיבושים הקשים. מתחילים כ־150, מסיימים כ־30, ומתקבלים כ־15-18. יש זכאות לשלושה גיבושים במהלך השירות במג\"ב.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">יום ראשון</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מבחן סף (בר־אור + לעיתים ספרינט 400 מ' על זמנים). אחרי כניסה - תיזוזים עם ציוד מלא (מחסניות, מימיות, קסדה, אלונקה, מאגים, תרמוקנים, שקים) - אין מנוחה בין תרגילים. אחר כך: ספרינטים (50 מ', סדרי הגעה), אלונקה סוציומטרית (15 מקצים, ציוד אישי לא יורד), זחילות, ותרגיל קואורדינציה/זריזות (קריעה, עמידה, שכיבה) ולעיתים מבחני נשק (M16 ואקדחים) עם תיזוזים.</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שני - הקפצה ומסע</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הקפצה מוקדמת (למשל 02:00), אלונקה סוציומטרית, ספרינטים, זחילות סדרי הגעה, תיזוזים (שכיבות, סמקומים), זחילות כצוות. משימות מחשבה: תרגיל אמינות (עיגולים וצורות - לזכור ולבצע בעיניים עצומות; אין להציץ), שיח/הרצאה של 10 דקות מול קבוצה עם התקלות. אחרי שינה קצרה - מסע: יער גימזו, אלונקה פתוחה, ציוד מלא, עליות וירידות על גבעה, שינויי מצב (ריצה, זחילה, הליכת ברווז). פקודת \"מחבל\" - ימ\"סניקים מנטרלים; סחיבת פצוע, ספרינטים וזחילות. בחזרה - שאלה על מה שראיתם במסע; תרגיל אמינות אחרון (חיפוש מקלות בחול - לדווח רק את האמת).</p>
<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">יום שלישי</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הקפצה, ספרינטים, אלונקה, זחילות - ואז תרגילי קואורדינציה (מצבי נשק) וקרב מגע (שש על שש, אגרוף, היאבקות מול מגבש). תרגיל התשה: 800 מ' ריצה, מתח ומקבילים, מסכת אב\"ח ומבוך במטווח - זיהוי מחבלים מול חפים מפשע. משימות מחשבה: תפעול אירוע פח\"ע, מחבל מתאבד, התניידות בחדר לייזרים. סיום - תיזוזים וספרינטים אחרונים.</p>
<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">דגשים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כל התרגילים עם פק\"לים מלאים. בתרגילי אמינות - כנות מוחלטת; דיווח לא נכון מוביל להדחה. יש שיחה עם מפקד הגיבוש ביום הראשון וביום השני. הגיבוש כיום שלושה ימים (בעבר ארבעה).</p>`,
  },
  {
    id: "15",
    title: "איך לשפר את ריצת ה-2 קילומטר",
    desc: "תוכנית אימונים מעשית לשיפור זמן ריצת 2 ק\"מ - סוגי אימונים, קצב, טעויות נפוצות ותוכנית ל-4 שבועות.",
    category: "אימונים",
    date: "8 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD60L04AL19-HTUN-l_f5KRuFjYxUcMQ57IFI1UIdnSbGz4uWKoRkvxOYJD_rnr7QOOz-8aw8QMfCi9MLC0sEE4AfS7rDny1TgG0YNgHoSKSnQO9gMA0yD4DPWKI9aT8SCwgPzngogy5dyYv6Ep8y-rbidq6iue7TAXBHZMA9b9wpMlzegYeMNTc0NrWfDOsWhOZjjXUXasIS6tZW6rBj_uT3zBzwnpxmQYbA3_kpgFsvkg4cKJkkSjY8rBBmWIebzcXu_5kd0L1NjT",
    tags: ["אימונים", "כושר קרבי", "גיבושים"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">ריצת 2 קילומטר היא המבחן הגופני הבסיסי ביותר בצה"ל. היא נמדדת בגיבושים, ביום סיירות, במיונים ובמהלך השירות. הזמן שלכם בריצת 2 ק"מ אומר הרבה על הכושר האירובי שלכם, והוא אחד הדברים הראשונים שמסתכלים עליהם. החדשות הטובות: אפשר לשפר את הזמן בצורה משמעותית תוך 4-6 שבועות עם אימון נכון.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">יעדי זמן - איפה אתם עומדים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">כדי לדעת לאן לכוון, צריך להבין את הסקאלה:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מעל 10:00 דקות</strong> - מתחילים. יש מה לעבוד, אבל אפשר להשתפר מהר</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">9:00-10:00</strong> - ממוצע. מספיק לרוב המיונים הבסיסיים אבל לא ליחידות מובחרות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">8:00-9:00</strong> - טוב. רמה שמתאימה לרוב הגיבושים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">7:00-8:00</strong> - טוב מאוד. רמה תחרותית לגיבושים של יחידות מיוחדות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מתחת ל-7:00</strong> - מצוין. רמה של ספורטאים רציניים</li>
</ul>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לא משנה איפה אתם עכשיו - שיפור של 30-60 שניות ב-4 שבועות זה מאוד ריאלי עם אימון נכון.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">קצב - הטעות מספר אחת</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הטעות הכי נפוצה בריצת 2 ק"מ: להתחיל מהר מדי. הצרחה נשמעת, האדרנלין עולה, אתם רצים את 400 המטר הראשונים בטירוף - ואז מתפוצצים. הגוף מצטבר חומצת לקטט, הרגליים נעשות כבדות, והקילומטר השני הופך לסיוט.</p>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem"><strong style="color:#fff">מה לעשות במקום:</strong></p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Negative Split:</strong> תרוצו את הקילומטר הראשון קצת יותר איטי מהמטרה, ואת השני מהר יותר. למשל: אם המטרה היא 8:00, תרוצו את הק"מ הראשון ב-4:05 ואת השני ב-3:55</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">Even Split:</strong> אם Negative Split קשה לכם - לפחות שמרו על קצב אחיד. חלקו את זמן המטרה ל-2 ותרוצו כל קילומטר באותו קצב</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תכירו את הקצב שלכם:</strong> תתרגלו לרוץ 400 מטר בקצב המטרה עד שתדעו בדיוק איך זה מרגיש. ככה ביום הריצה הגוף יידע אוטומטית</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">סוגי אימונים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">כדי להשתפר צריך לגוון. ריצה באותו קצב כל יום לא תשפר אתכם. הנה 4 סוגי אימונים שכל אחד מהם עובד על משהו אחר:</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">1. אינטרוולים (Intervals)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:0.5rem">ריצות קצרות במהירות גבוהה עם מנוחה ביניהן. זה מה שבונה מהירות ויכולת אנאירובית.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">400 מטר חזרות:</strong> 6-8 חזרות של 400 מטר בקצב מטרה (או קצת מהר יותר), עם 90 שניות הליכה/ריצה קלה בין חזרה לחזרה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">800 מטר חזרות:</strong> 4-5 חזרות של 800 מטר בקצב מטרה, עם 2 דקות מנוחה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">200 מטר חזרות:</strong> 8-10 חזרות של 200 מטר מהר (מעל קצב מטרה), 60 שניות מנוחה. מפתח מהירות טהורה</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">2. ריצת טמפו (Tempo Run)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ריצה רציפה של 15-25 דקות בקצב "לא נוח אבל אפשרי" - בערך 80-85% מהמאמץ המקסימלי. אתם אמורים להיות מסוגלים להגיד כמה מילים אבל לא לנהל שיחה. זה מאמן את הגוף לרוץ מהר לאורך זמן ומעלה את סף הלקטט.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">3. ריצה קלה (Easy Run)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">ריצה בקצב נוח, 30-40 דקות. אמורים להיות מסוגלים לדבר בנורמליות. הרבה אנשים מזלזלים בזה, אבל ריצה קלה בונה בסיס אירובי, מחזקת גידים ורצועות, ומאפשרת התאוששות בין אימונים קשים. לפחות 50% מהריצות שלכם צריכות להיות קלות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">4. פארטלק (Fartlek)</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מילה שבדית שמשמעותה "משחק מהירויות". רצים ומשנים קצב לפי הרגשה: דקה מהר, 2 דקות רגיל, 30 שניות ספרינט, דקה הליכה. בלי שעון, בלי מרחקים מדויקים. מצוין למי שמשתעמם מאימונים מובנים, ומלמד את הגוף לשנות קצבים - בדיוק כמו בגיבוש.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">נשימה בריצה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הרבה רצים מתחילים נושמים לא נכון ומרגישים שנגמר להם האוויר. כמה כללים פשוטים:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">נשמו דרך הפה והאף יחד.</strong> לא רק דרך האף. בריצה מהירה הגוף צריך הרבה חמצן, והאף לבד לא מספיק</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">נשמו מהבטן, לא מהחזה.</strong> נשימה סרעפתית (הבטן מתנפחת בשאיפה) מכניסה יותר אוויר מנשימה שטחית מהחזה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">מצאו קצב נשימה.</strong> בריצה קלה: שאיפה כל 3 צעדים, נשיפה כל 3 צעדים. בריצה מהירה: שאיפה כל 2 צעדים, נשיפה כל 2 צעדים. תתרגלו את זה ותראו איך זה משתנה</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תוכנית 4 שבועות לשיפור הזמן</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">3-4 ריצות בשבוע. בימים שלא רצים - מנוחה או אימון כוח (ראו המאמר על אימוני כוח ללוחמים). חימום לפני כל אימון: 5-10 דקות ריצה קלה + מתיחות דינמיות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 1 - בניית בסיס</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום א':</strong> ריצה קלה 25 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ג':</strong> 6 חזרות של 400 מטר בקצב מטרה, 90 שניות מנוחה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ה':</strong> ריצת טמפו 15 דקות</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 2 - העלאת עומס</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום א':</strong> ריצה קלה 30 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ג':</strong> 4 חזרות של 800 מטר בקצב מטרה, 2 דקות מנוחה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ה':</strong> פארטלק 20 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום שבת:</strong> ריצה קלה 20 דקות</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 3 - שיא עומס</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום א':</strong> ריצה קלה 30 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ג':</strong> 8 חזרות של 400 מטר (מהר מקצב מטרה), 90 שניות מנוחה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ה':</strong> ריצת טמפו 20 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום שבת:</strong> ריצה קלה 25 דקות</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 4 - הורדת עומס + מבחן</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום א':</strong> ריצה קלה 20 דקות</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ג':</strong> 4 חזרות של 400 מטר בקצב מטרה, 2 דקות מנוחה (אימון קל)</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום ה':</strong> מנוחה מלאה</li>
<li style="margin-bottom:0.25rem"><strong style="color:#fff">יום שבת:</strong> מבחן ריצת 2 ק"מ - תנו הכל</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טיפים ליום המבחן</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">חממו.</strong> 10 דקות ריצה קלה + 3-4 תאוצות קצרות (50 מטר בקצב מבחן). תגיעו לקו הזינוק עם דופק קצת מוגבר, לא קרים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אל תצאו ספרינט.</strong> ה-200 מטר הראשונים צריכים להרגיש "קלים מדי". אם זה מרגיש קל בהתחלה - אתם בקצב הנכון</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">המטר ה-800: בדיקת קצב.</strong> בדקו את הזמן ב-800 מטר. אם אתם בקצב - המשיכו. אם מהר מדי - האטו קצת. עדיף לתקן עכשיו מלהתפוצץ ב-400 האחרונים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הקילומטר השני: ראש למטה ולדחוף.</strong> פה נכנסת העבודה המנטלית. תתמקדו בנשימה, בקצב הרגליים, בשיחה עצמית חיובית. "עוד 800", "עוד 400", "עוד 200"</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">200 מטר אחרונים: הכל.</strong> זה הזמן לספרינט. תנו את כל מה שנשאר. 200 מטר זה פחות מ-30 שניות, הגוף יכול לסבול</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טעויות נפוצות</h2>
<ol style="list-style:decimal;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני רץ 2 ק"מ כל יום כדי להשתפר"</strong> - לא. ריצת 2 ק"מ כל יום באותו קצב לא משפרת. הגוף מסתגל ונעצר. צריך גיוון: אינטרוולים, טמפו, ריצה קלה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"ריצה קלה זה בזבוז זמן"</strong> - ממש לא. ריצה קלה בונה את הבסיס האירובי שמאפשר לכם לרוץ מהר. בלי בסיס, אין על מה לבנות מהירות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני רץ כל יום בלי הפסקה"</strong> - מנוחה היא חלק מהאימון. בלי מנוחה הגוף לא מתאושש, אתם מתאמנים עייפים, ומסתכנים בפציעה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני רץ עם כל נעל שיש"</strong> - נעלי ריצה מתאימות עושות הבדל. אם אתם רציניים לגבי הריצה, השקיעו בנעליים טובות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">"אני לא עושה חימום"</strong> - ריצה על שרירים קרים = ביצועים נמוכים + סיכון לפציעה. 10 דקות חימום לפני מבחן יכולות לחסוך לכם 10-15 שניות בזמן</li>
</ol>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שיפור בריצת 2 ק"מ דורש אימון חכם, לא רק אימון קשה. תגוונו בין אינטרוולים, טמפו וריצה קלה. תשמרו על קצב נכון ביום המבחן - לא מהר מדי בהתחלה. תנוחו, תישנו, תאכלו טוב. ואחרי 4 שבועות של עבודה עקבית, תראו שיפור שירגיש כמו קפיצת מדרגה.</p>`,
  },
  {
    id: "16",
    title: "מדריך שחייה והכנה למים",
    desc: "איך להתכונן לשלבי מים בגיבושים: טכניקת שחייה, ביטחון במים, שחייה עם בגדים ותוכנית אימון למתחילים.",
    category: "אימונים",
    date: "8 דק' קריאה",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfpkRp9Dgy1z0eKChGSscLyEXHsmtF11-DQ1ZrgLofvMAw2BRa5IDtSLJk0LSOAo388xgozuhYHnRi3xIYM9SNuIJldaRHxakwe3RCV7YOI94sc6aGw9U_NfiHSng5H6d85CC0l9rKCOora6lvRnrfL7OWizycS02YMd-Iq7GGpmCNJUvM7tvuYAUZ98vrx3GVQwdn2spV_ng_62JgEZTSHqE7DFvo7G2Q8VvnLZKHJLUwhkngTn52GR5Ayq9CbD4z-KCRiGjY99d",
    tags: ["אימונים", "גיבושים", "כושר קרבי"],
    body: `<p style="color:#d1d5db;font-size:1.125rem;line-height:1.75;margin-bottom:1.5rem">בלא מעט גיבושים יש שלבי מים - שחייה, ציפה, משימות במים, ולפעמים כניסה לים בלילה. הגיבושים של שייטת 13, חובלים, צוללות, ואפילו חלק מגיבוש מטכ"ל כוללים מרכיבי מים. הבעיה: הרבה בני נוער לא שוחים טוב, או שוחים בבריכה אבל מפחדים ממים פתוחים. המדריך הזה יעזור לכם להגיע מוכנים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">למה ביטחון במים חשוב</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">מים הם סביבה שהאדם לא נולד אליה. ברגע שאתם במים, הגוף מגיב אחרת - הנשימה מתקצרת, הדופק עולה, והראש יכול להיכנס לפאניקה. בגיבוש, לפאניקה אין מקום. מי שנכנס לפאניקה במים - נשלף מיד. לכן, האימון הכי חשוב הוא לא בהכרח שחייה מהירה, אלא ביטחון ושליטה עצמית במים.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">טכניקת חתירה (Freestyle) - הבסיס</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">חתירה (קרול) היא סגנון השחייה היעיל ביותר ומה שתצטרכו בגיבוש. הנה המרכיבים:</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">מצב גוף</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">הגוף צריך להיות ישר ואופקי - כמו קרש על פני המים. ירכיים למעלה, ראש במים (מסתכלים ישר למטה, לא קדימה). הטעות הנפוצה: להרים את הראש, מה שגורם לרגליים לשקוע ויוצר התנגדות.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">תנועת ידיים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">היד נכנסת למים ישר קדימה (לא חוצה את קו המרכז), אצבעות צמודות, ומושכת את המים לאחור לאורך הגוף. חשבו על זה כאילו אתם תופסים מים ודוחפים אותם לכיוון הרגליים. המרפק נשאר גבוה בכניסה למים.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">בעיטת רגליים</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בעיטה קטנה ורציפה מהירכיים, לא מהברכיים. הרגליים כמעט ישרות, קצות האצבעות מצביעות לאחור. אל תבעטו חזק מדי - זה בזבוז אנרגיה. בעיטה קלה שומרת על יציבות ומצב גוף, ההנעה העיקרית באה מהידיים.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">נשימה</h3>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לסובב את הראש הצידה (לא להרים) כל 2-3 תנועות יד. נשיפה מתמשכת מתחת למים דרך האף או הפה. שאיפה מהירה כשהראש מסתובב. הטעות: להחזיק אוויר ואז לנסות לנשוף ולשאוף באותו רגע. תנשפו מתחת למים כדי שכשהפה יוצא מהמים - רק תשאפו.</p>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">ציפה ודריכת מים (Treading Water)</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בגיבושים יכולים לבקש מכם לצוף במקום לפרק זמן ארוך. הסוד: לא לבזבז אנרגיה.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">בעיטת ביצה (Eggbeater):</strong> הרגליים עושות תנועה מעגלית לסירוגין (כמו דוושות אופניים אבל לצדדים). יעיל הרבה יותר מבעיטה רגילה ומאפשר להישאר צף בלי ידיים. תתרגלו את זה - זה מיומנות שמצילה אנרגיה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ידיים:</strong> תנועת "שמינייה" רחבה מתחת לפני המים. לא צריך לדפוק את המים - תנועה רגועה ורחבה מספיקה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הגוף:</strong> קצת נוטה אחורה, לא זקוף לגמרי. ככה פחות מהגוף מתחת למים ודרוש פחות מאמץ</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שחייה עם בגדים ונעליים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בגיבוש אתם לא נכנסים למים בבגד ים. אתם נכנסים עם מדים, נעליים, ולפעמים ציוד. זה משנה הכל.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הבגדים כבדים:</strong> בגדים רטובים סוחבים 2-3 קילו נוספים. זה מרגיש כמו שוחים בבוץ. הדרך להתרגל: תתרגלו בבריכה עם חולצה ומכנסיים ארוכים. תתחילו עם 100 מטר ותעלו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">נעליים גוררות:</strong> נעליים במים יוצרות התנגדות ענקית ומשנות את הבעיטה. תתרגלו לשחות עם נעלי ספורט ישנות. הבעיטה תהיה איטית יותר - זה נורמלי</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">טיפ:</strong> כשנכנסים למים עם בגדים, שנו את הטכניקה: בעיטת רגליים רחבה יותר, תנועות ידיים חזקות יותר, קצב יותר איטי. אל תנסו לשחות באותו קצב כמו בבגד ים - תתעייפו תוך דקות</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">עצירת נשימה וביטחון מתחת למים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">בחלק מהגיבושים יש תרגילים שדורשים עצירת נשימה - שחייה מתחת למים, צלילה לעומק, או פשוט שהייה מתחת לפני המים.</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">תתרגלו בבריכה:</strong> התחילו עם עצירת נשימה במים רדודים (עומדים ושמים את הראש במים). 20 שניות, 30, 40, 50, דקה. אל תדחפו מעבר לנוח - הרעיון הוא לבנות ביטחון, לא לשבור שיאים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">הירגעו:</strong> הסוד לעצירת נשימה ארוכה הוא להיות רגועים. דופק נמוך = צריכת חמצן נמוכה = אפשר להחזיק יותר. פאניקה = דופק גבוה = נגמר מהר</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">שחייה מתחת למים:</strong> תתרגלו לשחות 15-25 מטר מתחת למים. בעיטת צפרדע (חתירת חזה) יעילה יותר מחתירה רגילה מתחת לפני המים. תנועות גדולות ואיטיות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#f87171">אזהרה:</strong> לעולם אל תתרגלו עצירת נשימה לבד. תמיד עם מישהו שמשגיח. Shallow Water Blackout (אובדן הכרה מתחת למים) הוא סכנה אמיתית</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">מים פתוחים לעומת בריכה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">שחייה בים או בכנרת זה סיפור אחר לגמרי מבריכה. כמה הבדלים שצריך להכיר:</p>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אין קיר.</strong> בבריכה, כל 25 או 50 מטר יש קיר לנוח. בים - אין. צריך להיות מסוגלים לשחות רציף בלי עצירה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">גלים וזרמים.</strong> הים זז. גלים משנים את קצב הנשימה, זרמים מושכים הצידה. תתרגלו בים כשהוא רגוע לפני שנכנסים בתנאים קשים</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">לא רואים את הקרקעית.</strong> זה מפחיד חלק מהאנשים. זה נורמלי. ככל שתהיו יותר במים פתוחים, ככה זה יפחיד פחות</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">טמפרטורה.</strong> מי ים בחורף קרים. קור גורם לשרירים להתכווץ ולנשימה להתקצר. תתרגלו כניסה למים קרים בהדרגה - רגליים, מותניים, חזה, ואז כל הגוף</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">ניווט.</strong> בבריכה יש פס שחור בתחתית. בים אין. צריך להרים את הראש כל 10-15 תנועות יד לבדוק כיוון. זה נקרא Sighting ואפשר לתרגל את זה גם בבריכה</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">תוכנית אימון 4 שבועות למתחילים</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">2-3 אימוני בריכה בשבוע, 30-45 דקות כל אחד. אם אתם מתחילים מאפס, שיקלו שיעור אחד עם מדריך שחייה כדי ללמוד טכניקה בסיסית.</p>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 1 - היכרות</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שחייה חופשית 4x50 מטר, 30 שניות מנוחה בין כל 50</li>
<li style="margin-bottom:0.25rem">תרגול בעיטת רגליים עם לוח - 4x25 מטר</li>
<li style="margin-bottom:0.25rem">דריכת מים - 3x30 שניות</li>
<li style="margin-bottom:0.25rem">עצירת נשימה (עומדים) - 5x20 שניות</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 2 - בניית סיבולת</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שחייה חופשית 6x50 מטר, 20 שניות מנוחה</li>
<li style="margin-bottom:0.25rem">שחייה רציפה 200 מטר (בלי עצירה)</li>
<li style="margin-bottom:0.25rem">דריכת מים - 3x45 שניות</li>
<li style="margin-bottom:0.25rem">שחייה מתחת למים - 4x15 מטר</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 3 - הוספת אתגר</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שחייה רציפה 400 מטר</li>
<li style="margin-bottom:0.25rem">שחייה עם חולצה - 4x50 מטר</li>
<li style="margin-bottom:0.25rem">דריכת מים - 3x60 שניות</li>
<li style="margin-bottom:0.25rem">שחייה מתחת למים - 4x20 מטר</li>
<li style="margin-bottom:0.25rem">כניסה למים פתוחים (ים/כנרת) - שחייה 200 מטר</li>
</ul>

<h3 style="color:#fff;font-size:1.125rem;font-weight:700;margin-top:2rem;margin-bottom:0.5rem">שבוע 4 - סימולציה</h3>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.25rem">שחייה רציפה 500 מטר</li>
<li style="margin-bottom:0.25rem">שחייה עם בגדים + נעליים - 200 מטר</li>
<li style="margin-bottom:0.25rem">דריכת מים - 2x90 שניות</li>
<li style="margin-bottom:0.25rem">דריכת מים עם ידיים מעל המים - 2x30 שניות</li>
<li style="margin-bottom:0.25rem">מים פתוחים - שחייה 400 מטר</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">בטיחות</h2>
<ul style="list-style:disc;padding-right:1.25rem;color:#d1d5db;line-height:1.75;margin-bottom:1rem">
<li style="margin-bottom:0.5rem"><strong style="color:#fff">לעולם לא לבד.</strong> תמיד עם שותף או בבריכה עם מציל. בים - תמיד עם מישהו</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">לא לתרגל עצירת נשימה לבד.</strong> Shallow Water Blackout קורה בלי אזהרה. שנייה אחת אתם בסדר, ושנייה אחרי אתם מתחת למים בלי הכרה</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">להכיר את הים.</strong> לפני כניסה למים פתוחים - בדקו זרמים, מזג אוויר, ועומק. אל תיכנסו לים סוער לאימון</li>
<li style="margin-bottom:0.5rem"><strong style="color:#fff">אם נכנסתם לפאניקה:</strong> עצרו, תסתובבו על הגב, תצופו, תנשמו. המים מחזיקים אתכם. ברגע שנרגעתם - המשיכו</li>
</ul>

<h2 style="color:#fff;font-size:1.25rem;font-weight:800;margin-top:2.5rem;margin-bottom:1rem;text-transform:uppercase">שורה תחתונה</h2>
<p style="color:#d1d5db;line-height:1.75;margin-bottom:1rem">לא צריך להיות שחיין אולימפי כדי לעבור שלבי מים בגיבוש. צריך להיות בטוחים במים, לדעת לשחות חתירה סבירה, לדעת לצוף, ולא להיכנס לפאניקה. 4 שבועות של אימון סדיר בבריכה, עם חשיפה הדרגתית למים פתוחים ולשחייה עם בגדים - ותגיעו מוכנים. המים הם לא האויב. פחד מהמים הוא האויב. תתרגלו, תתרגלו, תתרגלו.</p>`,
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
