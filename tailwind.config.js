/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:          '#22A32B',
        'primary-bright': '#2ECA3A',
        secondary:        '#662D91',
        accent:           '#F2C100',
        neutralBase:      '#FFFFFF',
        neutralMuted:     '#F5F5F5',
        textBase:         '#333333',
        textTitle:        '#111111',
        // ── Dark Premium Surfaces ──
        'dk-bg':       '#121212',   // anthracite base (never pure black)
        'dk-surface':  '#1E1E1E',   // cards / navbar / dropdowns
        'dk-surface2': '#242424',   // table headers / elevated elements
        'dk-border':   '#2D2D2D',   // dividers
        'dk-glow':     '#2D1442',   // dark purple radial accent
        // ── Dark Typography ──
        'dk-text':     '#FFFFFF',   // headings
        'dk-text-muted': '#B3B3B3', // body / descriptions
        // ── Dark Brand ──
        'dk-purple':   '#A875D7',   // accessible purple for text/icons on dark bg
        'darkPurpleBorder': '#4A2169',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter:  ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0)   scale(1)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heroReveal: {
          '0%':   { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up':     'fadeInUp 0.65s ease-out forwards',
        'fade-in':        'fadeIn 0.8s ease-out forwards',
        'fade-in-delayed':'fadeIn 0.8s ease-out 0.3s forwards',
        'scale-in':       'scaleIn 0.5s ease-out forwards',
        'hero-reveal':    'heroReveal 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

