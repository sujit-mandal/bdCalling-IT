/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom colors using RGBA
        'blue-start': 'rgba(0, 108, 228, 1)', 
        'blue-end': 'rgba(0, 108, 228, .8)', 
      },
      backgroundImage: {
        'hero': "url('./src/assets/background.png')",
      }
    },
  },
  plugins: [],
}

