import { RouteComponent, RouteRecordRaw } from 'vue-router';
import i18n from '@/locale';

const { t } = i18n.global;
// const APP_NAME = import.meta.env.VITE_APP_TITLE;

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
        component: lazyLoadPage('Auth/login/index'),
        meta: { title: t('routes.login') },
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
        component: lazyLoadPage('Dashboard/index'),
        meta: { title: t('routes.dashboard') },
      },

      {
        path: '/project',
        component: lazyLoadPage('Base/index'),
        meta: { title: t('routes.project') },
        children: [
          {
            path: '',
            name: 'project',
            component: lazyLoadPage('Project/index'),
          },
          {
            path: 'create',
            name: 'project-create',
            component: lazyLoadPage('Project/create/index'),
            meta: { title: t('routes.create_project') },
          },
          {
            path: ':id/edit',
            name: 'project-edit',
            component: lazyLoadPage('Project/edit/index'),
            meta: { title: t('routes.edit_project') },
          },
        ],
      },

      {
        path: '/setting',
        name: 'setting',
        component: lazyLoadPage('Base/index'),
        meta: { title: t('routes.setting') },
        children: [
          {
            path: 'company',
            component: lazyLoadPage('Base/index'),
            meta: { title: t('routes.company') },
            children: [
              {
                path: '',
                name: 'company',
                component: lazyLoadPage('Setting/company/index'),
              },
              {
                path: 'create',
                name: 'company-create',
                component: lazyLoadPage('Setting/company/create'),
                meta: { title: t('routes.company_create') },
              },
              {
                path: ':id/edit',
                name: 'company-edit',
                component: lazyLoadPage('Setting/company/edit'),
                meta: { title: t('routes.company_edit') },
              },
            ],
          },
          {
            path: 'category',
            component: lazyLoadPage('Base/index'),
            meta: { title: t('routes.category') },
            children: [
              {
                path: '',
                name: 'category',
                component: lazyLoadPage('Setting/category/index'),
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
