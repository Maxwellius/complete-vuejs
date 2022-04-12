import { testPosts } from './testPosts.js' 
import { ref } from 'vue' 
export class Store {
    constructor(){
        this.posts = ref(testPosts)
    }

    addPost(post) {
        this.posts.value.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content
        })
    }

    getPost(id) {
        return this.posts.value.find(post=> post.id === parseInt(id));
    }
}

export const store = new Store();

