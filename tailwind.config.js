module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/imgs/header.jpg')",
        'wave': "url('/imgs/wave.png')",
        'hexagon': "url('/imgs/hexagon.svg')",
        'animated': "url('/imgs/animated.svg')",
        'bubbles': "url('/imgs/bubbles.svg')",
        'shiny': "url('/imgs/shiny.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
