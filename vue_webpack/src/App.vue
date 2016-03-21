<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
  <p>
    <a v-link="{ path: '/detail' }">Go to Detail</a>
    <a v-link="{ path: '/posts' }">Go to Posts</a>
    <a v-link="{ path: '/categories' }">Go to Categories</a>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
