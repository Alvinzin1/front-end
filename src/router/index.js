import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/cadastro',
    component: () => import('../views/auth/Register.vue'),
  },
  {
    path: '/cadastro-loja',
    component: () => import('../views/cadastro/LojaView.vue'),
  },
  {
    path: '/cadastro-produto',
    component: () => import('../views/cadastro/ProdutoView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
