/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        sm: "0.6rem",
        base: "0.8rem",
        xl: "1rem",
        "2xl": "1.2rem",
        "3xl": "1.3rem",
        "4xl": "1.4rem",
        "5xl": "2.5rem",
        h1: "2.5rem",
        h2: "1.4rem",
        h3: "1.2rem",
      },
      colors: {
        primary: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#C1C1C1",
          300: "#9B9B9B",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
