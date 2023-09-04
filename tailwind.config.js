/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      spacing: {
        '28': '20rem', // You can define your custom spacing value here
        '25': '12rem',
        '30': '2rem',
        '100': '13rem',
        '60': '60rem', //sec height
        '70': '115rem', //sec width
      }
    },
  },
  plugins: [],
}

