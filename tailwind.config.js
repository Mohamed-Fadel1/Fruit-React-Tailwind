/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary:"#fb923c",
        secondary :"#de2c4d"
      }
    },

    container :{
      center : true,
      padding : {
        DEFAULT : "1rem",
        md:"3rem",
        sm :"2rem",
        lg :"4rem",
        xl :"5rem",
        "2xl":"6rem"

      }
    }
  },
  plugins: [],
}

