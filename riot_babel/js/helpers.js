'use strict'
var helpers = {
  max(array) {
    return array.reduce((a, b) => a > b ? a : b)
  }
}

module.exports = helpers
