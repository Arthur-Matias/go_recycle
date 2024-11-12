/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  safelist: [
    'aos-animate',           // AOS animation classes
    'aos-init',              // AOS initialization classes
    
    // Add other AOS specific classes as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          100: "#F1F7F7",
          200: "#00DF81",
          300: "#2CC295",
          400: "#03624C",
          500: "#042222",
          600: "#021A1A",
          700: "#030F0F"
        },
        secondary: {
          100: "#AACBC4",
          200: "#6F7D7D",
          300: "#2EA98C",
          400: "#17876E",
          500: "#085543",
          600: "#0B4539",
          700: "#06302C",
        },
      },
    },
  },
  plugins: [],
}