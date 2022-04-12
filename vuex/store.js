import { createStore } from "vuex";
import { posts } from './stores/posts';

export const store = createStore({
  modules: {
    posts
  }
})