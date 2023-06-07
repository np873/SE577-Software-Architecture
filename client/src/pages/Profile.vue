<template>
  <div v-if="userData" class="text-center">
    <img src="https://pixabay.com/get/g86d51cb389e4beb3f5af645ec8c4e26f39527267b9a908bec274c9f28706f74c936c078b035e308bd2a6d6ccb26a02f291341681d064c4f9921900a2d55218585c4dab0c41e32a79be975451a838bc88_1280.png" style="height: 150px; width: 150px;">
    <div>
      <h1 style="margin: 0;">{{ userData.name }}</h1>
      <p style="margin: 0;">{{ userData.html_url }}</p>
      <p style="margin: 0;">Repos: {{ userData.public_repos }}</p>
      <p style="margin: 0;">Gists: {{ userData.public_gists }}</p>
    </div>
  </div>
</template>
    
<script lang="ts">
export default {
  name: 'GitHub User Detail',
};
</script>
    
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { GithubUser } from './APIsInterface';
import axios from 'axios';

let userData = ref<GithubUser>()

onMounted(async () => {
  console.log("Page 1 mounted")

  let userURL = 'https://api.github.com/users/np873'

  // Use axios to load the user data - read up on async/await to make
  // asynchronous calls easier
  let userAPI = await axios.get<GithubUser>(userURL)

  // If the request is successful (status 200), set the userData value
  if (userAPI.status === 200) {
    userData.value = userAPI.data
  }
})
</script>
    
<!-- Add the "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
