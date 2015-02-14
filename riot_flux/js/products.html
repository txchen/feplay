<products>
  <div class="shop-wrap">
    <h2 class="uk-h2">Riot Flux Demo <span>by using <a href="https://github.com/jimsparkman/RiotControl" target="_blank">RiotControl</a></span></h2>
    <p><a href="https://github.com/txchen/feplay/tree/gh-pages/riot_flux">Source Code</a></p>
    <p>And please compare this with the original react+flux
      <a href="https://github.com/voronianski/flux-comparison/tree/master/reflux" target="_blank">version</a></p>

    <productitem each={ products } product={ this }></productitem>
  </div>

  <script>
  var self = this
  self.products = []

  this.on('mount', function() {
    RiotControl.trigger('ve_product_list_init')
  })

  RiotControl.on('se_products_changed', function(products) {
    self.products = products
    self.update()
  })
  </script>
</products>

<productitem>
  <div class="uk-panel uk-panel-box uk-margin-bottom">
    <img class="uk-thumbnail uk-thumbnail-mini uk-align-left" src={ product.image }></img>
    <h4 class="uk-h4">{ product.title } - &euro;{ product.price }</h4>
    <button class="uk-button uk-button-small uk-button-primary"
      onclick={ addToCart }
      disabled={ product.inventory == 0 }>
      { product.inventory > 0 ? 'Add to cart' : 'Sold Out' }
    </button>
  </div>
  <script>
  this.product = opts.product

  addToCart(e) {
    RiotControl.trigger('ve_add_to_cart', this.product)
  }
  </script>
</productitem>
