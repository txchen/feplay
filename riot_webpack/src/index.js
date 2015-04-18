require('./css/tacit.min.css')
require('./app.html')
riot.mount('app')

import BlogStore from './blogstore.js'

let store = new BlogStore()
console.log(store.getPost(4))
