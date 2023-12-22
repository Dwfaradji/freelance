/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/Page/**/*.{js,ts,jsx,tsx,mdx}",
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
        h1: "1.6rem",
        h2: "1.4rem",
        h3: "1.2rem",
      },
      container: {
        center: true,
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(3, minmax(0, 1fr))",

        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
        display:"grid",
      },
      colors: {
        "regal-blue": "#4c98c9",
      },
      inputStyle: {
        "&:focus": {
          boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
          outline: "2px solid transparent",
          outlineOffset: "2px",
        },

      },
    },
  },
  plugins: [],
};
