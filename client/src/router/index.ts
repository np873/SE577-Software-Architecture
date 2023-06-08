import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/log in',
      name: 'log in',
      component: () => import('../pages/Log in.vue')
    },
    {
      path: '/repos',
      name: 'repos',
      component: () => import('../pages/Repos.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/Profile.vue')
    },
    {
      path: '/githubrepos',
      name: 'githubrepos',
      component: () => import('../pages/GitHubApiRepos.vue')
    },
    {
      path: '/githubgists',
      name: 'githubgists',
      component: () => import('../pages/GitHubGists.vue')
    }
  ]
})

export default router
