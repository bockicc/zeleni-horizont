import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F8F6',
        forest: {
          DEFAULT: '#2D5A27',
          dark: '#23481F',
          light: '#4A7A43',
        },
        sage: {
          50: '#F2F6F1',
          100: '#E3ECE1',
          200: '#C9DAC5',
          300: '#A6C1A0',
        },
        terracotta: {
          DEFAULT: '#C86D51',
          dark: '#8D5B4C',
          light: '#D9866E',
        },
        accent: {
          yellow: '#E9D758',
        },
        charcoal: '#243124',
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(45, 90, 39, 0.08)',
        card: '0 8px 24px rgba(36, 49, 36, 0.08)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.25s ease-out both',
        'scale-in': 'scaleIn 0.25s ease-out both',
        pop: 'pop 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config;
