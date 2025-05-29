/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3D5AFE',
        secondary: '#2952E3',
        accent: '#FF9800',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end) forwards, blink-caret 0.75s step-end infinite',
        glow: 'glow 2s ease-in-out infinite',
        neuralPulse: 'neuralPulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};