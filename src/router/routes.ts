import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'page2', component: () => import('pages/PageTwo.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('components/LoginSection.vue') },
      {
        path: 'createAccount/:email',
        name: 'createAccount',
        component: () => import('components/CreateAccount.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('layouts/CartLayout.vue'),
    children: [
      { path: '', component: () => import('components/ShoppingCart.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
export default routes;
