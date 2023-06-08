<template>
  <div v-if="userData" class="text-center">
    <img :src="userData.avatar_url" style="height: 150px; width: 150px;" />
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

  let userURL = 'http://localhost:5087/ghsecure/user'

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
