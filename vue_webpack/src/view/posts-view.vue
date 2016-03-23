<template>
  <postcell v-for="post in posts">
  </postcell>
</template>

<script>
import Postcell from '../component/postcell.vue'

export default {
  components: {
    Postcell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      posts: [1, 2, 3]
    }
  }
}
</script>