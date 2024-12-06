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
        "castom_color4": "#808080",
        "castom_color_btn": "#B000004D",
      },
    },
    boxShadow: {
      'custom': '0px 0px 64px 0px rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
};
