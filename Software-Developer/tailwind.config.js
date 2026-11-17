/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#ffffff',
          secondary: '#f5f5f5',
          card: '#fafafa',
          border: '#e5e5e5',
        },
        accent: {
          primary: '#ea580c',
          secondary: '#c2410c',
          glow: 'rgba(234, 88, 12, 0.12)',
        },
        progress: {
          fill: '#22c55e',
          light: '#4ade80',
        },
        text: {
          primary: '#0a0a0a',
          secondary: '#525252',
          muted: '#a3a3a3',
          accent: '#ea580c',
        },
        green: {
          glow: '#22c55e',
        }
      },
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"Source Sans 3"',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'pulse-dot': 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.25s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(234, 88, 12, 0.15)' },
          '50%': { boxShadow: '0 0 20px rgba(234, 88, 12, 0.35)' },
        },
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
