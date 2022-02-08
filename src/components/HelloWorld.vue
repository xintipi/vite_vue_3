<template>
  <h1>{{ msg }}</h1>

  <a-button type="primary" class="mb-3" @click="count++"
    >{{ $t('common.count') }}: {{ count }}</a-button
  >

  <a-select v-model:value="locale" style="width: 115px" @change="handleChange">
    <a-select-option v-for="(item, i) in options" :key="i" :value="item.locale">
      {{ item.value }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { SelectProps } from 'ant-design-vue'
import { ref, defineComponent, PropType } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: {
      type: String as PropType<string>,
      required: true
    }
  },

  setup() {
    const { locale } = useI18n()
    const count = ref<boolean>(0)
    const options = ref<SelectProps['options']>([
      { locale: 'ja', value: '日本語' },
      { locale: 'en', value: 'English' }
    ])

    const handleChange: SelectProps['onChange'] = (value) => {
      locale.value = value
    }

    return {
      locale,
      count,
      options,
      handleChange
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;

  a {
    color: #42b983;
  }
}
</style>
