<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useConfigValidate } from '@/hooks/useConfigValidate';

  export default defineComponent({
    name: 'App',
    setup() {
      useConfigValidate();
    },
  });
</script>
