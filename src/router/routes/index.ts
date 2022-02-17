import { RouteComponent, RouteRecordRaw } from 'vue-router';

const APP_NAME = import.meta.env.VITE_APP_TITLE;

const lazyLoadPage = (pathName: string) => {
  return () => import(`../../pages/${pathName}.vue`);
};

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: (): Promise<RouteComponent> => import('../../layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: lazyLoadPage('auth/login/index'),
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
        component: lazyLoadPage('dashboard/index'),
        meta: { title: `Dashboard | ${APP_NAME}` },
      },

      {
        path: '/project',
        component: lazyLoadPage('base/index'),
        meta: { title: `Project | ${APP_NAME}` },
        children: [
          {
            path: '',
            name: 'project',
            component: lazyLoadPage('project/index'),
          },
          {
            path: 'create',
            name: 'project-create',
            component: lazyLoadPage('project/create/index'),
            meta: { title: `Create Project | ${APP_NAME}` },
          },
          {
            path: ':id/edit',
            name: 'project-edit',
            component: lazyLoadPage('project/edit/index'),
            meta: { title: `Edit Project | ${APP_NAME}` },
          },
        ],
      },

      {
        path: '/setting',
        name: 'setting',
        component: lazyLoadPage('base/index'),
        meta: { title: `Setting | ${APP_NAME}` },
        children: [
          {
            path: 'company',
            component: lazyLoadPage('base/index'),
            meta: { title: `Company | ${APP_NAME}` },
            children: [
              {
                path: '',
                name: 'company',
                component: lazyLoadPage('setting/company/index'),
              },
            ],
          },
          {
            path: 'category',
            component: lazyLoadPage('base/index'),
            meta: { title: `Category | ${APP_NAME}` },
            children: [
              {
                path: '',
                name: 'category',
                component: lazyLoadPage('setting/category/index'),
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
