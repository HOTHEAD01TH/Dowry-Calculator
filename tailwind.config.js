/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/bg-image.jpg')", // Use your image here
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        pulseSlow: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
}
