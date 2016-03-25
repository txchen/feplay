import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import CategoriesView from './view/categories-view.vue'
import DetailView from './view/detail-view.vue'
import PostsView from './view/posts-view.vue'
import App from './app.vue'

Vue.use(VueRouter)
// Vue.config.debug = true

const router = new VueRouter()

router.map({
  '/categories': {
    component: CategoriesView,
  },
  '/detail/:postId': {
    component: DetailView,
  },
  '/posts': {
    component: PostsView,
  },
})

router.redirect({
  '*': '/posts',
})

sync(store, router)

router.start(App, 'app')
