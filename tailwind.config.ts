import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

/** @type {import("tailwindcss").Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
      keyframes: {
        wiggle: {
          '0%': { opacity: '0' },
          '25%': { opacity: '0,2' },
          '50%': { opacity: '0,3' },
          '75%': { opacity: '0,4' },
          '100%': { opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 4s ease-in',
        shimmer: 'shimmer 2s infinite',
        flicker: 'flicker 0.2s ease-in-out 3',
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
