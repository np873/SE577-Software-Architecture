<template>
    <div class="text-center">
      <p style="font-family: Arial; font-size: 20px; color: blueviolet;">This page shows the lists of Gists</p>
      <div class="gist-container" v-if="gists.length > 0">
        <div class="gist" v-for="gist in gists" :key="gist.id">
          <h3>Owner: {{ gist.owner.login }}</h3>
          <div class="gist-file" v-for="(file, filename) in gist.files" :key="filename">
            <p>Filename: {{ file.filename }}</p>
            <p>Type: {{ file.type }}</p>
            <p>Language: {{ file.language }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
 
  <script lang="ts">
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import type { Gist } from './APIsInterface';
  
  export default {
    name: 'Gist',
    setup() {
      const gists = ref<Gist[]>([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get<Gist[]>('http://localhost:5087/ghsecure/gists');
          gists.value = response.data;
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        gists,
      };
    },
  };
  </script>
  
  <style scoped>
.gist-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gist {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
}

.gist h3 {
  margin-bottom: 10px;
}

.gist-file {
  margin-top: 10px;
}

.gist-file p {
  margin: 5px 0;
}

</style>

  