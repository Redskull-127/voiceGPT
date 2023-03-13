/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#7F29C5',
        'cus-black': '#190826',
        'cus-white': '#FDFAFF',
        'w-color': '#F9F9F9',
      },
      backgroundImage: {
        'Intro': "url('/BG/Intro.svg')",
      },
      fontFamily: {
        'figtree': ['Figtree'],
      }
    },
  },
  plugins: [],
}
