/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif', ],
        nuni: ['Nunito', 'sans-serif', ],
        work: ['Work Sans', 'sans-serif', ],
        robo: ['Roboto', 'sans-serif', ],
        pap: ['Paprika', 'sans-serif', ],
      },
      backgroundImage: {
        'bannerbg': "url('/src/assets/bannerbg.png')",
        'banner': "url('/src/assets/banner.png')",
       
      },
    },
  },
  plugins: [],
}


