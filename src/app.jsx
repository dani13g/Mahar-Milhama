/**
 * ============================================================================
 * MAHAR MILHAMA - REACT APPLICATION
 * ============================================================================
 * 
 * Single-Page Application (SPA) structure:
 * - Uses React Router with HashRouter for client-side routing
 * - All components are defined in this file (inline for static deployment)
 * - Shared components: Navbar, Footer (used across all pages)
 * - Page components: HomePage, TeamPage, MethodPage, ArticlesPage, ContactPage, FAQPage
 * 
 * Architecture:
 * 1. Constants (IMAGE_URLS) - Centralized image management
 * 2. Shared Components (Navbar, Footer) - Consistent UI across pages
 * 3. Page Components - Individual page content
 * 4. App Router - Routes configuration
 * 5. React Root - Application initialization
 * 
 * Note: This is a static build output. For source code changes, edit the
 * source repository and rebuild. Small content edits can be made here directly.
 */

const { useState, useEffect } = React;
const { createRoot } = ReactDOM;
const { HashRouter, Routes, Route, Link, useNavigate, useLocation, useParams } = ReactRouterDOM;

// Ensure critical globals exist so the app doesn't crash if a script failed to load
// Do not redeclare ROUTES/IMAGE_URLS (they may already be declared by constants/*.js)
if (typeof window !== 'undefined') {
    if (typeof window.ROUTES === 'undefined') {
        window.ROUTES = { HOME: '/', TEAM: '/team', METHOD: '/method', ARTICLES: '/articles', ARTICLE_DETAIL: '/articles/:id', CONTACT: '/contact', FAQ: '/faq', TERMS: '/terms', PRIVACY: '/privacy', ACCESSIBILITY: '/accessibility' };
    }
    if (typeof window.IMAGE_URLS === 'undefined') {
        window.IMAGE_URLS = { logo: 'images/minimal-black-logo.png', ctaBackground: '', heroTeam: '', heroMethodBackground: '', galleryImages: [] };
    }
    if (typeof window.ARTICLES === 'undefined') { window.ARTICLES = []; }
    if (typeof window.FEATURED_ARTICLE === 'undefined') { window.FEATURED_ARTICLE = window.ARTICLES[0] || null; }
    if (typeof window.SIDEBAR_ARTICLES === 'undefined') { window.SIDEBAR_ARTICLES = window.ARTICLES.slice(1, 3); }
    if (typeof window.ALL_ARTICLES === 'undefined') { window.ALL_ARTICLES = window.ARTICLES.slice(3); }
    if (typeof window.HOME_BLOG_ARTICLES === 'undefined') { window.HOME_BLOG_ARTICLES = []; }
    if (typeof window.SITE_CONFIG === 'undefined') {
        window.SITE_CONFIG = { contact: { phone: '', email: '', whatsapp: '#' }, social: { facebook: '#', instagram: '#' } };
    }
}

// Constants and data are loaded via script tags in <head>
// Available globals: IMAGE_URLS, ROUTES, SITE_CONFIG, TEAM_MEMBERS, FAQS, TESTIMONIALS, FEATURES, METHOD_PILLARS, etc.
// See constants/index.js and data/*.js files for structure

/**
 * Navbar Component
 * 
 * Shared navigation component used across all pages.
 * Features:
 * - Active route highlighting (uses React Router's useLocation)
 * - Sticky positioning with backdrop blur
 * - Responsive design with working mobile menu
 * - Mobile: Logo left, menu icon right (no "הצטרף עכשיו" button)
 * - Desktop: Centered nav with "הצטרף עכשיו" button
 * - Accessibility: ARIA labels for screen readers
 */
const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Use utility function for route checking (if available, fallback to inline)
    const isActive = (path) => {
        if (typeof window !== 'undefined' && window.RoutingUtils) {
            return window.RoutingUtils.isActiveRoute(location.pathname, path);
        }
        return location.pathname === path;
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('nav')) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    const menuToggleRef = React.useRef(null);

    useEffect(() => {
        if (!isMobileMenuOpen) return;
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMobileMenuOpen(false);
                menuToggleRef.current && menuToggleRef.current.focus();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { path: ROUTES.HOME, label: 'דף הבית', ariaLabel: 'עבור לדף הבית' },
        { path: ROUTES.TEAM, label: 'הצוות', ariaLabel: 'עבור לדף הצוות' },
        { path: ROUTES.METHOD, label: 'השיטה', ariaLabel: 'עבור לדף השיטה' },
        { path: ROUTES.ARTICLES, label: 'מאמרים', ariaLabel: 'עבור לדף המאמרים' },
        { path: ROUTES.CONTACT, label: 'צור קשר', ariaLabel: 'עבור לדף יצירת קשר' },
        { path: ROUTES.FAQ, label: 'שאלות נפוצות', ariaLabel: 'עבור לדף שאלות נפוצות' }
    ];

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-background-dark/95 backdrop-blur-md" aria-label="ניווט ראשי">
            <div className="flex justify-center w-full">
                <div className="flex max-w-[1400px] flex-1 flex-col relative">
                    <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 lg:px-10">
                        {/* Mobile: Menu icon on left | Desktop: Logo on left */}
                        <div className="flex items-center flex-shrink-0">
                            {/* Mobile: Menu toggle button - Left side */}
                            <button 
                                ref={menuToggleRef}
                                className="md:hidden text-white hover:text-primary transition-colors" 
                                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"} 
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="material-symbols-outlined" aria-hidden="true">
                                    {isMobileMenuOpen ? 'close' : 'menu'}
                                </span>
                            </button>
                            
                            {/* Logo - Hidden on mobile (shown on right), visible on desktop (left) */}
                            <Link to="/" className="hidden md:flex items-center text-white flex-shrink-0" aria-label="עבור לדף הבית">
                                <img src={IMAGE_URLS.logo} alt="מחר מלחמה - לוגו" className="h-10 w-auto" loading="eager" />
                            </Link>
                        </div>
                        
                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex flex-1 justify-center gap-8 items-center" role="navigation" aria-label="תפריט ניווט">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.path}
                                    className={`text-sm font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-gray-300 hover:text-white'}`} 
                                    to={link.path} 
                                    aria-label={link.ariaLabel}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        
                        {/* Mobile: Logo on right | Desktop: "הצטרף עכשיו" button */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            {/* Mobile: Logo on right side */}
                            <Link to="/" className="md:hidden flex items-center text-white flex-shrink-0" aria-label="עבור לדף הבית">
                                <img src={IMAGE_URLS.logo} alt="מחר מלחמה - לוגו" className="h-10 w-auto" loading="eager" />
                            </Link>
                            
                            {/* Desktop: "הצטרף עכשיו" button - Hidden on mobile */}
                            <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="hidden md:flex group relative px-6 py-2 bg-transparent overflow-hidden rounded-none border border-white/30 hover:border-primary transition-all duration-300" aria-label="הצטרף עכשיו">
                                <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-white text-sm font-black tracking-normal uppercase group-hover:text-white">הצטרף עכשיו</span>
                            </a>
                        </div>
                    </header>
                    
                    {/* Mobile Menu - Overlay animation */}
                    <div 
                        className={`md:hidden absolute top-full left-0 right-0 bg-background-dark backdrop-blur-md border-t border-white/10 transition-all duration-300 ease-in-out ${
                            isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                        role="navigation"
                        aria-label="תפריט ניווט נייד"
                    >
                        <div className="px-6 py-4 bg-background-dark flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.path}
                                    className={`text-base font-bold py-2 transition-colors border-r-4 pr-4 ${
                                        isActive(link.path) 
                                            ? 'text-primary border-primary' 
                                            : 'text-gray-300 border-transparent hover:text-white hover:border-primary/50'
                                    }`} 
                                    to={link.path} 
                                    aria-label={link.ariaLabel}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

/**
 * Footer Component
 * 
 * Shared footer component used across all pages.
 * Contains:
 * - Logo and brand description
 * - Quick navigation links
 * - Contact information
 * - Newsletter signup form (non-functional placeholder)
 * - Social media links (placeholders)
 * - Legal links (placeholders)
 */
const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10 text-gray-500 font-sans">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center text-white">
                            <img src={IMAGE_URLS.logo} alt="מחר מלחמה - לוגו" className="h-10 w-auto" loading="lazy" />
                        </div>
                        <p className="text-base sm:text-lg leading-relaxed border-r-2 border-primary pr-4">
                            הבית של הלוחמים לעתיד. אנחנו כאן כדי להכין אותך לכל אתגר שהצבא יזרוק עליך.
                        </p>
                        <div className="flex gap-3">
                            <a className="size-10 bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all border border-white/10" href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.social.facebook) || '#'} target="_blank" rel="noopener noreferrer" aria-label="Facebook - מחר מלחמה כושר קרבי">
                                <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                            </a>
                            <a className="size-10 bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all border border-white/10" href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.social.instagram) || '#'} target="_blank" rel="noopener noreferrer" aria-label="Instagram - מחר מלחמה כושר קרבי">
                                <svg className="size-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>
                    </div>
                    </div>
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-wider">ניווט מהיר</h4>
                        <ul className="flex flex-col gap-3 text-sm font-bold">
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" to="/">עמוד הבית</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" to="/team">הצוות</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" to="/method">השיטה</Link></li>
                            <li><Link className="hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200" to="/articles">בלוג מקצועי</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-wider">צור קשר</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium">
                            <li className="flex items-start gap-3 group">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">call</span>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">טלפון</span>
                                    <a className="text-white hover:text-primary transition-colors" href={`tel:${SITE_CONFIG.contact.phone}`}>{SITE_CONFIG.contact.phone}</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">mail</span>
                                <div>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">אימייל</span>
                                    <a className="text-white hover:text-primary transition-colors" href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-wider">הישאר מעודכן</h4>
                        <p className="text-sm mb-4">טיפים שבועיים לשיפור הכושר.</p>
                        <form className="flex flex-col gap-2" onSubmit={e => e.preventDefault()}>
                            <label htmlFor="footer-email" className="sr-only">כתובת אימייל</label>
                            <input id="footer-email" className="bg-white/5 border border-white/10 rounded-none h-12 px-4 text-sm text-white focus:border-primary focus:bg-black outline-none focus-visible:ring-2 focus-visible:ring-primary placeholder:text-gray-500 transition-all" placeholder="הכנס אימייל" type="email" />
                            <button className="bg-white/10 hover:bg-primary text-white font-black uppercase tracking-wider text-sm h-12 rounded-none transition-colors border border-white/10 hover:border-primary" aria-label="הרשם עכשיו">הרשם עכשיו</button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-gray-500">
                    <div>
                        © 2026 .מחר מלחמה. נבנה בדם, יזע ודמעות.
                    </div>
                    <div className="flex gap-6">
                        <Link className="hover:text-white transition-colors" to={ROUTES.TERMS}>תקנון</Link>
                        <Link className="hover:text-white transition-colors" to={ROUTES.PRIVACY}>פרטיות</Link>
                        <Link className="hover:text-white transition-colors" to={ROUTES.ACCESSIBILITY}>נגישות</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

/**
 * ImageGallery Component
 * 
 * Animated slideshow gallery with:
 * - Auto-play functionality
 * - Navigation arrows
 * - Indicator dots
 * - Smooth transitions
 */
const ImageGallery = () => {
    const galleryImages = (typeof window !== 'undefined' && window.IMAGE_URLS && window.IMAGE_URLS.galleryImages) ? window.IMAGE_URLS.galleryImages : [];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (galleryImages.length === 0 || isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [galleryImages.length, isPaused]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 3000);
    };

    const handleGalleryKeyDown = (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goToNext(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); goToPrevious(); }
    };

    if (galleryImages.length === 0) return null;

    const currentSrc = galleryImages[currentIndex];
    const total = galleryImages.length;

    return (
        <section className="bg-background-dark pt-[84px] pb-16 sm:pb-20 md:pb-24 border-t border-white/10" role="region" aria-label="גלריית תמונות">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm mb-6">
                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                        גלריית תמונות
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter">
                        רגעים מהשטח
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-r-2 border-primary pr-4">
                        הצצה לאימונים, לאתגרים ולרגעים הבלתי נשכחים
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto" dir="ltr" tabIndex={0} onKeyDown={handleGalleryKeyDown} aria-label={`גלריית תמונות - תמונה ${currentIndex + 1} מתוך ${total}`}>
                    <div className="sr-only" aria-live="polite">{`תמונה ${currentIndex + 1} מתוך ${total}`}</div>
                    {/* Single visible image - one at a time for reliable display */}
                    <div className="relative w-full overflow-hidden bg-black border border-white/10 shadow-2xl" style={{ aspectRatio: '16/9' }}>
                        <img
                            key={currentIndex}
                            src={currentSrc}
                            alt={`תמונה מאימון ${currentIndex + 1} מתוך ${total}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="eager"
                            decoding="async"
                            onError={(e) => { e.target.style.background = '#1a1a1a'; e.target.alt = ''; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />

                        <button
                            type="button"
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-primary text-white p-3 transition-all backdrop-blur-sm"
                            aria-label="Previous image"
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button
                            type="button"
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-primary text-white p-3 transition-all backdrop-blur-sm"
                            aria-label="Next image"
                        >
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1 md:gap-1.5">
                            {galleryImages.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => goToSlide(index)}
                                    className={`h-[8px] w-[8px] min-h-0 min-w-0 p-0 transition-all rounded-full flex-shrink-0 ${
                                        index === currentIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                    aria-label={`Go to image ${index + 1}`}
                                    aria-current={index === currentIndex ? 'true' : undefined}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/**
 * HomePage Component
 * 
 * Main landing page featuring:
 * - Hero section with signup form
 * - Feature highlights (safety, equipment, groups, mental training)
 * - "Why Choose Us" section
 * - Success stories/testimonials
 * - Blog preview section
 * - Image gallery slideshow
 * - Call-to-action section
 */
const HomePage = () => {
    const [testimonialPage, setTestimonialPage] = useState(0);
    const [testimonialPerPage, setTestimonialPerPage] = useState(3);
    const testimonialImages = (typeof window !== 'undefined' && window.TESTIMONIAL_IMAGES) ? window.TESTIMONIAL_IMAGES : [];
    useEffect(() => {
        const mq = window.matchMedia('(max-width: 767px)');
        const update = () => setTestimonialPerPage(mq.matches ? 1 : 3);
        update();
        mq.addEventListener('change', update);
        return () => mq.removeEventListener('change', update);
    }, []);
    const testimonialTotalPages = Math.max(0, Math.ceil(testimonialImages.length / testimonialPerPage) - 1);
    useEffect(() => {
        setTestimonialPage(p => Math.min(p, testimonialTotalPages));
    }, [testimonialPerPage]);
    const homeBlogArticles = (typeof window !== 'undefined' && window.HOME_BLOG_ARTICLES) ? window.HOME_BLOG_ARTICLES : [];
    const SHOW_HOME_BLOG_SECTION = true;
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden">
            <Navbar />
            <main id="main-content">

            {/* Hero Section */}
            <div className="relative w-full bg-background-dark h-screen flex flex-col">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/HeroBGSunset.png')` }}></div>
                    <div className="absolute inset-0 bg-black/20 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 via-background-dark/50 to-background-dark/40 z-20"></div>
                    <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
                    </div>
                <div className="relative z-10 flex flex-1 flex-col items-center justify-start md:justify-center px-4 sm:px-6 lg:px-8 pt-[120px] md:pt-[84px] pb-16 sm:pb-20 md:pb-16 lg:pb-20">
                    <div className="max-w-[1200px] w-full flex flex-col gap-6 sm:gap-8 items-center text-center px-0 sm:px-6 lg:px-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            ההרשמה לסימולציית גיבוש יחטיות נפתחה
                </div>
                        <h1 className="text-white text-[3rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight drop-shadow-2xl uppercase w-full px-3 lg:px-8 lg:pr-12 text-center leading-[1.1]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-red-500 to-red-800 inline-block pr-3" style={{ backgroundImage: 'linear-gradient(135deg, rgba(230, 26, 26, 1) 0%, rgba(171, 23, 23, 1) 50%, rgba(217, 84, 84, 1) 100%)', WebkitBackgroundClip: 'text', color: 'transparent', paddingRight: '1rem' }}>מחפש שירות משמעותי?</span>
                        </h1>
                        <h2 className="text-gray-400 text-base sm:text-lg md:text-xl font-bold max-w-2xl mx-0 border-r-4 border-primary pr-3 sm:pr-4 leading-relaxed">
                            מסגרת הכנה מובילה ליחידות העילית, קומנדו והסיירות.
                        </h2>
                        <div className="w-full max-w-4xl bg-black/60 backdrop-blur-md border border-white/10 p-1 sm:p-2 lg:p-2 shadow-2xl mt-6 sm:mt-8 relative group">
                            <div className="absolute -top-1 -left-1 size-4 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-primary"></div>
                            <form action="https://formspree.io/f/mbdakgkv" method="POST" className="flex flex-col lg:flex-row gap-2 sm:gap-3 w-full">
                                <input type="hidden" name="_subject" value="[מחר מלחמה - Hero] בקשת יצירת קשר" />
                                <div className="relative flex-1">
                                    <label htmlFor="hero-name" className="sr-only">שם מלא</label>
                                    <input name="name" className="w-full h-12 sm:h-14 px-4 sm:px-6 bg-white/5 text-white text-sm sm:text-base font-bold placeholder:text-gray-500 rounded-none border border-white/10 focus:border-primary focus:bg-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary" placeholder="שם מלא" required type="text" id="hero-name" />
                                </div>
                                <div className="relative flex-1">
                                    <label htmlFor="hero-phone" className="sr-only">טלפון נייד</label>
                                    <input name="phone" className="w-full h-12 sm:h-14 px-4 sm:px-6 bg-white/5 text-white text-sm sm:text-base font-bold placeholder:text-gray-500 rounded-none border border-white/10 focus:border-primary focus:bg-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary text-right" placeholder="טלפון נייד" required type="tel" inputMode="numeric" id="hero-phone" />
                                </div>
                                <button type="submit" className="flex-none h-12 sm:h-14 px-6 sm:px-10 bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all rounded-none text-white text-base sm:text-xl font-black tracking-wider shadow-[0_0_30px_rgba(230,26,26,0.3)] flex items-center justify-center gap-2 sm:gap-3 uppercase min-h-[2.75rem]" aria-label="צרו איתי קשר">
                                    <span className="text-sm sm:text-lg">צרו איתי קשר</span>
                                    <span className="material-symbols-outlined text-[1.25rem] sm:text-[1.5rem] font-bold rotate-180" aria-hidden="true">arrow_right_alt</span>
                                </button>
                            </form>
                        </div>
                        </div>
                    </div>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-10 flex items-center justify-center">
                </div>
                </div>

            {/* Features Section */}

            {/* Why Choose Us Section */}
            <div className="bg-surface-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-32 border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h2 className="text-primary font-black tracking-[0.2em] uppercase mb-4 text-sm flex justify-center items-center gap-3">
                            <span className="w-12 h-[2px] bg-primary"></span>
                            היתרון שלנו
                            <span className="w-12 h-[2px] bg-primary"></span>
                        </h2>
                        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 uppercase">למה דווקא "מחר מלחמה"?</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">לא עוד קבוצה של 2 אימונים בשבוע<br />הצלחה בגיבוש דורשת הכשרה מקיפה של מגבשים מהיחידות המובחרות הכוללת</p>
                        </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {(typeof window !== 'undefined' && window.FEATURES ? window.FEATURES : []).map((feature, i) => (
                            <div key={i} className="bg-card group p-8 bg-surface-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative">
                                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="size-16 bg-black border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                                    </div>
                                <h4 className="text-white text-2xl font-black mb-4 uppercase">{feature.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            {/* Testimonials Section - Image gallery, 3 per page */}
            <div className="bg-background-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-32 bg-texture relative overflow-hidden" role="region" aria-label="עדויות בוגרים" onKeyDown={(e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); setTestimonialPage(p => Math.min(p + 1, testimonialTotalPages)); } else if (e.key === 'ArrowRight') { e.preventDefault(); setTestimonialPage(p => Math.max(p - 1, 0)); } }}>
                <div className="absolute inset-0 bg-black/90"></div>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
                        <div>
                            <h2 className="text-primary font-black tracking-[0.2em] uppercase mb-2 flex items-center gap-2 text-xs sm:text-sm">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                עדויות מהשטח
                            </h2>
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase">בוגרים מספרים</h3>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                            <button type="button" onClick={() => setTestimonialPage(p => Math.min(p + 1, testimonialTotalPages))} disabled={testimonialPage >= testimonialTotalPages} className="size-12 sm:size-14 bg-black border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all min-h-[2.75rem] min-w-[2.75rem] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white" aria-label={testimonialPerPage === 1 ? "עבור לעדות הבאה" : "עבור ל־3 העדויות הבאות"}>
                                <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                            </button>
                            <button type="button" onClick={() => setTestimonialPage(p => Math.max(p - 1, 0))} disabled={testimonialPage <= 0} className="size-12 sm:size-14 bg-black border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all min-h-[2.75rem] min-w-[2.75rem] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white" aria-label={testimonialPerPage === 1 ? "עבור לעדות הקודמת" : "עבור ל־3 העדויות הקודמות"}>
                                <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
                            </button>
                        </div>
                    </div>
                    <div className="sr-only" aria-live="polite">{`עדויות: עמוד ${testimonialPage + 1}`}</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {Array.from({ length: testimonialPerPage }, (_, slot) => {
                            const idx = testimonialPage * testimonialPerPage + slot;
                            const filename = testimonialImages[idx];
                            if (!filename) return <div key={slot} className="bg-surface-card border border-white/5 min-h-[200px] md:min-h-[280px]" aria-hidden="true"></div>;
                            const src = '/images/testimonials/' + encodeURIComponent(filename);
                            return (
                                <div key={idx} className="group bg-surface-card border border-white/5 overflow-hidden relative hover:border-primary/30 transition-all">
                                    <div className="w-full overflow-hidden">
                                        <img src={src} alt={`עדות בוגר מספר ${idx + 1}`} className="w-full h-auto block align-top" loading={testimonialPage === 0 && slot === 0 ? 'eager' : 'lazy'} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Blog Preview Section - hidden when SHOW_HOME_BLOG_SECTION is false; set to true to show again */}
            {SHOW_HOME_BLOG_SECTION && (
            <div className="bg-[#080808] pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex justify-between items-end mb-10 sm:mb-12 md:mb-16">
                        <div>
                            <h2 className="text-primary font-black tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                בלוג מקצועי
                            </h2>
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase">ידע זה כוח</h3>
                        </div>
                        <Link to="/articles" className="hidden sm:flex items-center gap-2 text-white hover:text-primary font-black uppercase text-sm border-b-2 border-transparent hover:border-primary pb-1 transition-all">
                            כל המאמרים
                            <span className="material-symbols-outlined font-bold">arrow_back</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {homeBlogArticles.map((article, i) => (
                            <article key={i} className="flex flex-col group cursor-pointer">
                                <div className="relative h-64 border border-white/10 overflow-hidden mb-5">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300" aria-hidden="true"></div>
                                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url('${article.img}')` }} role="img" aria-label={article.title}></div>
                                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-black uppercase tracking-wider px-4 py-2 z-20">{article.category}</div>
                                </div>
                                <div className="flex flex-col gap-3 px-2">
                                    <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">{article.date}</span>
                                    <h4 className="text-white text-xl font-black group-hover:text-primary transition-colors leading-tight uppercase">{article.title}</h4>
                                    <Link to="/articles" className="text-gray-400 group-hover:text-white text-xs font-bold mt-2 flex items-center gap-2 uppercase tracking-wider transition-colors" aria-label={`קרא עוד על: ${article.title}`}>
                                        קרא עוד
                                        <span className="w-8 h-[1px] bg-gray-500 group-hover:bg-white" aria-hidden="true"></span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            )}

            {/* Image Gallery Section */}
            <ImageGallery />

            {/* Final CTA Section */}
            <div className="bg-primary relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-multiply"></div>
                <div className="absolute right-0 bottom-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${IMAGE_URLS.ctaBackground}')` }}>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center relative z-10">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 uppercase drop-shadow-lg">האם יש לך את מה שצריך?</h2>
                    <p className="text-white/90 text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                        הצוותים שלנו מתמלאים במהירות. אל תחכה לרגע האחרון. <br />הצטרף לטובים ביותר עכשיו.
                    </p>
                    <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-primary hover:bg-black hover:text-white transition-all px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-none font-black text-base sm:text-lg shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[0.25rem] hover:translate-y-[0.25rem] border-2 border-black transform duration-100 uppercase tracking-wider min-h-[2.75rem]" aria-label="שריין מקום לאימון ניסיון">
                        שריין מקום לאימון ניסיון
                    </a>
                </div>
            </div>

            {/* WhatsApp Button */}
            <a aria-label="Chat on WhatsApp" className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group rounded-full" href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer">
                <svg className="size-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
            </a>

            </main>
            <Footer />
        </div>
    );
};

/**
 * TeamPage Component
 * 
 * Displays team members with:
 * - Hero section with team introduction
 * - Team member cards with photos, names, units, descriptions
 * - Badge/achievement displays for each member
 * - Hover effects (grayscale to color transition on images)
 */
const TeamPage = () => {
    // Team members data loaded from data/team-members.js
    const teamMembers = (typeof window !== 'undefined' && window.TEAM_MEMBERS) ? window.TEAM_MEMBERS : [];

    return (
        <div className="bg-background-dark text-white overflow-x-hidden flex flex-col min-h-screen selection:bg-primary selection:text-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-start md:justify-center h-screen w-full bg-cover bg-center bg-no-repeat border-b border-border-dark" style={{ backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.95) 100%), url('${IMAGE_URLS.heroTeam}')` }}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.5)_2px,transparent_2px)] bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
                <div className="layout-content-container flex flex-col items-center justify-center max-w-[1100px] px-4 sm:px-6 text-center z-10 space-y-6 sm:space-y-8 pt-[120px] pb-16 sm:pb-20 md:pb-16 lg:pb-20 xl:pb-24">
                    <h1 className="text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2">
                        הכר את <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-red-800 inline-block pr-3">הצוות</span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed border-r-4 border-primary pr-4 sm:pr-6 bg-gradient-to-l from-black/50 to-transparent py-2">
                        המדריכים שלנו כולם יוצאי יחידות עילית וסיירות, מנוסים, מקצועיים ונבחרו בקפידה על מנת ממש את מקסימום הפוטנציאל שלכם בצבא.
                    </p>
                    <div className="pt-8 flex flex-col sm:flex-row gap-5 justify-center">
                        <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="group cursor-pointer inline-flex items-center justify-center gap-3 h-14 px-10 bg-white text-black hover:bg-accent transition-all text-lg font-black tracking-wider uppercase border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]" aria-label="קבע אימון ניסיון">
                            <span>קבע אימון ניסיון</span>
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform font-bold text-black" aria-hidden="true">arrow_back</span>
                        </a>
                        <Link to={ROUTES.METHOD} className="group cursor-pointer inline-flex items-center justify-center gap-3 h-14 px-10 bg-transparent text-white hover:bg-white/5 transition-all text-lg font-bold tracking-wider uppercase border-2 border-zinc-700 hover:border-white" aria-label="למד איך זה עובד">
                            <span>איך זה עובד?</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <main id="main-content" className="flex-1 bg-background-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 relative">
                <div className="tactical-grid absolute inset-0 pointer-events-none opacity-20"></div>
                <div className="absolute top-20 left-0 w-[37.5rem] h-[37.5rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-start mb-10 sm:mb-12 md:mb-16 border-b border-border-dark pb-4 sm:pb-6 gap-4 sm:gap-6">
                        <div className="text-right w-full md:w-auto">
                            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2">סגל הפיקוד</h2>
                            <p className="text-zinc-500 font-mono text-sm border-r-2 border-primary pr-3 uppercase">האנשים שיהפכו אתכם מנערים ללוחמים</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {teamMembers.map((member, i) => (
                            <div key={i} className="group relative flex flex-col bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,42,42,0.2)]">
                                <div className="relative h-96 overflow-hidden bg-gray-900 border-b border-border-dark group-hover:border-primary transition-colors clip-corner">
                                    <div className="absolute inset-0 bg-cover bg-center filter-grayscale transition-all duration-500 group-hover:filter-none scale-100 group-hover:scale-105" style={{ backgroundImage: `url('${member.img}')` }} role="img" aria-label={`תמונה של ${member.name}`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                    {member.role && (
                                        <div className="absolute top-4 left-4 border border-white/20 p-1.5 bg-black/60 backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-white text-base">qr_code_2</span>
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 right-0 left-0 p-6 z-10">
                                        {member.role && <span className="inline-block px-2 py-0.5 bg-primary text-black text-[0.625rem] font-black uppercase tracking-wider mb-2 skew-x-[-10deg]">{member.role}</span>}
                                        <h3 className="text-white text-3xl font-black leading-none uppercase group-hover:text-primary transition-colors">{member.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-5 flex-1 relative">
                                    <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-3 pb-4 border-b border-dashed border-border-dark">
                                        <div className="p-2.5 bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                            <span className="material-symbols-outlined text-xl">{member.icon}</span>
                                        </div>
                                        <span className="font-bold text-lg tracking-tight text-white">{member.unit}</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                        
                        {/* Join Us Card */}
                        <div className="relative flex flex-col items-center justify-center text-center bg-[#0a0a0a] border-2 border-dashed border-zinc-800 hover:border-accent transition-all duration-300 p-8 gap-8 md:col-span-2 lg:col-span-1 xl:col-span-4 group overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="p-6 border-2 border-zinc-800 rounded-none bg-zinc-900 text-accent mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_30px_rgba(204,255,0,0.15)] group-hover:border-accent">
                                    <span className="material-symbols-outlined text-5xl">group_add</span>
                                </div>
                                <h3 className="text-white text-4xl font-black uppercase mb-3">חושב שאתה מתאים?</h3>
                                <p className="text-zinc-400 text-base max-w-md">אנחנו תמיד מחפשים מדריכים יוצאי יחידות מובחרות שיצטרפו למשימה.</p>
                                <a
                                    href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 px-10 py-4 bg-accent text-black hover:bg-white font-black text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                                    aria-label="שלח קורות חיים ב-WhatsApp להצטרפות לצוות"
                                >
                                    שלח קורות חיים
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Final CTA Section */}
            <section className="relative pt-[84px] pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden border-t-2 border-primary bg-[#080808]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[25rem] bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                        מוכנים להתחיל <span className="text-primary text-stroke-1 block md:inline mt-2 md:mt-0">במלחמה?</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-light">
                        המדריכים שלנו מחכים לכם בשטח. ההרשמה למחזור הקרוב נפתחה. מספר המקומות מוגבל.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
                        <button className="w-full sm:w-auto h-20 px-14 bg-primary hover:bg-white text-black font-black text-2xl shadow-[0_0_30px_rgba(255,42,42,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-1 flex items-center justify-center gap-4 uppercase">
                            <span>שריין מקום עכשיו</span>
                            <span className="material-symbols-outlined font-black">arrow_back</span>
                        </button>
                        <Link to="/contact" className="w-full sm:w-auto h-20 px-14 bg-transparent border-2 border-zinc-700 hover:border-white hover:bg-white/5 text-white font-bold text-xl transition-all uppercase tracking-wide flex items-center justify-center">
                            צור קשר להתייעצות
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

/**
 * MethodPage Component
 * 
 * Explains the training methodology featuring:
 * - Hero section with method overview
 * - Three pillars of training (physical, mental, tactical)
 * - Complete training cycle breakdown
 * - Advanced techniques section
 * - Visual timeline/process flow
 */
const MethodPage = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white antialiased selection:bg-primary selection:text-white">
            <Navbar />

            <main id="main-content" className="flex flex-col flex-1">
                {/* Hero Section */}
                <section className="relative flex h-screen flex-col items-center justify-start md:justify-center overflow-hidden bg-background-dark border-b border-white/10">
                    <div className="absolute inset-0 z-0">
                        <div className="h-full w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${IMAGE_URLS.heroMethodBackground}')` }}></div>
                        <div className="absolute inset-0 bg-grid-pattern tactical-grid opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-black/60 z-0"></div>
                    </div>
                    <div className="relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 text-center pt-[120px] pb-16 sm:pb-20 md:pb-16 lg:pb-20">
                        <h1 className="text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2">
                            השיטה
                    </h1>
                        <p className="max-w-[700px] text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed tracking-wide border-r-2 border-primary pr-4 sm:pr-6">
                            תוכנית מקצועית בסטנדרטים הגבוהים ביותר
                            <br />
                            תוך שמירה על ניהול עומסים מדויק מהאימון הראשון ועד לרגע הגיוס
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                            <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="group flex min-w-[12.5rem] cursor-pointer items-center justify-center h-14 px-8 bg-primary text-white text-lg font-black tracking-wider transition-all hover:bg-white hover:text-black">
                                התחל מסע
                                <span className="material-symbols-outlined mr-2 group-hover:translate-x-1 transition-transform">arrow_back</span>
                            </a>
                            <Link to={ROUTES.ARTICLES} className="flex min-w-[12.5rem] cursor-pointer items-center justify-center h-14 px-8 bg-transparent border border-white/30 text-white text-lg font-bold tracking-wider hover:bg-white/5 hover:border-primary transition-all" aria-label="עבור לדף המאמרים">
                                למד עוד
                            </Link>
                </div>
                    </div>
            </section>

                {/* Philosophy Section */}
                <section className="flex justify-center bg-[#0a0a0a] pt-[84px] pb-20 px-6 border-b border-white/5">
                    <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                                מוטיבציה היא זולה. משמעת והתמדה מובילים להצלחה
                            </h2>
                        </div>
                        <div className="w-px h-32 bg-white/10 hidden md:block"></div>
                        <div className="flex-1">
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                אנחנו לא מאמינים בצעקות חסרות תכלית או ש״הכל בראש״. השיטה שלנו נבנתה על ידי מאמני כושר קרבי מוסמכים. המטרה אחת: בנייה פיזיולוגית ומנטלית מדויקת ומדורגת לקראת העומסים הקיצוניים של השירות הצבאי.
                            </p>
                        </div>
                                </div>
                </section>

                {/* Three Pillars Section */}
                <section className="relative bg-background-dark pt-[84px] pb-24 px-6 border-b border-white/5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                    <div className="w-full max-w-7xl mx-auto relative z-10">
                        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6">
                            <div>
                                <h2 className="text-4xl font-black text-white md:text-5xl uppercase tracking-tighter">שלושת עמודי התווך</h2>
                            </div>
                    </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {(typeof window !== 'undefined' && window.METHOD_PILLARS ? window.METHOD_PILLARS : []).map((pillar, i) => (
                                <div key={i} className="group relative flex flex-col gap-6 bg-surface-card p-8 border border-white/10 hover:border-primary transition-all duration-300">
                                    <div className="absolute top-2 left-2 size-2 bg-white/10 group-hover:bg-primary transition-colors"></div>
                                    <div className="absolute bottom-2 right-2 size-2 bg-white/10 group-hover:bg-primary transition-colors"></div>
                                    <div className="flex justify-between items-start">
                                        <div className="size-12 bg-white/5 flex items-center justify-center text-primary border border-white/10">
                                            <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                                        </div>
                                        <span className="text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors">{pillar.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{pillar.title} <span className="text-primary text-base font-bold align-middle">{pillar.subtitle}</span></h3>
                                        <p className="text-gray-400 leading-relaxed text-sm border-l border-white/10 pl-4">{pillar.desc}</p>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-dashed border-white/10">
                                        <ul className="space-y-3 text-sm text-gray-300 font-mono">
                                            {pillar.items.map((item, j) => (
                                                <li key={j} className="flex items-center gap-3"><span className="size-1 bg-accent shadow-[0_0_5px_#ccff00]"></span>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </section>

                {/* Training Cycle Section */}
                <section className="flex flex-col items-center bg-[#080808] pt-[84px] pb-24 px-6 border-b border-white/5">
                    <div className="w-full max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">מחזור האימון השלם</h2>
                            <p className="mt-2 text-gray-500 font-mono text-sm uppercase tracking-widest">Protocol: Stimulus // Recovery // Supercompensation</p>
                    </div>
                        <div className="relative flex flex-col md:flex-row items-start justify-between gap-4 p-10 bg-surface-card border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                            <div className="flex-1 flex flex-col items-center text-center gap-6 z-10 relative group">
                                <div className="size-20 bg-background-dark border-2 border-white/20 group-hover:border-primary flex items-center justify-center text-white text-2xl font-black transition-colors">01</div>
                                <h3 className="text-white font-black text-xl uppercase">עומס יתר <span className="block text-xs font-mono text-primary mt-1">OVERLOAD</span></h3>
                                <p className="text-sm text-gray-400 leading-relaxed">חשיפת הגוף לגירוי מעבר לרגיל. יצירת מיקרו-טראומה מבוקרת לשריר.</p>
                            </div>
                            <div className="hidden md:flex flex-1 items-center justify-center self-center">
                                <div className="h-px w-full bg-white/20 relative">
                                    <div className="absolute right-0 -top-1 size-2 bg-primary"></div>
                                </div>
                            </div>
                            <div className="md:hidden h-12 w-px bg-white/20 self-center"></div>
                            <div className="flex-1 flex flex-col items-center text-center gap-6 z-10 relative group">
                                <div className="size-20 bg-background-dark border-2 border-white/20 group-hover:border-primary flex items-center justify-center text-white text-2xl font-black transition-colors">02</div>
                                <h3 className="text-white font-black text-xl uppercase">התאוששות <span className="block text-xs font-mono text-primary mt-1">RECOVERY</span></h3>
                                <p className="text-sm text-gray-400 leading-relaxed">תזונה, שינה ומנוחה אקטיבית. השלב בו הגוף בונה את עצמו מחדש.</p>
                            </div>
                            <div className="hidden md:flex flex-1 items-center justify-center self-center">
                                <div className="h-px w-full bg-white/20 relative">
                                    <div className="absolute right-0 -top-1 size-2 bg-primary"></div>
                                </div>
                            </div>
                            <div className="md:hidden h-12 w-px bg-white/20 self-center"></div>
                            <div className="flex-1 flex flex-col items-center text-center gap-6 z-10 relative group">
                                <div className="size-20 bg-background-dark border-2 border-primary flex items-center justify-center text-white text-2xl font-black shadow-[0_0_20px_rgba(212,17,17,0.4)] animate-pulse">03</div>
                                <h3 className="text-white font-black text-xl uppercase">אדפטציה <span className="block text-xs font-mono text-accent mt-1">ADAPTATION</span></h3>
                                <p className="text-sm text-gray-400 leading-relaxed">הגוף חוזר חזק יותר, מהיר יותר ועמיד יותר. מוכן לאתגר הבא.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="pt-[84px] pb-24 px-6 bg-[#050505] relative border-t border-white/10">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>
                                </div>
                    <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
                        <div className="border border-white/10 bg-black/50 backdrop-blur p-10 md:p-16 w-full clip-corner">
                            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6">
                                האם אתה מוכן <span className="text-primary">להתחייב?</span>
                            </h2>
                            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                                אנחנו מחפשים רק את אלו שמוכנים לעבוד קשה, להתמיד ולא לוותר לעצמם. מקומות מוגבלים לצוותים הקרובים.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto min-w-[15rem] cursor-pointer items-center justify-center h-16 px-8 bg-primary text-white text-xl font-black uppercase tracking-wider transition-all hover:bg-white hover:text-primary shadow-[0_0_30px_rgba(212,17,17,0.3)] hover:shadow-[0_0_50px_rgba(212,17,17,0.6)]" aria-label="הירשם לאימון ניסיון ב-WhatsApp">
                                    הירשם לאימון ניסיון
                                </a>
                                <Link to="/contact" className="flex w-full sm:w-auto min-w-[15rem] cursor-pointer items-center justify-center h-16 px-8 border border-white/20 hover:border-primary hover:bg-white/5 text-white text-xl font-bold uppercase tracking-wider transition-all">
                                    צור קשר עם המדריך
                                </Link>
                        </div>
                    </div>
                </div>
            </section>
            </main>

            <Footer />
        </div>
    );
};

/**
 * ArticlesPage Component
 * 
 * Blog/articles listing page with:
 * - Hero section with search functionality (placeholder)
 * - Category filters (placeholder for future implementation)
 * - Featured article highlight
 * - Grid layout of all articles
 * - Article cards with images, titles, categories, and read time
 */
const ARTICLES_PER_PAGE = 9;

const ArticlesPage = () => {
    const [activeFilter, setActiveFilter] = useState("הכל");
    const [currentPage, setCurrentPage] = useState(1);
    const allArticlesData = (typeof window !== 'undefined' && window.ARTICLES) ? window.ARTICLES : [];
    const filteredArticles = activeFilter === "הכל"
        ? allArticlesData
        : allArticlesData.filter((a) => (a.tags && a.tags.includes(activeFilter)) || a.category === activeFilter);
    const featuredArticle = filteredArticles[0] || { title: '', desc: '', category: '', date: '', img: '', id: '' };
    const sidebarArticles = filteredArticles.slice(1, 3);
    const gridArticles = filteredArticles.slice(3);
    const totalPages = Math.max(1, Math.ceil(gridArticles.length / ARTICLES_PER_PAGE));
    const paginatedGridArticles = gridArticles.slice(
        (currentPage - 1) * ARTICLES_PER_PAGE,
        currentPage * ARTICLES_PER_PAGE
    );
    const filterTags = ["הכל", "כושר קרבי", "מנטלי", "תזונה", "גיבושים", "אימונים", "בריאות", "ציוד", "רפואה", "פיקוד", "ראיונות"];

    useEffect(() => {
        setCurrentPage(1);
    }, [activeFilter]);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark text-white font-body antialiased overflow-x-hidden selection:bg-primary selection:text-white">
            <Navbar />
            
            <main id="main-content" className="flex-1 bg-background-dark relative">
                {/* Hero Section */}
                <section className="relative px-4 pt-[84px] pb-20 sm:px-6 lg:px-8 flex justify-center border-b border-border-dark bg-[#0a0a0a]">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" style={{ backgroundSize: '40px 40px' }}></div>
                    <div className="w-full max-w-7xl relative">
                        <div className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[31.25rem] flex flex-col items-center justify-center text-center p-8 gap-10 border border-border-dark group shadow-2xl" style={{ backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85) 0%, rgba(5, 5, 5, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyWjgBdhLQkVyM6NBO6xzJLXHmNDrATl3odDav6UadmeegZAq8ozZ5ybl_0M7rly5pDLT_ZOK2cFcVB8thfUjXpVVaszoNckCfGd4WytAJdG0kwptQcaY8ryKbl5hrI_QHpVLmeZQ-x7FTypzIKC7IJnV7tnVh9AH6PImErIawPBhfp85P7qtAPJ2OrBpNCuDUAMR7vlPmQTwQufN8kNO9fJa7-qcDJWMjen7CyOZgddyqWpWfRrYl4DuP4_EzCjDcqkYhuInWyhpb")' }}>
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary"></div>
                            <div className="max-w-4xl space-y-6 z-10">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="h-[2px] w-8 bg-primary inline-block"></span>
                                    <span className="text-primary text-xs font-black uppercase tracking-[0.2em]">מרכז המידע</span>
                                    <span className="h-[2px] w-8 bg-primary inline-block"></span>
                                </div>
                                <h1 className="font-display text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2">
                                    ידע הוא כוח
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl font-medium text-gray-400 font-body max-w-2xl mx-auto leading-relaxed">
                                    הרכבנו בשבילכם את מאגר המידע המקיף ביותר להכנה לצה"ל, כושר קרבי וחוסן מנטלי.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="px-4 py-8 flex justify-center bg-surface-dark border-b border-border-dark sticky top-24 z-40 shadow-xl backdrop-blur-sm bg-surface-dark/90">
                    <div className="w-full max-w-7xl">
                        <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
                            <span className="text-xs font-black text-gray-500 uppercase tracking-widest ml-4 hidden md:flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">filter_list</span> סינון:
                            </span>
                            {filterTags.map((filter) => (
                                <button 
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`group flex h-10 items-center justify-center px-6 text-sm font-bold uppercase tracking-wider border transition-all ${
                                        activeFilter === filter
                                            ? "bg-primary text-white border-primary shadow-glow hover:bg-primary-hover"
                                            : "bg-transparent border-gray-800 text-gray-400 hover:border-primary hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Section - only when there are filtered articles */}
                {filteredArticles.length > 0 && (
                <section className="px-4 pt-[84px] pb-16 flex justify-center bg-background-dark">
                    <div className="w-full max-w-7xl flex flex-col gap-10">
                        <div className="flex items-end justify-between border-b border-border-dark pb-6">
                            <div>
                                <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter">
                                    <span className="text-primary mr-2 text-6xl leading-none">///</span>מומלצים
                                </h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-8 group relative bg-surface-light border border-border-dark hover:border-primary transition-all duration-300 shadow-2xl flex flex-col overflow-hidden">
                                <div className="absolute top-0 right-0 z-20 bg-primary text-white text-xs font-black uppercase px-4 py-2 tracking-wider shadow-lg clip-path-badge">חם השבוע</div>
                                <div className="aspect-[16/9] md:aspect-video w-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 flex-shrink-0 relative" style={{ backgroundImage: `url('${featuredArticle.img}')` }} role="img" aria-label={featuredArticle.title}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity md:block hidden"></div>
                                </div>
                                <div className="relative w-full p-6 md:absolute md:bottom-0 md:left-0 md:p-10 z-10 md:bg-gradient-to-t md:from-black/90 md:via-black/50 md:to-transparent">
                                    <div className="flex items-center gap-2 mb-3 opacity-80">
                                        <span className="bg-accent text-black text-[0.625rem] font-black uppercase px-2 py-0.5 tracking-wider">{featuredArticle.category}</span>
                                        <span className="text-gray-300 text-xs font-mono">{featuredArticle.date}</span>
                                    </div>
                                    <h3 className="font-display text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 uppercase leading-[0.9] group-hover:text-primary transition-colors whitespace-pre-line">{featuredArticle.title}</h3>
                                    <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl border-r-4 border-primary pr-4 bg-black/30 p-2 backdrop-blur-sm line-clamp-3 md:line-clamp-none">{featuredArticle.desc}</p>
                                    <Link to={`/articles/${featuredArticle.id}`} className="inline-flex items-center gap-3 text-sm font-bold text-white bg-white/10 hover:bg-primary border border-white/20 hover:border-primary px-6 py-3 uppercase tracking-wider transition-all duration-300" aria-label={`קרא את המאמר המלא: ${featuredArticle.title}`}>
                                        קרא את המאמר המלא
                                        <span className="material-symbols-outlined text-lg rotate-180">arrow_back</span>
                                    </Link>
                                </div>
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 group-hover:border-primary transition-colors hidden md:block"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 group-hover:border-primary transition-colors hidden md:block"></div>
                            </div>
                            <div className="md:col-span-4 flex flex-col gap-6">
                                {sidebarArticles.map((article, i) => (
                                    <Link key={article.id} to={`/articles/${article.id}`} className="group relative flex flex-col h-full bg-surface-light border border-border-dark hover:border-accent transition-all duration-300">
                                        <div className="h-48 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 relative" style={{ backgroundImage: `url('${article.img}')` }} role="img" aria-label={article.title}>
                                            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all"></div>
                                            <div className="absolute top-3 right-3 bg-black/80 px-2 py-1 text-[0.625rem] font-bold text-accent uppercase border border-accent/30">{article.category}</div>
                                        </div>
                                        <div className="p-6 flex flex-col justify-between flex-1 relative overflow-hidden">
                                            <div>
                                                <h4 className="font-display text-xl font-black text-white group-hover:text-accent transition-colors leading-tight mb-2">{article.title}</h4>
                                                <p className="text-sm text-gray-500 line-clamp-2">{article.desc}</p>
                                            </div>
                                            <div className="mt-4 flex justify-between items-center border-t border-gray-800 pt-3">
                                                <span className="text-xs font-mono text-gray-500">{article.readTime || article.date}</span>
                                                <span className="material-symbols-outlined text-accent text-sm rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">arrow_right_alt</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                )}

                {/* All Articles Section - paginated, 9 per page */}
                <section className="px-4 pt-[84px] pb-16 flex justify-center bg-[#050505] relative border-t border-border-dark">
                    <div className="w-full max-w-7xl relative z-10">
                        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-2 bg-primary"></div>
                                <h3 className="font-display text-3xl font-black text-white uppercase tracking-wide">כל המאמרים</h3>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-500 text-sm font-mono">
                                    מציג {gridArticles.length === 0 ? '0' : (currentPage - 1) * ARTICLES_PER_PAGE + 1}-{Math.min(currentPage * ARTICLES_PER_PAGE, gridArticles.length)} מתוך {gridArticles.length}
                                </span>
                                {totalPages > 1 && (
                                    <nav className="flex items-center gap-2" aria-label="ניווט בין דפים">
                                        <button
                                            type="button"
                                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                            disabled={currentPage <= 1}
                                            className="p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded"
                                            aria-label="הדף הקודם"
                                        >
                                            <span className="material-symbols-outlined text-xl">chevron_right</span>
                                        </button>
                                        <span className="text-gray-400 text-sm font-mono min-w-[4rem] text-center">
                                            {currentPage} / {totalPages}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                            disabled={currentPage >= totalPages}
                                            className="p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded"
                                            aria-label="הדף הבא"
                                        >
                                            <span className="material-symbols-outlined text-xl rotate-180">chevron_right</span>
                                        </button>
                                    </nav>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {paginatedGridArticles.map((article) => (
                                <Link key={article.id} to={`/articles/${article.id}`} className="group flex flex-col bg-surface-dark border border-border-dark hover:border-gray-500 transition-all duration-200 hover:-translate-y-1" aria-label={`קרא עוד על: ${article.title}`}>
                                    <div className="relative h-52 sm:h-60 overflow-hidden border-b border-border-dark">
                                        <div className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url('${article.img}')` }} role="img" aria-label={article.title}></div>
                                        <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white shadow-md z-10 ${
                                            article.category === "כושר קרבי" || article.category === "אימונים" 
                                                ? "bg-primary" 
                                                : "bg-black border border-gray-700"
                                        }`}>{article.category}</div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                                        <h4 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-2 sm:mb-3">{article.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-3 sm:mb-4">{article.desc}</p>
                                        <div className="mt-auto pt-3 sm:pt-4 border-t border-dashed border-gray-800 flex items-center justify-between">
                                            <span className="text-xs font-mono text-gray-500">{article.date}</span>
                                            <span className="text-xs font-bold text-primary uppercase tracking-widest group-hover:underline" aria-hidden="true">קרא עוד</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-10 sm:mt-12">
                                <nav className="flex items-center gap-2 sm:gap-3" aria-label="ניווט בין דפים (תחתון)">
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage <= 1}
                                        className="p-3 sm:p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded"
                                        aria-label="הדף הקודם"
                                    >
                                        <span className="material-symbols-outlined text-2xl sm:text-xl">chevron_right</span>
                                    </button>
                                    <span className="text-gray-400 text-sm font-mono px-2 sm:min-w-[4rem] text-center">
                                        {currentPage} / {totalPages}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        disabled={currentPage >= totalPages}
                                        className="p-3 sm:p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded"
                                        aria-label="הדף הבא"
                                    >
                                        <span className="material-symbols-outlined text-2xl sm:text-xl rotate-180">chevron_right</span>
                                    </button>
                                </nav>
                            </div>
                        )}
                        {filteredArticles.length === 0 && (
                            <p className="text-center text-gray-500 py-12">לא נמצאו מאמרים בקטגוריה זו.</p>
                        )}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="border-t-4 border-primary bg-black pt-[84px] pb-24 px-4 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent clip-path-slant"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20"></div>
                    </div>
                    <div className="mx-auto max-w-4xl text-center relative z-10">
                        <div className="inline-block border border-primary/50 bg-primary/10 px-4 py-1 mb-6 text-primary text-xs font-bold uppercase tracking-widest">הצטרף לקהילה</div>
                        <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">הצטרף <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">לקהילה</span></h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">קבל את המאמרים החדשים ביותר, טיפים לגיבושים ועדכונים ישירות למייל שלך. בלי בולשיט.</p>
                        <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-white/20 p-1 bg-surface-dark" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="newsletter-email" className="sr-only">כתובת אימייל</label>
                            <input className="flex-1 bg-transparent px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-lg font-medium" placeholder="הכנס את המייל שלך..." type="email" id="newsletter-email" />
                            <button className="bg-primary hover:bg-white hover:text-black text-white font-black py-4 px-10 uppercase tracking-widest transition-colors whitespace-nowrap my-1 mx-1 sm:my-0 sm:mx-0">
                                אני בפנים
                            </button>
                        </form>
                        <p className="text-gray-500 text-xs mt-6 uppercase tracking-widest font-mono">מבטיחים לא להספים. רק תוכן איכותי.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

/**
 * ArticleDetailPage Component
 * Single article page with placeholder content. Content will be refined later.
 */
const ArticleDetailPage = () => {
    const { id } = useParams();
    const articles = (typeof window !== 'undefined' && window.ARTICLES) ? window.ARTICLES : [];
    const article = articles.find((a) => a.id === id);

    if (!article) {
        return (
            <div className="bg-background-dark text-white min-h-screen flex flex-col">
                <Navbar />
                <main id="main-content" className="flex-1 flex items-center justify-center px-4">
                    <div className="text-center">
                        <h1 className="text-2xl font-black mb-4">מאמר לא נמצא</h1>
                        <Link to="/articles" className="text-primary font-bold hover:underline">חזרה לבלוג</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-dark text-white font-body min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
            <Navbar />
            <main id="main-content" className="flex-1">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <Link to="/articles" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm font-bold uppercase tracking-wider mb-8">
                        <span className="material-symbols-outlined text-lg rotate-180">arrow_back</span>
                        חזרה לבלוג
                    </Link>
                    <header className="mb-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-primary/20 text-primary text-xs font-black uppercase px-3 py-1 border border-primary/50">{article.category}</span>
                            {(article.tags || []).filter((t) => t !== article.category).slice(0, 3).map((tag) => (
                                <span key={tag} className="bg-white/5 text-gray-400 text-xs font-bold uppercase px-3 py-1 border border-white/10">{tag}</span>
                            ))}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter whitespace-pre-line">{article.title}</h1>
                        <p className="text-gray-500 text-sm font-mono mt-4">{article.date}</p>
                    </header>
                    <div className="relative w-full aspect-video bg-black border border-white/10 mb-12" style={{ backgroundImage: `url('${article.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} role="img" aria-label={article.title} />
                    <div className="prose prose-invert max-w-none">
                        {article.body ? (
                            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.body }} />
                        ) : (
                            <React.Fragment>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">{article.desc}</p>
                                <p className="text-gray-400 leading-relaxed">
                                    תוכן המאמר יופיע כאן. זהו טקסט placeholder שיוחלף בתוכן מעודכן בהמשך.
                                </p>
                                <p className="text-gray-400 leading-relaxed mt-4">
                                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בובט למרדף או פליג למנצף מחטף. גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף.
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

/**
 * ContactPage Component
 * 
 * Contact page featuring:
 * - Hero section with contact introduction
 * - Contact form (name, email, phone, message)
 * - Contact information display (phone, email, location)
 * - Map placeholder (for future Google Maps integration)
 * - Social media links
 * 
 * Note: Form submission is currently a placeholder (e.preventDefault()).
 * Backend integration needed for actual form handling.
 */
const ContactPage = () => {
    return (
        <div className="bg-background-dark text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-accent selection:text-black">
            <Navbar />
            <main id="main-content" className="flex-grow relative z-10">
                <div className="relative w-full">
                    <div className="absolute inset-0 z-0 h-[40vh] lg:h-full w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/90 to-[#080808] lg:bg-gradient-to-r lg:from-[#080808] lg:via-[#080808]/95 lg:to-transparent z-10"></div>
                        <img loading="lazy" alt="" role="presentation" className="h-full w-full object-cover object-center grayscale contrast-125 brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL7Whoyd_df4TMczDa9-X3GpviE5Kbc0USVxdiLU-MAkgQ9eL37mZqMINILoa8gdPrJdN4wLxsktihZ65niH1aim4BA3YRC9SJ-tywrRn4CKZ3m2BOC1MBZtT76lJgErlmpWwE3mUj-2f-Zh4ycInVRT1z5t4tmI48Regn_AuPuYdqeDV9-2Us8MG0K3Rd09lx7ukQG9qfU3qdoXBFFuLSy1bjKQbAOONq5gwC2ypIceieSd_XE04WiAtcD7-pt7doovlKqpDHdzUR" />
                    </div>
                    <div className="relative z-20 mx-auto max-w-7xl px-4 pt-[84px] pb-12 sm:px-6 lg:px-8 lg:pb-20 min-w-0">
                        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center order-2 lg:order-1 min-w-0">
                                <div className="mb-10 relative">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block bg-primary px-2 py-1 text-xs font-black text-black uppercase tracking-wider transform -skew-x-12">
                                            ערוץ תקשורת ישיר
                                        </span>
                                        <span className="h-px w-12 bg-gray-700"></span>
                                    </div>
                                    <h2 className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl mb-4">
                                        מוכנים <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-red-600">לקרב?</span>
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-400 max-w-lg border-r-2 border-gray-800 pr-4 leading-relaxed">
                                        אין מקום לתירוצים. אם אתם רוצים להגיע ליחידות המובחרות, המסע מתחיל כאן ועכשיו. מלאו פרטים - אנחנו נדאג לשאר.
                                    </p>
                                </div>
                                <form action="https://formspree.io/f/mbdakgkv" method="POST" className="space-y-6 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 border border-white/10 relative overflow-hidden group shadow-2xl shadow-black/50 min-w-0">
                                    <input type="hidden" name="_subject" value="[מחר מלחמה - צור קשר] הודעה חדשה" />
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div className="space-y-2 group/input">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors" htmlFor="name">שם מלא</label>
                                            <input name="name" className="w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none" id="name" placeholder="ישראל ישראלי" type="text" required />
                            </div>
                                        <div className="space-y-2 group/input">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors" htmlFor="phone">טלפון נייד</label>
                                            <input name="phone" className="w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none" id="phone" placeholder="05X-XXXXXXX" type="tel" required />
                        </div>
                            </div>
                                    <div className="space-y-2 group/input">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors" htmlFor="email">דואר אלקטרוני</label>
                                        <input name="email" className="w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none" id="email" placeholder="your@email.com" type="email" required />
                        </div>
                                    <div className="space-y-2 group/input">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors" htmlFor="message">מטרה / יחידה מועדפת</label>
                                        <textarea name="message" className="w-full resize-none bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none h-32" id="message" placeholder="מטכ״ל, שייטת, שלדג..."></textarea>
                            </div>
                                    <button type="submit" className="relative w-full bg-white/5 border border-primary/50 py-5 font-black text-white hover:bg-primary transition-all duration-300 group overflow-hidden uppercase tracking-widest text-lg">
                                        <div className="absolute inset-0 w-1 bg-primary transition-all duration-300 group-hover:w-full opacity-20"></div>
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            שגר פרטים
                                            <span className="material-symbols-outlined font-bold group-hover:translate-x-[-4px] transition-transform">east</span>
                                        </span>
                                    </button>
                                </form>
                        </div>
                            <div className="flex flex-col gap-8 lg:pt-16 order-1 lg:order-2 min-w-0">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                                    {[
                                        { icon: "call", title: "טלפון לשאלות", value: "052-796-0293", desc: "זמינים 24/7" },
                                        { icon: "alternate_email", title: "דוא״ל", value: "Maharmilhama212@gmail.com", desc: "מענה תוך 24 שעות" }
                                    ].map((contact, i) => (
                                        <div key={i} className="group relative bg-[#0a0a0a] border border-white/5 p-6 transition-all hover:border-primary/50 hover:bg-[#0f0f0f]">
                                            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5">
                                                <div className="p-3 bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors skew-x-[-10deg] flex-shrink-0">
                                                    <span className="material-symbols-outlined text-2xl skew-x-[10deg]">{contact.icon}</span>
                                                </div>
                                                <div className="text-center sm:text-right min-w-0 w-full sm:w-auto">
                                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{contact.title}</p>
                                                    <p className="text-2xl font-black text-white dir-ltr tracking-tight hover:text-primary transition-colors cursor-pointer break-all sm:break-normal">{contact.value}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{contact.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-surface-dark border border-white/10 p-8 text-center relative overflow-hidden">
                                    <div className="mx-auto mb-6 flex size-14 items-center justify-center bg-transparent border-2 border-primary text-primary">
                                        <span className="material-symbols-outlined text-3xl">chat_error</span>
                                    </div>
                                    <h3 className="mb-2 text-xl font-black text-white uppercase tracking-tight font-display">עדיין מתלבטים?</h3>
                                    <p className="mb-8 text-sm text-gray-400 font-body">
                                        המפקדים שלנו זמינים בוואטסאפ לכל שאלה. <br />אל תבזבזו זמן יקר על ספקות.
                                    </p>
                                    <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] px-4 py-4 text-black transition-all font-black uppercase shadow-[0_0_10px_rgba(37,211,102,0.3)] font-display">
                                        <span className="material-symbols-outlined">chat</span>
                                        דברו איתנו בוואטסאפ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

/**
 * FAQPage Component
 * 
 * Frequently Asked Questions page with accordion functionality.
 * 
 * State Management:
 * - openIndex: Tracks which FAQ item is currently expanded (-1 = none, 0+ = item index)
 * - Uses native <details> element with React state for controlled behavior
 * 
 * Features:
 * - Accordion-style expandable FAQ items
 * - Visual indicators for open/closed state
 * - WhatsApp contact CTA sidebar
 * - Category filtering (placeholder for future implementation)
 */
const FAQPage = () => {
    const [openIndex, setOpenIndex] = React.useState(-1);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-background-dark text-white font-body antialiased selection:bg-primary selection:text-white">
            <Navbar />
            <div className="relative w-full border-b border-white/10" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.85) 0%, rgba(5, 5, 5, 1) 100%), url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBkbROdnGxA99vj_P9zqRaDpvxP4IVSNxZKG1kgjDNgKjmOxWXaAS6P0wuX0v4RINj7L7303_XXv6iQkIDq9Ihc6vyUbd2MY7rqzw5M7eSAJ3gFnu3Swm_5XqFThh5YzKQCrFg9p_XB18-17ehi972qEqj1vxBKcFzk2oF2CqF_BV0F_Q-Qg1oMb7B7VCU3wXBfwGpENEaNoksjKPvM--Mh6ocFNPbipv4_-nblRWzfk0UX4pqbWd4pSCLBkOpEYpqa30tGLPzB3kyp\'); background-size: cover; background-position: center;' }}>
                <div className="absolute inset-0 bg-[url(\'https://www.transparenttextures.com/patterns/carbon-fibre.png\')] opacity-20"></div>
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center sm:text-right">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase drop-shadow-lg font-display">
                            שאלות נפוצות
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl border-r-4 border-primary pr-6 font-body">
                            יש ספקות? כאן מחסלים אותם. כל המידע שצריך לפני שיוצאים למסע שישנה לכם את החיים. <span className="text-white font-bold">בלי סיפורים, בלי תירוצים.</span>
                        </p>
                    </div>
                </div>
            </div>
            <main id="main-content" className="flex-1 pb-20 pt-[84px] relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 flex flex-col gap-4 text-right">
                            {(typeof window !== 'undefined' && window.FAQS ? window.FAQS : []).map((faq, i) => (
                                <div key={i} className={`bg-surface-card border border-white/5 ${openIndex === i ? 'border-primary/50 bg-surface-dark' : ''} transition-all duration-300 overflow-hidden`}>
                                    <button 
                                        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 hover:bg-white/5 select-none text-right"
                                        onClick={() => toggleItem(i)}
                                        aria-expanded={openIndex === i}
                                        aria-controls={`faq-panel-${i}`}
                                        id={`faq-button-${i}`}
                                    >
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className={`text-primary font-mono text-sm font-bold ${openIndex === i ? 'opacity-100' : 'opacity-50'}`}>{String(i + 1).padStart(2, '0')}</div>
                                            <h3 className="text-lg font-bold text-white transition-colors font-display">{faq.q}</h3>
                                        </div>
                                        <span className={`material-symbols-outlined text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} aria-hidden="true">expand_more</span>
                                    </button>
                                    {openIndex === i && (
                                        <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="px-6 pb-6 pr-12 border-t border-white/5 pt-4 text-right">
                                            <p className="text-gray-300 leading-relaxed font-body text-right">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-surface-dark border border-white/10 p-8 text-center relative overflow-hidden">
                                <div className="mx-auto mb-6 flex size-14 items-center justify-center bg-transparent border-2 border-primary text-primary">
                                    <span className="material-symbols-outlined text-3xl">chat_error</span>
                                </div>
                                <h3 className="mb-2 text-xl font-black text-white uppercase tracking-tight font-display">עדיין מתלבטים?</h3>
                                <p className="mb-8 text-sm text-gray-400 font-body">
                                    המפקדים שלנו זמינים בוואטסאפ לכל שאלה. <br />אל תבזבזו זמן יקר על ספקות.
                                </p>
                                <a href={(typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp) || '#'} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] px-4 py-4 text-black transition-all font-black uppercase shadow-[0_0_10px_rgba(37,211,102,0.3)] font-display">
                                    <span className="material-symbols-outlined">chat</span>
                                    דברו איתנו בוואטסאפ
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

/**
 * TermsPage Component
 * תקנון ותנאי שימוש לאתר
 */
const TermsPage = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <Navbar />
            <main id="main-content" className="flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8">תקנון ותנאי שימוש</h1>
                    <p className="text-gray-400 text-sm mb-10">עדכון אחרון: ינואר 2026</p>

                    <div className="prose-dark space-y-8 text-gray-300 text-base leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">1. כללי</h2>
                            <p>ברוכים הבאים לאתר "מחר מלחמה" (להלן "האתר"). האתר מופעל על ידי מחר מלחמה כושר קרבי (להלן "החברה" או "אנחנו"). השימוש באתר מהווה הסכמה לתנאים המפורטים בתקנון זה. אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.</p>
                            <p>התקנון מנוסח בלשון זכר מטעמי נוחות בלבד ומתייחס לכל המגדרים.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">2. מהות האתר והשירותים</h2>
                            <p>האתר מספק מידע על שירותי הכנה פיזית ומנטלית לקראת שירות צבאי, גיבושים ויחידות מובחרות בצה"ל. השירותים כוללים בין היתר: מידע על תוכניות אימון, מאמרים מקצועיים, ואפשרות ליצירת קשר לקבלת פרטים נוספים.</p>
                            <p>המידע באתר הינו למטרות מידע כללי בלבד ואינו מהווה ייעוץ רפואי, ספורטיבי או מקצועי מותאם אישית. מומלץ להתייעץ עם רופא לפני תחילת כל תוכנית אימונים.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">3. תנאי שימוש באתר</h2>
                            <ul className="list-disc pr-5 space-y-2">
                                <li>השימוש באתר מותר למשתמשים מגיל 16 ומעלה. משתמש מתחת לגיל 16 רשאי לגלוש באתר רק בהסכמת הורה או אפוטרופוס.</li>
                                <li>אין לעשות באתר שימוש למטרות בלתי חוקיות או שעלולות לפגוע באתר, בתכניו או במשתמשים אחרים.</li>
                                <li>אין להעתיק, לשכפל, להפיץ או לפרסם תוכן מהאתר ללא אישור בכתב מהחברה.</li>
                                <li>אין לבצע פעולות העלולות לשבש את פעולת האתר או להעמיס על השרתים.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">4. קניין רוחני</h2>
                            <p>כל התכנים באתר, לרבות טקסטים, תמונות, עיצובים, לוגואים, סימני מסחר, סרטונים וכל חומר אחר המופיע באתר הם קניינה הבלעדי של החברה או של צדדים שלישיים שנתנו הרשאה לשימוש בהם, ומוגנים על ידי חוקי זכויות יוצרים וקניין רוחני.</p>
                            <p>אין לעשות שימוש בקניין הרוחני באתר ללא אישור בכתב מהחברה.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">5. הגבלת אחריות</h2>
                            <ul className="list-disc pr-5 space-y-2">
                                <li>התכנים באתר, לרבות מאמרים וטיפים, מוגשים "כמות שהם" (AS IS) ואינם מהווים תחליף לייעוץ מקצועי.</li>
                                <li>החברה אינה אחראית לכל נזק ישיר או עקיף שעלול להיגרם כתוצאה מהסתמכות על תכני האתר.</li>
                                <li>החברה אינה אחראית לזמינות האתר ושומרת לעצמה את הזכות להפסיק או לשנות את פעולת האתר בכל עת.</li>
                                <li>האתר עשוי לכלול קישורים לאתרים חיצוניים. החברה אינה אחראית לתכנים או למדיניות הפרטיות של אתרים אלה.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">6. יצירת קשר והשארת פרטים</h2>
                            <p>בעת השארת פרטים באתר (שם, טלפון, דוא"ל), המשתמש מסכים לכך שהחברה תיצור עמו קשר לצורך מתן מידע על שירותיה. ניתן לבקש הסרה מרשימת התפוצה בכל עת באמצעות פנייה לכתובת הדוא"ל: {SITE_CONFIG.contact.email}.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">7. שינויים בתקנון</h2>
                            <p>החברה שומרת לעצמה את הזכות לעדכן ולשנות את תנאי התקנון מעת לעת, לפי שיקול דעתה הבלעדי. השימוש באתר לאחר עדכון התקנון מהווה הסכמה לתנאים המעודכנים. תאריך העדכון האחרון יצוין בראש המסמך.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">8. דין חל וסמכות שיפוט</h2>
                            <p>על תקנון זה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית בכל עניין הנוגע לתקנון זה תהיה לבתי המשפט המוסמכים בישראל.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">9. יצירת קשר</h2>
                            <p>לשאלות או בירורים בנוגע לתקנון זה ניתן לפנות אלינו:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>דוא"ל: <a href={'mailto:' + SITE_CONFIG.contact.email} className="text-primary hover:underline">{SITE_CONFIG.contact.email}</a></li>
                                <li>טלפון: <a href={'tel:' + SITE_CONFIG.contact.phone} className="text-primary hover:underline">{SITE_CONFIG.contact.phone}</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

/**
 * PrivacyPage Component
 * הצהרת פרטיות ומדיניות פרטיות
 */
const PrivacyPage = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <Navbar />
            <main id="main-content" className="flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8">מדיניות פרטיות</h1>
                    <p className="text-gray-400 text-sm mb-10">עדכון אחרון: ינואר 2026</p>

                    <div className="prose-dark space-y-8 text-gray-300 text-base leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">1. כללי</h2>
                            <p>"מחר מלחמה" (להלן "החברה" או "אנחנו") מכבדת את פרטיות המשתמשים באתר. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על מידע אישי של המשתמשים באתר שלנו (להלן "האתר").</p>
                            <p>השימוש באתר מהווה הסכמה למדיניות פרטיות זו. אם אינך מסכים למדיניות זו, אנא הימנע משימוש באתר.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">2. המידע שאנו אוספים</h2>
                            <h3 className="text-white text-lg font-semibold mb-2 mt-4">מידע שהמשתמש מוסר באופן אקטיבי</h3>
                            <p>כאשר אתה משאיר פרטים באתר (למשל בטופס יצירת קשר), אנו עשויים לאסוף:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>שם מלא</li>
                                <li>מספר טלפון</li>
                                <li>כתובת דוא"ל</li>
                                <li>כל מידע נוסף שתבחר למסור בהודעתך</li>
                            </ul>

                            <h3 className="text-white text-lg font-semibold mb-2 mt-4">מידע שנאסף אוטומטית</h3>
                            <p>בעת גלישה באתר עשוי להיאסף מידע טכני, כגון:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>כתובת IP</li>
                                <li>סוג הדפדפן והמכשיר</li>
                                <li>דפים שנצפו ומשך השהייה באתר</li>
                                <li>מקור ההגעה לאתר</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">3. מטרות השימוש במידע</h2>
                            <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                            <ul className="list-disc pr-5 space-y-2 mt-2">
                                <li>יצירת קשר עם משתמשים שהשאירו פרטים, לצורך מתן מידע על שירותי החברה</li>
                                <li>שיפור חוויית הגלישה באתר</li>
                                <li>ניתוח סטטיסטי ושיפור תכני האתר</li>
                                <li>עמידה בדרישות חוק ורגולציה</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">4. עוגיות (Cookies)</h2>
                            <p>האתר עשוי להשתמש בעוגיות (קבצי Cookie) וטכנולוגיות דומות לצורך:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>שמירה על תפקוד תקין של האתר</li>
                                <li>ניתוח דפוסי גלישה ושיפור השירות</li>
                                <li>התאמת תוכן למשתמש</li>
                            </ul>
                            <p className="mt-2">ניתן לנהל או לחסום עוגיות דרך הגדרות הדפדפן. חסימת עוגיות עשויה לפגוע בחלק מהפונקציונליות של האתר.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">5. שיתוף מידע עם צדדים שלישיים</h2>
                            <p>אנו לא נמכור, נשכיר או נמסור את המידע האישי שלך לצדדים שלישיים, למעט במקרים הבאים:</p>
                            <ul className="list-disc pr-5 space-y-2 mt-2">
                                <li>ספקי שירות הפועלים מטעמנו (כגון שירותי טפסים ואנליטיקה) המחויבים לשמור על סודיות המידע</li>
                                <li>כאשר נדרש לפי צו שיפוטי או דרישה חוקית</li>
                                <li>להגנה על זכויותינו או בטיחות המשתמשים</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">6. אבטחת מידע</h2>
                            <p>אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי מפני גישה בלתי מורשית, שימוש לרעה או אובדן. יחד עם זאת, אין אפשרות להבטיח אבטחה מוחלטת של מידע המועבר באינטרנט.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">7. זכויות המשתמש</h2>
                            <p>בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, עומדות לך הזכויות הבאות:</p>
                            <ul className="list-disc pr-5 space-y-2 mt-2">
                                <li><strong className="text-white">זכות עיון</strong> - הזכות לעיין במידע האישי השמור אודותיך</li>
                                <li><strong className="text-white">זכות תיקון</strong> - הזכות לבקש תיקון מידע שגוי</li>
                                <li><strong className="text-white">זכות מחיקה</strong> - הזכות לבקש מחיקת המידע האישי שלך</li>
                                <li><strong className="text-white">הסרה מרשימת תפוצה</strong> - הזכות לבקש הסרה מכל רשימת דיוור</li>
                            </ul>
                            <p className="mt-2">למימוש זכויותיך, ניתן לפנות אלינו בכתובת: <a href={'mailto:' + SITE_CONFIG.contact.email} className="text-primary hover:underline">{SITE_CONFIG.contact.email}</a></p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">8. מידע על קטינים</h2>
                            <p>האתר אינו מיועד לאיסוף מידע מילדים מתחת לגיל 16. אם נודע לנו שנאסף מידע מקטין ללא הסכמת הורה, נפעל למחיקתו בהקדם.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">9. שינויים במדיניות הפרטיות</h2>
                            <p>החברה רשאית לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יפורסמו באתר. המשך השימוש באתר לאחר עדכון המדיניות מהווה הסכמה לתנאים המעודכנים.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">10. יצירת קשר</h2>
                            <p>לשאלות או בקשות בנוגע למדיניות הפרטיות, ניתן לפנות אלינו:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>דוא"ל: <a href={'mailto:' + SITE_CONFIG.contact.email} className="text-primary hover:underline">{SITE_CONFIG.contact.email}</a></li>
                                <li>טלפון: <a href={'tel:' + SITE_CONFIG.contact.phone} className="text-primary hover:underline">{SITE_CONFIG.contact.phone}</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

/**
 * AccessibilityPage Component
 * הצהרת נגישות בהתאם לתקן הישראלי ת"י 5568
 */
const AccessibilityPage = () => {
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <div className="bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <Navbar />
            <main id="main-content" className="flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8">הצהרת נגישות</h1>
                    <p className="text-gray-400 text-sm mb-10">עדכון אחרון: ינואר 2026</p>

                    <div className="prose-dark space-y-8 text-gray-300 text-base leading-relaxed">
                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">1. מחויבות לנגישות</h2>
                            <p>"מחר מלחמה" מחויבת להנגיש את האתר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות. אנו שואפים לעמוד בדרישות תקן הנגישות הישראלי ת"י 5568 ובהנחיות WCAG 2.1 ברמה AA.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">2. אמצעי נגישות באתר</h2>
                            <p>האתר כולל את אמצעי הנגישות הבאים:</p>
                            <ul className="list-disc pr-5 space-y-2 mt-2">
                                <li>תמיכה מלאה בניווט באמצעות מקלדת</li>
                                <li>קישור "דלג לתוכן הראשי" לניווט מהיר</li>
                                <li>תיאורי תמונות (alt text) עבור תמונות באתר</li>
                                <li>מבנה כותרות היררכי (h1-h6) לניווט קל</li>
                                <li>תמיכה בטכנולוגיות מסייעות וקוראי מסך</li>
                                <li>ניגודיות צבעים בהתאם לדרישות WCAG AA</li>
                                <li>תמיכה בהגדלת טקסט עד 200% ללא אובדן תוכן</li>
                                <li>תמיכה בהעדפות תנועה מופחתת (prefers-reduced-motion)</li>
                                <li>טפסים עם תוויות נגישות לקוראי מסך</li>
                                <li>האתר בנוי בשפה העברית עם תמיכה מלאה בכיוון RTL</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">3. מגבלות ידועות</h2>
                            <p>למרות מאמצינו להנגיש את האתר, ייתכנו רכיבים שטרם הונגשו באופן מלא. אנו עובדים באופן שוטף לשפר את הנגישות באתר.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">4. דיווח על בעיות נגישות</h2>
                            <p>נתקלתם בבעיית נגישות באתר? נשמח לשמוע ולטפל בכך. ניתן לפנות אלינו:</p>
                            <ul className="list-disc pr-5 space-y-1 mt-2">
                                <li>דוא"ל: <a href={'mailto:' + SITE_CONFIG.contact.email} className="text-primary hover:underline">{SITE_CONFIG.contact.email}</a></li>
                                <li>טלפון: <a href={'tel:' + SITE_CONFIG.contact.phone} className="text-primary hover:underline">{SITE_CONFIG.contact.phone}</a></li>
                            </ul>
                            <p className="mt-2">אנו מתחייבים לטפל בפניות נגישות תוך 5 ימי עסקים.</p>
                        </section>

                        <section>
                            <h2 className="text-white text-xl font-bold mb-3">5. תאריך סקירת נגישות אחרונה</h2>
                            <p>סקירת הנגישות האחרונה של האתר בוצעה בינואר 2026.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

/**
 * NotFoundPage Component
 * Shown when the user navigates to an unknown hash route (e.g. /#/typo).
 */
const NotFoundPage = () => {
    return (
        <div className="bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white">
            <Navbar />
            <main id="main-content" className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase font-display">הדף לא נמצא</h1>
                <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md">הדף שחיפשת לא קיים או הוזז.</p>
                <Link to={typeof ROUTES !== 'undefined' ? ROUTES.HOME : '/'} className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 uppercase tracking-wider transition-colors">
                    חזרה לדף הבית
                    <span className="material-symbols-outlined text-xl rotate-180">arrow_back</span>
                </Link>
            </main>
            <Footer />
        </div>
    );
};

/**
 * App Component - Main Router
 * 
 * Configures all application routes using React Router's HashRouter.
 * HashRouter is used instead of BrowserRouter for static hosting compatibility.
 * 
 * Routes:
 * - "/" → HomePage (landing page)
 * - "/team" → TeamPage (team members)
 * - "/method" → MethodPage (training methodology)
 * - "/articles" → ArticlesPage (blog/articles)
 * - "/contact" → ContactPage (contact form)
 * - "/faq" → FAQPage (frequently asked questions)
 * 
 * Note: All routes use HashRouter, so URLs will be: /#/team, /#/method, etc.
 */
const ScrollToTopAndFocus = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        const main = document.getElementById('main-content');
        if (main) {
            main.setAttribute('tabindex', '-1');
            main.focus({ preventScroll: true });
        }
    }, [location.pathname]);
    return null;
};

const App = () => {
    return (
        <HashRouter>
            <ScrollToTopAndFocus />
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.TEAM} element={<TeamPage />} />
                <Route path={ROUTES.METHOD} element={<MethodPage />} />
                <Route path="/articles/:id" element={<ArticleDetailPage />} />
                <Route path={ROUTES.ARTICLES} element={<ArticlesPage />} />
                <Route path={ROUTES.CONTACT} element={<ContactPage />} />
                <Route path={ROUTES.FAQ} element={<FAQPage />} />
                <Route path={ROUTES.TERMS} element={<TermsPage />} />
                <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
                <Route path={ROUTES.ACCESSIBILITY} element={<AccessibilityPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </HashRouter>
    );
};

// Initialize React application
// Creates root and renders the App component into the #root div
const root = createRoot(document.getElementById('root'));
root.render(<App />);