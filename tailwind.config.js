/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#F15B25',
      primaryLight: '#FFE5DC',
      secondary: '#F2F2F2',
      background: '#F8F8F8',
      black: '#222222',
      ash: '#979797'
    },
  },
  plugins: [],
}