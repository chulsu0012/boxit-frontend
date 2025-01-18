/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseGray: '#F2F5F4'
      }
    },
  },
  plugins: [require('daisyui')],
}