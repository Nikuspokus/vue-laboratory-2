<template>
  <div class="d-flex justify-content-center">
    <div style="width: 80vw; height: 300px; margin: auto">
      <!-- <div style="width: 80vw; height: 300px"> -->
      <!-- <table class="table-line"> -->
      <div class="col">
        <div class="col">
          <form @submit.prevent="saveData()"></form>
          <div>
            <strong>{{ post.title }}</strong>
          </div>
          <textarea
            style="width: 40rem; height: 6rem; margin-top: 2em"
            type="text"
            v-model="post.title"
          ></textarea>
          <p>{{ title }}</p>
        </div>
        <div class="row">
          <div>
            <strong>{{ post.body }}</strong>
          </div>
          <!-- <input type="text" v-model="post.body" /> -->
          <textarea
            style="width: 40rem; height: 6rem; margin-top: 2em"
            type="text"
            v-model="post.body"
          >
          </textarea>
          <p>{{ body }}</p>
        </div>
      </div>
      <!-- </table> -->
      <button>
        <router-link class="routerLink" to="/">Back</router-link></button
      ><button type="submit">
        <router-link class="routerLink" to="/">Update</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref("");
const title = ref("");
const body = ref("");

console.log(post);

const saveData = () => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/", {
      title: post.value.title,
      body: post.value.body,
    })
    .then((res) => {
      console.log(res);
    });
};

/////////////////////////////////

// async function put(url, body, options) {
//   try {
//     const response = await axios.put(url, body, options);
//     return response.data;
//   } catch (err) {
//     throw getError(err);
//   }
// }

////////////////////////////////

onMounted(async () => {
  try {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
      .then((response) => {
        post.value = response.data;
      });
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

.table-line > p {
  width: 650px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 10px;
}

.list-post {
  justify-content: center;
  margin: auto;
  padding: 10px;
}

.routerLink {
  text-decoration: none;
  color: red;
}
.truncate {
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
}
</style>
