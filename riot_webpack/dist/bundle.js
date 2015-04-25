/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	__webpack_require__(3);
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	__webpack_require__(5);
	
	riot.mount('app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	var _RiotControlApi = ['on', 'one', 'off', 'trigger'];
	var RiotControl = {
	  _stores: [],
	  addStore: function addStore(store) {
	    this._stores.push(store);
	  }
	};
	_RiotControlApi.forEach(function (api) {
	  RiotControl[api] = function () {
	    var args = [].slice.call(arguments);
	    this._stores.forEach(function (el) {
	      return el[api].apply(null, args);
	    });
	  };
	});
	
	// since riot is auto loaded by ProvidePlugin, merge the control into the riot object
	riot.control = RiotControl;
	// store events
	riot.SE = {
	  POSTS_CHANGED: 'se_posts_changed' };
	// view events
	riot.VE = {
	  RESET_DATA: 've_reset_data',
	  LIKE_POST: 've_like_post',
	  LOAD_POSTS: 've_load_posts' };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _blogStore = __webpack_require__(7);
	
	var _blogStore2 = _interopRequireWildcard(_blogStore);
	
	// register all the stores here
	var stores = {
	  blog: _blogStore2['default']
	};
	
	exports['default'] = stores;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./tacit.min.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./tacit.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	exports.push([module.id, "th{font-weight:600}td,th{border-bottom:1.08px solid #ccc;padding:14.85px 18px}thead th{border-bottom-width:2.16px;padding-bottom:6.3px}table{display:block;max-width:100%;overflow-x:auto}input,textarea,select,button{display:block;padding:9.9px}label{display:block;margin-bottom:14.76px}input[type=\"submit\"],input[type=\"reset\"],button{background:#b3b3b3;border-radius:3.6px;color:#fff;cursor:pointer;display:inline;margin-bottom:18px;margin-right:7.2px;padding:6.525px 23.4px;text-align:center}input[type=\"submit\"]:hover,input[type=\"reset\"]:hover,button:hover{background:#a6a6a6;color:#bfbfbf}input[type=\"submit\"],button[type=\"submit\"]{background:#367ac3;color:#fff}input[type=\"submit\"]:hover,button[type=\"submit\"]:hover{background:#255587;color:#bfbfbf}input[type=\"text\"],input[type=\"password\"],input[type=\"email\"],input[type=\"url\"],input[type=\"phone\"],input[type=\"tel\"],input[type=\"number\"],input[type=\"datetime\"],input[type=\"date\"],input[type=\"month\"],input[type=\"color\"],input[type=\"time\"],input[type=\"search\"],input[type=\"range\"],input[type=\"file\"],input[type=\"datetime-local\"],select,textarea{border:1px solid #ccc;margin-bottom:18px;padding:5.4px 6.3px}input[type=\"checkbox\"]{float:left;line-height:36px;margin-right:9px;margin-top:8.1px}pre,code,kbd,samp,var,output{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace;font-size:16.2px}pre{border-left:1.8px solid #96bbe2;line-height:25.2px;margin-top:29.7px;overflow:auto;padding-left:18px}pre code{background:none;border:0;line-height:29.7px;padding:0}code{background:#ededed;border:1.8px solid #ccc;border-radius:3.6px;display:inline-block;line-height:18px;padding:3px 6px 2px}h1,h2,h3,h4,h5,h6{color:#000}h1{font-size:36px;font-weight:500;margin-bottom:18px;margin-top:36px}h2{font-size:25.2px;font-weight:400;margin-bottom:18px;margin-top:27px}h3{font-size:18px;margin-bottom:18px;margin-top:21.6px}h4,h5,h6{font-size:36px;margin-bottom:18px;margin-top:36px}a{color:#367ac3;text-decoration:none}a:hover{text-decoration:underline}hr{border-bottom:1px solid #ccc}small{font-size:15.3px}em,i{font-style:italic}strong,b{font-weight:500}*{border:0;border-collapse:separate;border-spacing:0;box-sizing:border-box;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px;margin:0;outline:0;padding:0;text-align:left;vertical-align:baseline}body{background:#f5f5f5;color:#1a1a1a;padding:36px}p,ul,ol,dl,blockquote,hr,pre,table,form,fieldset,figure,address{margin-bottom:29.7px}section{margin-left:auto;margin-right:auto;max-width:100%;width:900px}article{background:#fff;border:1.8px solid #d9d9d9;border-radius:7.2px;padding:43.2px}header{margin-bottom:36px}footer{margin-top:36px}nav{text-align:center}nav ul{list-style:none;text-align:center}nav ul li{display:inline;margin-left:9px;margin-right:9px}@media (max-width: 767px){body{padding:18px}article{border-radius:0;margin:-18px;padding:18px}textarea,input,select{max-width:100%}fieldset{min-width:0}@-moz-document url-prefix(){fieldset{display:table-cell}}section{width:auto}}\n/*# sourceMappingURL=tacit-0.3.5.min.css.map */\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag('app', '<section> <header> <nav> <ul> <li><a href="#posts">Posts</a></li> <li><a href="#categories">Categories</a></li> </ul> </nav> </header> <article> <div id="mainview"></div> </article> <footer> <nav> <a onclick="{resetData}">Reset Data</a> </nav> </footer> </section>', function(opts) {var _this = this;
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	this._currentView = null;
	
	this.resetData = function () {
	  riot.control.trigger(riot.VE.RESET_DATA);
	};
	
	loadView = function (viewName, id) {
	  if (_this._currentView) {
	    _this._currentView.unmount(true);
	  }
	  _this._currentView = riot.mountTo('div#mainview', viewName, { data: id })[0];
	};
	
	studyRoute = function (view, id) {
	  switch (view) {
	    case 'categories':
	      loadView('categories-view');
	      break;
	    case 'detail':
	      loadView('detail-view', id);
	      break;
	    case 'posts':
	      loadView('posts-view');
	      break;
	    default:
	      loadView('posts-view');
	  }
	};
	
	riot.route(studyRoute);
	
	this.on('mount', function () {
	  riot.route.exec(studyRoute);
	});
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* Riot v2.0.15, @license MIT, (c) 2015 Muut Inc. + contributors */
	
	;(function(window) {
	  // 'use strict' does not allow us to override the events properties https://github.com/muut/riotjs/blob/dev/lib/tag/update.js#L7-L10
	  // it leads to the following error on firefox "setting a property that has only a getter"
	  //'use strict'
	
	  var riot = { version: 'v2.0.15', settings: {} },
	      ieVersion = checkIE()
	
	riot.observable = function(el) {
	
	  el = el || {}
	
	  var callbacks = {},
	      _id = 0
	
	  el.on = function(events, fn) {
	    if (typeof fn == 'function') {
	      fn._id = typeof fn._id == 'undefined' ? _id++ : fn._id
	
	      events.replace(/\S+/g, function(name, pos) {
	        (callbacks[name] = callbacks[name] || []).push(fn)
	        fn.typed = pos > 0
	      })
	    }
	    return el
	  }
	
	  el.off = function(events, fn) {
	    if (events == '*') callbacks = {}
	    else {
	      events.replace(/\S+/g, function(name) {
	        if (fn) {
	          var arr = callbacks[name]
	          for (var i = 0, cb; (cb = arr && arr[i]); ++i) {
	            if (cb._id == fn._id) { arr.splice(i, 1); i-- }
	          }
	        } else {
	          callbacks[name] = []
	        }
	      })
	    }
	    return el
	  }
	
	  // only single event supported
	  el.one = function(name, fn) {
	    function on() {
	      el.off(name, on)
	      fn.apply(el, arguments)
	    }
	    return el.on(name, on)
	  }
	
	  el.trigger = function(name) {
	    var args = [].slice.call(arguments, 1),
	        fns = callbacks[name] || []
	
	    for (var i = 0, fn; (fn = fns[i]); ++i) {
	      if (!fn.busy) {
	        fn.busy = 1
	        fn.apply(el, fn.typed ? [name].concat(args) : args)
	        if (fns[i] !== fn) { i-- }
	        fn.busy = 0
	      }
	    }
	
	    if (callbacks.all && name != 'all') {
	      el.trigger.apply(el, ['all', name].concat(args))
	    }
	
	    return el
	  }
	
	  return el
	
	}
	;(function(riot, evt, window) {
	
	  // browsers only
	  if (!window) return
	
	  var loc = window.location,
	      fns = riot.observable(),
	      win = window,
	      started = false,
	      current
	
	  function hash() {
	    return loc.href.split('#')[1] || ''
	  }
	
	  function parser(path) {
	    return path.split('/')
	  }
	
	  function emit(path) {
	    if (path.type) path = hash()
	
	    if (path != current) {
	      fns.trigger.apply(null, ['H'].concat(parser(path)))
	      current = path
	    }
	  }
	
	  var r = riot.route = function(arg) {
	    // string
	    if (arg[0]) {
	      loc.hash = arg
	      emit(arg)
	
	    // function
	    } else {
	      fns.on('H', arg)
	    }
	  }
	
	  r.exec = function(fn) {
	    fn.apply(null, parser(hash()))
	  }
	
	  r.parser = function(fn) {
	    parser = fn
	  }
	
	  r.stop = function () {
	    if (!started) return
	    win.removeEventListener ? win.removeEventListener(evt, emit, false) : win.detachEvent('on' + evt, emit)
	    fns.off('*')
	    started = false
	  }
	
	  r.start = function () {
	    if (started) return
	    win.addEventListener ? win.addEventListener(evt, emit, false) : win.attachEvent('on' + evt, emit)
	    started = true
	  }
	
	  // autostart the router
	  r.start()
	
	})(riot, 'hashchange', window)
	/*
	
	//// How it works?
	
	
	Three ways:
	
	1. Expressions: tmpl('{ value }', data).
	   Returns the result of evaluated expression as a raw object.
	
	2. Templates: tmpl('Hi { name } { surname }', data).
	   Returns a string with evaluated expressions.
	
	3. Filters: tmpl('{ show: !done, highlight: active }', data).
	   Returns a space separated list of trueish keys (mainly
	   used for setting html classes), e.g. "show highlight".
	
	
	// Template examples
	
	tmpl('{ title || "Untitled" }', data)
	tmpl('Results are { results ? "ready" : "loading" }', data)
	tmpl('Today is { new Date() }', data)
	tmpl('{ message.length > 140 && "Message is too long" }', data)
	tmpl('This item got { Math.round(rating) } stars', data)
	tmpl('<h1>{ title }</h1>{ body }', data)
	
	
	// Falsy expressions in templates
	
	In templates (as opposed to single expressions) all falsy values
	except zero (undefined/null/false) will default to empty string:
	
	tmpl('{ undefined } - { false } - { null } - { 0 }', {})
	// will return: " - - - 0"
	
	*/
	
	
	var brackets = (function(orig, s, b) {
	  return function(x) {
	
	    // make sure we use the current setting
	    s = riot.settings.brackets || orig
	    if (b != s) b = s.split(' ')
	
	    // if regexp given, rewrite it with current brackets (only if differ from default)
	    return x && x.test
	      ? s == orig
	        ? x : RegExp(x.source
	                      .replace(/\{/g, b[0].replace(/(?=.)/g, '\\'))
	                      .replace(/\}/g, b[1].replace(/(?=.)/g, '\\')),
	                    x.global ? 'g' : '')
	
	      // else, get specific bracket
	      : b[x]
	
	  }
	})('{ }')
	
	
	var tmpl = (function() {
	
	  var cache = {},
	      reVars = /(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi
	              // [ 1               ][ 2  ][ 3 ][ 4                                                                                  ][ 5       ]
	              // find variable names:
	              // 1. skip quoted strings and regexps: "a b", 'a b', 'a \'b\'', /a b/
	              // 2. skip object properties: .name
	              // 3. skip object literals: name:
	              // 4. skip javascript keywords
	              // 5. match var name
	
	  // build a template (or get it from cache), render with data
	  return function(str, data) {
	    return str && (cache[str] = cache[str] || tmpl(str))(data)
	  }
	
	
	  // create a template instance
	
	  function tmpl(s, p) {
	
	    // default template string to {}
	    s = (s || (brackets(0) + brackets(1)))
	
	      // temporarily convert \{ and \} to a non-character
	      .replace(brackets(/\\{/g), '\uFFF0')
	      .replace(brackets(/\\}/g), '\uFFF1')
	
	    // split string to expression and non-expresion parts
	    p = split(s, extract(s, brackets(/{/), brackets(/}/)))
	
	    return new Function('d', 'return ' + (
	
	      // is it a single expression or a template? i.e. {x} or <b>{x}</b>
	      !p[0] && !p[2] && !p[3]
	
	        // if expression, evaluate it
	        ? expr(p[1])
	
	        // if template, evaluate all expressions in it
	        : '[' + p.map(function(s, i) {
	
	            // is it an expression or a string (every second part is an expression)
	          return i % 2
	
	              // evaluate the expressions
	              ? expr(s, true)
	
	              // process string parts of the template:
	              : '"' + s
	
	                  // preserve new lines
	                  .replace(/\n/g, '\\n')
	
	                  // escape quotes
	                  .replace(/"/g, '\\"')
	
	                + '"'
	
	        }).join(',') + '].join("")'
	      )
	
	      // bring escaped { and } back
	      .replace(/\uFFF0/g, brackets(0))
	      .replace(/\uFFF1/g, brackets(1))
	
	    + ';')
	
	  }
	
	
	  // parse { ... } expression
	
	  function expr(s, n) {
	    s = s
	
	      // convert new lines to spaces
	      .replace(/\n/g, ' ')
	
	      // trim whitespace, brackets, strip comments
	      .replace(brackets(/^[{ ]+|[ }]+$|\/\*.+?\*\//g), '')
	
	    // is it an object literal? i.e. { key : value }
	    return /^\s*[\w- "']+ *:/.test(s)
	
	      // if object literal, return trueish keys
	      // e.g.: { show: isOpen(), done: item.done } -> "show done"
	      ? '[' +
	
	          // extract key:val pairs, ignoring any nested objects
	          extract(s,
	
	              // name part: name:, "name":, 'name':, name :
	              /["' ]*[\w- ]+["' ]*:/,
	
	              // expression part: everything upto a comma followed by a name (see above) or end of line
	              /,(?=["' ]*[\w- ]+["' ]*:)|}|$/
	              ).map(function(pair) {
	
	                // get key, val parts
	                return pair.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/, function(_, k, v) {
	
	                  // wrap all conditional parts to ignore errors
	                  return v.replace(/[^&|=!><]+/g, wrap) + '?"' + k + '":"",'
	
	                })
	
	              }).join('')
	
	        + '].join(" ").trim()'
	
	      // if js expression, evaluate as javascript
	      : wrap(s, n)
	
	  }
	
	
	  // execute js w/o breaking on errors or undefined vars
	
	  function wrap(s, nonull) {
	    s = s.trim()
	    return !s ? '' : '(function(v){try{v='
	
	        // prefix vars (name => data.name)
	        + (s.replace(reVars, function(s, _, v) { return v ? '(d.'+v+'===undefined?'+(typeof window == 'undefined' ? 'global.' : 'window.')+v+':d.'+v+')' : s })
	
	          // break the expression if its empty (resulting in undefined value)
	          || 'x')
	
	      + '}finally{return '
	
	        // default to empty string for falsy values except zero
	        + (nonull === true ? '!v&&v!==0?"":v' : 'v')
	
	      + '}}).call(d)'
	  }
	
	
	  // split string by an array of substrings
	
	  function split(str, substrings) {
	    var parts = []
	    substrings.map(function(sub, i) {
	
	      // push matched expression and part before it
	      i = str.indexOf(sub)
	      parts.push(str.slice(0, i), sub)
	      str = str.slice(i + sub.length)
	    })
	
	    // push the remaining part
	    return parts.concat(str)
	  }
	
	
	  // match strings between opening and closing regexp, skipping any inner/nested matches
	
	  function extract(str, open, close) {
	
	    var start,
	        level = 0,
	        matches = [],
	        re = new RegExp('('+open.source+')|('+close.source+')', 'g')
	
	    str.replace(re, function(_, open, close, pos) {
	
	      // if outer inner bracket, mark position
	      if(!level && open) start = pos
	
	      // in(de)crease bracket level
	      level += open ? 1 : -1
	
	      // if outer closing bracket, grab the match
	      if(!level && close != null) matches.push(str.slice(start, pos+close.length))
	
	    })
	
	    return matches
	  }
	
	})()
	
	// { key, i in items} -> { key, i, items }
	function loopKeys(expr) {
	  var ret = { val: expr },
	      els = expr.split(/\s+in\s+/)
	
	  if (els[1]) {
	    ret.val = brackets(0) + els[1]
	    els = els[0].slice(brackets(0).length).trim().split(/,\s*/)
	    ret.key = els[0]
	    ret.pos = els[1]
	  }
	
	  return ret
	}
	
	function mkitem(expr, key, val) {
	  var item = {}
	  item[expr.key] = key
	  if (expr.pos) item[expr.pos] = val
	  return item
	}
	
	
	/* Beware: heavy stuff */
	function _each(dom, parent, expr) {
	
	  remAttr(dom, 'each')
	
	  var template = dom.outerHTML,
	      prev = dom.previousSibling,
	      root = dom.parentNode,
	      rendered = [],
	      tags = [],
	      checksum
	
	  expr = loopKeys(expr)
	
	  function add(pos, item, tag) {
	    rendered.splice(pos, 0, item)
	    tags.splice(pos, 0, tag)
	  }
	
	  // clean template code
	  parent.one('update', function() {
	    root.removeChild(dom)
	
	  }).one('premount', function() {
	    if (root.stub) root = parent.root
	
	  }).on('update', function() {
	
	    var items = tmpl(expr.val, parent)
	    if (!items) return
	
	    // object loop. any changes cause full redraw
	    if (!Array.isArray(items)) {
	      var testsum = JSON.stringify(items)
	      if (testsum == checksum) return
	      checksum = testsum
	
	      // clear old items
	      each(tags, function(tag) { tag.unmount() })
	      rendered = []
	      tags = []
	
	      items = Object.keys(items).map(function(key) {
	        return mkitem(expr, key, items[key])
	      })
	
	    }
	
	    // unmount redundant
	    each(rendered, function(item) {
	      if (item instanceof Object) {
	        // skip existing items
	        if (items.indexOf(item) > -1) {
	          return
	        }
	      } else {
	        // find all non-objects
	        var newItems = arrFindEquals(items, item),
	            oldItems = arrFindEquals(rendered, item)
	
	        // if more or equal amount, no need to remove
	        if (newItems.length >= oldItems.length) {
	          return
	        }
	      }
	      var pos = rendered.indexOf(item),
	          tag = tags[pos]
	
	      if (tag) {
	        tag.unmount()
	        rendered.splice(pos, 1)
	        tags.splice(pos, 1)
	        // to let "each" know that this item is removed
	        return false
	      }
	
	    })
	
	    // mount new / reorder
	    var prevBase = [].indexOf.call(root.childNodes, prev) + 1
	    each(items, function(item, i) {
	
	      // start index search from position based on the current i
	      var pos = items.indexOf(item, i),
	          oldPos = rendered.indexOf(item, i)
	
	      // if not found, search backwards from current i position
	      pos < 0 && (pos = items.lastIndexOf(item, i))
	      oldPos < 0 && (oldPos = rendered.lastIndexOf(item, i))
	
	      if (!(item instanceof Object)) {
	        // find all non-objects
	        var newItems = arrFindEquals(items, item),
	            oldItems = arrFindEquals(rendered, item)
	
	        // if more, should mount one new
	        if (newItems.length > oldItems.length) {
	          oldPos = -1
	        }
	      }
	
	      // mount new
	      var nodes = root.childNodes
	      if (oldPos < 0) {
	        if (!checksum && expr.key) var _item = mkitem(expr, item, pos)
	
	        var tag = new Tag({ tmpl: template }, {
	          before: nodes[prevBase + pos],
	          parent: parent,
	          root: root,
	          item: _item || item
	        })
	
	        tag.mount()
	
	        add(pos, item, tag)
	        return true
	      }
	
	      // change pos value
	      if (expr.pos && tags[oldPos][expr.pos] != pos) {
	        tags[oldPos].one('update', function(item) {
	          item[expr.pos] = pos
	        })
	        tags[oldPos].update()
	      }
	
	      // reorder
	      if (pos != oldPos) {
	        root.insertBefore(nodes[prevBase + oldPos], nodes[prevBase + (pos > oldPos ? pos + 1 : pos)])
	        return add(pos, rendered.splice(oldPos, 1)[0], tags.splice(oldPos, 1)[0])
	      }
	
	    })
	
	    rendered = items.slice()
	
	  })
	
	}
	
	
	function parseNamedElements(root, parent, childTags) {
	
	  walk(root, function(dom) {
	    if (dom.nodeType == 1) {
	      if(dom.parentNode && dom.parentNode.isLoop) dom.isLoop = 1
	      if(dom.getAttribute('each')) dom.isLoop = 1
	      // custom child tag
	      var child = getTag(dom)
	
	      if (child && !dom.isLoop) {
	        var tag = new Tag(child, { root: dom, parent: parent }, dom.innerHTML),
	          tagName = child.name,
	          ptag = parent,
	          cachedTag
	
	        while(!getTag(ptag.root)) {
	          if(!ptag.parent) break
	          ptag = ptag.parent
	        }
	        // fix for the parent attribute in the looped elements
	        tag.parent = ptag
	
	        cachedTag = ptag.tags[tagName]
	
	        // if there are multiple children tags having the same name
	        if (cachedTag) {
	          // if the parent tags property is not yet an array
	          // create it adding the first cached tag
	          if (!Array.isArray(cachedTag))
	            ptag.tags[tagName] = [cachedTag]
	          // add the new nested tag to the array
	          ptag.tags[tagName].push(tag)
	        } else {
	          ptag.tags[tagName] = tag
	        }
	
	        // empty the child node once we got its template
	        // to avoid that its children get compiled multiple times
	        dom.innerHTML = ''
	        childTags.push(tag)
	      }
	
	      each(dom.attributes, function(attr) {
	        if (/^(name|id)$/.test(attr.name)) parent[attr.value] = dom
	      })
	    }
	
	  })
	
	}
	
	function parseExpressions(root, tag, expressions) {
	
	  function addExpr(dom, val, extra) {
	    if (val.indexOf(brackets(0)) >= 0) {
	      var expr = { dom: dom, expr: val }
	      expressions.push(extend(expr, extra))
	    }
	  }
	
	  walk(root, function(dom) {
	    var type = dom.nodeType
	
	    // text node
	    if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
	    if (type != 1) return
	
	    /* element */
	
	    // loop
	    var attr = dom.getAttribute('each')
	    if (attr) { _each(dom, tag, attr); return false }
	
	    // attribute expressions
	    each(dom.attributes, function(attr) {
	      var name = attr.name,
	        bool = name.split('__')[1]
	
	      addExpr(dom, attr.value, { attr: bool || name, bool: bool })
	      if (bool) { remAttr(dom, name); return false }
	
	    })
	
	    // skip custom tags
	    if (getTag(dom)) return false
	
	  })
	
	}
	function Tag(impl, conf, innerHTML) {
	
	  var self = riot.observable(this),
	      opts = inherit(conf.opts) || {},
	      dom = mkdom(impl.tmpl),
	      parent = conf.parent,
	      expressions = [],
	      childTags = [],
	      root = conf.root,
	      item = conf.item,
	      fn = impl.fn,
	      tagName = root.tagName.toLowerCase(),
	      attr = {},
	      loopDom
	
	  if (fn && root._tag) {
	    root._tag.unmount(true)
	  }
	  // keep a reference to the tag just created
	  // so we will be able to mount this tag multiple times
	  root._tag = this
	
	  // create a unique id to this tag
	  // it could be handy to use it also to improve the virtual dom rendering speed
	  this._id = ~~(new Date().getTime() * Math.random())
	
	  extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item)
	
	  // grab attributes
	  each(root.attributes, function(el) {
	    attr[el.name] = el.value
	  })
	
	
	  if (dom.innerHTML && !/select/.test(tagName))
	    // replace all the yield tags with the tag inner html
	    dom.innerHTML = replaceYield(dom.innerHTML, innerHTML)
	
	
	  // options
	  function updateOpts() {
	    each(Object.keys(attr), function(name) {
	      opts[name] = tmpl(attr[name], parent || self)
	    })
	  }
	
	  this.update = function(data, init) {
	    extend(self, data, item)
	    updateOpts()
	    self.trigger('update', item)
	    update(expressions, self, item)
	    self.trigger('updated')
	  }
	
	  this.mount = function() {
	
	    updateOpts()
	
	    // initialiation
	    fn && fn.call(self, opts)
	
	    toggle(true)
	
	    // parse layout after init. fn may calculate args for nested custom tags
	    parseExpressions(dom, self, expressions)
	
	    if (!self.parent) self.update()
	
	    // internal use only, fixes #403
	    self.trigger('premount')
	
	    if (fn) {
	      while (dom.firstChild) root.appendChild(dom.firstChild)
	
	    } else {
	      loopDom = dom.firstChild
	      root.insertBefore(loopDom, conf.before || null) // null needed for IE8
	    }
	
	    if (root.stub) self.root = root = parent.root
	    self.trigger('mount')
	
	  }
	
	
	  this.unmount = function(keepRootTag) {
	    var el = fn ? root : loopDom,
	        p = el.parentNode
	
	    if (p) {
	
	      if (parent) {
	        // remove this tag from the parent tags object
	        // if there are multiple nested tags with same name..
	        // remove this element form the array
	        if (Array.isArray(parent.tags[tagName])) {
	          each(parent.tags[tagName], function(tag, i) {
	            if (tag._id == self._id)
	              parent.tags[tagName].splice(i, 1)
	          })
	        } else
	          // otherwise just delete the tag instance
	          delete parent.tags[tagName]
	      } else {
	        while (el.firstChild) el.removeChild(el.firstChild)
	      }
	
	      if (!keepRootTag)
	        p.removeChild(el)
	
	    }
	
	
	    self.trigger('unmount')
	    toggle()
	    self.off('*')
	    // somehow ie8 does not like `delete root._tag`
	    root._tag = null
	
	  }
	
	  function toggle(isMount) {
	
	    // mount/unmount children
	    each(childTags, function(child) { child[isMount ? 'mount' : 'unmount']() })
	
	    // listen/unlisten parent (events flow one way from parent to children)
	    if (parent) {
	      var evt = isMount ? 'on' : 'off'
	      parent[evt]('update', self.update)[evt]('unmount', self.unmount)
	    }
	  }
	
	  // named elements available for fn
	  parseNamedElements(dom, this, childTags)
	
	
	}
	
	function setEventHandler(name, handler, dom, tag, item) {
	
	  dom[name] = function(e) {
	
	    // cross browser event fix
	    e = e || window.event
	    e.which = e.which || e.charCode || e.keyCode
	    e.target = e.target || e.srcElement
	    e.currentTarget = dom
	    e.item = item
	
	    // prevent default behaviour (by default)
	    if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
	      e.preventDefault && e.preventDefault()
	      e.returnValue = false
	    }
	
	    var el = item ? tag.parent : tag
	    el.update()
	
	  }
	
	}
	
	// used by if- attribute
	function insertTo(root, node, before) {
	  if (root) {
	    root.insertBefore(before, node)
	    root.removeChild(node)
	  }
	}
	
	// item = currently looped item
	function update(expressions, tag, item) {
	
	  each(expressions, function(expr, i) {
	
	    var dom = expr.dom,
	        attrName = expr.attr,
	        value = tmpl(expr.expr, tag),
	        parent = expr.dom.parentNode
	
	    if (value == null) value = ''
	
	    // leave out riot- prefixes from strings inside textarea
	    if (parent && parent.tagName == 'TEXTAREA') value = value.replace(/riot-/g, '')
	
	    // no change
	    if (expr.value === value) return
	    expr.value = value
	
	    // text node
	    if (!attrName) return dom.nodeValue = value
	
	    // remove original attribute
	    remAttr(dom, attrName)
	
	    // event handler
	    if (typeof value == 'function') {
	      setEventHandler(attrName, value, dom, tag, item)
	
	    // if- conditional
	    } else if (attrName == 'if') {
	      var stub = expr.stub
	
	      // add to DOM
	      if (value) {
	        stub && insertTo(stub.parentNode, stub, dom)
	
	      // remove from DOM
	      } else {
	        stub = expr.stub = stub || document.createTextNode('')
	        insertTo(dom.parentNode, dom, stub)
	      }
	
	    // show / hide
	    } else if (/^(show|hide)$/.test(attrName)) {
	      if (attrName == 'hide') value = !value
	      dom.style.display = value ? '' : 'none'
	
	    // field value
	    } else if (attrName == 'value') {
	      dom.value = value
	
	    // <img src="{ expr }">
	    } else if (attrName.slice(0, 5) == 'riot-') {
	      attrName = attrName.slice(5)
	      value ? dom.setAttribute(attrName, value) : remAttr(dom, attrName)
	
	    } else {
	      if (expr.bool) {
	        dom[attrName] = value
	        if (!value) return
	        value = attrName
	      }
	
	      if (typeof value != 'object') dom.setAttribute(attrName, value)
	
	    }
	
	  })
	
	}
	function each(els, fn) {
	  for (var i = 0, len = (els || []).length, el; i < len; i++) {
	    el = els[i]
	    // return false -> remove current item during loop
	    if (el != null && fn(el, i) === false) i--
	  }
	  return els
	}
	
	function remAttr(dom, name) {
	  dom.removeAttribute(name)
	}
	
	// max 2 from objects allowed
	function extend(obj, from, from2) {
	  from && each(Object.keys(from), function(key) {
	    obj[key] = from[key]
	  })
	  return from2 ? extend(obj, from2) : obj
	}
	
	function checkIE() {
	  if (window) {
	    var ua = navigator.userAgent
	    var msie = ua.indexOf('MSIE ')
	    if (msie > 0) {
	      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
	    }
	    else {
	      return 0
	    }
	  }
	}
	
	function optionInnerHTML(el, html) {
	  var opt = document.createElement('option'),
	      valRegx = /value=[\"'](.+?)[\"']/,
	      selRegx = /selected=[\"'](.+?)[\"']/,
	      valuesMatch = html.match(valRegx),
	      selectedMatch = html.match(selRegx)
	
	  opt.innerHTML = html
	
	  if (valuesMatch) {
	    opt.value = valuesMatch[1]
	  }
	
	  if (selectedMatch) {
	    opt.setAttribute('riot-selected', selectedMatch[1])
	  }
	
	  el.appendChild(opt)
	}
	
	function mkdom(template) {
	  var tagName = template.trim().slice(1, 3).toLowerCase(),
	      rootTag = /td|th/.test(tagName) ? 'tr' : tagName == 'tr' ? 'tbody' : 'div',
	      el = document.createElement(rootTag)
	
	  el.stub = true
	
	  if (tagName === 'op' && ieVersion && ieVersion < 10) {
	    optionInnerHTML(el, template)
	  } else {
	    el.innerHTML = template
	  }
	  return el
	}
	
	function walk(dom, fn) {
	  if (dom) {
	    if (fn(dom) === false) walk(dom.nextSibling, fn)
	    else {
	      dom = dom.firstChild
	
	      while (dom) {
	        walk(dom, fn)
	        dom = dom.nextSibling
	      }
	    }
	  }
	}
	
	function replaceYield (tmpl, innerHTML) {
	  return tmpl.replace(/<(yield)\/?>(<\/\1>)?/gim, innerHTML || '')
	}
	
	function $$(selector, ctx) {
	  ctx = ctx || document
	  return ctx.querySelectorAll(selector)
	}
	
	function arrDiff(arr1, arr2) {
	  return arr1.filter(function(el) {
	    return arr2.indexOf(el) < 0
	  })
	}
	
	function arrFindEquals(arr, el) {
	  return arr.filter(function (_el) {
	    return _el === el
	  })
	}
	
	function inherit(parent) {
	  function Child() {}
	  Child.prototype = parent
	  return new Child()
	}
	
	/*
	 Virtual dom is an array of custom tags on the document.
	 Updates and unmounts propagate downwards from parent to children.
	*/
	
	var virtualDom = [],
	    tagImpl = {}
	
	
	function getTag(dom) {
	  return tagImpl[dom.getAttribute('riot-tag') || dom.tagName.toLowerCase()]
	}
	
	function injectStyle(css) {
	  var node = document.createElement('style')
	  node.innerHTML = css
	  document.head.appendChild(node)
	}
	
	function mountTo(root, tagName, opts) {
	  var tag = tagImpl[tagName],
	      innerHTML = root.innerHTML
	
	  // clear the inner html
	  root.innerHTML = ''
	
	  if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML)
	
	  if (tag && tag.mount) {
	    tag.mount()
	    virtualDom.push(tag)
	    return tag.on('unmount', function() {
	      virtualDom.splice(virtualDom.indexOf(tag), 1)
	    })
	  }
	
	}
	
	riot.tag = function(name, html, css, fn) {
	  if (typeof css == 'function') fn = css
	  else if (css) injectStyle(css)
	  tagImpl[name] = { name: name, tmpl: html, fn: fn }
	  return name
	}
	
	riot.mount = function(selector, tagName, opts) {
	
	  var el,
	      selctAllTags = function(sel) {
	        sel = Object.keys(tagImpl).join(', ')
	        sel.split(',').map(function(t) {
	          sel += ', *[riot-tag="'+ t.trim() + '"]'
	        })
	        return sel
	      },
	      tags = []
	
	  if (typeof tagName == 'object') { opts = tagName; tagName = 0 }
	
	  // crawl the DOM to find the tag
	  if(typeof selector == 'string') {
	    if (selector == '*') {
	      // select all the tags registered
	      // and also the tags found with the riot-tag attribute set
	      selector = selctAllTags(selector)
	    }
	    // or just the ones named like the selector
	    el = $$(selector)
	  }
	  // probably you have passed already a tag or a NodeList
	  else
	    el = selector
	
	  // select all the registered and mount them inside their root elements
	  if (tagName == '*') {
	    // get all custom tags
	    tagName = selctAllTags(selector)
	    // if the root el it's just a single tag
	    if (el.tagName) {
	      el = $$(tagName, el)
	    } else {
	      var nodeList = []
	      // select all the children for all the different root elements
	      each(el, function(tag) {
	        nodeList = $$(tagName, tag)
	      })
	      el = nodeList
	    }
	    // get rid of the tagName
	    tagName = 0
	  }
	
	  function push(root) {
	    var name = tagName || root.getAttribute('riot-tag') || root.tagName.toLowerCase(),
	        tag = mountTo(root, name, opts)
	
	    if (tag) tags.push(tag)
	  }
	
	  // DOM node
	  if (el.tagName)
	    push(selector)
	  // selector or NodeList
	  else
	    each(el, push)
	
	  return tags
	
	}
	
	// update everything
	riot.update = function() {
	  return each(virtualDom, function(tag) {
	    tag.update()
	  })
	}
	
	// @deprecated
	riot.mountTo = riot.mount
	
	
	
	  // share methods for other riot parts, e.g. compiler
	  riot.util = { brackets: brackets, tmpl: tmpl }
	
	  // support CommonJS, AMD & browser
	  if (true)
	    module.exports = riot
	  else if (typeof define === 'function' && define.amd)
	    define(function() { return riot })
	  else
	    window.riot = riot
	
	})(typeof window != 'undefined' ? window : undefined);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var LOCALSTORAGE_KEY = 'riot-webpack-demo';
	
	function BlogStore() {
	  var _this = this;
	
	  if (!(this instanceof BlogStore)) {
	    return new BlogStore();
	  }riot.observable(this);
	
	  var json = window.localStorage.getItem(LOCALSTORAGE_KEY);
	  if (!json) {
	    initData();
	  }
	  this._posts = json && JSON.parse(json) || [];
	
	  this.on(riot.VE.LOAD_POSTS, function () {
	    _this.trigger(riot.SE.POSTS_CHANGED, _this._posts);
	  });
	
	  this.on(riot.VE.RESET_DATA, function () {
	    initData();
	    _this.trigger(riot.SE.POSTS_CHANGED, _this._posts);
	  });
	
	  this.on(riot.VE.LIKE_POST, function (id) {
	    _this._posts.forEach(function (p) {
	      if (p.postId == id) {
	        p.likes = p.likes + 1;
	      }
	    });
	    saveToStorage();
	    _this.trigger(riot.SE.POSTS_CHANGED, _this._posts);
	  });
	
	  this.getPostById = function (id) {
	    return _this._posts.filter(function (p) {
	      return p.postId == id;
	    })[0];
	  };
	
	  var initData = function initData() {
	    var defaultPosts = [{ postId: 1, title: 'Best xbox games', content: 'Halo, GOW', category: 'collection', likes: 10 }, { postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US', category: 'collection', likes: 20 }, { postId: 3, title: 'Best wii games', content: 'Zelda, Mario', category: 'collection', likes: 16 }, { postId: 4, title: 'Review of Halo', content: 'yes, cortana', category: 'review', likes: 11 }, { postId: 5, title: 'Review of Titanfall', content: 'where is the local game?', category: 'review', likes: 7 }, { postId: 6, title: 'Review of portal', content: 'I don\'t blame you', category: 'review', likes: 40 }];
	    _this._posts = defaultPosts;
	    saveToStorage();
	  };
	
	  var saveToStorage = function saveToStorage() {
	    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(_this._posts));
	  };
	}
	
	// register to riot control by myself
	var instance = BlogStore();
	riot.control.addStore(instance);
	exports['default'] = instance;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	// 
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(var i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag('posts-view', '<postcell each="{_posts}" data="{this}"></postcell>', function(opts) {var _this = this;
	
	__webpack_require__(13);
	
	this._posts = [];
	
	this.on('mount', function () {
	  riot.control.trigger('ve_load_posts');
	});
	
	riot.control.on(riot.SE.POSTS_CHANGED, function (posts) {
	  _this._posts = posts;
	  _this.update();
	});
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag('categories-view', '<div each="{category, posts in _postsInCategories}"> <h3>{category}</h3> <postcell each="{posts}" data="{this}"></postcell> <hr> </div>', function(opts) {var _this = this;
	
	__webpack_require__(13);
	
	this._postsInCategories = {};
	
	this.on('mount', function () {
	  riot.control.trigger(riot.VE.LOAD_POSTS);
	});
	
	riot.control.on(riot.SE.POSTS_CHANGED, function (posts) {
	  _this._postsInCategories = posts.reduce(function (map, post) {
	    map[post.category] = map[post.category] || [];
	    map[post.category].push(post);
	    return map;
	  }, {});
	  _this.update();
	});
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag('detail-view', '<h2>{_post.title}</h2> <p>{_post.content}</p> <p>{_post.likes} Likes</p> <a if="{ opts.data > 1 }" href="#detail/{ opts.data - 1 }">Previous Post</a> | <a if="{ opts.data < _total }" href="#detail/{ opts.data - -1 }">Next Post</a>', function(opts) {var _this = this;
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };
	
	var _stores = __webpack_require__(2);
	
	var _stores2 = _interopRequireWildcard(_stores);
	
	riot.control.on(riot.SE.POSTS_CHANGED, function (posts) {
	  _this.readData();
	});
	
	this.readData = function () {
	  _this._post = _stores2['default'].blog.getPostById(opts.data);
	  _this._total = _stores2['default'].blog._posts.length;
	  _this.update();
	};
	
	this.readData();
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(riot) {riot.tag('postcell', '<div> <span>Id: {opts.data.postId}</span> <span>Title: <a href="#detail/{opts.data.postId}">{opts.data.title}</a></span> <span>{opts.data.likes} Likes</span> <button onclick="{likePost}">Like</button> </div>', function(opts) {
	this.likePost = function () {
	  riot.control.trigger(riot.VE.LIKE_POST, opts.data.postId);
	};
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map