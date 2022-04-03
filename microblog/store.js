import { reactive, computed } from 'vue'
import { testPosts } from './testPosts.js'

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null
    })
  }

  setHashtag(tag) {
    this.state.currentTag = tag
  }

  incrementLikes(id) {
    this.state.posts.find(post => post.id === id).likes++
  }

  get filteredPosts() {
    if(!store.state.currentTag) {
      return store.state.posts
    }
    return store.state.posts.filter(
      post => { return post.hashtags.includes(store.state.currentTag)}
    )
  }
}

export const store = new Store()