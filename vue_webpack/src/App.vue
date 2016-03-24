<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><a v-link="'/posts'">Posts</a></li>
          <li><a v-link="'/categories'">Categories</a></li>
        </ul>
      </nav>
    </header>
    <article>
      <router-view></router-view>
    </article>
    <footer>
      <nav>
        <a @click="resetData">Reset Data</a>
      </nav>
    </footer>
  </section>
</template>

<script>
import store from './vuex/store'
import { RESET_DATA } from './vuex/mutation-types'

export default {
  vuex: {
    actions: {
      resetData: ({ dispatch }) => dispatch(RESET_DATA)
    }
  },
  store,
}
</script>
