import * as moment from 'moment';
import 'moment/locale/ja';
import { App } from '@vue/runtime-core';

const usingMoment = (app: App<Element>) => {
  moment.locale('ja');
  app.config.globalProperties.$moment = moment;
};

export default usingMoment;
