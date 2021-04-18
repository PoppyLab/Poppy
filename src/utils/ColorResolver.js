const {colors} = require('../../config')
module.exports = class ColorResolver {
  static resolve(color) {
    if (typeof (color) !== 'string') throw new Error(`Unexpected type ${typeof color} while building the embed`)
    color = color.toLowerCase()
    const defaultColors = colors

    if (!color) color = null
    if (defaultColors[color]) {
      return defaultColors[color]
    }

    return parseInt(color.replace('#', ''), 16)
  }
}