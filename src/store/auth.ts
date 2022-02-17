import { defineStore } from 'pinia';
import Cookie from 'js-cookie';
import { COOKIES_KEY } from '@/enums/cookieEnum';

export interface AuthState {
  profile: any;
  token: any;
  currentPermissions: any[];
}

export const useAuthStore = defineStore({
  id: 'auth',

  state: (): AuthState => ({
    profile: null,
    token: Cookie.get('access_token'),
    currentPermissions: [],
  }),

  getters: {
    authProfile: (state) => state.profile,
    hasToken: (state) => state.token,
    currentPermissions: (state) => state.currentPermissions,
  },

  actions: {
    setToken({ token }: any) {
      this.token = token;
      Cookie.set(COOKIES_KEY.token, token);
    },

    setProfile({ profile }: any) {
      this.profile = profile;
    },

    setPermission(permissions: any[]) {
      this.currentPermissions = permissions;
    },

    setLogout() {
      this.token = null;
      this.profile = null;
      Cookie.remove(COOKIES_KEY.token);
    },
  },
});
