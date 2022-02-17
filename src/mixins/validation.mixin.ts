import { App } from '@vue/runtime-core';

import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

import i18n from '@/locale';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

// const dictionary = {
//   en: {
//     required: 'Please select {field}',
//     confirmed: 'Does not match new password',
//     email: '{field} format is not correct'
//   },
//   ja: {
//     required: '{field}を選択してください',
//     confirmed: '新しいパスワードと一致しません',
//     email: '{field}の形式が正しくありません'
//   }
// }

const dictionary = {
  en: {},
  ja: {},
};

const configureValidation = (app: App<Element>) => {
  app.mixin({
    created() {
      const messages: any = {
        en: { ...en.messages, ...dictionary.en },
        ja: { ...ja.messages, ...dictionary.ja },
      };

      const locale = i18n.global.locale;

      configure({
        validateOnInput: true,
        generateMessage: localize(`${locale}`, {
          messages: { ...messages[locale] },
        }),
      });
    },
  });
};

export default configureValidation;
