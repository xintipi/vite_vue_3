<template>
  <a-layout class="main">
    <app-sidebar @on-collapse-side-bar="onCollapseSideBar($event)" />

    <a-layout class="main__content">
      <app-header :class="isCollapse ? 'is-collapse' : ''">
        <slot name="header"></slot>
      </app-header>

      <a-layout-content class="main-layout">
        <a-config-provider :locale="localeJa">
          <router-view />
        </a-config-provider>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
  import { defineComponent, ref, onBeforeMount } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { AppSidebar, AppHeader } from '@/layouts/App';

  import localeEn from 'ant-design-vue/es/locale/en_US';
  import localeJa from 'ant-design-vue/es/locale/ja_JP';

  export default defineComponent({
    name: 'IndexLayout',

    components: { AppSidebar, AppHeader },

    setup() {
      const { locale } = useI18n();

      const visible = ref(true);

      const locales = ref({ en: localeEn, ja: localeJa });
      const isCollapse = ref<boolean>();

      const onCollapseSideBar = (isCollapseEmit: boolean) => {
        isCollapse.value = isCollapseEmit;
      };

      onBeforeMount(() => {
        locales.value = {
          en: {
            ...locales.value.en,
            Empty: { description: 'The corresponding item was not found.' },
          },
          ja: {
            ...locales.value.ja,
            Empty: { description: '該当する企業が見つかりませんでした。' },
          },
        };
      });

      return {
        visible,
        locale,
        locales,
        isCollapse,
        localeJa,
        onCollapseSideBar,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .header.is-collapse {
    left: 66px;
    transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  .main {
    height: 100vh;
  }
</style>
