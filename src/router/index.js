import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostsPage from '../views/PostsPage.vue'

const routes = [
    {path: '/', name: 'Home', component: HomeView},
    {path: '/posts', name: 'Posts', component: PostsPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
