import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1300px',
    },
    fontFamily: {
      primary: 'var(--font-ar-one-sans)'
    },
    extend: {
      colors: {
        primary: '#601cc4',
        accent: {
          DEFAULT: '#7A3EDB',
          alt: '#24D400'
        },
        secondary: {
          DEFAULT: '#e87434',
          alt: '#16203A',
        },
        tertiary: {
          DEFAULT: '#BF7E00',
          alt: '#CC942F',
          dark: '#895A00'
        },
        footer: {
          DEFAULT: '#151515',
        },
      },
    },
  },
  plugins: [],
};
export default config;
