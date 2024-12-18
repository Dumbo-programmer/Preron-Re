import { createRouter, createWebHistory } from '@ionic/vue-router';

import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/views/SplashScreen.vue')
  },
  {
    path: '/signup',
    component: () => import('@/views/SignScreen.vue')
  },
{
    path: '/login',
    component: () => import('@/views/LoginScreen.vue')
  },

  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Tab5Page.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
