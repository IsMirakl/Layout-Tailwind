/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom_color": "#DAD8D8",
        "custom_color2": "#B00000",
        "custom_color3": "#D6D4D4E0",
        "custom_color4": "#808080",
        "custom_color_btn": "#B000004D",
        "custom_color5": "#18191F",
        "custom_color6": "#FFE87A",
        "custom_color7": "#C4C4C4",
        "custom_color8": "#969BAB",
        "custom_color9": "#F7FAFE",
        "custom_color10": "#2E2E2E",
        "custom_color11": "#E6E6E6",
        "suctom_color12": "#E5E5E5"
      },
    },
    boxShadow: {
      'custom': '0px 0px 64px 0px rgba(0, 0, 0, 0.5)',
      'castom_shadow2': '0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset',
      'custom_shadow3': '0 10px 20px 0 rgba(41, 41, 42, 0.07)',

    },
  },
  plugins: [],
};
