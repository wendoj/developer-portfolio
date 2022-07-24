/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'ultrawide': '1800px',
        'megawide': '2000px',
      }
    },
  },
  plugins: [],
};
