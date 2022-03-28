import type { AppRouteModule } from '@/router/types';
import { LAYOUT, BASE } from '@/router/constant';
import i18n from '@/locale';

import CompanyPage from '@/pages/setting/company/index.vue';
import CreateCompanyPage from '@/pages/setting/company/create/index.vue';
import EditCompanyPage from '@/pages/setting/company/edit/index.vue';

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
          component: CompanyPage,
          meta: { title: t('routes.company') },
        },
        {
          path: 'create',
          name: 'company-create',
          component: CreateCompanyPage,
          meta: { title: t('routes.company_create') },
        },
        {
          path: ':id/edit',
          name: 'company-edit',
          component: EditCompanyPage,
          meta: { title: t('routes.company_edit') },
        },
      ],
    },
  ],
};

export default setting;
