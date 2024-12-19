/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       caslon : ['ACaslonPro', 'serif'], // Add your custom font
       sora: ['Sora', 'serif'],
       bebas: ['BebasNeue', 'serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}

