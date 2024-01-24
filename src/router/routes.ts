import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/departments',
    component: () => import('layouts/DepartmentsLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AllDepartments.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') },
      {
        path: 'createAccount/:email',
        name: 'createAccount',
        component: () => import('pages/CreateAccountPage.vue'),
        props: true,
      },
      {
        path: 'signIn/:email',
        name: 'signIn',
        component: () => import('pages/SignInPage.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/cart',
    component: () => import('layouts/CartLayout.vue'),
    children: [{ path: '', component: () => import('pages/CartPage.vue') }],
  },
  {
    path: '/userAccount',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/UserAccountPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];
export default routes;
