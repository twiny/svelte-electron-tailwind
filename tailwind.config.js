const colors = require('tailwindcss/colors')

// tailwind.config.cjs
module.exports = {
  mode: 'jit',
  // you dont need `purge: enabled: production` because you are using jit
  purge: [
    "./src/**/*.svelte",
    "./src/**/*.html",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',      // => @media (min-width: 640px) { ... }
      'md': '768px',      // => @media (min-width: 768px) { ... }
      'lg': '1024px',     // => @media (min-width: 1024px) { ... }
      'xl': '1280px',     // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',    // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: colors.black,
      white: colors.white,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue, // colors.lightBlue,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      gray: colors.gray, // warmGray, trueGray, coolGray, blueGray
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    outline: false,
  }
}