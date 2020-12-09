module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore', 'tab-bar'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
