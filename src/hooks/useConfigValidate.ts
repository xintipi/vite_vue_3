import { onMounted, computed } from 'vue';
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

import i18n from '@/locale';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

export function useConfigValidate() {
  const dictionary = computed(() => {
    return {
      en: {
        required: 'Please select {field}',
        email: '{field} format is not correct',
      },
      ja: {
        required: '{field}を選択してください',
        email: '{field}の形式が正しくありません',
      },
    };
  });
  const messages: any = {
    en: { ...en.messages, ...dictionary.value.en },
    ja: { ...ja.messages, ...dictionary.value.ja },
  };
  const locale = i18n.global.locale;

  onMounted(() => {
    configure({
      validateOnInput: true,
      generateMessage: localize(`${locale}`, {
        messages: { ...messages[locale] },
      }),
    });
  });
}
