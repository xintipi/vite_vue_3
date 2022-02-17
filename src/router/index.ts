import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  linkActiveClass: 'is-active',
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // @ts-ignore
    document.title = to.meta.title;
    console.log(from);
    next();
  },
);

export default router;
