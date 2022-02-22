import { App } from '@vue/runtime-core';

import moment from 'moment';
import 'moment/dist/locale/ja';

const registerMoment = (app: App<Element>) => {
  app.config.globalProperties.$moment = moment;
};

export default registerMoment;
