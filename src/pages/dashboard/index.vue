<template>
  <section class="dashboard"> Home </section>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Admin from '@/models/Admin';

  export default defineComponent({
    name: 'Index',

    setup() {
      const { t } = useI18n();

      onMounted(async () => {
        await Admin.me({
          query: {
            include: 'role,permissions',
          },
        });
      });
      return {
        t,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
