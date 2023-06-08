<template>
  <div class="text-center">
    <p style="font-family: Arial; font-size: 20px; color: blueviolet;">
      This page shows the list of GitHub repos
    </p>

    <div v-if="repoData.length > 0">
      <div v-for="(repo, index) in repoData" :key="repo.id" class="repo-item">
          <h2>{{ repo.name }}</h2>
        <div class="repo-info">
          <span v-if="repo.language" class="dot"></span>
          <p v-if="repo.language" class="repo-language">{{ repo.language }}</p>
          <p>Updated at: {{ repo.updated_at }}</p>
        </div>
        <hr class="repo-line">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, ref } from 'vue';
  import type { GitHubRepoInterface} from './APIsInterface';
  import axios from 'axios';

  export default {
    name: 'GitHub Repos',
    setup() {
      const repoData = ref<GitHubRepoInterface[]>([]);

      onMounted(async () => {
        console.log("Page 1 mounted");

        let allRepoURL = 'http://localhost:5087/ghsecure/user/repos';

        let repoAPI = await axios.get<GitHubRepoInterface[]>(allRepoURL);

        if (repoAPI.status === 200) {
          repoData.value = repoAPI.data;
        }
      });

      return { repoData };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.repo-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.repo-info {
  display: flex;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: orange;
}

.repo-language {
  margin-right: 40px;
}

.repo-line {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid #ccc;
}
</style>
