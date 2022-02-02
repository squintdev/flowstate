module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'retro-screen': '#969e7b',
      'primary-dark': '#252911',
      'retro-shadow': '#5c6144',
      'dark-active': '#22260e',
    },
    fontFamily: {
      'lcd': ['"ds-digital"', 'cursive'],
    },
    extend: {
      dropShadow: {
        'retro': '3px 3px 0 rgb(92, 97, 68, 1)',
      }
    },
  },
  plugins: [],
}