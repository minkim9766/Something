import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomeView.vue'
import PostsPage from '../views/PostsPage.vue'

// GitHub Pages에서 사용하는 경우 반드시 base에 repo 이름 포함
const router = createRouter({
  history: createWebHistory('/Something/'), // 예: '/my-vue-app/'
routes: [
{ path: '/', name: 'Homepage', component: Homepage },
    { path: '/posts', name: 'Posts', component: PostsPage }
      ]
})

export default router