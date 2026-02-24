/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#E61A1A",
        "primary-hover": "#C20000",
        "accent": "#39FF14",
        "background-dark": "#030303",
        "surface-dark": "#0F0F0F",
        "surface-light": "#1E1E1E",
        "surface-card": "#141414",
        "card-dark": "#0f0f0f",
        "border-dark": "#262626",
        "text-muted": "#9CA3AF",
      },
      boxShadow: {
        "glow": "0 0 15px rgba(220, 38, 38, 0.2)",
        "glow-strong": "0 0 25px rgba(220, 38, 38, 0.4)",
        "glow-green": "0 0 10px rgba(204, 255, 0, 0.2)",
      },
      fontFamily: {
        "display": ["Heebo", "Rubik", "Noto Sans Hebrew", "sans-serif"],
        "heading": ["Secular One", "Heebo", "Rubik", "Noto Sans Hebrew", "sans-serif"],
        "body": ["Heebo", "sans-serif"],
        "sans": ["Heebo", "Noto Sans Hebrew", "sans-serif"],
      },
      borderRadius: {
        "none": "0",
        "sm": "2px",
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "full": "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
