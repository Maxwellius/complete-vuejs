<template>
<button
 v-for="post in all"
 :key="post.id"
 @click="click(post.id)">
  {{ post.title }}
</button>

<h1>{{ currentPost.title }}</h1>
<h2>{{ currentPost.content }}</h2>

</template>

<script>
import { store } from './store.js'
import { computed, onMounted } from 'vue'
export default {
  setup() {

    onMounted(() => {
      store.dispatch('posts/fetch')
    })
    
    const click = (id) => {
      store.commit('posts/setCurrentPost', id)
    }

    return {
      all: computed(() => store.getters['posts/all']),
      currentPost: computed(() => store.getters['posts/currentPost']),
      click
    }
  }
}
</script>

<style scoped>

</style>