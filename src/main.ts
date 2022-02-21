import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import i18n from '@/locale';

import useDirectives from '@/directives';

import useAntdesignComponent from '@/plugins/ant.design';
import useValidate from '@/plugins/validation';
import usingMoment from '@/plugins/moment';
import pinia from '@/plugins/pinia';

const app = createApp(App);

// directive
useDirectives(app);
// register plugin
useAntdesignComponent(app);
useValidate(app);
usingMoment(app);
// use plugin
app.use(i18n).use(router).use(pinia);
// mount app
app.mount('#app');
