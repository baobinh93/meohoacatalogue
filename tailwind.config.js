/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        brand: ['Fraunces', 'serif'],
      },
      colors: {
        cream: '#fffdf8',
        ink: '#5d4f54',
        rose: '#f7cfd5',
        'rose-deep': '#d78696',
        mint: '#dff3e9',
        champagne: '#f7edcf',
        lavender: '#eee8f8',
        line: '#f0e5df',
      },
    },
  },
  plugins: [],
}
