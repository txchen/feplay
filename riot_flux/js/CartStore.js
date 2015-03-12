function CartStore() {
  if (!(this instanceof CartStore)) return new CartStore()

  riot.observable(this)

  var self = this

  self.productsInCart = {}

  self.on('ve_add_to_cart', function(product) {
    var id = product.id
    if (id in self.productsInCart) {
      self.productsInCart[id].quantity += 1
    } else {
      self.productsInCart[id] = {"quantity": 1, "title": product.title, "price": product.price,
        "image": product.image, "id": id}
    }
    self.trigger('se_cart_changed', self.productsInCart)
  })

  self.on('ve_checkout', function() {
    // call backend service to checkout, if success, then
    console.log('you have purchased:', self.productsInCart)
    self.productsInCart = {}
    self.trigger('se_cart_changed', self.productsInCart)
  })
}
