import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import i18n from '@/locale';
import ProjectPage from '@/pages/project/index.vue';
import CreateProjectPage from '@/pages/project/create/index.vue';
import EditProjectPage from '@/pages/project/edit/index.vue';

const { t } = i18n.global;

const project: AppRouteModule = {
  path: '/project',
  component: LAYOUT,
  children: [
    {
      path: '',
      name: 'project',
      component: ProjectPage,
      meta: { title: t('routes.project') },
    },
    {
      path: 'create',
      name: 'project-create',
      component: CreateProjectPage,
      meta: { title: t('routes.create_project') },
    },
    {
      path: ':id/edit',
      name: 'project-edit',
      component: EditProjectPage,
      meta: { title: t('routes.edit_project') },
    },
  ],
};

export default project;
