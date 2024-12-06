/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "castom_color": "#DAD8D8",
        "castom_color2": "#B00000",
        "castom_color3": "#D6D4D4E0",
      },
    },
  },
  plugins: [],
};
