/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: { 'XXXL': '5rem' }, // added custom border radius size
    },
  },
  plugins: [],
}

