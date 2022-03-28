import type { AppRouteModule } from '@/router/types';
import { LAYOUT, BASE } from '@/router/constant';
import i18n from '@/locale';

import WorkDataPage from '@/pages/attendance/work-data/index.vue';
import CreateWorkDataPage from '@/pages/attendance/work-data/create/index.vue';
import EditWorkDataPage from '@/pages/attendance/work-data/edit/index.vue';

const { t } = i18n.global;

const setting: AppRouteModule = {
  path: '/attendance',
  name: 'attendance',
  component: LAYOUT,
  meta: { title: t('routes.attendance') },
  children: [
    {
      path: 'work-data',
      component: BASE,
      children: [
        {
          path: '',
          name: 'work-data',
          component: WorkDataPage,
          meta: { title: t('routes.work_data') },
        },
        {
          path: 'create',
          name: 'workdata-create',
          component: CreateWorkDataPage,
          meta: { title: t('routes.workdata_create') },
        },
        {
          path: ':id/edit',
          name: 'workdata-edit',
          component: EditWorkDataPage,
          meta: { title: t('routes.workdata_edit') },
        },
      ],
    },
  ],
};

export default setting;
