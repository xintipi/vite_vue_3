<template>
  <a-breadcrumb :routes="routes" class="k-breadcrumb">
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
  import { defineComponent, ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'Breadcrumb',

    setup() {
      const { t } = useI18n({ useScope: 'global' });
      const routes = ref<any>([]);
      const route = useRoute();

      // all breadcrumbs
      const routesList = {
        //auth
        login: [
          {
            path: '/login',
          },
        ],

        //dashboard
        dashboard: [
          {
            path: '/',
            breadcrumbName: t('breadcrumb.dashboard'),
          },
        ],
      };

      const getRoutesList = () => {
        const nameRoute = route?.name || '';
        routes.value = routesList[nameRoute] || [];
        if (route?.query && routes.value.length > 0) {
          routes.value[routes.value.length - 1].query = Object.keys(route.query).length
            ? { ...route.query }
            : '';
        }
      };

      onMounted(() => {
        getRoutesList(route);
      });

      watch(
        () => route.query,
        () => {
          getRoutesList(route);
        },
      );

      return {
        routes,
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
