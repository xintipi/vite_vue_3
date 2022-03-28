import type { AppRouteModule } from '@/router/types';
import i18n from '@/locale';
import LoginPage from '@/pages/auth/login/index.vue';

const { t } = i18n.global;

const login: AppRouteModule = {
  path: '/login',
  name: 'login',
  component: LoginPage,
  meta: { title: t('routes.login') },
};

export default login;
