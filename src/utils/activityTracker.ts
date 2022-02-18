import { TrackerEnum } from '@/enums/trackerEnum';

const setLastActivity = (routeName: symbol | null | undefined | string) => {
  if (routeName !== 'login') {
    localStorage.setItem(TrackerEnum.LS_LAST_ACTIVITY_AT_KEY, String(Date.now()));
  }
};

const getLastActivity = () => {
  return localStorage.getItem(TrackerEnum.LS_LAST_ACTIVITY_AT_KEY);
};

const clearLastActivity = () => {
  if (getLastActivity()) {
    return localStorage.removeItem(TrackerEnum.LS_LAST_ACTIVITY_AT_KEY);
  }
};

export { setLastActivity, getLastActivity, clearLastActivity };
