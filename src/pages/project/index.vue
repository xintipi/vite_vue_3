<template>
  <div class="project">
    <h3>Project</h3>
    <a-button type="primary" @click="$router.push({ name: 'project-create' })">
      Move to create
    </a-button>
    <a-button type="primary" @click="$router.push({ name: 'project-edit', params: { id: 1 } })">
      Move to edit
    </a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Index',
  });
</script>

<style scoped></style>
