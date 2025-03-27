/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        slate: {
          '500':"#1A1C29",
          '700': '#111320',
          '800':"#1A1C29",
        },
        yellow:{
          '400':"#FDCF00"
        },
        red:{
          '300':"#DCBDAB",
        },
        blue:{
          '400':"#B7BFFE"
        }
      }
    }
  },
  plugins: [],
}