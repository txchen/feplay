(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var riot = require('riot');
riot.tag('app', '<button onclick="{fivetimesdata}">*5 the world</button> <button onclick="{removeLast}">Remove last</button> <button __disabled="{insleeping}" onclick="{sleepSomeTime}">Sleep some time</button> <button onclick="{showDialog}">Show dialog</button> <ul> <li each="{data}">{v}</li> </ul> <div>{ summary() }</div> <div>{ max() }</div> <div name="sleep"></div>  <div class="md-modal md-effect-1 {md-show: dialogShowing}"> <div class="md-content"> <h3>Modal Dialog</h3> <div> <p>This is a modal window. You can do the following things with it:</p> <ul> <li><strong>Read:</strong> Modal windows will probably tell you something important so don\'t forget to read what it says.</li> <li><strong>Look:</strong> modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.</li> <li><strong>Close:</strong> click on the button below to close the modal.</li> </ul> <button class="md-close" onclick="{submitDialog}">Close me!</button> </div> </div> </div> <div class="md-overlay" onclick="{closeDialog}"></div>', 'app .md-modal { position: fixed; top: 50%; left: 50%; width: 50%; max-width: 630px; min-width: 320px; height: auto; z-index: 2000; visibility: hidden; -webkit-backface-visibility: hidden; backface-visibility: hidden; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); } app .md-show { visibility: visible; } app .md-overlay { position: fixed; width: 100%; height: 100%; visibility: hidden; top: 0; left: 0; z-index: 1000; opacity: 0; background: rgba(143,27,15,0.8); -webkit-transition: all 0.3s; transition: all 0.3s; } app .md-effect-1 .md-content { -webkit-transform: scale(0.7); -moz-transform: scale(0.7); -ms-transform: scale(0.7); transform: scale(0.7); opacity: 0; -webkit-transition: all 0.3s; -moz-transition: all 0.3s; transition: all 0.3s; } app .md-show.md-effect-1 .md-content { -webkit-transform: scale(1); -moz-transform: scale(1); -ms-transform: scale(1); transform: scale(1); opacity: 1; } app .md-show ~ .md-overlay { opacity: 1; visibility: visible; }', function(opts) {
var self = this;
var co = require("co");
self.data = [{ v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }];
self.insleeping = false;

this.fivetimesdata = function (e) {
  self.data.forEach(function (d) {
    return d.v *= 5;
  });
};

this.removeLast = function () {
  self.data.splice(self.data.length - 1);
};

this.showDialog = function () {
  self.dialogShowing = true;
};

this.submitDialog = function () {
  console.log("submit dialog");
  self.dialogShowing = false;
};

this.closeDialog = function () {
  self.dialogShowing = false;
};

sleepFunc = function (ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
};

this.sleepSomeTime = function () {
  co(regeneratorRuntime.mark(function callee$1$0() {
    return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          self.sleep.innerHTML = "sleeping";
          self.insleeping = true;
          context$2$0.next = 4;
          return sleepFunc(1000);

        case 4:
          self.sleep.innerHTML = "done with sleep";
          self.insleeping = false;
          self.update();

        case 7:
        case "end":
          return context$2$0.stop();
      }
    }, callee$1$0, this);
  }));
};

this.summary = function () {
  return "there are " + self.data.length + " elements,\nsum = " + self.data.map(function (d) {
    return d.v;
  }).reduce(function (a, b) {
    return a + b;
  });
};

this.max = function () {
  return "max = " + helpers.max(self.data.map(function (d) {
    return d.v;
  }));
};
});

},{"co":"co","riot":"riot"}],2:[function(require,module,exports){
"use strict";

var helpers = {
  max: function max(array) {
    return array.reduce(function (a, b) {
      return a > b ? a : b;
    });
  }
};

module.exports = helpers;

},{}],3:[function(require,module,exports){
"use strict";

require("babel/polyfill");
window.helpers = require("./helpers.js");
require("./app.html");
require("riot").mount("app");

},{"./app.html":1,"./helpers.js":2,"babel/polyfill":"babel/polyfill","riot":"riot"}]},{},[3]);
