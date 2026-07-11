/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        taupe: {
          900: '#211d18', // near-black warm — nav (scrolled), footer, ink text
          800: '#5c5546', // deep taupe — packages section background
          700: '#968c7c', // primary brand taupe — hero background
          600: '#aca295', // lighted taupe — secondary panels
          400: '#cfc6b8', // faint taupe — hairlines on dark
        },
        cream: '#f6f2ea', // card surface / light contrast section
        brass: {
          DEFAULT: '#b6935a', // signature accent — buttons, dividers, hover states
          light: '#e4cd98',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ringPulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(182, 147, 90, 0.35)' },
          '100%': { boxShadow: '0 0 0 18px rgba(182, 147, 90, 0)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' },
          '50%': { borderRadius: '60% 40% 35% 65% / 55% 65% 35% 45%' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        floatY: 'floatY 6s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        ringPulse: 'ringPulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blob: 'blob 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
