/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        utrujjah: {
          green: {
            50: 'rgb(var(--color-brand-50, 240 248 243) / <alpha-value>)',
            100: 'rgb(var(--color-brand-100, 220 240 227) / <alpha-value>)',
            200: 'rgb(var(--color-brand-200, 187 225 201) / <alpha-value>)',
            300: 'rgb(var(--color-brand-300, 141 203 166) / <alpha-value>)',
            400: 'rgb(var(--color-brand-400, 88 174 127) / <alpha-value>)',
            500: 'rgb(var(--color-brand-500, 52 146 96) / <alpha-value>)',
            600: 'rgb(var(--color-brand-600, 34 117 76) / <alpha-value>)',
            700: 'rgb(var(--color-brand-700, 27 99 62) / <alpha-value>)',
            800: 'rgb(var(--color-brand-800, 22 79 51) / <alpha-value>)',
            900: 'rgb(var(--color-brand-900, 18 66 43) / <alpha-value>)',
            950: 'rgb(var(--color-brand-950, 9 39 25) / <alpha-value>)',
          },
          gold: {
            50: '#fdfaf2',
            100: '#f9f2dc',
            200: '#f2e3b5',
            300: '#e8ce84',
            400: '#ddb753',
            500: '#c59b27',
            600: '#b0821d',
            700: '#8c6218',
            800: '#734e19',
            900: '#604119',
            950: '#38230b',
          }
        }
      },
      fontFamily: {
        tajawal: ['Tajawal', 'sans-serif'],
        alexandria: ['Alexandria', 'sans-serif'],
        ibm: ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(20, 90, 50, 0.1), 0 8px 15px -6px rgba(197, 155, 39, 0.1)',
        'luxury-hover': '0 20px 40px -10px rgba(20, 90, 50, 0.18), 0 12px 20px -8px rgba(197, 155, 39, 0.15)',
        'gold-glow': '0 0 25px rgba(197, 155, 39, 0.35)',
        'green-glow': '0 0 25px rgba(22, 99, 62, 0.35)',
      }
    },
  },
  plugins: [],
}
