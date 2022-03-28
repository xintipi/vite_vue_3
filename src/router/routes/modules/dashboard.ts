import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import i18n from '@/locale';
import DashboardPage from '@/pages/dashboard/index.vue';

const { t } = i18n.global;

const dashboard: AppRouteModule = {
  path: '/dashboard',
  component: LAYOUT,
  children: [
    {
      path: '',
      name: 'dashboard',
      component: DashboardPage,
      meta: { title: t('routes.dashboard') },
    },
  ],
};

export default dashboard;
