const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mons': ['Montserrat', 'sans-serif']
      },
      colors: {
        CustomGreen: '#59C55E',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      green:colors.green,
    },
  },
  variants: {},
  plugins: [],
};
