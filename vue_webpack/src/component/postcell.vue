<template>
  <div>
    <span>Id: {{ post.postId }}</span>
    <span>Title: <a v-link="'/detail/' + post.postId">{{ post.title }}</a></span>
    <span>{{ post.likes }} Likes</span>
    <button @click="likePost(post)">Like</button>
  </div>
</template>

<script>
import { LIKE_POST } from '../vuex/mutation-types'

export default {
  props: ['post'],
  vuex: {
    actions: {
      likePost: ({ dispatch }, post) => {
        dispatch(LIKE_POST, post)
      }
    }
  }
}
</script>