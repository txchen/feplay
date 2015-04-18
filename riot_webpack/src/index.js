import './css/tacit.min.css'
import './RiotControl.js'

import BlogStore from './blogstore.js'
riot.control.addStore(BlogStore())

import './app.html'
riot.mount('app')
