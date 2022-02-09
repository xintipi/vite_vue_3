<template>
  <a-layout class="main">
    <a-layout class="main__content">
      <a-layout-content class="u-pt-56">
        <a-config-provider>
          <router-view />
        </a-config-provider>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="scss">
.header.is-collapse {
  left: 66px;
  transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;
}

.main {
  height: 100vh;
}
</style>
