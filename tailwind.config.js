/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: { 'XXXL': '5rem' }, // added custom border radius size
      fontFamily: {
        inter: 'Inter', // Adds a new `font-inter` class
        pacifico: 'Pacifico' // Adds a new `font-inter` class
      }
    },
  },
  plugins: [],
}

