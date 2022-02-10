<template>
  <HelloWorld :msg="t('common.intro')" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Index',

  components: {
    HelloWorld
  },

  setup() {
    const { t } = useI18n()
    return {
      t
    }
  }
})
</script>

<style scoped></style>
