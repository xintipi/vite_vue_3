<template>
  <div class="project__create">
    <project-form />
  </div>
</template>

<script lang="ts">
  import { defineComponent, defineAsyncComponent } from 'vue';

  export default defineComponent({
    name: 'CreateProject',
    components: {
      ProjectForm: defineAsyncComponent(() => import('../_components/ProjectForm.vue')),
    },
  });
</script>

<style scoped></style>
