<template>
  <a-select v-model:value="locale" style="width: 115px" @change="handleChange">
    <a-select-option v-for="(item, i) in options" :key="i" :value="item.locale">
      {{ item.value }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
  import { ref, defineComponent, PropType } from 'vue';
  import { useI18n } from 'vue-i18n';

  import logo from '@/assets/logo.png';

  export default defineComponent({
    name: 'SelectLanguage',

    props: {
      msg: {
        type: String as PropType<string>,
        required: true,
      },
    },

    setup() {
      const { locale } = useI18n();
      const options = ref([
        { locale: 'ja', value: '日本語' },
        { locale: 'en', value: 'English' },
      ]);

      const handleChange = (value: any) => {
        locale.value = value;
      };

      return {
        locale,
        options,
        logo,
        handleChange,
      };
    },
  });
</script>

<style lang="scss" scoped></style>
