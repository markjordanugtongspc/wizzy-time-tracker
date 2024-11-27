/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#3d3d3d',
        }
      }
    },
  },
  plugins: [],
}