/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: '34rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
