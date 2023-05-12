/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: { min: "50px", max: "767px" },

        md: { min: "768px", max: "1023px" },

        lg: { min: "1024px", max: "1279px" },

        xl: { min: "1280px", max: "1535px" },

        "2xl": { min: "1536px" },
      },
      colors: {
        primary: "#18150D",
        default: "#8e7424",
        golden: "#aa9144",
        base: "#5D5C59",
        heading: "#282725",
      },
    },
  },
  plugins: [],
};
