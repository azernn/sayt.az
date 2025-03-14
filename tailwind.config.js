/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{htm,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '340px',
      'tablet': '640px',
      'lmd': '550px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

