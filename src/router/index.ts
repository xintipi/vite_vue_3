import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router';
import routes from './routes';
import { setLastActivity, getLastActivity } from '@/utils/activityTracker';
import { TrackerEnum } from '@/enums/trackerEnum';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE as string),
  linkActiveClass: 'is-active',
  routes,
});

let isFirstTransition = true;

router.beforeEach(
  // @ts-ignore
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // @ts-ignore
    document.title = to.meta.title;

    const lastRouteName = localStorage.getItem(TrackerEnum.LS_ROUTE_KEY);
    const lastActivityAt = getLastActivity();
    const hasBeenActiveRecently = Boolean(
      lastActivityAt && Date.now() - Number(lastActivityAt) < TrackerEnum.MAX_TIME_TO_RETURN,
    );

    const shouldRedirect = Boolean(isFirstTransition && lastRouteName && hasBeenActiveRecently);

    if (shouldRedirect) {
      // @ts-ignore
      next({ name: lastRouteName });
    } else {
      next();
    }

    isFirstTransition = false;
  },
);

router.afterEach((to: RouteLocationNormalized) => {
  if (typeof to.name === 'string' && to.name !== 'login') {
    localStorage.setItem(TrackerEnum.LS_ROUTE_KEY, to.name);
  }
  setLastActivity(to.name);
});

export default router;
