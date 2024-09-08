import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        indigo: '2px 2px 4px rgba(99, 102, 241, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        gradientAnimation: {
          '0%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '0% 100%' },
          '100%': { 'background-position': '100% 0%' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'gradient-move': 'gradientAnimation 10s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      },
      animationDelay: {
        '200': '100ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
        '1400': '1400ms',
      },
      backgroundSize: {
        '1000%': '1000% 1000%',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.text-shadow-indigo': {
          textShadow: '2px 2px 4px rgba(99, 102, 241, 0.5)', // Tailwind's indigo-500 color
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  darkMode: 'class',
};
export default config;
