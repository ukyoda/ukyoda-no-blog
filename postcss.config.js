const pxToRem = require('postcss-pxtorem')
const tailWindCss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    pxToRem({
      rootValue: 16,
      unitPrecision: 5,
      selectorBlackList: [],
    }),
    tailWindCss(),
    autoprefixer(),
  ],
}
