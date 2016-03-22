<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><a v-link="{ path: '/posts' }">Posts</a></li>
          <li><a v-link="{ path: '/categories' }">Categories</a></li>
        </ul>
      </nav>
    </header>
    <article>
      <router-view></router-view>
    </article>
    <footer>
      <nav>
        <a>Reset Data</a>
      </nav>
    </footer>
  </section>
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
