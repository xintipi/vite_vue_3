import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import i18n from '@/locale';
import { defineAsyncComponent } from 'vue';

const { t } = i18n.global;

const dashboard: AppRouteModule = {
  path: '/dashboard',
  component: LAYOUT,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: defineAsyncComponent(() => import('@/pages/dashboard/index.vue')),
      meta: { title: t('routes.dashboard') },
    },
  ],
};

export default dashboard;
