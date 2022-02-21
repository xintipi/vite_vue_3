// register all directives
import { App } from '@vue/runtime-core';
import clickOutside from '@/directives/clickOutside';

const useDirectives = (app: App<Element>) => {
  clickOutside(app);
};

export default useDirectives;
