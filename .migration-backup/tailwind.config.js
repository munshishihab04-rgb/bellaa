module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        rusoft: {
          pink: '#f1117e',
          red: '#dc2626',
          dark: '#111827',
          navy: '#1d1b20',
          gray: '#f6f7fa',
          lightgray: '#f5f5f5',
          border: '#e5e7eb',
          text: '#3f4a5a',
          blue: '#1c64ff',
          purple: '#7c3aed',
          purplebadge: '#6d28d9',
        },
      },
    },
  },
  plugins: [],
};
