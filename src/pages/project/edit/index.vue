<template>
  <div class="project__edit">
    <project-form />
  </div>
</template>

<script lang="ts">
  import { defineAsyncComponent, defineComponent } from 'vue';

  export default defineComponent({
    name: 'EditProject',
    components: {
      ProjectForm: defineAsyncComponent(() => import('../_components/ProjectForm.vue')),
    },
  });
</script>

<style scoped></style>
