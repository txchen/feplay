import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoriesView from './view/categories-view.vue'
import DetailView from './view/detail-view.vue'
import PostsView from './view/posts-view.vue'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/categories': {
    component: CategoriesView
  },
  '/detail': {
    component: DetailView
  },
  '/posts': {
    component: PostsView
  }
})

router.redirect({
  '*': '/categories'
})

router.start(App, 'app')
