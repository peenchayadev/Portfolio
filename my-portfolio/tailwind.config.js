/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        desktop: { min: '1280px' },
        tablet: { max: '1279px', min: '399px' },
        mobile: { max: '400px' },
      },
     
    },
  },
  plugins: [
  ],
}