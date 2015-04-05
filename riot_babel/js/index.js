// to use co and regeneratorRuntime
require("babel/polyfill")
window.helpers = require('./helpers.js')
require('./app.html')
require('riot').mount('app')
