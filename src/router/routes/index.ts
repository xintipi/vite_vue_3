import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: '/dashboard',
};

// Basic routing without permission
export const basicRoutes = [RootRoute, ...routeModuleList];
