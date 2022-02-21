// register all directives
import { App } from '@vue/runtime-core';
import clickOutside from '@/directives/clickOutside';

const registerDirectives = (app: App<Element>) => {
  clickOutside(app);
};

export default registerDirectives;
