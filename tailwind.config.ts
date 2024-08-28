import colors from 'tailwindcss/colors';
import { Config } from 'tailwindcss';

/** @type {import("tailwindcss").Config} */
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },

      textColor: {
        gradient: 'linear-gradient(to right, #3c9dda, #3c9dda)',
      },
    },
    colors: {
      black: colors.black,
      purple: '#3c9dda',
      pink: '#96b9cb',
      white: colors.white,
      lightblack: '#141414',
      gray: colors.gray,
      transparent: colors.transparent,
      red: colors.red,
      blue: '#61a8d4',
    },
    screens: {
      xxs: '320px',
      xs: '425px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    variants: {
      transitionProperty: ['hover', 'focus'],
      extend: {
        transform: ['hover', 'focus', 'active'],
      },
    },
  },
  plugins: [],
};

export default config;
