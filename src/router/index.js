import { createRouter,createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

// 基础路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '',
    name: 'layout',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home/home.vue'),
        name: 'home',
        mate: {
          name: '首页'
        }
      },
  ]
  },
  {
    path: '/',
    redirect: 'login'
  },
]

// 需要鉴权的路由
export const asyncRoutes = [
  {
    path: 'notice',
    component: () => import('@/pages/notice/notice.vue'),
    name: 'notice',
    mate: {
      name: '公告',
      role:[]
    }
  },
  {
    path: 'all',
    component: () => import('@/pages/all/all.vue'),
    name: 'all',
    mate: {
      name: '全部',
      role:['admin']
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router