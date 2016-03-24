<template>
  <postcell v-for="post in posts" :post="post"></postcell>
</template>

<script>
import Postcell from '../component/postcell.vue'

export default {
  components: {
    Postcell
  },
  vuex: {
    getters: {
      posts: state => state.posts
    },
  },
}
</script>