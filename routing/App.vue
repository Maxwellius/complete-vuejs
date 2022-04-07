<template>
    <div>
        <h1>My super application</h1>
        <router-link 
            v-for="post in store.posts"
            :key="post.id"
        >
        </router-link>
        <router-view />
    </div>
</template>

<script>
import { Store } from './store.js'
import { reactive } from 'vue'

export default {
    setup(){

        const store = reactive(new Store())



        return {
            store,
        }
    }
}
</script>

<style scoped>

</style>