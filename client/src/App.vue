<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
import FirstPage from './pages/Log in.vue'
import SecondPage from './pages/Repos.vue'
import ThirdPage from './pages/Profile.vue'

</script>

<template>
  
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/log in">Log in</RouterLink>
        <RouterLink to="/repos">Repos</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/githubrepos">GitHub API Repos</RouterLink>
        <RouterLink to="/githubgists">GitHub API Gist</RouterLink>
      </nav>
      <hr/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
