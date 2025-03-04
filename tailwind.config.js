/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/Tailwind.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontSize:{
        "22":"22px",
        "32": "32px",
      }
    },
  },
  plugins: [],
}

