/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#5F99F7',
          dark: '#5281E7',
          darker: '#3E6ED3',
          darkest: '#4469BB'
        },
        black: {
          DEFAULT: '#0A0A0A',
          dark: '#000000'
        }
      }
    },
  },
  plugins: [],
}