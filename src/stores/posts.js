//stores/users.js

import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
export const usePostStore = defineStore("post", {
  state: () => ({
    posts: [],
  }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async fetchPosts() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
