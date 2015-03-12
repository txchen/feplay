function ProductStore() {
  riot.observable(this)

  var self = this

  // Could pull this from a server API.
  self.products = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2, "image": "img/ipad-mini.png"},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10, "image": "img/t-shirt.png"},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5, "image": "img/sucker.png"}
  ]

  self.on('ve_add_to_cart', function(product) {
    self.products.some(function(p) {
      if (p.id === product.id) {
        p.inventory = p.inventory > 0 ? p.inventory - 1 : 0
        return true
      }
    })
    self.trigger('se_products_changed', self.products)
  })

  self.on('ve_product_list_init', function() {
    // here it can query server in real scenario
    self.trigger('se_products_changed', self.products)
  })

  if (!(this instanceof ProductStore)) return new ProductStore()
}
