import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Importe o seu store Vuex aqui

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/catalogo',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.isAuthenticated) {
        next();
      } else {
        next('/');
      }
    },
  },
  {
    path: '/lojas',
    name: 'Stores',
    component: () => import('../views/store/StoreIndex.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/produtos/:storeId',
    name: 'Products',
    component: () => import('../views/product/ProductIndex.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next('/login');
      }
    },
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
