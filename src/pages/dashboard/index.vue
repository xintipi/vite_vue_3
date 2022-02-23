<template>
  <section class="dashboard">
    <HelloWorld :msg="t('common.intro')" />
  </section>
</template>

<script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'Index',

    components: {
      HelloWorld: defineAsyncComponent(() => import('@/components/HelloWorld.vue')),
    },

    setup() {
      const { t } = useI18n();
      return {
        t,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .dashboard {
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column;
  }
</style>
