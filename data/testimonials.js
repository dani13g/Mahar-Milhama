/**
 * Testimonials Data - Image gallery for "בוגרים מספרים" section
 * Images are stored in /images/testimonials/ (3 shown per page).
 */
const TESTIMONIAL_IMAGES = [
    "Whatsapp testimonials 2.png",
    "Whatsapp testimonials 3.png",
    "Whatsapp testimonials 5.png",
    "Whatsapp testimonials 6.png",
    "Whatsapp testimonials 7.png",
    "Whatsapp testimonials 9.png",
    "Whatsapp testimonials 10.png",
    "Whatsapp testimonials 11.png",
    "Whatsapp testimonials 12.png",
    "Whatsapp testimonials 18.png",
    "Whatsapp testimonials 21.png",
    "Whatsapp testimonials 22.png",
    "Whatsapp testimonials 23.png",
    "Whatsapp testimonials 24.png",
    "Whatsapp testimonials 25.png",
    "Whatsapp testimonials 26.png",
    "Whatsapp testimonials 27.png",
    "Whatsapp testimonials 29.png",
    "Whatsapp testimonials 31.png",
    "Whatsapp testimonials 32.png",
    "Whatsapp testimonials 36.png",
    "Whatsapp testimonials 37.png",
    "Whatsapp testimonials 38.png",
    "Whatsapp testimonials 39.png",
    "Whatsapp testimonials 42.png",
    "Whatsapp testimonials 43.png",
    "Whatsapp testimonials 44.png",
    "Whatsapp testimonials 45.png"
];

// Legacy: keep TESTIMONIALS for any external reference
const TESTIMONIALS = TESTIMONIAL_IMAGES;

if (typeof window !== 'undefined') {
    window.TESTIMONIAL_IMAGES = TESTIMONIAL_IMAGES;
    window.TESTIMONIALS = TESTIMONIALS;
}
