/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      default: ["Overpass"],
    },
    fontWeight: {
      hairline: 100,
      exlight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 450,
      semibold: 500,
      bold: 600,
      extrabold: 700,
      extrax: 800,
      black: 900,
    },
    extend: {
      colors: {
        backgorund: "#49B2E9",
        border: "rgba(255, 255, 255, 0.2)",
        card: "rgba(255, 255, 255, 0.2)",
      },
      dropShadow: {
        text: "rgba(0, 0, 0, 0.1)",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }
  
        md: "640px",
        // => @media (min-width: 640px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
