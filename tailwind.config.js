/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0079FF",
          200: "#076fe2",
        },
        secondary: {
          100: "#1F2A48",
          200: "#141C30",
        },
      },
    },
  },
  plugins: [],
};
