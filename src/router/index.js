import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'Register',
    component: () => import('../views/auth/Register.vue'),
  },
  {
    path: '/cadastro-loja',
    name: 'Store_Register',
    component: () => import('../views/cadastro/LojaView.vue'),
  },
  {
    path: '/cadastro-produto',
    name: 'Product_Register',
    component: () => import('../views/cadastro/ProdutoView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
