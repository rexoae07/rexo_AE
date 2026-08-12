/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505',
          soft: '#0a0a0b',
          card: 'rgba(255,255,255,0.035)',
          border: 'rgba(255,255,255,0.09)',
        },
        paper: {
          DEFAULT: '#f5f5f7',
          dim: '#a1a1a6',
          faint: '#6e6e73',
        },
      },
      fontFamily: {
        display: ['"General Sans"', '"Neue Montreal"', '-apple-system', 'sans-serif'],
        body: ['"General Sans"', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        'glass-lg': '0 24px 80px rgba(0,0,0,0.55)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
};
