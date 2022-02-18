import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export function useBreadcrumbSetting() {
  const { t } = useI18n();

  const company: any = computed(() => {
    return {
      path: '/setting/company',
      breadcrumbName: t('breadcrumb.company'),
    };
  });

  const routesList: any = computed(() => {
    return {
      // auth
      login: [{ path: '/login' }],
      // dashboard
      dashboard: [{ path: '/', breadcrumbName: t('breadcrumb.dashboard') }],
      // project
      project: [{ path: '/project', breadcrumbName: t('breadcrumb.project') }],
      'project-create': [
        { path: '/project', breadcrumbName: t('breadcrumb.project_create_edit') },
        { path: 'create', breadcrumbName: t('breadcrumb.create') },
      ],
      'project-edit': [
        { path: '/project', breadcrumbName: t('breadcrumb.project_create_edit') },
        { path: ':id/edit', breadcrumbName: t('breadcrumb.edit') },
      ],
      // company
      company: [company.value],
      'company-create': [company.value, { path: 'create', breadcrumbName: t('breadcrumb.create') }],
      'company-edit': [company.value, { path: ':id/edit', breadcrumbName: t('breadcrumb.edit') }],
    };
  });

  return { routesList };
}
