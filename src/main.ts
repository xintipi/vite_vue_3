import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/locale'

import directives from '@/directives'

import globalComponents from '@/plugins/ant.design'
import validation from '@/plugins/validation'
import pinia from '@/plugins/pinia'

import configureValidation from '@/mixins/validation.mixin'

document.title = import.meta.env.VITE_APP_TITLE

const app = createApp(App)

// register ant-design as global components
globalComponents(app)
// directive
directives(app)
// register vee validate
validation(app)
// global mixin
configureValidation(app)

// global css
import '@/styles/main.scss'

// register plugins
app.use(i18n).use(router).use(pinia)

// mount app
app.mount('#app')
