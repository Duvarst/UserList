import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage';
import DetailUserPage from '@/views/DetailUserPage';


const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/DetailUserPage',
    component: DetailUserPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
