<template>
  <img alt="Vue logo" :src="logo" />
  <HelloWorld :msg="t('common.intro')" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import HelloWorld from '@/components/HelloWorld.vue'
import logo from '@/assets/logo.png'

export default defineComponent({
  name: 'Index',

  components: {
    HelloWorld
  },

  setup() {
    const { t } = useI18n()
    return {
      logo,
      t
    }
  }
})
</script>

<style scoped></style>
