/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        softblueLight: "#CDE2EB",
        orangeLight: "#FFA566",
        oceanblueDark: "#012442",
        orange: "#E38664",
        softblue: "#5BA0BF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
