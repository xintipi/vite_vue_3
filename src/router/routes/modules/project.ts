import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import i18n from '@/locale';

const { t } = i18n.global;

const project: AppRouteModule = {
  path: '/project',
  component: LAYOUT,
  children: [
    {
      path: '',
      name: 'project',
      component: () => import('@/pages/project/index.vue'),
      meta: { title: t('routes.project') },
    },
    {
      path: 'create',
      name: 'project-create',
      component: () => import('@/pages/project/create/index.vue'),
      meta: { title: t('routes.create_project') },
    },
    {
      path: ':id/edit',
      name: 'project-edit',
      component: () => import('@/pages/project/edit/index.vue'),
      meta: { title: t('routes.edit_project') },
    },
  ],
};

export default project;