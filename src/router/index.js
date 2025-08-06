import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/homepage.vue'
import PostsPage from '../views/PostsPage.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
    { path: '/posts', name: 'Posts', component: PostsPage }
    ]

const router = createRouter({
history: createWebHistory(),
routes
})

export default router