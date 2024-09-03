/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1D4A73",
        lightBlue: "#B3CDE0",
        creamWhite: "#F5F5F5",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Open Sans", "sans-serif"],
        script: ["Great Vibes", "cursive"],
        caveat: ["Caveat", "cursive"],
        shadows: ["Shadows Into Light", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};

