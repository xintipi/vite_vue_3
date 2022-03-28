<template>
  <div class="setting-company">
    <h2>Attendance Work Data</h2>
    <a-button type="primary" @click="$router.push({ name: 'workdata-create' })">
      Move to create
    </a-button>
    <a-button type="primary" @click="$router.push({ name: 'workdata-edit', params: { id: 1 } })">
      Move to edit
    </a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AttendanceWorkData',
  });
</script>

<style scoped></style>
