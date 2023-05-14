/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          text: "#cccccc",
          bg: "#0d0d0d",
        },
        light: {
          text: "#333333",
          bg: "#f1f1f1",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
};
