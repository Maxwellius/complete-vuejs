<template>

<input 
  :value="currentTag"
  @input="setHashtag"
/>

<card
  v-for="post in filteredPosts"
  :key="post.id"
>
  <template v-slot:title>
    {{post.title}}
  </template>

  <template v-slot:content>
    {{post.content}}
  </template>
  <template v-slot:description>
    <controls
      :post="post"
    />
  </template>
</card>

</template>

<script>
import {computed} from 'vue'
import {store} from './store.js'
import Card from './Card.vue'
import Controls from './Controls.vue'
export default {
  emits: ['setHashtag'],
  components: {
    Card,
    Controls
  },
  setup() {
    const setHashtag = ($evt) => {
      store.setHashtag($evt.target.value)
    }
    const filteredPosts = store.filteredPosts
    return {
      setHashtag,
      filteredPosts: computed(() => store.filteredPosts),
      currentTag: computed(() => store.state.currentTag)
    }
  }

}
</script>

<style scoped>

</style>