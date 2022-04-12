import { testPosts } from '../testPosts.js'
const delay = () => new Promise(res => setTimeout(res, 1000))

export const posts = {
  namespaced: true,
  state: {
    postId: null,
    posts: []
  },
  mutations: {
    setPosts : (state, posts) => {
      state.posts = posts 
      state.postId = 1 
    },
    setCurrentPost : (state, id) => {
      state.postId = id
    }
  },
  actions: {
    async fetch(ctx){
      await delay()
      console.log('fetchingData')
      ctx.commit('setPosts', testPosts)
    } 
  },
  getters: {
    currentPost : (state) => {
      return state.posts.find(
        post => state.postId === post.id 
      )
    },
    all : (state) => {
      return state.posts
    }
  }
}