## Use webpack and ES7 to build Riotjs app

This tiny example shows how to write ES7(ES6 + async) with Riotjs, and use webpack to build the bundled target js to run in the browser environment.

Online demo: http://txchen.github.io/feplay/riot_webpack_async/

Features:
* Javascript and riot tag script in ES7, including async/await
* Use route, view and component to structure the app
* Use RiotControl to enable the flux-like app architecture

### To use async/await

* In detail page, double click the like number. It will count the word and mimic some delay.
* By including babel/polyfill, the js bundle size will increase about 85kb.

### To write ES6 in tag script

The change is simple, just set the `type` to `es6` in the `script` element:

```html
<my-tag>
  <!-- Tag html here -->

  <script type="es6">
  <!-- Tag script here -->
  </script>
</my-tag>
```

Riot's default mini-ES6 method syntax cannot work when we are using babel, so we need to change:

```js
// This would not work with babel
buttonHandler(e) {
  // code
}

// Change to this
this.buttonHandler = e => {
  // code
}
```

### Setup webpack to compile riot tags

`riotjs-loader` is needed, install it as devDependencies, then configure in `webpack.config.js`.

You don't have to import 'riot' everywhere, instead, use `webpack.ProvidePlugin` to make it available everywhere.

### Workflow

During development, use webpack-dev-server.

Before shipping, use `webpack -d -p`. See `package.json` and `webpack.config.js` for detailed configurations.
