<template>
  <div v-for="(category, posts) in postsInCategories">
    <h3>{{ category }}</h3>
    <postcell v-for="post in posts" :post="post"></postcell>
    <hr>
  </div>
</template>

<script>
import Postcell from '../component/postcell.vue'

export default {
  components: {
    Postcell,
  },
  vuex: {
    getters: {
      postsInCategories: state => state.posts.reduce((map, post) => {
        map[post.category] = map[post.category] || []
        map[post.category].push(post)
        return map
      }, {}),
    },
  },
}
</script>