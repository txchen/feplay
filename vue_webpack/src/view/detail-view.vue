<template>
  <h2>{{ currentPost.title }}</h2>
  <p>{{ currentPost.content }}</p>
  <p>{{ currentPost.likes }} Likes</p>
  <a v-if="currentPostId > 1" v-link="'/detail/' + (currentPostId - 1)">Previous Post</a> |
  <a v-if="currentPostId < totalPostsCount" v-link="'/detail/' + (currentPostId + 1)">Next Post</a>
</template>

<script>
export default {
  vuex: {
    getters: {
      currentPost: state =>
        state.posts.filter(p => p.postId === Number(state.route.params.postId))[0],
      totalPostsCount: state => state.posts.length,
      currentPostId: state => Number(state.route.params.postId),
    },
  },
}
</script>
