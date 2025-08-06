import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/HomeView.vue'
import PostsPage from '../views/PostsPage.vue'

const routes = [
  { path: '/', name: 'Homepage', component: Homepage },
    { path: '/posts', name: 'Posts', component: PostsPage }
    ]

const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router