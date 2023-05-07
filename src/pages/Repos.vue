<template>
        <p class="text-center"> This page shows the list of repos and repos details</p>

    <div v-if="repoData.length > 0">
    <table>
      <tr>
        <th>Repo ID</th>
        <th>Repo Name</th>
        <th>Url</th>
        <th>Language</th>
        <th>Last Updated</th>
      </tr>
      <tr v-for = "(repo, rowNum) in repoData">
        <td>{{ repo.id }}</td>
        <td>{{ repo.name }}</td>
        <td>{{ repo.url }}</td>
        <td>{{ repo.language }}</td>
        <td>{{ repo.updated }}</td>
      </tr>
    </table>
  </div>
</template>
    
    <script lang="ts">
    export default {
      name: 'SecondPage',
    };
    </script>

    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import type {RepoApiInterface} from './APIsInterface';
    import axios from 'axios';

    let repoData = ref<RepoApiInterface[]>([])

    onMounted(async () => {
      console.log("Page 1 mounted")

      //this is where to go and get the student data
      let allRepoURL = 'http://localhost:5087/repoDetails'

      //Use axios to load the student data - readup on await to make
      //async calls easier
      let repoAPI = await axios.get<RepoApiInterface[]>(allRepoURL)

      //if OK, set the studentData variable, so that we can render in the ui
      if(repoAPI.status == 200){
        repoData.value = repoAPI.data
      }
    })
    </script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>