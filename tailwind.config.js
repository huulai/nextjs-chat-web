/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#50924E",
      secondary: "#191B1F",
      "light-gray": "#D3D3D3",
      lotion: "#FAFAFA",
      white: "#FFFFFF",
      gunmetal: "#2A2D34",
      "virgo-green": "#50924E",
      "dark-silver": "#6A6C71",
      error: "#FF2626",
      info: "#22A3FF",
      warning: "#FFC63E",
      success: "#259A11",
    },
    fontFamily: {
      poppins: ["Poppins"],
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
