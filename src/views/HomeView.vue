<template>
  <div
    class="d-flex justify-content-center"
    style="width: 650px; margin-left: auto; margin-right: auto"
  >
    <div class="col">
      <div class="col">
        <h1>Made By Getters</h1>
        <div v-for="post in getPosts" :key="post.id">
          <div class="itemList">
            <table class="table-line">
              {{
                post.userId
              }}
              {{
                post.title
              }}
              {{
                post.body
              }}
              <div class="btn">
                <button @click="showIdPost(post)">modifier</button>
                <button>supprimer</button>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref, onMounted, computed } from "vue";
import { usePostStore } from "@/stores/posts";
const store = usePostStore();
const getPosts = computed(() => {
  return store.getPosts;
});
const posts = computed(() => {
  return store.posts;
});

const showIdPost = (post) => {
  router.push({ name: "postdetails", params: { id: post.id } });
};
onMounted(() => {
  store.fetchPosts();
});
</script>

<style scoped>
.itemList {
  display: flex;
  justify-content: space-between;
}
.table-line {
  width: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 10px;
}
.btn {
  width: 10em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
