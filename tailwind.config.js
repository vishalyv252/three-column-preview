/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'BOrange':'hsl(31, 77%, 52%)',
        'DCyan':'hsl(184, 100%, 22%)',
        'VDCyan':'hsl(179, 100%, 13%)',
        'White':'hsla(0, 0%, 100%, 0.75)',
        'Gray':'hsl(0, 0%, 95%)'
      },
      colors:{
        'BOrange':'hsl(31, 77%, 52%)',
        'DCyan':'hsl(184, 100%, 22%)',
        'VDCyan':'hsl(179, 100%, 13%)',
        'White':'hsla(0, 0%, 100%, 0.75)',
        'Gray':'hsl(0, 0%, 95%)'
      },
      fontFamily:{
        'LD':['Lexend Deca','sans-serif'],
        'BS':['Big Shoulders Display','cursive']
      },
      screens:{
        'Tablet':{'max':'900px'}
      }
    },
  },
  plugins: [],
}

