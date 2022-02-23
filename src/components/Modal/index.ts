import { withInstall } from '@/utils';

import modalAction from './src/ModalAction.vue';
import modalDelete from './src/ModalDelete.vue';

export const ModalAction = withInstall(modalAction);
export const ModalDelete = withInstall(modalDelete);
