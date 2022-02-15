// register all directives
import { App } from '@vue/runtime-core';
import clickOutSide from '@/directives/click-out-side.directive';

const directives = (app: App<Element>) => {
  clickOutSide(app);
};

export default directives;
