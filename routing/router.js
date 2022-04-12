import { createWebHistory, createRouter } from 'vue-router'
import Hello from './Hello.vue'
import NewPost from './NewPost.vue'
import Posts from './Posts.vue'
import Post from './Post.vue'
import { usePosts } from './usePosts'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Hello
        },
        {
            path: '/posts',
            component: Posts,
            children: [
                {
                    path: ':id',
                    component: Post
                },
            ],
            beforeEnter: (to, from, next) => {
                console.log(to.params.id)
                if (!usePosts().getPost(to.params.id)) {
                    next('/posts/1');
                } else {
                    next();
                }
            }
        },
        {
            path: '/posts/new',
            component: NewPost
        }
    ]
})