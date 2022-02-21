import type { AppRouteModule } from '@/router/types';
import i18n from '@/locale';

const { t } = i18n.global;

const login: AppRouteModule = {
  path: '/login',
  name: 'login',
  component: () => import('@/pages/auth/login/index.vue'),
  meta: { title: t('routes.login') },
};

export default login;
