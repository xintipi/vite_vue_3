<template>
  <div class="setting-company">
    <h2>Setting Company</h2>
    <a-button type="primary" @click="$router.push({ name: 'company-create' })">
      Move to create
    </a-button>
    <a-button type="primary" @click="$router.push({ name: 'company-edit', params: { id: 1 } })">
      Move to edit
    </a-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SettingCompany',
  });
</script>

<style scoped></style>
