import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000929',
        secondary: '#7065F0',
        third: '#FFF',
        fourth: '#6C727F',
        fifth: '#100A55',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '1.5'], // 16px with line-height
        md: ['18px', '1.5'],
        lg: ['20px', '1.5'],
        h1: ['64px', '1'],
        h2: ['40px', '1.2'],
      },
    },
  },
  plugins: [],
} satisfies Config;
