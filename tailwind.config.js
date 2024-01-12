/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gn: "#84bd00",
        yell: "#FFFF00",
        red: "#e74c3c "
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      filter:{
        'black': 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)',
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
     
  },
  plugins: [],
};
