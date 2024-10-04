/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bg-image.jpg')",
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        pulseSlow: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}