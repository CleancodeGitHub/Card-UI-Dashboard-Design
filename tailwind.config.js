/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'progress-fill': 'progress-fill 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}