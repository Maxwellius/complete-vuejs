<template>
  <div>{{ post.title }}</div>
  <p>{{ post.content }}</p>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, onUpdated } from 'vue'
import { usePosts } from './usePosts.js'
import { router } from './router.js'
export default {
  setup() {
    const post = computed(() => {return usePosts().getPost(useRoute().params.id)})

    return {
      post
    }
  }

}
</script>

<style>

</style>