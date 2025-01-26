/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseWhite: '#F2F5F4',
        baseGray: '#C0C4C5',
        baseBlack: '#040811',
        baseOrange: '#FF7918',
        baseBlue: '#74B1C5',
        errorRed: '#E00004',
      }
    },
  },
  plugins: [require('daisyui')],
}