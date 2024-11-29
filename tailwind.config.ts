import type { Config } from 'tailwindcss';
import { withUt } from "uploadthing/tw";
import animatePlugin from 'tailwindcss-animate';

const baseConfig: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}', // Including this line from the second export
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gold: '#FFD700',
      },
    },
  },
  plugins: [animatePlugin],
};

export default withUt(baseConfig);
