/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight:{
        'LineCustome':"5rem"
      },
      minHeight: {
        'vh-custom': '70vh', // Define your custom min height value using viewport height
      },
      screens: {
        'xs': '300px', // custom breakpoint for extra small screens
      },
      height:{
        'vh':"30rem"
      }
    },
  },
  plugins: [],
}

