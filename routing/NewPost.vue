<template>
  <div>
    <h1>Edit a new post</h1>
    <form @submit.prevent="submit">
      <input type="text"
       name="title"
       v-model="post.title"
       placeholder="title">
      <textarea 
        name="content"
        v-model="post.content"
        placeholder="content..."
        cols="50"
        rows="10">
      </textarea>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { router } from './router.js'
import { usePosts } from './usePosts.js'
export default {
  setup(){
    const post = reactive({
      title : '',
      content : ''
    })

    const submit = () => {
      usePosts().addPost(post)
      router.push(`/posts/${usePosts().getLastId()}`)
    }

    return {
      post,
      submit
    }
  }

}
</script>

<style>

</style>