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
  name: 'App',

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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
