import { testPosts } from './testPosts.js' 
import { ref } from 'vue'

export const usePosts = () => {
  const posts = ref(testPosts);
  const addPost = (post) => {
    posts.value.push({
        id: posts.value.length + 1,
        title: post.title,
        content: post.content
    })
  }

  const getPost = (id) => {
    return posts.value.find(post => post.id === parseInt(id));
  }
  const getLastId = () => {
    return posts.value.length
  }
  return {
    posts,
    addPost,
    getPost,
    getLastId
  }
}
