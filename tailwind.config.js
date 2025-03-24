const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caslon: ['ACaslonPro', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        bebas: ['BebasNeue', 'serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
        },
        '.line-clamp-none': {
          '-webkit-line-clamp': 'unset',
        },
      });
    }),
  ],
}
