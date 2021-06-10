module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
      transitionTimingFunction: ['hover', 'focus'],
      height: ['hover', 'focus'],
    },
  },
  plugins: [],
}
