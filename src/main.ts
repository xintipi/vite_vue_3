import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/locale';

import registerDirectives from '@/directives';

import registerAntdesign from '@/plugins/ant.design';
import registerVee from '@/plugins/validation';
import registerMoment from '@/plugins/moment';

import pinia from '@/plugins/pinia';

const app = createApp(App);

// Register plugins
registerAntdesign(app);
registerVee(app);
registerMoment(app);

// Register directives
registerDirectives(app);

app.use(i18n).use(router).use(pinia);

// mount app
app.mount('#app');
