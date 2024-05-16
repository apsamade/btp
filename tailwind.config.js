/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary' : '#16CEA7'
      },
      backgroundImage: {
        'fond-header' : "url('/assets/backgrounds/fond-header.png')"
      }
    },
  },
  plugins: [],
}