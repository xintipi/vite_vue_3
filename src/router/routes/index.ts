import { RouteRecordRaw, RouteComponent } from 'vue-router';

const APP_NAME = import.meta.env.VITE_APP_TITLE;

import LoginPage from '@/pages/auth/login/index.vue';
import DashboardPage from '@/pages/dashboard/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: (): Promise<RouteComponent> => import('../../layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: LoginPage,
        meta: { title: `Login | ${APP_NAME}` },
      },
    ],
  },

  {
    path: '/',
    component: (): Promise<RouteComponent> => import('../../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: DashboardPage,
        meta: { title: `Dashboard | ${APP_NAME}` },
      },
    ],
  },
];

export default routes;
