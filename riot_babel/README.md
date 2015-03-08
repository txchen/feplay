## Use Babel(6to5) with Riotjs

This tiny example shows how to write ES6 with Riotjs, and use browserify to build the bundled target js to run in the browser environment.


### To write ES6 in tag script

The change is simple, just set the `type` to `es6` in the `script` elemnt:

```html
<my-tag>
  <!-- Tag html here -->

  <script type="es6">
  <!-- Tag script here -->
  </script>
</my-tag>
```

It is not recommended to use babel in browser environment to compile the es6 to es5, so we will not use riot+compiler, instead, we use `browserify` or other packing tool to process the scripts.

Riot's default mini-ES6 method syntax cannot work when we are using babel, so we need to change:

```js
// This would not work with babel
buttonHandler(e) {
  // code
}

// Change to this
this.buttonHandler = (e) => {
  // code
}
```

That's it, now you can use ES6 features, for example, the lambda in your tag:

```js
this.data.forEach(d => d *= 5)
```

ES6's template string cannot work in Riot's expression, but you can wrap it with function, for example:

```html
<my-tag>
  <div>{ summary() }</div>
  <script type="es6">
  this.data = [{v: 1}, {v: 2}, {v: 3}, {v: 4}]
  this.summary = () => `there are ${this.data.length} elements,
sum = ${this.data.map(d => d.v).reduce((a, b) => a + b)}`
  </script>
</my-tag>
```

### Build with browserify

Now let's build the app with browserify. All your tags and javascripts will be bundled into one single js.

And there is a small optimization here: Usually, your app needs to use external packages, riotjs is one of them. And during development, these external packages rarely change. We can bundle all the external packages into vendor.js, and all of our own code into app.js. This will make the browserify build faster.

Before the build, we need these dev-dependencies:
* babel
* babelify (if you have .js written in ES6)
* browserify
* riot
* riotify

Firstly, build the vendor bundle, use `-r` option to tell browserify our dependencies:

```bash
browserify -r babel/polyfill -r riot -r co -d \
  -p [minifyify --compressPath . \
  --map vendor.js.map --output build/vendor.js.map] \
  -o build/vendor.js
```

In this example, we bundle 3 external packages into vendor.js. To make sure the vendor.js is minified, we use minifyify to compress the output, and generate the source map file.

Now, build our own app code, use `-x` to exclude external packages, otherwise they will be generated in your app.js:

```bash
browserify -x babel/polyfill -x riot -x co \
  -t babelify -t [riotify --ext html] \
  js/index.js -o build/app.js
```

In this example, `js/index.js` is our entry, and we use .html as Riot's tag file extention. You can add `-d -p [minifyify --compressPath . --map app.js.map --output build/app.js.map]` to enable minify and sourcemap generation.

That's it, now you will have vendor.js and app.js, include them in your html and it's done. My package.json is using a tool to monitor the source code change and auto trigger build and reload browser, should be very useful during development. Of course, you can use gulp or grunt to do the same.

Now you can write your entire app in ES6 with Riotjs.

### Use some advanced/experimental babel/ES6 features

With the default setup, not every feature in babel is available. For example, if we want to use generator and co to write better async handling, we need some more work.

We need the `co` package to execute the generator, so install it as dev dependency.

And, we need `babel/polyfill`, require it in the begining of your entry js:

```js
require("babel/polyfill")
```

Now you can use it:

```js
sleepFunc = (ms) => {
  return (callback) => {
    setTimeout(callback, ms)
  }
}

this.sleepSomeTime = () => {
  co(function* (){
    self.sleep.innerHTML = "sleeping"
    yield sleepFunc(1000)
    self.sleep.innerHTML = "done with sleep"
  })
}
```

Finally we have the sleep in js:)

It's recommended to generate the co and babel/polyfill into vendor.js, and you should be aware that these two would make your js bigger.
