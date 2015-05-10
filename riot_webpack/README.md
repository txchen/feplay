## Use webpack and ES6(babel) to build Riotjs app

This tiny example shows how to write ES6 with Riotjs, and use webpack to build the bundled target js to run in the browser environment.

Online demo: http://txchen.github.io/feplay/riot_webpack/

Features:
* Javascript in ES6
* Riot tag script in ES6
* Use route, view and component to structure the app
* Use RiotControl to enable the flux-like app architecture

### To use Async/Await with babel

Async await is ES7 feature, but we can use it today with babel. Checkout `asyncawait` branch to see how to use it with riotjs.

To enable async/await, about 60KB script size needs to be added.

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
