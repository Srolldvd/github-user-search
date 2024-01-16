/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
        },
        accent: {
          100: "var(--color-accent-100)",
          200: "var(--color-accent-200)",
        },
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
      },
    },
  },
  plugins: [],
};
