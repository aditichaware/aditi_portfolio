/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        charcoal: {
          950: '#0E0F10',
          900: '#141517',
          850: '#191B1D',
          800: '#202226',
          700: '#2D3035',
          600: '#40444B',
          500: '#676C75',
          400: '#959BA5',
          300: '#C2C6CE',
          200: '#E1E3E8',
          100: '#F0F1F4',
        },
        sand: {
          50: '#FCFBF9',
          100: '#F7F5F0',
          200: '#EFECE4',
          300: '#E2DDD2',
          400: '#C8C2B3',
          500: '#A49D8C',
          800: '#3D3A32',
          900: '#22201B',
        },
        accent: {
          terracotta: '#D95D39',
          forest: '#2C5E43',
          olive: '#606C38',
          gold: '#D4A373',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        handwriting: ['"Caveat"', '"Reenie Beanie"', 'cursive'],
        editorial: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'photo': '0 10px 30px -10px rgba(0, 0, 0, 0.35)',
        'photo-light': '0 8px 24px -6px rgba(0, 0, 0, 0.12)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
