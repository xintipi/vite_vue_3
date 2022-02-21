import type { AppRouteModule } from '@/router/types';
import { LAYOUT, BASE } from '@/router/constant';
import i18n from '@/locale';

const { t } = i18n.global;

const setting: AppRouteModule = {
  path: '/setting',
  name: 'setting',
  component: LAYOUT,
  meta: { title: t('routes.setting') },
  children: [
    {
      path: 'company',
      component: BASE,
      children: [
        {
          path: '',
          name: 'company',
          component: () => import('@/pages/setting/company/index.vue'),
          meta: { title: t('routes.company') },
        },
        {
          path: 'create',
          name: 'company-create',
          component: () => import('@/pages/setting/company/create/index.vue'),
          meta: { title: t('routes.company_create') },
        },
        {
          path: ':id/edit',
          name: 'company-edit',
          component: () => import('@/pages/setting/company/edit/index.vue'),
          meta: { title: t('routes.company_edit') },
        },
      ],
    },
  ],
};

export default setting;