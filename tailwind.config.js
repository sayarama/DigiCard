/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'lex': 'box-shadow: 3px 6px 29px -12px rgba(0,0,0,0.75);'
      },
      fontFamily:{
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

