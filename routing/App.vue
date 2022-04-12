<template>
    <div>
        <h1>My super application</h1>
        <router-link to="/posts/new">
            New Post
        </router-link>
        <router-link 
            v-for="post in posts"
            :to="`/posts/${post.id}`"
            :key="post.id">
            <div>
                {{ post.title }}   
            </div>
        </router-link>
        <router-view />
    </div>
</template>

<script>
import { reactive } from 'vue'
import { usePosts } from './usePosts.js'

export default {
    setup(){
        const posts = usePosts().posts 
        return {
            posts,
        }
    }
}
</script>

<style scoped>

</style>