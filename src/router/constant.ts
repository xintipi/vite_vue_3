import { RouteComponent } from 'vue-router';

/**
 * @description: default layout
 */
export const LAYOUT = (): Promise<RouteComponent> => import('@/layouts/MainLayout.vue');

/**
 * @description: default base page
 */
export const BASE = (): Promise<RouteComponent> => import('@/pages/base/index.vue');
