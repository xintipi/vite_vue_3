import { createI18n } from 'vue-i18n'

import english from './en'
import japan from './ja'

const messages: any = {
  en: { ...english },
  ja: { ...japan }
}

console.log(messages)

const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages
})

export default i18n
