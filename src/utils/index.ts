import { forEach, isEmpty } from 'lodash-es';
import type { App, Plugin } from 'vue';

const deleteEmptyValue = (object: any) => {
  forEach(Object.keys(object), (key) => {
    if (typeof object[key] === 'object' && !isEmpty(object[key])) {
      object[key] = deleteEmptyValue(object[key]);
    } else if (
      (typeof object[key] !== 'boolean' && [undefined, '', null].includes(object[key])) ||
      (typeof object[key] === 'object' && isEmpty(object[key]))
    ) {
      delete object[key];
    }
  });
  return object;
};

const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

const convertPagination = (pagination: any, position = 'top') => {
  return {
    defaultCurrent: 1,
    defaultPageSize: 10,
    current: pagination.page_number,
    total: pagination.total_records,
    totalPage: pagination.total_pages,
    pageSize: pagination.page_size,
    position: position,
  };
};

export { deleteEmptyValue, withInstall, convertPagination };
