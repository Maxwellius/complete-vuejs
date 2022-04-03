<template>
  <button @click="incrementLikes">Like</button>
  {{ post.likes }}
  <hashtag
    v-for="hashtag in post.hashtags"
    :key="hashtag"
    :hashtag="hashtag"
  />
</template>

<script>
import Hashtag from './Hashtag.vue'
import { store } from './store.js'
export default {
  components: { Hashtag },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx){
    const incrementLikes = () => {
      store.incrementLikes(props.post.id)
    }

    return {
      incrementLikes
    }
  }

}
</script>

<style>

</style>