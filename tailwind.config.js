/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'oswald':["Oswald", "sans-serif"],
        "Nerko":[ "Nerko One", "cursive"],
        "Roboto": ["Roboto Slab", "serif"],
        "Inter": ["Inter", "sans-serif"],
        "josefin": ["Josefin Sans", "sans-serif"],
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

