<template>
    <div class="text-center">
      <p style="font-family: Arial; font-size: 20px; color: blueviolet;">
        This page shows the list of repos
      </p>
  
      <div v-if="repoData.length > 0">
        <table border style="margin: 0 auto;">
          <tr style="background-color: blueviolet;">
            <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Repo ID</th>
            <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Repo Name</th>
            <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Url</th>
            <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Language</th>
            <th style="padding: 10px; font-family: Arial; font-size: 16px; color: white;">Last Updated</th>
          </tr>
          <tr v-for="(repo, rowNum) in repoData" :key="rowNum" :style="(rowNum % 2 == 0) ? {backgroundColor: '#f2f2f2'} : {}">
            <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ repo.id }}</td>
            <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ repo.name }}</td>
            <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ repo.html_url }}</td>
            <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ repo.language }}</td>
            <td style="padding: 10px; font-family: Arial; font-size: 14px;">{{ repo.created_at }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
      
      <script lang="ts">
      export default {
        name: 'GitHub Repos',
      };
      </script>
  
      <script setup lang="ts">
      import { onMounted, ref } from 'vue';
      import type {GitHubRepoInterface} from './APIsInterface';
      import axios from 'axios';
  
      let repoData = ref<GitHubRepoInterface[]>([])
  
      onMounted(async () => {
        console.log("Page 1 mounted")
  
        let allRepoURL = 'https://api.github.com/users/np873/repos'
  
        //Use axios to load the repo data - readup on await to make
        //async calls easier
        let repoAPI = await axios.get<GitHubRepoInterface[]>(allRepoURL)
  
        //if OK, set the repoData variable, so that we can render in the ui
        if(repoAPI.status == 200){
          repoData.value = repoAPI.data
        }
      })
      </script>
      
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>