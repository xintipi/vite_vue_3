import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/locale';

import registerDirectives from '@/directives';

import registerAntdesign from '@/plugins/ant.design';
import registerVee from '@/plugins/validation';
import pinia from '@/plugins/pinia';
import dayjs from 'dayjs';

const app = createApp(App);

// Register plugins
registerAntdesign(app);
registerVee(app);

// Register directives
registerDirectives(app);

app.use(i18n).use(router).use(pinia);

app.config.globalProperties.$dayjs = dayjs;

// mount app
app.mount('#app');
