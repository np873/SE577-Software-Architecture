<template>
    <p> Displaying User Data</p>

<!-- Only render this table if there is user data-->
<div v-if="userData?.id">
    <!-- Use a table to render the data-->
  <table>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Gists URL</th>
    </tr>
      <!-- v-for is how you do a loop in Vue-->
      <!-- Each row needs a unique variable/key-->
      <!-- v-for is how you do a loop in Vue-->
      <!-- Each td is the data element at that point in the array-->
    <tr>
      <td>{{ userData?.id }}</td>
      <td>{{ userData?.name }}</td>
      <td>{{ userData?.gistUrl }}</td>
    </tr>
  </table>
</div>
  </template>
    
    <script lang="ts">
    export default {
      name: 'GitHub API ',
    };
    </script>
    
    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import type {GitHubApiInterface} from './APIsInterface';
    import axios from 'axios';

  //Most code goes here
  let userData = ref<GitHubApiInterface>()

  // What does onMounted do? Ex: Page 1 - As soon as the page comes into focus and is ready, the api call happens automatically
  // When does it get called? When the page loads
  onMounted(async () => {
    console.log("GithubUserDataPage mounted")

    //this is where to go and get the user data
    let allusersURI = 'http://localhost:5087/ghsecure/user'

    //Use axios to load the user data - readup on await to make
    //async calls easier
    // What is async/await? Wakes up when the page is loaded.
    // What is the UserApiInterface[] doing? Expecting it to look like an array of the UserApiInterface model
    let userAPI = await axios.get<GitHubApiInterface>(allusersURI)

    //if OK, set the userData variable, so that we can render in the ui
    if(userAPI.status == 200){
      userData.value = userAPI.data
    }
  })
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
  </style>