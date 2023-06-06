<template>
    <p> Displaying User Data</p>

<!-- Only render this table if there is user data-->
<div v-if="userData?.id">
    <!-- Use a table to render the data-->
  <table>
      <table border style="margin: 0 auto;">
        <tr style="background-color: blueviolet;">
          <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">ID</th>
          <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Name</th>
          <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Gist Url</th>
        </tr>
        <tr>
          <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ userData?.id }}</td>
          <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ userData?.name }}</td>
          <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ userData?.gists_url }}</td>
        </tr>
      </table>
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