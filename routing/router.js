import { createWebHistory, createRouter } from 'vue-router'
import Hello from './Hello.vue'
import NewPost from './NewPost.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/posts',
            component: Posts
        },
        {
            path: '/posts/new',
            component: NewPost
        },
        {
            path: '/posts/:id',
            component: Post
        },
    ]
})