/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url('../src/marek-piwnicki-5jay5exvpuE-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}
