<template>
  <a-breadcrumb :routes="routing" class="k-breadcrumb">
    <template #itemRender="{ route, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, query: { ...route.query } }">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, computed, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'Breadcrumb',

    setup() {
      const { t, locale } = useI18n({ useScope: 'global' });
      const routing = ref<any[]>([]);
      const route = useRoute();

      const company = computed(() => {
        return {
          path: '/setting/company',
          breadcrumbName: t('breadcrumb.company'),
        };
      });

      const routesList = computed(() => {
        return {
          // auth
          login: [
            {
              path: '/login',
            },
          ],

          // dashboard
          dashboard: [
            {
              path: '/',
              breadcrumbName: t('breadcrumb.dashboard'),
            },
          ],

          // project
          project: [
            {
              path: '/project',
              breadcrumbName: t('breadcrumb.project'),
            },
          ],

          'project-create': [
            {
              path: '/project',
              breadcrumbName: t('breadcrumb.project_create_edit'),
            },
            {
              path: 'create',
              breadcrumbName: t('breadcrumb.create'),
            },
          ],

          'project-edit': [
            {
              path: '/project',
              breadcrumbName: t('breadcrumb.project_create_edit'),
            },
            {
              path: ':id/edit',
              breadcrumbName: t('breadcrumb.edit'),
            },
          ],

          // company
          company: [company.value],

          'company-create': [
            company.value,
            {
              path: 'create',
              breadcrumbName: t('breadcrumb.create'),
            },
          ],

          'company-edit': [
            company.value,
            {
              path: ':id/edit',
              breadcrumbName: t('breadcrumb.edit'),
            },
          ],
        };
      });

      const getRoutesList = () => {
        const nameRoute = route?.name || '';
        routing.value = routesList.value[nameRoute] || [];
        if (route?.query && routing.value.length > 0) {
          routing.value[routing.value.length - 1].query = Object.keys(route.query).length
            ? { ...route.query }
            : '';
        }
      };

      onBeforeMount(() => {
        getRoutesList();
      });

      watch(locale, () => {
        getRoutesList();
      });

      watch(
        () => route.query,
        () => {
          getRoutesList();
        },
      );

      return {
        routing,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/shared/variables';
  @import '@/styles/shared/mixins';

  .k-breadcrumb {
    .ant-breadcrumb-link,
    .ant-breadcrumb-separator {
      color: $color-grey-75;
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
    }

    span:last-child .ant-breadcrumb-link {
      color: $color-grey-15;
      font-weight: 700;
    }
  }
</style>
