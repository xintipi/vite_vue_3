import { withInstall } from '@/utils';

import iconUser from './src/IconUser.vue';
import iconUserSetting from './src/IconUserSetting.vue';
import iconLogout from './src/IconLogout.vue';

export const IconUser = withInstall(iconUser);
export const IconLogout = withInstall(iconLogout);
export const IconUserSetting = withInstall(iconUserSetting);
