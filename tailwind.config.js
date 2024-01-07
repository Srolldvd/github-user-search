/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0079FF",
        secondary: {
          100: "#1F2A48",
          200: "#141C30",
        },
      },
    },
  },
  plugins: [],
};
