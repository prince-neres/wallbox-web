// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          text: "#f5f5f5",
          bg: "#121520",
          blue: "#385eca",
          orange: "#FF5722",
        },
        light: {
          text: "#2d2076",
          bg: "#f5f5f5",
          blue: "#2d2076",
          orange: "#FF5722",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
