// tailwind.config.ts
// NOTE: Tailwind CSS v4 — la configuration principale se trouve dans
// src/app/globals.css via le bloc @theme.
// Ce fichier est conservé pour la compatibilité avec certains plugins.

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};

export default config;
