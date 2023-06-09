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
      backgroundImage: {
        'img-sm': "url('https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/bg-color.png')",
        
        'img-md': "url('https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/bg-lg.png')",

        'profile': "url('https://raw.githubusercontent.com/ulrmdhn/DigiCard/main/src/pages/img/profile.webp')"
      },
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

