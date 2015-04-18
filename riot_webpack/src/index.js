import './css/tacit.min.css'
import './RiotControl.js'

import BlogStore from './blogstore.js'
let blogstore = new BlogStore()
riot.control.addStore(blogstore)

import './app.html'
riot.mount('app')
