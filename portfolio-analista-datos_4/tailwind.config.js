/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F3ECDD',
          50: '#FAF6EC',
        },
        paper: '#FBF8F1',
        ink: {
          950: '#15100D',
          900: '#1B1512',
          700: '#3A322C',
          400: '#6B5F55',
          200: '#A79C8E',
        },
        line: '#DED2BC',
        burgundy: {
          600: '#4E0E18',
          500: '#6E1220',
          400: '#8C2434',
          300: '#B65A4A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(27,21,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,21,18,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(16px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
