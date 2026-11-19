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
            50: '#f0f8f3',
            100: '#dcf0e3',
            200: '#bbe1c9',
            300: '#8dcba6',
            400: '#58ae7f',
            500: '#349260',
            600: '#22754c',
            700: '#1b633e',
            800: '#164f33',
            900: '#12422b',
            950: '#092719',
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
