<template>
  <section class="dashboard">
    <HelloWorld :msg="t('common.intro')" />
  </section>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Admin from '@/models/Admin';

  import HelloWorld from '@/components/HelloWorld.vue';

  export default defineComponent({
    name: 'Index',

    components: {
      HelloWorld,
    },

    setup() {
      const { t } = useI18n();

      onMounted(async () => {
        const { data } = await Admin.me({
          query: {
            include: 'role,permissions',
          },
        });
        console.log(data);
      });
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
