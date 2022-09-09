/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xxl: '300px',
      }
    },
  },
  plugins: [require("daisyui")],
}
