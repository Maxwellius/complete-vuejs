import { testPosts } from './testPosts.js' 

export class Store {
    constructor(){
        console.log('hi')
        this.posts = testPosts
    }

    addPost(post) {
        this.posts.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content
        })
    }

    getPost(id) {
        this.posts.find((post) => {return post.id === id});
    }
}

