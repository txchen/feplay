import Vue from 'vue'
import Vuex from 'vuex'
import { RESET_DATA, LIKE_POST } from './mutation-types'
import middlewares from './middlewares'

Vue.use(Vuex)

export const STORAGE_KEY = 'vue-webpack'

function getDefaultData() {
  return [
    { postId: 1, title: 'Best xbox games', content: 'Halo, GOW',
      category: 'collection', likes: 10 },
    { postId: 2, title: 'Best ps games', content: 'Uncharted, The Last of US',
      category: 'collection', likes: 20 },
    { postId: 3, title: 'Best wii games', content: 'Zelda, Mario',
      category: 'collection', likes: 16 },
    { postId: 4, title: 'Review of Halo', content: 'yes, cortana',
      category: 'review', likes: 11 },
    { postId: 5, title: 'Review of Titanfall', content: 'where is the local game?',
      category: 'review', likes: 7 },
    { postId: 6, title: 'Review of portal', content: 'I don\'t blame you',
      category: 'review', likes: 40 },
  ]
}

const state = {
  posts: JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || getDefaultData()
}

const mutations = {
  [RESET_DATA] (state) {
    state.posts = getDefaultData()
  },
  [LIKE_POST] (state, post) {
    post.likes++
  }
}

export default new Vuex.Store({
  state,
  mutations,
  middlewares
})