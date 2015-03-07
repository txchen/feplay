(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var riot=require("riot");riot.tag("app",'<button onclick="{fivetimesdata}">*5 the world</button> <button onclick="{removeLast}">Remove last</button> <ul> <li each="{data}">{v}</li> </ul> <div>{ summary() }</div> <div>{ max() }</div>',function(){var t=this;t.data=[{v:1},{v:2},{v:3},{v:4}],fivetimesdata=function(){t.data.forEach(function(t){return t.v*=5})},removeLast=function(){t.data.splice(t.data.length-1)},summary=function(){return"there are "+t.data.length+" elements, sum = "+t.data.map(function(t){return t.v}).reduce(function(t,a){return t+a})},max=function(){return"max = "+helpers.max(t.data.map(function(t){return t.v}))}});
},{"riot":"riot"}],2:[function(require,module,exports){
"use strict";var helpers={max:function(e){return e.reduce(function(e,r){return e>r?e:r})}};module.exports=helpers;
},{}],3:[function(require,module,exports){
"use strict";window.helpers=require("./helpers.js"),require("./app.html"),require("riot").mount("app");
},{"./app.html":1,"./helpers.js":2,"riot":"riot"}]},{},[3])


//# sourceMappingURL=app.js.map