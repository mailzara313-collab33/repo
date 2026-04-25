/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030304',
          900: '#08080a',
          800: '#0f0f12',
          700: '#17171b',
          600: '#202025',
          500: '#2b2b32',
          400: '#3a3a43',
          300: '#52525e',
        },
        gold: {
          DEFAULT: '#c8992a',
          50: '#fdf7e7',
          100: '#f9ebbb',
          200: '#f2d47f',
          300: '#e9b84a',
          400: '#dfa02a',
          500: '#c8992a',
          600: '#a67620',
          700: '#815718',
          800: '#634115',
          900: '#4d3214',
        },
        copper: {
          DEFAULT: '#b87442',
          light: '#d4956a',
          dark: '#8b5530',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['7.5rem', { lineHeight: '1' }],
        '10xl': ['9rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wide: '0.08em',
        wider: '0.16em',
        widest: '0.24em',
      },
      backgroundImage: {
        'grid-gold': `
          linear-gradient(rgba(200,153,42,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,153,42,0.06) 1px, transparent 1px)
        `,
        'grid-white': `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-md': '80px 80px',
        'grid-lg': '120px 120px',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'draw-line': 'drawLine 1.5s ease forwards',
        'scale-x': 'scaleX 1s cubic-bezier(0.16,1,0.3,1) forwards',
        'counter': 'counter 2s cubic-bezier(0.16,1,0.3,1) forwards',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        drawLine: {
          from: { strokeDashoffset: '2000' },
          to: { strokeDashoffset: '0' },
        },
        scaleX: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}
