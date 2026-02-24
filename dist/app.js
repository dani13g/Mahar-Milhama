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

const {
  useState,
  useEffect
} = React;
const {
  createRoot
} = ReactDOM;
const {
  HashRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useParams
} = ReactRouterDOM;

// Ensure critical globals exist so the app doesn't crash if a script failed to load
// Do not redeclare ROUTES/IMAGE_URLS (they may already be declared by constants/*.js)
if (typeof window !== 'undefined') {
  if (typeof window.ROUTES === 'undefined') {
    window.ROUTES = {
      HOME: '/',
      TEAM: '/team',
      METHOD: '/method',
      ARTICLES: '/articles',
      ARTICLE_DETAIL: '/articles/:id',
      CONTACT: '/contact',
      FAQ: '/faq',
      TERMS: '/terms',
      PRIVACY: '/privacy',
      ACCESSIBILITY: '/accessibility'
    };
  }
  if (typeof window.IMAGE_URLS === 'undefined') {
    window.IMAGE_URLS = {
      logo: 'images/minimal-black-logo.png',
      ctaBackground: '',
      heroTeam: '',
      heroMethodBackground: '',
      galleryImages: []
    };
  }
  if (typeof window.ARTICLES === 'undefined') {
    window.ARTICLES = [];
  }
  if (typeof window.FEATURED_ARTICLE === 'undefined') {
    window.FEATURED_ARTICLE = window.ARTICLES[0] || null;
  }
  if (typeof window.SIDEBAR_ARTICLES === 'undefined') {
    window.SIDEBAR_ARTICLES = window.ARTICLES.slice(1, 3);
  }
  if (typeof window.ALL_ARTICLES === 'undefined') {
    window.ALL_ARTICLES = window.ARTICLES.slice(3);
  }
  if (typeof window.HOME_BLOG_ARTICLES === 'undefined') {
    window.HOME_BLOG_ARTICLES = [];
  }
  if (typeof window.SITE_CONFIG === 'undefined') {
    window.SITE_CONFIG = {
      contact: {
        phone: '',
        email: '',
        whatsapp: '#'
      },
      social: {
        facebook: '#',
        instagram: '#'
      }
    };
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
  const isActive = path => {
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
    const handleClickOutside = event => {
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
    const handleEscape = e => {
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
  const navLinks = [{
    path: ROUTES.HOME,
    label: 'דף הבית',
    ariaLabel: 'עבור לדף הבית'
  }, {
    path: ROUTES.TEAM,
    label: 'הצוות',
    ariaLabel: 'עבור לדף הצוות'
  }, {
    path: ROUTES.METHOD,
    label: 'השיטה',
    ariaLabel: 'עבור לדף השיטה'
  }, {
    path: ROUTES.ARTICLES,
    label: 'מאמרים',
    ariaLabel: 'עבור לדף המאמרים'
  }, {
    path: ROUTES.CONTACT,
    label: 'צור קשר',
    ariaLabel: 'עבור לדף יצירת קשר'
  }, {
    path: ROUTES.FAQ,
    label: 'שאלות נפוצות',
    ariaLabel: 'עבור לדף שאלות נפוצות'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "sticky top-0 z-50 border-b border-white/10 bg-background-dark/95 backdrop-blur-md",
    "aria-label": "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E8\u05D0\u05E9\u05D9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex max-w-[1400px] flex-1 flex-col relative"
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center justify-between whitespace-nowrap px-6 py-4 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center flex-shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    ref: menuToggleRef,
    className: "md:hidden text-white hover:text-primary transition-colors",
    "aria-label": isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט",
    "aria-expanded": isMobileMenuOpen,
    onClick: toggleMobileMenu
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    "aria-hidden": "true"
  }, isMobileMenuOpen ? 'close' : 'menu')), /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "hidden md:flex items-center text-white flex-shrink-0",
    "aria-label": "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE_URLS.logo,
    alt: "\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 - \u05DC\u05D5\u05D2\u05D5",
    className: "h-10 w-auto",
    loading: "eager"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex flex-1 justify-center gap-8 items-center",
    role: "navigation",
    "aria-label": "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D9\u05D5\u05D5\u05D8"
  }, navLinks.map(link => /*#__PURE__*/React.createElement(Link, {
    key: link.path,
    className: `text-sm font-bold transition-colors ${isActive(link.path) ? 'text-primary' : 'text-gray-300 hover:text-white'}`,
    to: link.path,
    "aria-label": link.ariaLabel
  }, link.label))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 flex-shrink-0"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "md:hidden flex items-center text-white flex-shrink-0",
    "aria-label": "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE_URLS.logo,
    alt: "\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 - \u05DC\u05D5\u05D2\u05D5",
    className: "h-10 w-auto",
    loading: "eager"
  })), /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hidden md:flex group relative px-6 py-2 bg-transparent overflow-hidden rounded-none border border-white/30 hover:border-primary transition-all duration-300",
    "aria-label": "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05E2\u05DB\u05E9\u05D9\u05D5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative text-white text-sm font-black tracking-normal uppercase group-hover:text-white"
  }, "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05E2\u05DB\u05E9\u05D9\u05D5")))), /*#__PURE__*/React.createElement("div", {
    className: `md:hidden absolute top-full left-0 right-0 bg-background-dark backdrop-blur-md border-t border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`,
    role: "navigation",
    "aria-label": "\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D9\u05D5\u05D5\u05D8 \u05E0\u05D9\u05D9\u05D3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4 bg-background-dark flex flex-col gap-4"
  }, navLinks.map(link => /*#__PURE__*/React.createElement(Link, {
    key: link.path,
    className: `text-base font-bold py-2 transition-colors border-r-4 pr-4 ${isActive(link.path) ? 'text-primary border-primary' : 'text-gray-300 border-transparent hover:text-white hover:border-primary/50'}`,
    to: link.path,
    "aria-label": link.ariaLabel,
    onClick: () => setIsMobileMenuOpen(false)
  }, link.label)))))));
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
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-black border-t border-white/10 pt-20 pb-10 text-gray-500 font-sans"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center text-white"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMAGE_URLS.logo,
    alt: "\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 - \u05DC\u05D5\u05D2\u05D5",
    className: "h-10 w-auto",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg leading-relaxed border-r-2 border-primary pr-4"
  }, "\u05D4\u05D1\u05D9\u05EA \u05E9\u05DC \u05D4\u05DC\u05D5\u05D7\u05DE\u05D9\u05DD \u05DC\u05E2\u05EA\u05D9\u05D3. \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DB\u05D0\u05DF \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DB\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA \u05DC\u05DB\u05DC \u05D0\u05EA\u05D2\u05E8 \u05E9\u05D4\u05E6\u05D1\u05D0 \u05D9\u05D6\u05E8\u05D5\u05E7 \u05E2\u05DC\u05D9\u05DA."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    className: "size-10 bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all border border-white/10",
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.social.facebook || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Facebook - \u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 \u05DB\u05D5\u05E9\u05E8 \u05E7\u05E8\u05D1\u05D9"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "size-5 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
  }))), /*#__PURE__*/React.createElement("a", {
    className: "size-10 bg-white/5 hover:bg-primary text-white flex items-center justify-center transition-all border border-white/10",
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.social.instagram || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Instagram - \u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 \u05DB\u05D5\u05E9\u05E8 \u05E7\u05E8\u05D1\u05D9"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "size-5 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-black mb-6 uppercase tracking-wider"
  }, "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05D4\u05D9\u05E8"), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col gap-3 text-sm font-bold"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200",
    to: "/"
  }, "\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200",
    to: "/team"
  }, "\u05D4\u05E6\u05D5\u05D5\u05EA")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200",
    to: "/method"
  }, "\u05D4\u05E9\u05D9\u05D8\u05D4")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-primary transition-colors hover:translate-x-1 inline-block duration-200",
    to: "/articles"
  }, "\u05D1\u05DC\u05D5\u05D2 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-black mb-6 uppercase tracking-wider"
  }, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"), /*#__PURE__*/React.createElement("ul", {
    className: "flex flex-col gap-4 text-sm font-medium"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3 group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-primary group-hover:text-white transition-colors"
  }, "call"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "block text-gray-500 text-xs uppercase tracking-wider"
  }, "\u05D8\u05DC\u05E4\u05D5\u05DF"), /*#__PURE__*/React.createElement("a", {
    className: "text-white hover:text-primary transition-colors",
    href: `tel:${SITE_CONFIG.contact.phone}`
  }, SITE_CONFIG.contact.phone))), /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3 group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-primary group-hover:text-white transition-colors"
  }, "mail"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "block text-gray-500 text-xs uppercase tracking-wider"
  }, "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"), /*#__PURE__*/React.createElement("a", {
    className: "text-white hover:text-primary transition-colors",
    href: `mailto:${SITE_CONFIG.contact.email}`
  }, SITE_CONFIG.contact.email))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "text-white font-black mb-6 uppercase tracking-wider"
  }, "\u05D4\u05D9\u05E9\u05D0\u05E8 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm mb-4"
  }, "\u05D8\u05D9\u05E4\u05D9\u05DD \u05E9\u05D1\u05D5\u05E2\u05D9\u05D9\u05DD \u05DC\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D4\u05DB\u05D5\u05E9\u05E8."), /*#__PURE__*/React.createElement("form", {
    className: "flex flex-col gap-2",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "footer-email",
    className: "sr-only"
  }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"), /*#__PURE__*/React.createElement("input", {
    id: "footer-email",
    className: "bg-white/5 border border-white/10 rounded-none h-12 px-4 text-sm text-white focus:border-primary focus:bg-black outline-none focus-visible:ring-2 focus-visible:ring-primary placeholder:text-gray-500 transition-all",
    placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
    type: "email"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bg-white/10 hover:bg-primary text-white font-black uppercase tracking-wider text-sm h-12 rounded-none transition-colors border border-white/10 hover:border-primary",
    "aria-label": "\u05D4\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5"
  }, "\u05D4\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5")))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-gray-500"
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 2026 .\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4. \u05E0\u05D1\u05E0\u05D4 \u05D1\u05D3\u05DD, \u05D9\u05D6\u05E2 \u05D5\u05D3\u05DE\u05E2\u05D5\u05EA."), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-6"
  }, /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-white transition-colors",
    to: ROUTES.TERMS
  }, "\u05EA\u05E7\u05E0\u05D5\u05DF"), /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-white transition-colors",
    to: ROUTES.PRIVACY
  }, "\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA"), /*#__PURE__*/React.createElement(Link, {
    className: "hover:text-white transition-colors",
    to: ROUTES.ACCESSIBILITY
  }, "\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA")))));
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
  const galleryImages = typeof window !== 'undefined' && window.IMAGE_URLS && window.IMAGE_URLS.galleryImages ? window.IMAGE_URLS.galleryImages : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (galleryImages.length === 0 || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length, isPaused]);
  const goToSlide = index => {
    setCurrentIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000); // Resume after 3 seconds
  };
  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };
  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % galleryImages.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };
  const handleGalleryKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToNext();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToPrevious();
    }
  };
  if (galleryImages.length === 0) return null;
  const currentSrc = galleryImages[currentIndex];
  const total = galleryImages.length;
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-background-dark pt-[84px] pb-16 sm:pb-20 md:pb-24 border-t border-white/10",
    role: "region",
    "aria-label": "\u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12 sm:mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm mb-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "size-2 rounded-full bg-primary animate-pulse"
  }), "\u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA"), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tighter"
  }, "\u05E8\u05D2\u05E2\u05D9\u05DD \u05DE\u05D4\u05E9\u05D8\u05D7"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-r-2 border-primary pr-4"
  }, "\u05D4\u05E6\u05E6\u05D4 \u05DC\u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD, \u05DC\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05D5\u05DC\u05E8\u05D2\u05E2\u05D9\u05DD \u05D4\u05D1\u05DC\u05EA\u05D9 \u05E0\u05E9\u05DB\u05D7\u05D9\u05DD")), /*#__PURE__*/React.createElement("div", {
    className: "relative max-w-6xl mx-auto",
    dir: "ltr",
    tabIndex: 0,
    onKeyDown: handleGalleryKeyDown,
    "aria-label": `גלריית תמונות - תמונה ${currentIndex + 1} מתוך ${total}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "sr-only",
    "aria-live": "polite"
  }, `תמונה ${currentIndex + 1} מתוך ${total}`), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full overflow-hidden bg-black border border-white/10 shadow-2xl",
    style: {
      aspectRatio: '16/9'
    }
  }, /*#__PURE__*/React.createElement("img", {
    key: currentIndex,
    src: currentSrc,
    alt: `תמונה מאימון ${currentIndex + 1} מתוך ${total}`,
    className: "absolute inset-0 w-full h-full object-cover",
    loading: "eager",
    decoding: "async",
    onError: e => {
      e.target.style.background = '#1a1a1a';
      e.target.alt = '';
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: goToPrevious,
    className: "absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-primary text-white p-3 transition-all backdrop-blur-sm",
    "aria-label": "Previous image"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_left")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: goToNext,
    className: "absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 border border-white/20 hover:border-primary text-white p-3 transition-all backdrop-blur-sm",
    "aria-label": "Next image"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_right")), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1 md:gap-1.5"
  }, galleryImages.map((_, index) => /*#__PURE__*/React.createElement("button", {
    key: index,
    type: "button",
    onClick: () => goToSlide(index),
    className: `h-[8px] w-[8px] min-h-0 min-w-0 p-0 transition-all rounded-full flex-shrink-0 ${index === currentIndex ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'}`,
    "aria-label": `Go to image ${index + 1}`,
    "aria-current": index === currentIndex ? 'true' : undefined
  })))))));
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
  const testimonialImages = typeof window !== 'undefined' && window.TESTIMONIAL_IMAGES ? window.TESTIMONIAL_IMAGES : [];
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
  const homeBlogArticles = typeof window !== 'undefined' && window.HOME_BLOG_ARTICLES ? window.HOME_BLOG_ARTICLES : [];
  const SHOW_HOME_BLOG_SECTION = true;
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-auto min-h-screen w-full flex-col bg-background-dark text-white font-display overflow-x-hidden"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full bg-background-dark h-screen flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full bg-cover bg-center bg-no-repeat",
    style: {
      backgroundImage: `url('/images/HeroBGSunset.png')`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/20 z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-background-dark/60 via-background-dark/50 to-background-dark/40 z-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid-bg opacity-20 z-0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-1 flex-col items-center justify-start md:justify-center px-4 sm:px-6 lg:px-8 pt-[120px] md:pt-[84px] pb-16 sm:pb-20 md:pb-16 lg:pb-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] w-full flex flex-col gap-6 sm:gap-8 items-center text-center px-0 sm:px-6 lg:px-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/50 text-primary text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "size-2 rounded-full bg-primary animate-pulse"
  }), "\u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05E1\u05D9\u05DE\u05D5\u05DC\u05E6\u05D9\u05D9\u05EA \u05D2\u05D9\u05D1\u05D5\u05E9 \u05D9\u05D7\u05D8\u05D9\u05D5\u05EA \u05E0\u05E4\u05EA\u05D7\u05D4"), /*#__PURE__*/React.createElement("h1", {
    className: "text-white text-[3rem] sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-tight drop-shadow-2xl uppercase w-full px-3 lg:px-8 lg:pr-12 text-center leading-[1.1]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-br from-primary via-red-500 to-red-800 inline-block pr-3",
    style: {
      backgroundImage: 'linear-gradient(135deg, rgba(230, 26, 26, 1) 0%, rgba(171, 23, 23, 1) 50%, rgba(217, 84, 84, 1) 100%)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      paddingRight: '1rem'
    }
  }, "\u05DE\u05D7\u05E4\u05E9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9?")), /*#__PURE__*/React.createElement("h2", {
    className: "text-gray-400 text-base sm:text-lg md:text-xl font-bold max-w-2xl mx-0 border-r-4 border-primary pr-3 sm:pr-4 leading-relaxed"
  }, "\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05DB\u05E0\u05D4 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D4 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05E2\u05D9\u05DC\u05D9\u05EA, \u05E7\u05D5\u05DE\u05E0\u05D3\u05D5 \u05D5\u05D4\u05E1\u05D9\u05D9\u05E8\u05D5\u05EA."), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-4xl bg-black/60 backdrop-blur-md border border-white/10 p-1 sm:p-2 lg:p-2 shadow-2xl mt-6 sm:mt-8 relative group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-1 -left-1 size-4 border-t-2 border-l-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-1 -right-1 size-4 border-b-2 border-r-2 border-primary"
  }), /*#__PURE__*/React.createElement("form", {
    action: "https://formspree.io/f/mbdakgkv",
    method: "POST",
    className: "flex flex-col lg:flex-row gap-2 sm:gap-3 w-full"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_subject",
    value: "[\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 - Hero] \u05D1\u05E7\u05E9\u05EA \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hero-name",
    className: "sr-only"
  }, "\u05E9\u05DD \u05DE\u05DC\u05D0"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    className: "w-full h-12 sm:h-14 px-4 sm:px-6 bg-white/5 text-white text-sm sm:text-base font-bold placeholder:text-gray-500 rounded-none border border-white/10 focus:border-primary focus:bg-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary",
    placeholder: "\u05E9\u05DD \u05DE\u05DC\u05D0",
    required: true,
    type: "text",
    id: "hero-name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "hero-phone",
    className: "sr-only"
  }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    className: "w-full h-12 sm:h-14 px-4 sm:px-6 bg-white/5 text-white text-sm sm:text-base font-bold placeholder:text-gray-500 rounded-none border border-white/10 focus:border-primary focus:bg-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary text-right",
    placeholder: "\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3",
    required: true,
    type: "tel",
    inputMode: "numeric",
    id: "hero-phone"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "flex-none h-12 sm:h-14 px-6 sm:px-10 bg-primary hover:bg-primary-hover active:scale-[0.98] transition-all rounded-none text-white text-base sm:text-xl font-black tracking-wider shadow-[0_0_30px_rgba(230,26,26,0.3)] flex items-center justify-center gap-2 sm:gap-3 uppercase min-h-[2.75rem]",
    "aria-label": "\u05E6\u05E8\u05D5 \u05D0\u05D9\u05EA\u05D9 \u05E7\u05E9\u05E8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm sm:text-lg"
  }, "\u05E6\u05E8\u05D5 \u05D0\u05D9\u05EA\u05D9 \u05E7\u05E9\u05E8"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-[1.25rem] sm:text-[1.5rem] font-bold rotate-180",
    "aria-hidden": "true"
  }, "arrow_right_alt")))))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-10 flex items-center justify-center"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-32 border-b border-white/5 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-primary/5 rounded-full blur-[100px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-12 sm:mb-16 md:mb-20"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-primary font-black tracking-[0.2em] uppercase mb-4 text-sm flex justify-center items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-[2px] bg-primary"
  }), "\u05D4\u05D9\u05EA\u05E8\u05D5\u05DF \u05E9\u05DC\u05E0\u05D5", /*#__PURE__*/React.createElement("span", {
    className: "w-12 h-[2px] bg-primary"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 uppercase"
  }, "\u05DC\u05DE\u05D4 \u05D3\u05D5\u05D5\u05E7\u05D0 \"\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4\"?"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed"
  }, "\u05DC\u05D0 \u05E2\u05D5\u05D3 \u05E7\u05D1\u05D5\u05E6\u05D4 \u05E9\u05DC 2 \u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD \u05D1\u05E9\u05D1\u05D5\u05E2", /*#__PURE__*/React.createElement("br", null), "\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D1\u05D2\u05D9\u05D1\u05D5\u05E9 \u05D3\u05D5\u05E8\u05E9\u05EA \u05D4\u05DB\u05E9\u05E8\u05D4 \u05DE\u05E7\u05D9\u05E4\u05D4 \u05E9\u05DC \u05DE\u05D2\u05D1\u05E9\u05D9\u05DD \u05DE\u05D4\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D7\u05E8\u05D5\u05EA \u05D4\u05DB\u05D5\u05DC\u05DC\u05EA")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, (typeof window !== 'undefined' && window.FEATURES ? window.FEATURES : []).map((feature, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bg-card group p-8 bg-surface-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
  }), /*#__PURE__*/React.createElement("div", {
    className: "size-16 bg-black border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:text-black transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-4xl"
  }, feature.icon)), /*#__PURE__*/React.createElement("h4", {
    className: "text-white text-2xl font-black mb-4 uppercase"
  }, feature.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-relaxed text-sm"
  }, feature.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-32 bg-texture relative overflow-hidden",
    role: "region",
    "aria-label": "\u05E2\u05D3\u05D5\u05D9\u05D5\u05EA \u05D1\u05D5\u05D2\u05E8\u05D9\u05DD",
    onKeyDown: e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setTestimonialPage(p => Math.min(p + 1, testimonialTotalPages));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setTestimonialPage(p => Math.max(p - 1, 0));
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/90"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-end justify-between mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-primary font-black tracking-[0.2em] uppercase mb-2 flex items-center gap-2 text-xs sm:text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[3px] bg-primary block"
  }), "\u05E2\u05D3\u05D5\u05D9\u05D5\u05EA \u05DE\u05D4\u05E9\u05D8\u05D7"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase"
  }, "\u05D1\u05D5\u05D2\u05E8\u05D9\u05DD \u05DE\u05E1\u05E4\u05E8\u05D9\u05DD")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 sm:gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setTestimonialPage(p => Math.min(p + 1, testimonialTotalPages)),
    disabled: testimonialPage >= testimonialTotalPages,
    className: "size-12 sm:size-14 bg-black border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all min-h-[2.75rem] min-w-[2.75rem] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white",
    "aria-label": testimonialPerPage === 1 ? "עבור לעדות הבאה" : "עבור ל־3 העדויות הבאות"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    "aria-hidden": "true"
  }, "arrow_forward")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setTestimonialPage(p => Math.max(p - 1, 0)),
    disabled: testimonialPage <= 0,
    className: "size-12 sm:size-14 bg-black border border-white/20 hover:border-primary hover:text-primary text-white flex items-center justify-center transition-all min-h-[2.75rem] min-w-[2.75rem] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-white/20 disabled:hover:text-white",
    "aria-label": testimonialPerPage === 1 ? "עבור לעדות הקודמת" : "עבור ל־3 העדויות הקודמות"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    "aria-hidden": "true"
  }, "arrow_back")))), /*#__PURE__*/React.createElement("div", {
    className: "sr-only",
    "aria-live": "polite"
  }, `עדויות: עמוד ${testimonialPage + 1}`), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
  }, Array.from({
    length: testimonialPerPage
  }, (_, slot) => {
    const idx = testimonialPage * testimonialPerPage + slot;
    const filename = testimonialImages[idx];
    if (!filename) return /*#__PURE__*/React.createElement("div", {
      key: slot,
      className: "bg-surface-card border border-white/5 min-h-[200px] md:min-h-[280px]",
      "aria-hidden": "true"
    });
    const src = '/images/testimonials/' + encodeURIComponent(filename);
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "group bg-surface-card border border-white/5 overflow-hidden relative hover:border-primary/30 transition-all"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full overflow-hidden"
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: `עדות בוגר מספר ${idx + 1}`,
      className: "w-full h-auto block align-top",
      loading: testimonialPage === 0 && slot === 0 ? 'eager' : 'lazy'
    })));
  })))), SHOW_HOME_BLOG_SECTION && /*#__PURE__*/React.createElement("div", {
    className: "bg-[#080808] pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-end mb-10 sm:mb-12 md:mb-16"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-primary font-black tracking-[0.2em] uppercase mb-2 flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[3px] bg-primary block"
  }), "\u05D1\u05DC\u05D5\u05D2 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase"
  }, "\u05D9\u05D3\u05E2 \u05D6\u05D4 \u05DB\u05D5\u05D7")), /*#__PURE__*/React.createElement(Link, {
    to: "/articles",
    className: "hidden sm:flex items-center gap-2 text-white hover:text-primary font-black uppercase text-sm border-b-2 border-transparent hover:border-primary pb-1 transition-all"
  }, "\u05DB\u05DC \u05D4\u05DE\u05D0\u05DE\u05E8\u05D9\u05DD", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined font-bold"
  }, "arrow_back"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-3 gap-8"
  }, homeBlogArticles.map((article, i) => /*#__PURE__*/React.createElement(Link, {
    key: i,
    to: `/articles/${article.id}`,
    className: "flex flex-col group cursor-pointer",
    "aria-label": `קרא עוד על: ${article.title}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-64 border border-white/10 overflow-hidden mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0",
    style: {
      backgroundImage: `url('${article.img}')`
    },
    role: "img",
    "aria-label": article.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 bg-primary text-white text-xs font-black uppercase tracking-wider px-4 py-2 z-20"
  }, article.category)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-3 px-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 text-xs font-mono uppercase tracking-wider"
  }, article.date), /*#__PURE__*/React.createElement("h4", {
    className: "text-white text-xl font-black group-hover:text-primary transition-colors leading-tight uppercase"
  }, article.title), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 group-hover:text-white text-xs font-bold mt-2 flex items-center gap-2 uppercase tracking-wider transition-colors"
  }, "\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3", /*#__PURE__*/React.createElement("span", {
    className: "w-8 h-[1px] bg-gray-500 group-hover:bg-white",
    "aria-hidden": "true"
  })))))))), /*#__PURE__*/React.createElement(ImageGallery, null), /*#__PURE__*/React.createElement("div", {
    className: "bg-primary relative overflow-hidden py-24"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-multiply"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 bottom-0 w-full h-full bg-cover bg-center bg-no-repeat",
    style: {
      backgroundImage: `url('${IMAGE_URLS.ctaBackground}')`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/60"
  })), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[800px] mx-auto px-4 sm:px-6 text-center relative z-10"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 uppercase drop-shadow-lg"
  }, "\u05D4\u05D0\u05DD \u05D9\u05E9 \u05DC\u05DA \u05D0\u05EA \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA?"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/90 text-base sm:text-lg md:text-xl font-bold mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto"
  }, "\u05D4\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05DE\u05EA\u05DE\u05DC\u05D0\u05D9\u05DD \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA. \u05D0\u05DC \u05EA\u05D7\u05DB\u05D4 \u05DC\u05E8\u05D2\u05E2 \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF. ", /*#__PURE__*/React.createElement("br", null), "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05D8\u05D5\u05D1\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5."), /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "inline-block bg-white text-primary hover:bg-black hover:text-white transition-all px-6 sm:px-10 md:px-12 py-4 sm:py-5 rounded-none font-black text-base sm:text-lg shadow-[0.5rem_0.5rem_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[0.25rem] hover:translate-y-[0.25rem] border-2 border-black transform duration-100 uppercase tracking-wider min-h-[2.75rem]",
    "aria-label": "\u05E9\u05E8\u05D9\u05D9\u05DF \u05DE\u05E7\u05D5\u05DD \u05DC\u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"
  }, "\u05E9\u05E8\u05D9\u05D9\u05DF \u05DE\u05E7\u05D5\u05DD \u05DC\u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"))), /*#__PURE__*/React.createElement("a", {
    "aria-label": "Chat on WhatsApp",
    className: "fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group rounded-full",
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "size-8 fill-current",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })))), /*#__PURE__*/React.createElement(Footer, null));
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
  const teamMembers = typeof window !== 'undefined' && window.TEAM_MEMBERS ? window.TEAM_MEMBERS : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white overflow-x-hidden flex flex-col min-h-screen selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("section", {
    className: "relative flex flex-col items-center justify-start md:justify-center h-screen w-full bg-cover bg-center bg-no-repeat border-b border-border-dark",
    style: {
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.95) 100%), url('${IMAGE_URLS.heroTeam}')`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.5)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,0.5)_2px,transparent_2px)] bg-[length:40px_40px] opacity-20 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "layout-content-container flex flex-col items-center justify-center max-w-[1100px] px-4 sm:px-6 text-center z-10 space-y-6 sm:space-y-8 pt-[120px] pb-16 sm:pb-20 md:pb-16 lg:pb-20 xl:pb-24"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2"
  }, "\u05D4\u05DB\u05E8 \u05D0\u05EA ", /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-b from-primary to-red-800 inline-block pr-3"
  }, "\u05D4\u05E6\u05D5\u05D5\u05EA")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed border-r-4 border-primary pr-4 sm:pr-6 bg-gradient-to-l from-black/50 to-transparent py-2"
  }, "\u05D4\u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05DB\u05D5\u05DC\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05E2\u05D9\u05DC\u05D9\u05EA \u05D5\u05E1\u05D9\u05D9\u05E8\u05D5\u05EA, \u05DE\u05E0\u05D5\u05E1\u05D9\u05DD, \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D5\u05E0\u05D1\u05D7\u05E8\u05D5 \u05D1\u05E7\u05E4\u05D9\u05D3\u05D4 \u05E2\u05DC \u05DE\u05E0\u05EA \u05DE\u05DE\u05E9 \u05D0\u05EA \u05DE\u05E7\u05E1\u05D9\u05DE\u05D5\u05DD \u05D4\u05E4\u05D5\u05D8\u05E0\u05E6\u05D9\u05D0\u05DC \u05E9\u05DC\u05DB\u05DD \u05D1\u05E6\u05D1\u05D0."), /*#__PURE__*/React.createElement("div", {
    className: "pt-8 flex flex-col sm:flex-row gap-5 justify-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group cursor-pointer inline-flex items-center justify-center gap-3 h-14 px-10 bg-white text-black hover:bg-accent transition-all text-lg font-black tracking-wider uppercase border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]",
    "aria-label": "\u05E7\u05D1\u05E2 \u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"
  }, /*#__PURE__*/React.createElement("span", null, "\u05E7\u05D1\u05E2 \u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined group-hover:-translate-x-1 transition-transform font-bold text-black",
    "aria-hidden": "true"
  }, "arrow_back")), /*#__PURE__*/React.createElement(Link, {
    to: ROUTES.METHOD,
    className: "group cursor-pointer inline-flex items-center justify-center gap-3 h-14 px-10 bg-transparent text-white hover:bg-white/5 transition-all text-lg font-bold tracking-wider uppercase border-2 border-zinc-700 hover:border-white",
    "aria-label": "\u05DC\u05DE\u05D3 \u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3"
  }, /*#__PURE__*/React.createElement("span", null, "\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3?"))))), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 bg-background-dark pt-[84px] pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tactical-grid absolute inset-0 pointer-events-none opacity-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-20 left-0 w-[37.5rem] h-[37.5rem] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-[1400px] mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row items-start md:items-end justify-start mb-10 sm:mb-12 md:mb-16 border-b border-border-dark pb-4 sm:pb-6 gap-4 sm:gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-right w-full md:w-auto"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-2"
  }, "\u05E1\u05D2\u05DC \u05D4\u05E4\u05D9\u05E7\u05D5\u05D3"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-500 font-mono text-sm border-r-2 border-primary pr-3 uppercase"
  }, "\u05D4\u05D0\u05E0\u05E9\u05D9\u05DD \u05E9\u05D9\u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA\u05DB\u05DD \u05DE\u05E0\u05E2\u05E8\u05D9\u05DD \u05DC\u05DC\u05D5\u05D7\u05DE\u05D9\u05DD"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
  }, teamMembers.map((member, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "group relative flex flex-col bg-card-dark border border-border-dark hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(255,42,42,0.2)]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-96 overflow-hidden bg-gray-900 border-b border-border-dark group-hover:border-primary transition-colors clip-corner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-cover bg-center filter-grayscale transition-all duration-500 group-hover:filter-none scale-100 group-hover:scale-105",
    style: {
      backgroundImage: `url('${member.img}')`
    },
    role: "img",
    "aria-label": `תמונה של ${member.name}`
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"
  }), member.role && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-4 left-4 border border-white/20 p-1.5 bg-black/60 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-white text-base"
  }, "qr_code_2")), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 left-0 p-6 z-10"
  }, member.role && /*#__PURE__*/React.createElement("span", {
    className: "inline-block px-2 py-0.5 bg-primary text-black text-[0.625rem] font-black uppercase tracking-wider mb-2 skew-x-[-10deg]"
  }, member.role), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-3xl font-black leading-none uppercase group-hover:text-primary transition-colors"
  }, member.name))), /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex flex-col gap-5 flex-1 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pb-4 border-b border-dashed border-border-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-black transition-colors"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl"
  }, member.icon)), /*#__PURE__*/React.createElement("span", {
    className: "font-bold text-lg tracking-tight text-white"
  }, member.unit)), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-400 text-sm leading-relaxed font-light"
  }, member.desc)))), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col items-center justify-center text-center bg-[#0a0a0a] border-2 border-dashed border-zinc-800 hover:border-accent transition-all duration-300 p-8 gap-8 md:col-span-2 lg:col-span-1 xl:col-span-4 group overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-6 border-2 border-zinc-800 rounded-none bg-zinc-900 text-accent mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_30px_rgba(204,255,0,0.15)] group-hover:border-accent"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-5xl"
  }, "group_add")), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-4xl font-black uppercase mb-3"
  }, "\u05D7\u05D5\u05E9\u05D1 \u05E9\u05D0\u05EA\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DD?"), /*#__PURE__*/React.createElement("p", {
    className: "text-zinc-400 text-base max-w-md"
  }, "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05EA\u05DE\u05D9\u05D3 \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05D9\u05D5\u05E6\u05D0\u05D9 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05DE\u05D5\u05D1\u05D7\u05E8\u05D5\u05EA \u05E9\u05D9\u05E6\u05D8\u05E8\u05E4\u05D5 \u05DC\u05DE\u05E9\u05D9\u05DE\u05D4."), /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "mt-8 px-10 py-4 bg-accent text-black hover:bg-white font-black text-sm uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]",
    "aria-label": "\u05E9\u05DC\u05D7 \u05E7\u05D5\u05E8\u05D5\u05EA \u05D7\u05D9\u05D9\u05DD \u05D1-WhatsApp \u05DC\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA \u05DC\u05E6\u05D5\u05D5\u05EA"
  }, "\u05E9\u05DC\u05D7 \u05E7\u05D5\u05E8\u05D5\u05EA \u05D7\u05D9\u05D9\u05DD")))))), /*#__PURE__*/React.createElement("section", {
    className: "relative pt-[84px] pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 overflow-hidden border-t-2 border-primary bg-[#080808]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[25rem] bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]"
  }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC ", /*#__PURE__*/React.createElement("span", {
    className: "text-primary text-stroke-1 block md:inline mt-2 md:mt-0"
  }, "\u05D1\u05DE\u05DC\u05D7\u05DE\u05D4?")), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-light"
  }, "\u05D4\u05DE\u05D3\u05E8\u05D9\u05DB\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05DE\u05D7\u05DB\u05D9\u05DD \u05DC\u05DB\u05DD \u05D1\u05E9\u05D8\u05D7. \u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05E7\u05E8\u05D5\u05D1 \u05E0\u05E4\u05EA\u05D7\u05D4. \u05DE\u05E1\u05E4\u05E8 \u05D4\u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05DE\u05D5\u05D2\u05D1\u05DC."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-6 justify-center items-center pt-6"
  }, /*#__PURE__*/React.createElement("button", {
    className: "w-full sm:w-auto h-20 px-14 bg-primary hover:bg-white text-black font-black text-2xl shadow-[0_0_30px_rgba(255,42,42,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all hover:-translate-y-1 flex items-center justify-center gap-4 uppercase"
  }, /*#__PURE__*/React.createElement("span", null, "\u05E9\u05E8\u05D9\u05D9\u05DF \u05DE\u05E7\u05D5\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined font-black"
  }, "arrow_back")), /*#__PURE__*/React.createElement(Link, {
    to: "/contact",
    className: "w-full sm:w-auto h-20 px-14 bg-transparent border-2 border-zinc-700 hover:border-white hover:bg-white/5 text-white font-bold text-xl transition-all uppercase tracking-wide flex items-center justify-center"
  }, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D9\u05D9\u05E2\u05E6\u05D5\u05EA")))), /*#__PURE__*/React.createElement(Footer, null));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-dark text-white antialiased selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex flex-col flex-1"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative flex h-screen flex-col items-center justify-start md:justify-center overflow-hidden bg-background-dark border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full w-full bg-cover bg-center bg-no-repeat",
    style: {
      backgroundImage: `url('${IMAGE_URLS.heroMethodBackground}')`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-pattern tactical-grid opacity-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/60 z-0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-20 flex w-full max-w-[1000px] flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 text-center pt-[120px] pb-16 sm:pb-20 md:pb-16 lg:pb-20"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2"
  }, "\u05D4\u05E9\u05D9\u05D8\u05D4"), /*#__PURE__*/React.createElement("p", {
    className: "max-w-[700px] text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed tracking-wide border-r-2 border-primary pr-4 sm:pr-6"
  }, "\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8", /*#__PURE__*/React.createElement("br", null), "\u05EA\u05D5\u05DA \u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05E0\u05D9\u05D4\u05D5\u05DC \u05E2\u05D5\u05DE\u05E1\u05D9\u05DD \u05DE\u05D3\u05D5\u05D9\u05E7 \u05DE\u05D4\u05D0\u05D9\u05DE\u05D5\u05DF \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF \u05D5\u05E2\u05D3 \u05DC\u05E8\u05D2\u05E2 \u05D4\u05D2\u05D9\u05D5\u05E1"), /*#__PURE__*/React.createElement("div", {
    className: "mt-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "group flex min-w-[12.5rem] cursor-pointer items-center justify-center h-14 px-8 bg-primary text-white text-lg font-black tracking-wider transition-all hover:bg-white hover:text-black"
  }, "\u05D4\u05EA\u05D7\u05DC \u05DE\u05E1\u05E2", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined mr-2 group-hover:translate-x-1 transition-transform"
  }, "arrow_back")), /*#__PURE__*/React.createElement(Link, {
    to: ROUTES.ARTICLES,
    className: "flex min-w-[12.5rem] cursor-pointer items-center justify-center h-14 px-8 bg-transparent border border-white/30 text-white text-lg font-bold tracking-wider hover:bg-white/5 hover:border-primary transition-all",
    "aria-label": "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05D3\u05E3 \u05D4\u05DE\u05D0\u05DE\u05E8\u05D9\u05DD"
  }, "\u05DC\u05DE\u05D3 \u05E2\u05D5\u05D3")))), /*#__PURE__*/React.createElement("section", {
    className: "flex justify-center bg-[#0a0a0a] pt-[84px] pb-20 px-6 border-b border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl w-full flex flex-col md:flex-row items-center gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight"
  }, "\u05DE\u05D5\u05D8\u05D9\u05D1\u05E6\u05D9\u05D4 \u05D4\u05D9\u05D0 \u05D6\u05D5\u05DC\u05D4. \u05DE\u05E9\u05DE\u05E2\u05EA \u05D5\u05D4\u05EA\u05DE\u05D3\u05D4 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E6\u05DC\u05D7\u05D4")), /*#__PURE__*/React.createElement("div", {
    className: "w-px h-32 bg-white/10 hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg leading-relaxed font-light"
  }, "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DC\u05D0 \u05DE\u05D0\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05E6\u05E2\u05E7\u05D5\u05EA \u05D7\u05E1\u05E8\u05D5\u05EA \u05EA\u05DB\u05DC\u05D9\u05EA \u05D0\u05D5 \u05E9\u05F4\u05D4\u05DB\u05DC \u05D1\u05E8\u05D0\u05E9\u05F4. \u05D4\u05E9\u05D9\u05D8\u05D4 \u05E9\u05DC\u05E0\u05D5 \u05E0\u05D1\u05E0\u05EA\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D0\u05DE\u05E0\u05D9 \u05DB\u05D5\u05E9\u05E8 \u05E7\u05E8\u05D1\u05D9 \u05DE\u05D5\u05E1\u05DE\u05DB\u05D9\u05DD. \u05D4\u05DE\u05D8\u05E8\u05D4 \u05D0\u05D7\u05EA: \u05D1\u05E0\u05D9\u05D9\u05D4 \u05E4\u05D9\u05D6\u05D9\u05D5\u05DC\u05D5\u05D2\u05D9\u05EA \u05D5\u05DE\u05E0\u05D8\u05DC\u05D9\u05EA \u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05D5\u05DE\u05D3\u05D5\u05E8\u05D2\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05D4\u05E2\u05D5\u05DE\u05E1\u05D9\u05DD \u05D4\u05E7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD \u05E9\u05DC \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E6\u05D1\u05D0\u05D9.")))), /*#__PURE__*/React.createElement("section", {
    className: "relative bg-background-dark pt-[84px] pb-24 px-6 border-b border-white/5 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-7xl mx-auto relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl font-black text-white md:text-5xl uppercase tracking-tighter"
  }, "\u05E9\u05DC\u05D5\u05E9\u05EA \u05E2\u05DE\u05D5\u05D3\u05D9 \u05D4\u05EA\u05D5\u05D5\u05DA"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 md:grid-cols-3"
  }, (typeof window !== 'undefined' && window.METHOD_PILLARS ? window.METHOD_PILLARS : []).map((pillar, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "group relative flex flex-col gap-6 bg-surface-card p-8 border border-white/10 hover:border-primary transition-all duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-2 left-2 size-2 bg-white/10 group-hover:bg-primary transition-colors"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-2 right-2 size-2 bg-white/10 group-hover:bg-primary transition-colors"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "size-12 bg-white/5 flex items-center justify-center text-primary border border-white/10"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl"
  }, pillar.icon)), /*#__PURE__*/React.createElement("span", {
    className: "text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors"
  }, pillar.num)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-2xl font-black text-white mb-4 uppercase tracking-tight"
  }, pillar.title, " ", /*#__PURE__*/React.createElement("span", {
    className: "text-primary text-base font-bold align-middle"
  }, pillar.subtitle)), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-relaxed text-sm border-l border-white/10 pl-4"
  }, pillar.desc)), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto pt-6 border-t border-dashed border-white/10"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 text-sm text-gray-300 font-mono"
  }, pillar.items.map((item, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "size-1 bg-accent shadow-[0_0_5px_#ccff00]"
  }), item))))))))), /*#__PURE__*/React.createElement("section", {
    className: "flex flex-col items-center bg-[#080808] pt-[84px] pb-24 px-6 border-b border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-6xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-16 text-center"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl font-black text-white uppercase tracking-tighter"
  }, "\u05DE\u05D7\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05DE\u05D5\u05DF \u05D4\u05E9\u05DC\u05DD"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-gray-500 font-mono text-sm uppercase tracking-widest"
  }, "Protocol: Stimulus // Recovery // Supercompensation")), /*#__PURE__*/React.createElement("div", {
    className: "relative flex flex-col md:flex-row items-start justify-between gap-4 p-10 bg-surface-card border border-white/10 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center text-center gap-6 z-10 relative group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "size-20 bg-background-dark border-2 border-white/20 group-hover:border-primary flex items-center justify-center text-white text-2xl font-black transition-colors"
  }, "01"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-black text-xl uppercase"
  }, "\u05E2\u05D5\u05DE\u05E1 \u05D9\u05EA\u05E8 ", /*#__PURE__*/React.createElement("span", {
    className: "block text-xs font-mono text-primary mt-1"
  }, "OVERLOAD")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 leading-relaxed"
  }, "\u05D7\u05E9\u05D9\u05E4\u05EA \u05D4\u05D2\u05D5\u05E3 \u05DC\u05D2\u05D9\u05E8\u05D5\u05D9 \u05DE\u05E2\u05D1\u05E8 \u05DC\u05E8\u05D2\u05D9\u05DC. \u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05D9\u05E7\u05E8\u05D5-\u05D8\u05E8\u05D0\u05D5\u05DE\u05D4 \u05DE\u05D1\u05D5\u05E7\u05E8\u05EA \u05DC\u05E9\u05E8\u05D9\u05E8.")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex flex-1 items-center justify-center self-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-px w-full bg-white/20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 -top-1 size-2 bg-primary"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden h-12 w-px bg-white/20 self-center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center text-center gap-6 z-10 relative group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "size-20 bg-background-dark border-2 border-white/20 group-hover:border-primary flex items-center justify-center text-white text-2xl font-black transition-colors"
  }, "02"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-black text-xl uppercase"
  }, "\u05D4\u05EA\u05D0\u05D5\u05E9\u05E9\u05D5\u05EA ", /*#__PURE__*/React.createElement("span", {
    className: "block text-xs font-mono text-primary mt-1"
  }, "RECOVERY")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 leading-relaxed"
  }, "\u05EA\u05D6\u05D5\u05E0\u05D4, \u05E9\u05D9\u05E0\u05D4 \u05D5\u05DE\u05E0\u05D5\u05D7\u05D4 \u05D0\u05E7\u05D8\u05D9\u05D1\u05D9\u05EA. \u05D4\u05E9\u05DC\u05D1 \u05D1\u05D5 \u05D4\u05D2\u05D5\u05E3 \u05D1\u05D5\u05E0\u05D4 \u05D0\u05EA \u05E2\u05E6\u05DE\u05D5 \u05DE\u05D7\u05D3\u05E9.")), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex flex-1 items-center justify-center self-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-px w-full bg-white/20 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute right-0 -top-1 size-2 bg-primary"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden h-12 w-px bg-white/20 self-center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col items-center text-center gap-6 z-10 relative group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "size-20 bg-background-dark border-2 border-primary flex items-center justify-center text-white text-2xl font-black shadow-[0_0_20px_rgba(212,17,17,0.4)] animate-pulse"
  }, "03"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white font-black text-xl uppercase"
  }, "\u05D0\u05D3\u05E4\u05D8\u05E6\u05D9\u05D4 ", /*#__PURE__*/React.createElement("span", {
    className: "block text-xs font-mono text-accent mt-1"
  }, "ADAPTATION")), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 leading-relaxed"
  }, "\u05D4\u05D2\u05D5\u05E3 \u05D7\u05D5\u05D6\u05E8 \u05D7\u05D6\u05E7 \u05D9\u05D5\u05EA\u05E8, \u05DE\u05D4\u05D9\u05E8 \u05D9\u05D5\u05EA\u05E8 \u05D5\u05E2\u05DE\u05D9\u05D3 \u05D9\u05D5\u05EA\u05E8. \u05DE\u05D5\u05DB\u05DF \u05DC\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D1\u05D0."))))), /*#__PURE__*/React.createElement("section", {
    className: "pt-[84px] pb-24 px-6 bg-[#050505] relative border-t border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "border border-white/10 bg-black/50 backdrop-blur p-10 md:p-16 w-full clip-corner"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6"
  }, "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05DE\u05D5\u05DB\u05DF ", /*#__PURE__*/React.createElement("span", {
    className: "text-primary"
  }, "\u05DC\u05D4\u05EA\u05D7\u05D9\u05D9\u05D1?")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
  }, "\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05D7\u05E4\u05E9\u05D9\u05DD \u05E8\u05E7 \u05D0\u05EA \u05D0\u05DC\u05D5 \u05E9\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3 \u05E7\u05E9\u05D4, \u05DC\u05D4\u05EA\u05DE\u05D9\u05D3 \u05D5\u05DC\u05D0 \u05DC\u05D5\u05D5\u05EA\u05E8 \u05DC\u05E2\u05E6\u05DE\u05DD. \u05DE\u05E7\u05D5\u05DE\u05D5\u05EA \u05DE\u05D5\u05D2\u05D1\u05DC\u05D9\u05DD \u05DC\u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05D4\u05E7\u05E8\u05D5\u05D1\u05D9\u05DD."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-4 justify-center w-full"
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex w-full sm:w-auto min-w-[15rem] cursor-pointer items-center justify-center h-16 px-8 bg-primary text-white text-xl font-black uppercase tracking-wider transition-all hover:bg-white hover:text-primary shadow-[0_0_30px_rgba(212,17,17,0.3)] hover:shadow-[0_0_50px_rgba(212,17,17,0.6)]",
    "aria-label": "\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D1-WhatsApp"
  }, "\u05D4\u05D9\u05E8\u05E9\u05DD \u05DC\u05D0\u05D9\u05DE\u05D5\u05DF \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF"), /*#__PURE__*/React.createElement(Link, {
    to: "/contact",
    className: "flex w-full sm:w-auto min-w-[15rem] cursor-pointer items-center justify-center h-16 px-8 border border-white/20 hover:border-primary hover:bg-white/5 text-white text-xl font-bold uppercase tracking-wider transition-all"
  }, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8 \u05E2\u05DD \u05D4\u05DE\u05D3\u05E8\u05D9\u05DA")))))), /*#__PURE__*/React.createElement(Footer, null));
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
  const allArticlesData = typeof window !== 'undefined' && window.ARTICLES ? window.ARTICLES : [];
  const filteredArticles = activeFilter === "הכל" ? allArticlesData : allArticlesData.filter(a => a.tags && a.tags.includes(activeFilter) || a.category === activeFilter);
  const featuredArticle = filteredArticles[0] || {
    title: '',
    desc: '',
    category: '',
    date: '',
    img: '',
    id: ''
  };
  const sidebarArticles = filteredArticles.slice(1, 3);
  const gridArticles = filteredArticles.slice(3);
  const totalPages = Math.max(1, Math.ceil(gridArticles.length / ARTICLES_PER_PAGE));
  const paginatedGridArticles = gridArticles.slice((currentPage - 1) * ARTICLES_PER_PAGE, currentPage * ARTICLES_PER_PAGE);
  const filterTags = ["הכל", "כושר קרבי", "מנטלי", "תזונה", "גיבושים", "אימונים", "בריאות", "ציוד", "רפואה", "פיקוד", "ראיונות"];
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);
  return /*#__PURE__*/React.createElement("div", {
    className: "relative flex min-h-screen w-full flex-col overflow-hidden bg-background-dark text-white font-body antialiased overflow-x-hidden selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 bg-background-dark relative"
  }, /*#__PURE__*/React.createElement("section", {
    className: "relative px-4 pt-[84px] pb-20 sm:px-6 lg:px-8 flex justify-center border-b border-border-dark bg-[#0a0a0a]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-grid-pattern opacity-10",
    style: {
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-7xl relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[31.25rem] flex flex-col items-center justify-center text-center p-8 gap-10 border border-border-dark group shadow-2xl",
    style: {
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85) 0%, rgba(5, 5, 5, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyWjgBdhLQkVyM6NBO6xzJLXHmNDrATl3odDav6UadmeegZAq8ozZ5ybl_0M7rly5pDLT_ZOK2cFcVB8thfUjXpVVaszoNckCfGd4WytAJdG0kwptQcaY8ryKbl5hrI_QHpVLmeZQ-x7FTypzIKC7IJnV7tnVh9AH6PImErIawPBhfp85P7qtAPJ2OrBpNCuDUAMR7vlPmQTwQufN8kNO9fJa7-qcDJWMjen7CyOZgddyqWpWfRrYl4DuP4_EzCjDcqkYhuInWyhpb")'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl space-y-6 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-[2px] w-8 bg-primary inline-block"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-primary text-xs font-black uppercase tracking-[0.2em]"
  }, "\u05DE\u05E8\u05DB\u05D6 \u05D4\u05DE\u05D9\u05D3\u05E2"), /*#__PURE__*/React.createElement("span", {
    className: "h-[2px] w-8 bg-primary inline-block"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-white text-[3rem] sm:text-4xl md:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter drop-shadow-2xl uppercase px-2"
  }, "\u05D9\u05D3\u05E2 \u05D4\u05D5\u05D0 \u05DB\u05D5\u05D7"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg md:text-xl font-medium text-gray-400 font-body max-w-2xl mx-auto leading-relaxed"
  }, "\u05D4\u05E8\u05DB\u05D1\u05E0\u05D5 \u05D1\u05E9\u05D1\u05D9\u05DC\u05DB\u05DD \u05D0\u05EA \u05DE\u05D0\u05D2\u05E8 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05DE\u05E7\u05D9\u05E3 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05DC\u05D4\u05DB\u05E0\u05D4 \u05DC\u05E6\u05D4\"\u05DC, \u05DB\u05D5\u05E9\u05E8 \u05E7\u05E8\u05D1\u05D9 \u05D5\u05D7\u05D5\u05E1\u05DF \u05DE\u05E0\u05D8\u05DC\u05D9."))))), /*#__PURE__*/React.createElement("section", {
    className: "px-4 py-8 flex justify-center bg-surface-dark border-b border-border-dark sticky top-24 z-40 shadow-xl backdrop-blur-sm bg-surface-dark/90"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-7xl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-3 items-center justify-center md:justify-start"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-gray-500 uppercase tracking-widest ml-4 hidden md:flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-sm"
  }, "filter_list"), " \u05E1\u05D9\u05E0\u05D5\u05DF:"), filterTags.map(filter => /*#__PURE__*/React.createElement("button", {
    key: filter,
    onClick: () => setActiveFilter(filter),
    className: `group flex h-10 items-center justify-center px-6 text-sm font-bold uppercase tracking-wider border transition-all ${activeFilter === filter ? "bg-primary text-white border-primary shadow-glow hover:bg-primary-hover" : "bg-transparent border-gray-800 text-gray-400 hover:border-primary hover:text-white hover:bg-white/5"}`
  }, filter))))), filteredArticles.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "px-4 pt-[84px] pb-16 flex justify-center bg-background-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-7xl flex flex-col gap-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end justify-between border-b border-border-dark pb-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-primary mr-2 text-6xl leading-none"
  }, "///"), "\u05DE\u05D5\u05DE\u05DC\u05E6\u05D9\u05DD"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-12 gap-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-8 group relative bg-surface-light border border-border-dark hover:border-primary transition-all duration-300 shadow-2xl flex flex-col overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 z-20 bg-primary text-white text-xs font-black uppercase px-4 py-2 tracking-wider shadow-lg clip-path-badge"
  }, "\u05D7\u05DD \u05D4\u05E9\u05D1\u05D5\u05E2"), /*#__PURE__*/React.createElement("div", {
    className: "aspect-[16/9] md:aspect-video w-full bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 flex-shrink-0 relative",
    style: {
      backgroundImage: `url('${featuredArticle.img}')`
    },
    role: "img",
    "aria-label": featuredArticle.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity md:block hidden"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full p-6 md:absolute md:bottom-0 md:left-0 md:p-10 z-10 md:bg-gradient-to-t md:from-black/90 md:via-black/50 md:to-transparent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3 opacity-80"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-accent text-black text-[0.625rem] font-black uppercase px-2 py-0.5 tracking-wider"
  }, featuredArticle.category), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-300 text-xs font-mono"
  }, featuredArticle.date)), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-2xl sm:text-3xl md:text-5xl font-black text-white mb-4 uppercase leading-[0.9] group-hover:text-primary transition-colors whitespace-pre-line"
  }, featuredArticle.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-sm md:text-lg mb-6 md:mb-8 max-w-2xl border-r-4 border-primary pr-4 bg-black/30 p-2 backdrop-blur-sm line-clamp-3 md:line-clamp-none"
  }, featuredArticle.desc), /*#__PURE__*/React.createElement(Link, {
    to: `/articles/${featuredArticle.id}`,
    className: "inline-flex items-center gap-3 text-sm font-bold text-white bg-white/10 hover:bg-primary border border-white/20 hover:border-primary px-6 py-3 uppercase tracking-wider transition-all duration-300",
    "aria-label": `קרא את המאמר המלא: ${featuredArticle.title}`
  }, "\u05E7\u05E8\u05D0 \u05D0\u05EA \u05D4\u05DE\u05D0\u05DE\u05E8 \u05D4\u05DE\u05DC\u05D0", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg rotate-180"
  }, "arrow_back"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30 group-hover:border-primary transition-colors hidden md:block"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30 group-hover:border-primary transition-colors hidden md:block"
  })), /*#__PURE__*/React.createElement("div", {
    className: "md:col-span-4 flex flex-col gap-6"
  }, sidebarArticles.map((article, i) => /*#__PURE__*/React.createElement(Link, {
    key: article.id,
    to: `/articles/${article.id}`,
    className: "group relative flex flex-col h-full bg-surface-light border border-border-dark hover:border-accent transition-all duration-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-48 w-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 relative",
    style: {
      backgroundImage: `url('${article.img}')`
    },
    role: "img",
    "aria-label": article.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/50 group-hover:bg-transparent transition-all"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-3 right-3 bg-black/80 px-2 py-1 text-[0.625rem] font-bold text-accent uppercase border border-accent/30"
  }, article.category)), /*#__PURE__*/React.createElement("div", {
    className: "p-6 flex flex-col justify-between flex-1 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    className: "font-display text-xl font-black text-white group-hover:text-accent transition-colors leading-tight mb-2"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-500 line-clamp-2"
  }, article.desc)), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 flex justify-between items-center border-t border-gray-800 pt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-gray-500"
  }, article.readTime || article.date), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-accent text-sm rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
  }, "arrow_right_alt"))))))))), /*#__PURE__*/React.createElement("section", {
    className: "px-4 pt-[84px] pb-16 flex justify-center bg-[#050505] relative border-t border-border-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-7xl relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center justify-between mb-10 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-10 w-2 bg-primary"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-display text-3xl font-black text-white uppercase tracking-wide"
  }, "\u05DB\u05DC \u05D4\u05DE\u05D0\u05DE\u05E8\u05D9\u05DD")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gray-500 text-sm font-mono"
  }, "\u05DE\u05E6\u05D9\u05D2 ", gridArticles.length === 0 ? '0' : (currentPage - 1) * ARTICLES_PER_PAGE + 1, "-", Math.min(currentPage * ARTICLES_PER_PAGE, gridArticles.length), " \u05DE\u05EA\u05D5\u05DA ", gridArticles.length), totalPages > 1 && /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center gap-2",
    "aria-label": "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D1\u05D9\u05DF \u05D3\u05E4\u05D9\u05DD"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCurrentPage(p => Math.max(1, p - 1)),
    disabled: currentPage <= 1,
    className: "p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded",
    "aria-label": "\u05D4\u05D3\u05E3 \u05D4\u05E7\u05D5\u05D3\u05DD"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl"
  }, "chevron_right")), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 text-sm font-mono min-w-[4rem] text-center"
  }, currentPage, " / ", totalPages), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCurrentPage(p => Math.min(totalPages, p + 1)),
    disabled: currentPage >= totalPages,
    className: "p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded",
    "aria-label": "\u05D4\u05D3\u05E3 \u05D4\u05D1\u05D0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl rotate-180"
  }, "chevron_right"))))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
  }, paginatedGridArticles.map(article => /*#__PURE__*/React.createElement(Link, {
    key: article.id,
    to: `/articles/${article.id}`,
    className: "group flex flex-col bg-surface-dark border border-border-dark hover:border-gray-500 transition-all duration-200 hover:-translate-y-1",
    "aria-label": `קרא עוד על: ${article.title}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative h-52 sm:h-60 overflow-hidden border-b border-border-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0",
    style: {
      backgroundImage: `url('${article.img}')`
    },
    role: "img",
    "aria-label": article.title
  }), /*#__PURE__*/React.createElement("div", {
    className: `absolute top-0 right-0 px-3 py-1 text-xs font-bold text-white shadow-md z-10 ${article.category === "כושר קרבי" || article.category === "אימונים" ? "bg-primary" : "bg-black border border-gray-700"}`
  }, article.category), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-1 flex-col p-4 sm:p-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-display text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight mb-2 sm:mb-3"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-gray-400 leading-relaxed line-clamp-3 mb-3 sm:mb-4"
  }, article.desc), /*#__PURE__*/React.createElement("div", {
    className: "mt-auto pt-3 sm:pt-4 border-t border-dashed border-gray-800 flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-gray-500"
  }, article.date), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold text-primary uppercase tracking-widest group-hover:underline",
    "aria-hidden": "true"
  }, "\u05E7\u05E8\u05D0 \u05E2\u05D5\u05D3")))))), totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center mt-10 sm:mt-12"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center gap-2 sm:gap-3",
    "aria-label": "\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D1\u05D9\u05DF \u05D3\u05E4\u05D9\u05DD (\u05EA\u05D7\u05EA\u05D5\u05DF)"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCurrentPage(p => Math.max(1, p - 1)),
    disabled: currentPage <= 1,
    className: "p-3 sm:p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded",
    "aria-label": "\u05D4\u05D3\u05E3 \u05D4\u05E7\u05D5\u05D3\u05DD"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl sm:text-xl"
  }, "chevron_right")), /*#__PURE__*/React.createElement("span", {
    className: "text-gray-400 text-sm font-mono px-2 sm:min-w-[4rem] text-center"
  }, currentPage, " / ", totalPages), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setCurrentPage(p => Math.min(totalPages, p + 1)),
    disabled: currentPage >= totalPages,
    className: "p-3 sm:p-2 border border-border-dark bg-surface-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:bg-white/5 transition-all rounded",
    "aria-label": "\u05D4\u05D3\u05E3 \u05D4\u05D1\u05D0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl sm:text-xl rotate-180"
  }, "chevron_right")))), filteredArticles.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "text-center text-gray-500 py-12"
  }, "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D6\u05D5."))), /*#__PURE__*/React.createElement("section", {
    className: "border-t-4 border-primary bg-black pt-[84px] pb-24 px-4 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-primary/10 to-transparent clip-path-slant"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMzMzMiLz48L3N2Zz4=')] opacity-20"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-4xl text-center relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inline-block border border-primary/50 bg-primary/10 px-4 py-1 mb-6 text-primary text-xs font-bold uppercase tracking-widest"
  }, "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05DC\u05E7\u05D4\u05D9\u05DC\u05D4"), /*#__PURE__*/React.createElement("h2", {
    className: "font-display text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
  }, "\u05D4\u05E6\u05D8\u05E8\u05E3 ", /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500"
  }, "\u05DC\u05E7\u05D4\u05D9\u05DC\u05D4")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed"
  }, "\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D4\u05D7\u05D3\u05E9\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05D2\u05D9\u05D1\u05D5\u05E9\u05D9\u05DD \u05D5\u05E2\u05D3\u05DB\u05D5\u05E0\u05D9\u05DD \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA. \u05D1\u05DC\u05D9 \u05D1\u05D5\u05DC\u05E9\u05D9\u05D8."), /*#__PURE__*/React.createElement("form", {
    className: "flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-white/20 p-1 bg-surface-dark",
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "newsletter-email",
    className: "sr-only"
  }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC"), /*#__PURE__*/React.createElement("input", {
    className: "flex-1 bg-transparent px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-lg font-medium",
    placeholder: "\u05D4\u05DB\u05E0\u05E1 \u05D0\u05EA \u05D4\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA...",
    type: "email",
    id: "newsletter-email"
  }), /*#__PURE__*/React.createElement("button", {
    className: "bg-primary hover:bg-white hover:text-black text-white font-black py-4 px-10 uppercase tracking-widest transition-colors whitespace-nowrap my-1 mx-1 sm:my-0 sm:mx-0"
  }, "\u05D0\u05E0\u05D9 \u05D1\u05E4\u05E0\u05D9\u05DD")), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-xs mt-6 uppercase tracking-widest font-mono"
  }, "\u05DE\u05D1\u05D8\u05D9\u05D7\u05D9\u05DD \u05DC\u05D0 \u05DC\u05D4\u05E1\u05E4\u05D9\u05DD. \u05E8\u05E7 \u05EA\u05D5\u05DB\u05DF \u05D0\u05D9\u05DB\u05D5\u05EA\u05D9.")))), /*#__PURE__*/React.createElement(Footer, null));
};

/**
 * ArticleDetailPage Component
 * Single article page with placeholder content. Content will be refined later.
 */
const ArticleDetailPage = () => {
  const {
    id
  } = useParams();
  const articles = typeof window !== 'undefined' && window.ARTICLES ? window.ARTICLES : [];
  const article = articles.find(a => a.id === id);
  if (!article) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-background-dark text-white min-h-screen flex flex-col"
    }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
      id: "main-content",
      className: "flex-1 flex items-center justify-center px-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "text-2xl font-black mb-4"
    }, "\u05DE\u05D0\u05DE\u05E8 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"), /*#__PURE__*/React.createElement(Link, {
      to: "/articles",
      className: "text-primary font-bold hover:underline"
    }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D1\u05DC\u05D5\u05D2"))), /*#__PURE__*/React.createElement(Footer, null));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("article", {
    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/articles",
    className: "inline-flex items-center gap-2 text-gray-400 hover:text-primary text-sm font-bold uppercase tracking-wider mb-8"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-lg rotate-180"
  }, "arrow_back"), "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D1\u05DC\u05D5\u05D2"), /*#__PURE__*/React.createElement("header", {
    className: "mb-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "bg-primary/20 text-primary text-xs font-black uppercase px-3 py-1 border border-primary/50"
  }, article.category), (article.tags || []).filter(t => t !== article.category).slice(0, 3).map(tag => /*#__PURE__*/React.createElement("span", {
    key: tag,
    className: "bg-white/5 text-gray-400 text-xs font-bold uppercase px-3 py-1 border border-white/10"
  }, tag))), /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter whitespace-pre-line"
  }, article.title), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-500 text-sm font-mono mt-4"
  }, article.date)), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full aspect-video bg-black border border-white/10 mb-12",
    style: {
      backgroundImage: `url('${article.img}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    role: "img",
    "aria-label": article.title
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose prose-invert max-w-none"
  }, article.body ? /*#__PURE__*/React.createElement("div", {
    className: "article-body",
    dangerouslySetInnerHTML: {
      __html: article.body
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 text-lg leading-relaxed mb-6"
  }, article.desc), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-relaxed"
  }, "\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05D0\u05DE\u05E8 \u05D9\u05D5\u05E4\u05D9\u05E2 \u05DB\u05D0\u05DF. \u05D6\u05D4\u05D5 \u05D8\u05E7\u05E1\u05D8 placeholder \u05E9\u05D9\u05D5\u05D7\u05DC\u05E3 \u05D1\u05EA\u05D5\u05DB\u05DF \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF \u05D1\u05D4\u05DE\u05E9\u05DA."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 leading-relaxed mt-4"
  }, "\u05DC\u05D5\u05E8\u05DD \u05D0\u05D9\u05E4\u05E1\u05D5\u05DD \u05D3\u05D5\u05DC\u05D5\u05E8 \u05E1\u05D9\u05D8 \u05D0\u05DE\u05D8, \u05E7\u05D5\u05E0\u05E1\u05E7\u05D8\u05D5\u05E8\u05E8 \u05D0\u05D3\u05D9\u05E4\u05D9\u05E1\u05D9\u05E0\u05D2 \u05D0\u05DC\u05D9\u05EA \u05E7\u05D5\u05DC\u05D4\u05E2 \u05E6\u05D5\u05E4\u05E2\u05D8 \u05DC\u05DE\u05E8\u05E7\u05D5\u05D7 \u05D0\u05D9\u05D1\u05DF \u05D0\u05D9\u05E3, \u05D1\u05E8\u05D5\u05DE\u05E5 \u05DB\u05DC\u05E8\u05E9\u05D8 \u05DE\u05D9\u05D7\u05D5\u05E6\u05D9\u05DD. \u05E7\u05DC\u05D0\u05E6\u05D9 \u05E1\u05D7\u05D8\u05D9\u05E8 \u05D1\u05D5\u05D1\u05D8 \u05DC\u05DE\u05E8\u05D3\u05E3 \u05D0\u05D5 \u05E4\u05DC\u05D9\u05D2 \u05DC\u05DE\u05E0\u05E6\u05E3 \u05DE\u05D7\u05D8\u05E3. \u05D2\u05D5\u05DC\u05E8 \u05DE\u05D5\u05E0\u05E4\u05E8\u05E8 \u05E1\u05D5\u05D1\u05E8\u05D8 \u05DC\u05D5\u05E8\u05DD \u05E9\u05D1\u05E6\u05E7 \u05D9\u05D4\u05D5\u05DC, \u05DC\u05DB\u05E0\u05D5\u05E5 \u05D1\u05E2\u05E8\u05D9\u05E8 \u05D2\u05E7 \u05DC\u05D9\u05E5, \u05D5\u05E9\u05D1\u05E2\u05D2\u05D8 \u05DC\u05D9\u05D1\u05DD \u05E1\u05D5\u05DC\u05D2\u05E7. \u05E0\u05D5\u05DC\u05D5\u05DD \u05D0\u05E8\u05D5\u05D5\u05E1 \u05E1\u05D0\u05E4\u05D9\u05D0\u05DF - \u05E4\u05D5\u05E1\u05D9\u05DC\u05D9\u05E1 \u05E7\u05D5\u05D5\u05D9\u05E1, \u05D0\u05E7\u05D5\u05D5\u05D6\u05DE\u05DF \u05E7\u05D5\u05D5\u05D0\u05D6\u05D9 \u05D1\u05DE\u05E8 \u05DE\u05D5\u05D3\u05D5\u05E3."))))), /*#__PURE__*/React.createElement(Footer, null));
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
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-accent selection:text-black"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-grow relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0 h-[40vh] lg:h-full w-full overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/90 to-[#080808] lg:bg-gradient-to-r lg:from-[#080808] lg:via-[#080808]/95 lg:to-transparent z-10"
  }), /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    alt: "",
    role: "presentation",
    className: "h-full w-full object-cover object-center grayscale contrast-125 brightness-50",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL7Whoyd_df4TMczDa9-X3GpviE5Kbc0USVxdiLU-MAkgQ9eL37mZqMINILoa8gdPrJdN4wLxsktihZ65niH1aim4BA3YRC9SJ-tywrRn4CKZ3m2BOC1MBZtT76lJgErlmpWwE3mUj-2f-Zh4ycInVRT1z5t4tmI48Regn_AuPuYdqeDV9-2Us8MG0K3Rd09lx7ukQG9qfU3qdoXBFFuLSy1bjKQbAOONq5gwC2ypIceieSd_XE04WiAtcD7-pt7doovlKqpDHdzUR"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-20 mx-auto max-w-7xl px-4 pt-[84px] pb-12 sm:px-6 lg:px-8 lg:pb-20 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center order-2 lg:order-1 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-10 relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block bg-primary px-2 py-1 text-xs font-black text-black uppercase tracking-wider transform -skew-x-12"
  }, "\u05E2\u05E8\u05D5\u05E5 \u05EA\u05E7\u05E9\u05D5\u05E8\u05EA \u05D9\u05E9\u05D9\u05E8"), /*#__PURE__*/React.createElement("span", {
    className: "h-px w-12 bg-gray-700"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl mb-4"
  }, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD ", /*#__PURE__*/React.createElement("span", {
    className: "text-transparent bg-clip-text bg-gradient-to-l from-primary to-red-600"
  }, "\u05DC\u05E7\u05E8\u05D1?")), /*#__PURE__*/React.createElement("p", {
    className: "mt-4 text-lg text-gray-400 max-w-lg border-r-2 border-gray-800 pr-4 leading-relaxed"
  }, "\u05D0\u05D9\u05DF \u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05D9\u05E8\u05D5\u05E6\u05D9\u05DD. \u05D0\u05DD \u05D0\u05EA\u05DD \u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05D4\u05D2\u05D9\u05E2 \u05DC\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05D4\u05DE\u05D5\u05D1\u05D7\u05E8\u05D5\u05EA, \u05D4\u05DE\u05E1\u05E2 \u05DE\u05EA\u05D7\u05D9\u05DC \u05DB\u05D0\u05DF \u05D5\u05E2\u05DB\u05E9\u05D9\u05D5. \u05DE\u05DC\u05D0\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD - \u05D0\u05E0\u05D7\u05E0\u05D5 \u05E0\u05D3\u05D0\u05D2 \u05DC\u05E9\u05D0\u05E8.")), /*#__PURE__*/React.createElement("form", {
    action: "https://formspree.io/f/mbdakgkv",
    method: "POST",
    className: "space-y-6 bg-[#0a0a0a] p-4 sm:p-6 md:p-8 border border-white/10 relative overflow-hidden group shadow-2xl shadow-black/50 min-w-0"
  }, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "_subject",
    value: "[\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 - \u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8] \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D7\u05D3\u05E9\u05D4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 sm:grid-cols-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 group/input"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors",
    htmlFor: "name"
  }, "\u05E9\u05DD \u05DE\u05DC\u05D0"), /*#__PURE__*/React.createElement("input", {
    name: "name",
    className: "w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none",
    id: "name",
    placeholder: "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9",
    type: "text",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 group/input"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors",
    htmlFor: "phone"
  }, "\u05D8\u05DC\u05E4\u05D5\u05DF \u05E0\u05D9\u05D9\u05D3"), /*#__PURE__*/React.createElement("input", {
    name: "phone",
    className: "w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none",
    id: "phone",
    placeholder: "05X-XXXXXXX",
    type: "tel",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 group/input"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors",
    htmlFor: "email"
  }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), /*#__PURE__*/React.createElement("input", {
    name: "email",
    className: "w-full bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none",
    id: "email",
    placeholder: "your@email.com",
    type: "email",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 group/input"
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-xs font-bold text-gray-500 uppercase tracking-widest group-focus-within/input:text-primary transition-colors",
    htmlFor: "message"
  }, "\u05DE\u05D8\u05E8\u05D4 / \u05D9\u05D7\u05D9\u05D3\u05D4 \u05DE\u05D5\u05E2\u05D3\u05E4\u05EA"), /*#__PURE__*/React.createElement("textarea", {
    name: "message",
    className: "w-full resize-none bg-black border border-white/10 px-4 py-4 text-white font-medium focus:border-accent focus:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all placeholder-gray-500 rounded-none h-32",
    id: "message",
    placeholder: "\u05DE\u05D8\u05DB\u05F4\u05DC, \u05E9\u05D9\u05D9\u05D8\u05EA, \u05E9\u05DC\u05D3\u05D2..."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "relative w-full bg-white/5 border border-primary/50 py-5 font-black text-white hover:bg-primary transition-all duration-300 group overflow-hidden uppercase tracking-widest text-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 w-1 bg-primary transition-all duration-300 group-hover:w-full opacity-20"
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative z-10 flex items-center justify-center gap-3"
  }, "\u05E9\u05D2\u05E8 \u05E4\u05E8\u05D8\u05D9\u05DD", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined font-bold group-hover:translate-x-[-4px] transition-transform"
  }, "east"))))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-8 lg:pt-16 order-1 lg:order-2 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1"
  }, [{
    icon: "call",
    title: "טלפון לשאלות",
    value: "052-796-0293",
    desc: "זמינים 24/7"
  }, {
    icon: "alternate_email",
    title: "דוא״ל",
    value: "Maharmilhama212@gmail.com",
    desc: "מענה תוך 24 שעות"
  }].map((contact, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "group relative bg-[#0a0a0a] border border-white/5 p-6 transition-all hover:border-primary/50 hover:bg-[#0f0f0f]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-colors skew-x-[-10deg] flex-shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-2xl skew-x-[10deg]"
  }, contact.icon)), /*#__PURE__*/React.createElement("div", {
    className: "text-center sm:text-right min-w-0 w-full sm:w-auto"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-bold text-gray-500 uppercase tracking-widest mb-1"
  }, contact.title), /*#__PURE__*/React.createElement("p", {
    className: "text-2xl font-black text-white dir-ltr tracking-tight hover:text-primary transition-colors cursor-pointer break-all sm:break-normal"
  }, contact.value), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-gray-500 mt-1"
  }, contact.desc)))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-dark border border-white/10 p-8 text-center relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto mb-6 flex size-14 items-center justify-center bg-transparent border-2 border-primary text-primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl"
  }, "chat_error")), /*#__PURE__*/React.createElement("h3", {
    className: "mb-2 text-xl font-black text-white uppercase tracking-tight font-display"
  }, "\u05E2\u05D3\u05D9\u05D9\u05DF \u05DE\u05EA\u05DC\u05D1\u05D8\u05D9\u05DD?"), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 text-sm text-gray-400 font-body"
  }, "\u05D4\u05DE\u05E4\u05E7\u05D3\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4. ", /*#__PURE__*/React.createElement("br", null), "\u05D0\u05DC \u05EA\u05D1\u05D6\u05D1\u05D6\u05D5 \u05D6\u05DE\u05DF \u05D9\u05E7\u05E8 \u05E2\u05DC \u05E1\u05E4\u05E7\u05D5\u05EA."), /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] px-4 py-4 text-black transition-all font-black uppercase shadow-[0_0_10px_rgba(37,211,102,0.3)] font-display"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4"))))))), /*#__PURE__*/React.createElement(Footer, null));
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
  const toggleItem = index => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body antialiased selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("div", {
    className: "relative w-full border-b border-white/10",
    style: {
      backgroundImage: 'linear-gradient(to bottom, rgba(5, 5, 5, 0.85) 0%, rgba(5, 5, 5, 1) 100%), url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBkbROdnGxA99vj_P9zqRaDpvxP4IVSNxZKG1kgjDNgKjmOxWXaAS6P0wuX0v4RINj7L7303_XXv6iQkIDq9Ihc6vyUbd2MY7rqzw5M7eSAJ3gFnu3Swm_5XqFThh5YzKQCrFg9p_XB18-17ehi972qEqj1vxBKcFzk2oF2CqF_BV0F_Q-Qg1oMb7B7VCU3wXBfwGpENEaNoksjKPvM--Mh6ocFNPbipv4_-nblRWzfk0UX4pqbWd4pSCLBkOpEYpqa30tGLPzB3kyp\'); background-size: cover; background-position: center;'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-[url(\\'https://www.transparenttextures.com/patterns/carbon-fibre.png\\')] opacity-20"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center sm:text-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl md:text-7xl font-black tracking-tight text-white mb-6 uppercase drop-shadow-lg font-display"
  }, "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", {
    className: "text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl border-r-4 border-primary pr-6 font-body"
  }, "\u05D9\u05E9 \u05E1\u05E4\u05E7\u05D5\u05EA? \u05DB\u05D0\u05DF \u05DE\u05D7\u05E1\u05DC\u05D9\u05DD \u05D0\u05D5\u05EA\u05DD. \u05DB\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05E6\u05E8\u05D9\u05DA \u05DC\u05E4\u05E0\u05D9 \u05E9\u05D9\u05D5\u05E6\u05D0\u05D9\u05DD \u05DC\u05DE\u05E1\u05E2 \u05E9\u05D9\u05E9\u05E0\u05D4 \u05DC\u05DB\u05DD \u05D0\u05EA \u05D4\u05D7\u05D9\u05D9\u05DD. ", /*#__PURE__*/React.createElement("span", {
    className: "text-white font-bold"
  }, "\u05D1\u05DC\u05D9 \u05E1\u05D9\u05E4\u05D5\u05E8\u05D9\u05DD, \u05D1\u05DC\u05D9 \u05EA\u05D9\u05E8\u05D5\u05E6\u05D9\u05DD."))))), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 pb-20 pt-[84px] relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-12 gap-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-8 flex flex-col gap-4 text-right"
  }, (typeof window !== 'undefined' && window.FAQS ? window.FAQS : []).map((faq, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `bg-surface-card border border-white/5 ${openIndex === i ? 'border-primary/50 bg-surface-dark' : ''} transition-all duration-300 overflow-hidden`
  }, /*#__PURE__*/React.createElement("button", {
    className: "flex w-full cursor-pointer items-center justify-between gap-4 p-6 hover:bg-white/5 select-none text-right",
    onClick: () => toggleItem(i),
    "aria-expanded": openIndex === i,
    "aria-controls": `faq-panel-${i}`,
    id: `faq-button-${i}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: `text-primary font-mono text-sm font-bold ${openIndex === i ? 'opacity-100' : 'opacity-50'}`
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-white transition-colors font-display"
  }, faq.q)), /*#__PURE__*/React.createElement("span", {
    className: `material-symbols-outlined text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-primary' : ''}`,
    "aria-hidden": "true"
  }, "expand_more")), openIndex === i && /*#__PURE__*/React.createElement("div", {
    id: `faq-panel-${i}`,
    role: "region",
    "aria-labelledby": `faq-button-${i}`,
    className: "px-6 pb-6 pr-12 border-t border-white/5 pt-4 text-right"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-gray-300 leading-relaxed font-body text-right"
  }, faq.a))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-4 space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-surface-dark border border-white/10 p-8 text-center relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-auto mb-6 flex size-14 items-center justify-center bg-transparent border-2 border-primary text-primary"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-3xl"
  }, "chat_error")), /*#__PURE__*/React.createElement("h3", {
    className: "mb-2 text-xl font-black text-white uppercase tracking-tight font-display"
  }, "\u05E2\u05D3\u05D9\u05D9\u05DF \u05DE\u05EA\u05DC\u05D1\u05D8\u05D9\u05DD?"), /*#__PURE__*/React.createElement("p", {
    className: "mb-8 text-sm text-gray-400 font-body"
  }, "\u05D4\u05DE\u05E4\u05E7\u05D3\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5 \u05D6\u05DE\u05D9\u05E0\u05D9\u05DD \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4. ", /*#__PURE__*/React.createElement("br", null), "\u05D0\u05DC \u05EA\u05D1\u05D6\u05D1\u05D6\u05D5 \u05D6\u05DE\u05DF \u05D9\u05E7\u05E8 \u05E2\u05DC \u05E1\u05E4\u05E7\u05D5\u05EA."), /*#__PURE__*/React.createElement("a", {
    href: typeof window !== 'undefined' && window.SITE_CONFIG && window.SITE_CONFIG.contact.whatsapp || '#',
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex w-full items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] px-4 py-4 text-black transition-all font-black uppercase shadow-[0_0_10px_rgba(37,211,102,0.3)] font-display"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "\u05D3\u05D1\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4")))))), /*#__PURE__*/React.createElement(Footer, null));
};

/**
 * TermsPage Component
 * תקנון ותנאי שימוש לאתר
 */
const TermsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8"
  }, "\u05EA\u05E7\u05E0\u05D5\u05DF \u05D5\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm mb-10"
  }, "\u05E2\u05D3\u05DB\u05D5\u05DF \u05D0\u05D7\u05E8\u05D5\u05DF: \u05D9\u05E0\u05D5\u05D0\u05E8 2026"), /*#__PURE__*/React.createElement("div", {
    className: "prose-dark space-y-8 text-gray-300 text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "1. \u05DB\u05DC\u05DC\u05D9"), /*#__PURE__*/React.createElement("p", null, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D0\u05EA\u05E8 \"\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4\" (\u05DC\u05D4\u05DC\u05DF \"\u05D4\u05D0\u05EA\u05E8\"). \u05D4\u05D0\u05EA\u05E8 \u05DE\u05D5\u05E4\u05E2\u05DC \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4 \u05DB\u05D5\u05E9\u05E8 \u05E7\u05E8\u05D1\u05D9 (\u05DC\u05D4\u05DC\u05DF \"\u05D4\u05D7\u05D1\u05E8\u05D4\" \u05D0\u05D5 \"\u05D0\u05E0\u05D7\u05E0\u05D5\"). \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD \u05D4\u05DE\u05E4\u05D5\u05E8\u05D8\u05D9\u05DD \u05D1\u05EA\u05E7\u05E0\u05D5\u05DF \u05D6\u05D4. \u05D0\u05DD \u05D0\u05D9\u05E0\u05DA \u05DE\u05E1\u05DB\u05D9\u05DD \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD \u05D0\u05DC\u05D4, \u05D0\u05E0\u05D0 \u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8."), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05E0\u05D5\u05E1\u05D7 \u05D1\u05DC\u05E9\u05D5\u05DF \u05D6\u05DB\u05E8 \u05DE\u05D8\u05E2\u05DE\u05D9 \u05E0\u05D5\u05D7\u05D5\u05EA \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DE\u05EA\u05D9\u05D9\u05D7\u05E1 \u05DC\u05DB\u05DC \u05D4\u05DE\u05D2\u05D3\u05E8\u05D9\u05DD.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "2. \u05DE\u05D4\u05D5\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D5\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D0\u05EA\u05E8 \u05DE\u05E1\u05E4\u05E7 \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05DB\u05E0\u05D4 \u05E4\u05D9\u05D6\u05D9\u05EA \u05D5\u05DE\u05E0\u05D8\u05DC\u05D9\u05EA \u05DC\u05E7\u05E8\u05D0\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA \u05E6\u05D1\u05D0\u05D9, \u05D2\u05D9\u05D1\u05D5\u05E9\u05D9\u05DD \u05D5\u05D9\u05D7\u05D9\u05D3\u05D5\u05EA \u05DE\u05D5\u05D1\u05D7\u05E8\u05D5\u05EA \u05D1\u05E6\u05D4\"\u05DC. \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05DB\u05D5\u05DC\u05DC\u05D9\u05DD \u05D1\u05D9\u05DF \u05D4\u05D9\u05EA\u05E8: \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05D5\u05EA \u05D0\u05D9\u05DE\u05D5\u05DF, \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD, \u05D5\u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05DC\u05E7\u05D1\u05DC\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD."), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05DE\u05D9\u05D3\u05E2 \u05D1\u05D0\u05EA\u05E8 \u05D4\u05D9\u05E0\u05D5 \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05DE\u05D9\u05D3\u05E2 \u05DB\u05DC\u05DC\u05D9 \u05D1\u05DC\u05D1\u05D3 \u05D5\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D9\u05D9\u05E2\u05D5\u05E5 \u05E8\u05E4\u05D5\u05D0\u05D9, \u05E1\u05E4\u05D5\u05E8\u05D8\u05D9\u05D1\u05D9 \u05D0\u05D5 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05DE\u05D5\u05EA\u05D0\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA. \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D4\u05EA\u05D9\u05D9\u05E2\u05E5 \u05E2\u05DD \u05E8\u05D5\u05E4\u05D0 \u05DC\u05E4\u05E0\u05D9 \u05EA\u05D7\u05D9\u05DC\u05EA \u05DB\u05DC \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D0\u05D9\u05DE\u05D5\u05E0\u05D9\u05DD.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "3. \u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D5\u05EA\u05E8 \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05DE\u05D2\u05D9\u05DC 16 \u05D5\u05DE\u05E2\u05DC\u05D4. \u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05EA\u05D7\u05EA \u05DC\u05D2\u05D9\u05DC 16 \u05E8\u05E9\u05D0\u05D9 \u05DC\u05D2\u05DC\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05E8\u05E7 \u05D1\u05D4\u05E1\u05DB\u05DE\u05EA \u05D4\u05D5\u05E8\u05D4 \u05D0\u05D5 \u05D0\u05E4\u05D5\u05D8\u05E8\u05D5\u05E4\u05D5\u05E1."), /*#__PURE__*/React.createElement("li", null, "\u05D0\u05D9\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05D1\u05DC\u05EA\u05D9 \u05D7\u05D5\u05E7\u05D9\u05D5\u05EA \u05D0\u05D5 \u05E9\u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05E4\u05D2\u05D5\u05E2 \u05D1\u05D0\u05EA\u05E8, \u05D1\u05EA\u05DB\u05E0\u05D9\u05D5 \u05D0\u05D5 \u05D1\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D0\u05D7\u05E8\u05D9\u05DD."), /*#__PURE__*/React.createElement("li", null, "\u05D0\u05D9\u05DF \u05DC\u05D4\u05E2\u05EA\u05D9\u05E7, \u05DC\u05E9\u05DB\u05E4\u05DC, \u05DC\u05D4\u05E4\u05D9\u05E5 \u05D0\u05D5 \u05DC\u05E4\u05E8\u05E1\u05DD \u05EA\u05D5\u05DB\u05DF \u05DE\u05D4\u05D0\u05EA\u05E8 \u05DC\u05DC\u05D0 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D1\u05DB\u05EA\u05D1 \u05DE\u05D4\u05D7\u05D1\u05E8\u05D4."), /*#__PURE__*/React.createElement("li", null, "\u05D0\u05D9\u05DF \u05DC\u05D1\u05E6\u05E2 \u05E4\u05E2\u05D5\u05DC\u05D5\u05EA \u05D4\u05E2\u05DC\u05D5\u05DC\u05D5\u05EA \u05DC\u05E9\u05D1\u05E9 \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D0\u05D5 \u05DC\u05D4\u05E2\u05DE\u05D9\u05E1 \u05E2\u05DC \u05D4\u05E9\u05E8\u05EA\u05D9\u05DD."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "4. \u05E7\u05E0\u05D9\u05D9\u05DF \u05E8\u05D5\u05D7\u05E0\u05D9"), /*#__PURE__*/React.createElement("p", null, "\u05DB\u05DC \u05D4\u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8, \u05DC\u05E8\u05D1\u05D5\u05EA \u05D8\u05E7\u05E1\u05D8\u05D9\u05DD, \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, \u05E2\u05D9\u05E6\u05D5\u05D1\u05D9\u05DD, \u05DC\u05D5\u05D2\u05D5\u05D0\u05D9\u05DD, \u05E1\u05D9\u05DE\u05E0\u05D9 \u05DE\u05E1\u05D7\u05E8, \u05E1\u05E8\u05D8\u05D5\u05E0\u05D9\u05DD \u05D5\u05DB\u05DC \u05D7\u05D5\u05DE\u05E8 \u05D0\u05D7\u05E8 \u05D4\u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DD \u05E7\u05E0\u05D9\u05D9\u05E0\u05D4 \u05D4\u05D1\u05DC\u05E2\u05D3\u05D9 \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05D5 \u05E9\u05DC \u05E6\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05DD \u05E9\u05E0\u05EA\u05E0\u05D5 \u05D4\u05E8\u05E9\u05D0\u05D4 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05DD, \u05D5\u05DE\u05D5\u05D2\u05E0\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D7\u05D5\u05E7\u05D9 \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05D9\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05E7\u05E0\u05D9\u05D9\u05DF \u05E8\u05D5\u05D7\u05E0\u05D9."), /*#__PURE__*/React.createElement("p", null, "\u05D0\u05D9\u05DF \u05DC\u05E2\u05E9\u05D5\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E7\u05E0\u05D9\u05D9\u05DF \u05D4\u05E8\u05D5\u05D7\u05E0\u05D9 \u05D1\u05D0\u05EA\u05E8 \u05DC\u05DC\u05D0 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D1\u05DB\u05EA\u05D1 \u05DE\u05D4\u05D7\u05D1\u05E8\u05D4.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "5. \u05D4\u05D2\u05D1\u05DC\u05EA \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D4\u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8, \u05DC\u05E8\u05D1\u05D5\u05EA \u05DE\u05D0\u05DE\u05E8\u05D9\u05DD \u05D5\u05D8\u05D9\u05E4\u05D9\u05DD, \u05DE\u05D5\u05D2\u05E9\u05D9\u05DD \"\u05DB\u05DE\u05D5\u05EA \u05E9\u05D4\u05DD\" (AS IS) \u05D5\u05D0\u05D9\u05E0\u05DD \u05DE\u05D4\u05D5\u05D5\u05D9\u05DD \u05EA\u05D7\u05DC\u05D9\u05E3 \u05DC\u05D9\u05D9\u05E2\u05D5\u05E5 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9."), /*#__PURE__*/React.createElement("li", null, "\u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05D0\u05D7\u05E8\u05D0\u05D9\u05EA \u05DC\u05DB\u05DC \u05E0\u05D6\u05E7 \u05D9\u05E9\u05D9\u05E8 \u05D0\u05D5 \u05E2\u05E7\u05D9\u05E3 \u05E9\u05E2\u05DC\u05D5\u05DC \u05DC\u05D4\u05D9\u05D2\u05E8\u05DD \u05DB\u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D4\u05E1\u05EA\u05DE\u05DB\u05D5\u05EA \u05E2\u05DC \u05EA\u05DB\u05E0\u05D9 \u05D4\u05D0\u05EA\u05E8."), /*#__PURE__*/React.createElement("li", null, "\u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05D0\u05D7\u05E8\u05D0\u05D9\u05EA \u05DC\u05D6\u05DE\u05D9\u05E0\u05D5\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D5\u05E9\u05D5\u05DE\u05E8\u05EA \u05DC\u05E2\u05E6\u05DE\u05D4 \u05D0\u05EA \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D4\u05E4\u05E1\u05D9\u05E7 \u05D0\u05D5 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05E4\u05E2\u05D5\u05DC\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D1\u05DB\u05DC \u05E2\u05EA."), /*#__PURE__*/React.createElement("li", null, "\u05D4\u05D0\u05EA\u05E8 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05DB\u05DC\u05D5\u05DC \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD \u05DC\u05D0\u05EA\u05E8\u05D9\u05DD \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D9\u05DD. \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D0\u05D9\u05E0\u05D4 \u05D0\u05D7\u05E8\u05D0\u05D9\u05EA \u05DC\u05EA\u05DB\u05E0\u05D9\u05DD \u05D0\u05D5 \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05E9\u05DC \u05D0\u05EA\u05E8\u05D9\u05DD \u05D0\u05DC\u05D4."))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "6. \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05D5\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD"), /*#__PURE__*/React.createElement("p", null, "\u05D1\u05E2\u05EA \u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8 (\u05E9\u05DD, \u05D8\u05DC\u05E4\u05D5\u05DF, \u05D3\u05D5\u05D0\"\u05DC), \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05E1\u05DB\u05D9\u05DD \u05DC\u05DB\u05DA \u05E9\u05D4\u05D7\u05D1\u05E8\u05D4 \u05EA\u05D9\u05E6\u05D5\u05E8 \u05E2\u05DE\u05D5 \u05E7\u05E9\u05E8 \u05DC\u05E6\u05D5\u05E8\u05DA \u05DE\u05EA\u05DF \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05D4. \u05E0\u05D9\u05EA\u05DF \u05DC\u05D1\u05E7\u05E9 \u05D4\u05E1\u05E8\u05D4 \u05DE\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05EA\u05E4\u05D5\u05E6\u05D4 \u05D1\u05DB\u05DC \u05E2\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4 \u05DC\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D3\u05D5\u05D0\"\u05DC: ", SITE_CONFIG.contact.email, ".")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "7. \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05EA\u05E7\u05E0\u05D5\u05DF"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D7\u05D1\u05E8\u05D4 \u05E9\u05D5\u05DE\u05E8\u05EA \u05DC\u05E2\u05E6\u05DE\u05D4 \u05D0\u05EA \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05E2\u05D3\u05DB\u05DF \u05D5\u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05EA\u05E0\u05D0\u05D9 \u05D4\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA, \u05DC\u05E4\u05D9 \u05E9\u05D9\u05E7\u05D5\u05DC \u05D3\u05E2\u05EA\u05D4 \u05D4\u05D1\u05DC\u05E2\u05D3\u05D9. \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD \u05D4\u05DE\u05E2\u05D5\u05D3\u05DB\u05E0\u05D9\u05DD. \u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05D0\u05D7\u05E8\u05D5\u05DF \u05D9\u05E6\u05D5\u05D9\u05DF \u05D1\u05E8\u05D0\u05E9 \u05D4\u05DE\u05E1\u05DE\u05DA.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "8. \u05D3\u05D9\u05DF \u05D7\u05DC \u05D5\u05E1\u05DE\u05DB\u05D5\u05EA \u05E9\u05D9\u05E4\u05D5\u05D8"), /*#__PURE__*/React.createElement("p", null, "\u05E2\u05DC \u05EA\u05E7\u05E0\u05D5\u05DF \u05D6\u05D4 \u05D9\u05D7\u05D5\u05DC\u05D5 \u05D3\u05D9\u05E0\u05D9 \u05DE\u05D3\u05D9\u05E0\u05EA \u05D9\u05E9\u05E8\u05D0\u05DC. \u05E1\u05DE\u05DB\u05D5\u05EA \u05D4\u05E9\u05D9\u05E4\u05D5\u05D8 \u05D4\u05D1\u05DC\u05E2\u05D3\u05D9\u05EA \u05D1\u05DB\u05DC \u05E2\u05E0\u05D9\u05D9\u05DF \u05D4\u05E0\u05D5\u05D2\u05E2 \u05DC\u05EA\u05E7\u05E0\u05D5\u05DF \u05D6\u05D4 \u05EA\u05D4\u05D9\u05D4 \u05DC\u05D1\u05EA\u05D9 \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D4\u05DE\u05D5\u05E1\u05DE\u05DB\u05D9\u05DD \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "9. \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8"), /*#__PURE__*/React.createElement("p", null, "\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D0\u05D5 \u05D1\u05D9\u05E8\u05D5\u05E8\u05D9\u05DD \u05D1\u05E0\u05D5\u05D2\u05E2 \u05DC\u05EA\u05E7\u05E0\u05D5\u05DF \u05D6\u05D4 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D3\u05D5\u05D0\"\u05DC: ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + SITE_CONFIG.contact.email,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.email)), /*#__PURE__*/React.createElement("li", null, "\u05D8\u05DC\u05E4\u05D5\u05DF: ", /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + SITE_CONFIG.contact.phone,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.phone))))))), /*#__PURE__*/React.createElement(Footer, null));
};

/**
 * PrivacyPage Component
 * הצהרת פרטיות ומדיניות פרטיות
 */
const PrivacyPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8"
  }, "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm mb-10"
  }, "\u05E2\u05D3\u05DB\u05D5\u05DF \u05D0\u05D7\u05E8\u05D5\u05DF: \u05D9\u05E0\u05D5\u05D0\u05E8 2026"), /*#__PURE__*/React.createElement("div", {
    className: "prose-dark space-y-8 text-gray-300 text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "1. \u05DB\u05DC\u05DC\u05D9"), /*#__PURE__*/React.createElement("p", null, "\"\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4\" (\u05DC\u05D4\u05DC\u05DF \"\u05D4\u05D7\u05D1\u05E8\u05D4\" \u05D0\u05D5 \"\u05D0\u05E0\u05D7\u05E0\u05D5\") \u05DE\u05DB\u05D1\u05D3\u05EA \u05D0\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8. \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D6\u05D5 \u05DE\u05E1\u05D1\u05D9\u05E8\u05D4 \u05DB\u05D9\u05E6\u05D3 \u05D0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD, \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D5\u05DE\u05D2\u05E0\u05D9\u05DD \u05E2\u05DC \u05DE\u05D9\u05D3\u05E2 \u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8 \u05E9\u05DC\u05E0\u05D5 (\u05DC\u05D4\u05DC\u05DF \"\u05D4\u05D0\u05EA\u05E8\")."), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05D6\u05D5. \u05D0\u05DD \u05D0\u05D9\u05E0\u05DA \u05DE\u05E1\u05DB\u05D9\u05DD \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D6\u05D5, \u05D0\u05E0\u05D0 \u05D4\u05D9\u05DE\u05E0\u05E2 \u05DE\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "2. \u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05D0\u05E0\u05D5 \u05D0\u05D5\u05E1\u05E4\u05D9\u05DD"), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-lg font-semibold mb-2 mt-4"
  }, "\u05DE\u05D9\u05D3\u05E2 \u05E9\u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05D5\u05E1\u05E8 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05E7\u05D8\u05D9\u05D1\u05D9"), /*#__PURE__*/React.createElement("p", null, "\u05DB\u05D0\u05E9\u05E8 \u05D0\u05EA\u05D4 \u05DE\u05E9\u05D0\u05D9\u05E8 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8 (\u05DC\u05DE\u05E9\u05DC \u05D1\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8), \u05D0\u05E0\u05D5 \u05E2\u05E9\u05D5\u05D9\u05D9\u05DD \u05DC\u05D0\u05E1\u05D5\u05E3:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05E9\u05DD \u05DE\u05DC\u05D0"), /*#__PURE__*/React.createElement("li", null, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), /*#__PURE__*/React.createElement("li", null, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\"\u05DC"), /*#__PURE__*/React.createElement("li", null, "\u05DB\u05DC \u05DE\u05D9\u05D3\u05E2 \u05E0\u05D5\u05E1\u05E3 \u05E9\u05EA\u05D1\u05D7\u05E8 \u05DC\u05DE\u05E1\u05D5\u05E8 \u05D1\u05D4\u05D5\u05D3\u05E2\u05EA\u05DA")), /*#__PURE__*/React.createElement("h3", {
    className: "text-white text-lg font-semibold mb-2 mt-4"
  }, "\u05DE\u05D9\u05D3\u05E2 \u05E9\u05E0\u05D0\u05E1\u05E3 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA"), /*#__PURE__*/React.createElement("p", null, "\u05D1\u05E2\u05EA \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05D9\u05D0\u05E1\u05E3 \u05DE\u05D9\u05D3\u05E2 \u05D8\u05DB\u05E0\u05D9, \u05DB\u05D2\u05D5\u05DF:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05DB\u05EA\u05D5\u05D1\u05EA IP"), /*#__PURE__*/React.createElement("li", null, "\u05E1\u05D5\u05D2 \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D4\u05DE\u05DB\u05E9\u05D9\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05D3\u05E4\u05D9\u05DD \u05E9\u05E0\u05E6\u05E4\u05D5 \u05D5\u05DE\u05E9\u05DA \u05D4\u05E9\u05D4\u05D9\u05D9\u05D4 \u05D1\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05DE\u05E7\u05D5\u05E8 \u05D4\u05D4\u05D2\u05E2\u05D4 \u05DC\u05D0\u05EA\u05E8"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "3. \u05DE\u05D8\u05E8\u05D5\u05EA \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05DE\u05D9\u05D3\u05E2"), /*#__PURE__*/React.createElement("p", null, "\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05DE\u05D9\u05D3\u05E2 \u05E9\u05E0\u05D0\u05E1\u05E3 \u05DC\u05DE\u05D8\u05E8\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05E2\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05E9\u05D4\u05E9\u05D0\u05D9\u05E8\u05D5 \u05E4\u05E8\u05D8\u05D9\u05DD, \u05DC\u05E6\u05D5\u05E8\u05DA \u05DE\u05EA\u05DF \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4"), /*#__PURE__*/React.createElement("li", null, "\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05D4\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05E1\u05D8\u05D8\u05D9\u05E1\u05D8\u05D9 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8 \u05EA\u05DB\u05E0\u05D9 \u05D4\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D7\u05D5\u05E7 \u05D5\u05E8\u05D2\u05D5\u05DC\u05E6\u05D9\u05D4"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "4. \u05E2\u05D5\u05D2\u05D9\u05D5\u05EA (Cookies)"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D0\u05EA\u05E8 \u05E2\u05E9\u05D5\u05D9 \u05DC\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05E2\u05D5\u05D2\u05D9\u05D5\u05EA (\u05E7\u05D1\u05E6\u05D9 Cookie) \u05D5\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05D3\u05D5\u05DE\u05D5\u05EA \u05DC\u05E6\u05D5\u05E8\u05DA:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05EA\u05E4\u05E7\u05D5\u05D3 \u05EA\u05E7\u05D9\u05DF \u05E9\u05DC \u05D4\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05E0\u05D9\u05EA\u05D5\u05D7 \u05D3\u05E4\u05D5\u05E1\u05D9 \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA"), /*#__PURE__*/React.createElement("li", null, "\u05D4\u05EA\u05D0\u05DE\u05EA \u05EA\u05D5\u05DB\u05DF \u05DC\u05DE\u05E9\u05EA\u05DE\u05E9")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "\u05E0\u05D9\u05EA\u05DF \u05DC\u05E0\u05D4\u05DC \u05D0\u05D5 \u05DC\u05D7\u05E1\u05D5\u05DD \u05E2\u05D5\u05D2\u05D9\u05D5\u05EA \u05D3\u05E8\u05DA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF. \u05D7\u05E1\u05D9\u05DE\u05EA \u05E2\u05D5\u05D2\u05D9\u05D5\u05EA \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05E4\u05D2\u05D5\u05E2 \u05D1\u05D7\u05DC\u05E7 \u05DE\u05D4\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05D0\u05EA\u05E8.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "5. \u05E9\u05D9\u05EA\u05D5\u05E3 \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DD \u05E6\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05DD"), /*#__PURE__*/React.createElement("p", null, "\u05D0\u05E0\u05D5 \u05DC\u05D0 \u05E0\u05DE\u05DB\u05D5\u05E8, \u05E0\u05E9\u05DB\u05D9\u05E8 \u05D0\u05D5 \u05E0\u05DE\u05E1\u05D5\u05E8 \u05D0\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA \u05DC\u05E6\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05DD, \u05DC\u05DE\u05E2\u05D8 \u05D1\u05DE\u05E7\u05E8\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05E1\u05E4\u05E7\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05DE\u05D8\u05E2\u05DE\u05E0\u05D5 (\u05DB\u05D2\u05D5\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D8\u05E4\u05E1\u05D9\u05DD \u05D5\u05D0\u05E0\u05DC\u05D9\u05D8\u05D9\u05E7\u05D4) \u05D4\u05DE\u05D7\u05D5\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05DE\u05D5\u05E8 \u05E2\u05DC \u05E1\u05D5\u05D3\u05D9\u05D5\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2"), /*#__PURE__*/React.createElement("li", null, "\u05DB\u05D0\u05E9\u05E8 \u05E0\u05D3\u05E8\u05E9 \u05DC\u05E4\u05D9 \u05E6\u05D5 \u05E9\u05D9\u05E4\u05D5\u05D8\u05D9 \u05D0\u05D5 \u05D3\u05E8\u05D9\u05E9\u05D4 \u05D7\u05D5\u05E7\u05D9\u05EA"), /*#__PURE__*/React.createElement("li", null, "\u05DC\u05D4\u05D2\u05E0\u05D4 \u05E2\u05DC \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D0\u05D5 \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "6. \u05D0\u05D1\u05D8\u05D7\u05EA \u05DE\u05D9\u05D3\u05E2"), /*#__PURE__*/React.createElement("p", null, "\u05D0\u05E0\u05D5 \u05E0\u05D5\u05E7\u05D8\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D9 \u05D0\u05D1\u05D8\u05D7\u05D4 \u05E1\u05D1\u05D9\u05E8\u05D9\u05DD \u05DC\u05D4\u05D2\u05E0\u05D4 \u05E2\u05DC \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05DE\u05E4\u05E0\u05D9 \u05D2\u05D9\u05E9\u05D4 \u05D1\u05DC\u05EA\u05D9 \u05DE\u05D5\u05E8\u05E9\u05D9\u05EA, \u05E9\u05D9\u05DE\u05D5\u05E9 \u05DC\u05E8\u05E2\u05D4 \u05D0\u05D5 \u05D0\u05D5\u05D1\u05D3\u05DF. \u05D9\u05D7\u05D3 \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D0\u05D9\u05DF \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05D4\u05D1\u05D8\u05D9\u05D7 \u05D0\u05D1\u05D8\u05D7\u05D4 \u05DE\u05D5\u05D7\u05DC\u05D8\u05EA \u05E9\u05DC \u05DE\u05D9\u05D3\u05E2 \u05D4\u05DE\u05D5\u05E2\u05D1\u05E8 \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "7. \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"), /*#__PURE__*/React.createElement("p", null, "\u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D7\u05D5\u05E7 \u05D4\u05D2\u05E0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA, \u05D4\u05EA\u05E9\u05DE\"\u05D0-1981, \u05E2\u05D5\u05DE\u05D3\u05D5\u05EA \u05DC\u05DA \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05D4\u05D1\u05D0\u05D5\u05EA:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "\u05D6\u05DB\u05D5\u05EA \u05E2\u05D9\u05D5\u05DF"), " - \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05E2\u05D9\u05D9\u05DF \u05D1\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05D4\u05E9\u05DE\u05D5\u05E8 \u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05DA"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "\u05D6\u05DB\u05D5\u05EA \u05EA\u05D9\u05E7\u05D5\u05DF"), " - \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D1\u05E7\u05E9 \u05EA\u05D9\u05E7\u05D5\u05DF \u05DE\u05D9\u05D3\u05E2 \u05E9\u05D2\u05D5\u05D9"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "\u05D6\u05DB\u05D5\u05EA \u05DE\u05D7\u05D9\u05E7\u05D4"), " - \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D1\u05E7\u05E9 \u05DE\u05D7\u05D9\u05E7\u05EA \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "\u05D4\u05E1\u05E8\u05D4 \u05DE\u05E8\u05E9\u05D9\u05DE\u05EA \u05EA\u05E4\u05D5\u05E6\u05D4"), " - \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D1\u05E7\u05E9 \u05D4\u05E1\u05E8\u05D4 \u05DE\u05DB\u05DC \u05E8\u05E9\u05D9\u05DE\u05EA \u05D3\u05D9\u05D5\u05D5\u05E8")), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "\u05DC\u05DE\u05D9\u05DE\u05D5\u05E9 \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA\u05D9\u05DA, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5 \u05D1\u05DB\u05EA\u05D5\u05D1\u05EA: ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + SITE_CONFIG.contact.email,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.email))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "8. \u05DE\u05D9\u05D3\u05E2 \u05E2\u05DC \u05E7\u05D8\u05D9\u05E0\u05D9\u05DD"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D0\u05EA\u05E8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D0\u05D9\u05E1\u05D5\u05E3 \u05DE\u05D9\u05D3\u05E2 \u05DE\u05D9\u05DC\u05D3\u05D9\u05DD \u05DE\u05EA\u05D7\u05EA \u05DC\u05D2\u05D9\u05DC 16. \u05D0\u05DD \u05E0\u05D5\u05D3\u05E2 \u05DC\u05E0\u05D5 \u05E9\u05E0\u05D0\u05E1\u05E3 \u05DE\u05D9\u05D3\u05E2 \u05DE\u05E7\u05D8\u05D9\u05DF \u05DC\u05DC\u05D0 \u05D4\u05E1\u05DB\u05DE\u05EA \u05D4\u05D5\u05E8\u05D4, \u05E0\u05E4\u05E2\u05DC \u05DC\u05DE\u05D7\u05D9\u05E7\u05EA\u05D5 \u05D1\u05D4\u05E7\u05D3\u05DD.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "9. \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D1\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D7\u05D1\u05E8\u05D4 \u05E8\u05E9\u05D0\u05D9\u05EA \u05DC\u05E2\u05D3\u05DB\u05DF \u05D0\u05EA \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05DE\u05E2\u05EA \u05DC\u05E2\u05EA. \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05DE\u05D4\u05D5\u05EA\u05D9\u05D9\u05DD \u05D9\u05E4\u05D5\u05E8\u05E1\u05DE\u05D5 \u05D1\u05D0\u05EA\u05E8. \u05D4\u05DE\u05E9\u05DA \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05DC\u05D0\u05D7\u05E8 \u05E2\u05D3\u05DB\u05D5\u05DF \u05D4\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DC\u05EA\u05E0\u05D0\u05D9\u05DD \u05D4\u05DE\u05E2\u05D5\u05D3\u05DB\u05E0\u05D9\u05DD.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "10. \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8"), /*#__PURE__*/React.createElement("p", null, "\u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D0\u05D5 \u05D1\u05E7\u05E9\u05D5\u05EA \u05D1\u05E0\u05D5\u05D2\u05E2 \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA, \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D3\u05D5\u05D0\"\u05DC: ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + SITE_CONFIG.contact.email,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.email)), /*#__PURE__*/React.createElement("li", null, "\u05D8\u05DC\u05E4\u05D5\u05DF: ", /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + SITE_CONFIG.contact.phone,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.phone))))))), /*#__PURE__*/React.createElement(Footer, null));
};

/**
 * AccessibilityPage Component
 * הצהרת נגישות בהתאם לתקן הישראלי ת"י 5568
 */
const AccessibilityPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 pt-[84px] pb-16 sm:pb-20 px-4 sm:px-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-display text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8 pt-8"
  }, "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-sm mb-10"
  }, "\u05E2\u05D3\u05DB\u05D5\u05DF \u05D0\u05D7\u05E8\u05D5\u05DF: \u05D9\u05E0\u05D5\u05D0\u05E8 2026"), /*#__PURE__*/React.createElement("div", {
    className: "prose-dark space-y-8 text-gray-300 text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "1. \u05DE\u05D7\u05D5\u05D9\u05D1\u05D5\u05EA \u05DC\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", null, "\"\u05DE\u05D7\u05E8 \u05DE\u05DC\u05D7\u05DE\u05D4\" \u05DE\u05D7\u05D5\u05D9\u05D1\u05EA \u05DC\u05D4\u05E0\u05D2\u05D9\u05E9 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8 \u05DC\u05DB\u05DC\u05DC \u05D4\u05D0\u05D5\u05DB\u05DC\u05D5\u05E1\u05D9\u05D9\u05D4, \u05DC\u05E8\u05D1\u05D5\u05EA \u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05D9\u05D5\u05EA. \u05D0\u05E0\u05D5 \u05E9\u05D5\u05D0\u05E4\u05D9\u05DD \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D1\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05EA\u05E7\u05DF \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05EA\"\u05D9 5568 \u05D5\u05D1\u05D4\u05E0\u05D7\u05D9\u05D5\u05EA WCAG 2.1 \u05D1\u05E8\u05DE\u05D4 AA.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "2. \u05D0\u05DE\u05E6\u05E2\u05D9 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("p", null, "\u05D4\u05D0\u05EA\u05E8 \u05DB\u05D5\u05DC\u05DC \u05D0\u05EA \u05D0\u05DE\u05E6\u05E2\u05D9 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D1\u05D0\u05D9\u05DD:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-2 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05E0\u05D9\u05D5\u05D5\u05D8 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05DE\u05E7\u05DC\u05D3\u05EA"), /*#__PURE__*/React.createElement("li", null, "\u05E7\u05D9\u05E9\u05D5\u05E8 \"\u05D3\u05DC\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05E8\u05D0\u05E9\u05D9\" \u05DC\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05D4\u05D9\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA (alt text) \u05E2\u05D1\u05D5\u05E8 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8"), /*#__PURE__*/React.createElement("li", null, "\u05DE\u05D1\u05E0\u05D4 \u05DB\u05D5\u05EA\u05E8\u05D5\u05EA \u05D4\u05D9\u05E8\u05E8\u05DB\u05D9 (h1-h6) \u05DC\u05E0\u05D9\u05D5\u05D5\u05D8 \u05E7\u05DC"), /*#__PURE__*/React.createElement("li", null, "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05DE\u05E1\u05D9\u05D9\u05E2\u05D5\u05EA \u05D5\u05E7\u05D5\u05E8\u05D0\u05D9 \u05DE\u05E1\u05DA"), /*#__PURE__*/React.createElement("li", null, "\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05E6\u05D1\u05E2\u05D9\u05DD \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA WCAG AA"), /*#__PURE__*/React.createElement("li", null, "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05D4\u05D2\u05D3\u05DC\u05EA \u05D8\u05E7\u05E1\u05D8 \u05E2\u05D3 200% \u05DC\u05DC\u05D0 \u05D0\u05D5\u05D1\u05D3\u05DF \u05EA\u05D5\u05DB\u05DF"), /*#__PURE__*/React.createElement("li", null, "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05D4\u05E2\u05D3\u05E4\u05D5\u05EA \u05EA\u05E0\u05D5\u05E2\u05D4 \u05DE\u05D5\u05E4\u05D7\u05EA\u05EA (prefers-reduced-motion)"), /*#__PURE__*/React.createElement("li", null, "\u05D8\u05E4\u05E1\u05D9\u05DD \u05E2\u05DD \u05EA\u05D5\u05D5\u05D9\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05E7\u05D5\u05E8\u05D0\u05D9 \u05DE\u05E1\u05DA"), /*#__PURE__*/React.createElement("li", null, "\u05D4\u05D0\u05EA\u05E8 \u05D1\u05E0\u05D5\u05D9 \u05D1\u05E9\u05E4\u05D4 \u05D4\u05E2\u05D1\u05E8\u05D9\u05EA \u05E2\u05DD \u05EA\u05DE\u05D9\u05DB\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF RTL"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "3. \u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05D9\u05D3\u05D5\u05E2\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", null, "\u05DC\u05DE\u05E8\u05D5\u05EA \u05DE\u05D0\u05DE\u05E6\u05D9\u05E0\u05D5 \u05DC\u05D4\u05E0\u05D2\u05D9\u05E9 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8, \u05D9\u05D9\u05EA\u05DB\u05E0\u05D5 \u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05E9\u05D8\u05E8\u05DD \u05D4\u05D5\u05E0\u05D2\u05E9\u05D5 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05DC\u05D0. \u05D0\u05E0\u05D5 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D0\u05D5\u05E4\u05DF \u05E9\u05D5\u05D8\u05E3 \u05DC\u05E9\u05E4\u05E8 \u05D0\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "4. \u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05D1\u05E2\u05D9\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", null, "\u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05D1\u05E2\u05D9\u05D9\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8? \u05E0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05D5\u05DC\u05D8\u05E4\u05DC \u05D1\u05DB\u05DA. \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc pr-5 space-y-1 mt-2"
  }, /*#__PURE__*/React.createElement("li", null, "\u05D3\u05D5\u05D0\"\u05DC: ", /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + SITE_CONFIG.contact.email,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.email)), /*#__PURE__*/React.createElement("li", null, "\u05D8\u05DC\u05E4\u05D5\u05DF: ", /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + SITE_CONFIG.contact.phone,
    className: "text-primary hover:underline"
  }, SITE_CONFIG.contact.phone))), /*#__PURE__*/React.createElement("p", {
    className: "mt-2"
  }, "\u05D0\u05E0\u05D5 \u05DE\u05EA\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05DC\u05D8\u05E4\u05DC \u05D1\u05E4\u05E0\u05D9\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05EA\u05D5\u05DA 5 \u05D9\u05DE\u05D9 \u05E2\u05E1\u05E7\u05D9\u05DD.")), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    className: "text-white text-xl font-bold mb-3"
  }, "5. \u05EA\u05D0\u05E8\u05D9\u05DA \u05E1\u05E7\u05D9\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D4"), /*#__PURE__*/React.createElement("p", null, "\u05E1\u05E7\u05D9\u05E8\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05E9\u05DC \u05D4\u05D0\u05EA\u05E8 \u05D1\u05D5\u05E6\u05E2\u05D4 \u05D1\u05D9\u05E0\u05D5\u05D0\u05E8 2026."))))), /*#__PURE__*/React.createElement(Footer, null));
};

/**
 * NotFoundPage Component
 * Shown when the user navigates to an unknown hash route (e.g. /#/typo).
 */
const NotFoundPage = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-background-dark text-white font-body min-h-screen flex flex-col selection:bg-primary selection:text-white"
  }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
    id: "main-content",
    className: "flex-1 flex flex-col items-center justify-center px-4 py-20 text-center"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl sm:text-5xl font-black text-white mb-4 uppercase font-display"
  }, "\u05D4\u05D3\u05E3 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-400 text-base sm:text-lg mb-8 max-w-md"
  }, "\u05D4\u05D3\u05E3 \u05E9\u05D7\u05D9\u05E4\u05E9\u05EA \u05DC\u05D0 \u05E7\u05D9\u05D9\u05DD \u05D0\u05D5 \u05D4\u05D5\u05D6\u05D6."), /*#__PURE__*/React.createElement(Link, {
    to: typeof ROUTES !== 'undefined' ? ROUTES.HOME : '/',
    className: "inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 uppercase tracking-wider transition-colors"
  }, "\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined text-xl rotate-180"
  }, "arrow_back"))), /*#__PURE__*/React.createElement(Footer, null));
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
      main.focus({
        preventScroll: true
      });
    }
  }, [location.pathname]);
  return null;
};
const App = () => {
  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(ScrollToTopAndFocus, null), /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.HOME,
    element: /*#__PURE__*/React.createElement(HomePage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.TEAM,
    element: /*#__PURE__*/React.createElement(TeamPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.METHOD,
    element: /*#__PURE__*/React.createElement(MethodPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/articles/:id",
    element: /*#__PURE__*/React.createElement(ArticleDetailPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.ARTICLES,
    element: /*#__PURE__*/React.createElement(ArticlesPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.CONTACT,
    element: /*#__PURE__*/React.createElement(ContactPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.FAQ,
    element: /*#__PURE__*/React.createElement(FAQPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.TERMS,
    element: /*#__PURE__*/React.createElement(TermsPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.PRIVACY,
    element: /*#__PURE__*/React.createElement(PrivacyPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: ROUTES.ACCESSIBILITY,
    element: /*#__PURE__*/React.createElement(AccessibilityPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NotFoundPage, null)
  })));
};

// Initialize React application (defer mount to avoid router context race with extensions/back-forward cache)
const rootEl = document.getElementById('root');
const root = rootEl ? createRoot(rootEl) : null;
function mount() {
  if (root) root.render(/*#__PURE__*/React.createElement(App, null));
}
if (typeof requestAnimationFrame !== 'undefined') {
  requestAnimationFrame(mount);
} else {
  setTimeout(mount, 0);
}
