import { uniqueId } from 'lodash-es';
import { LOCALE } from '@/enums/localeEnum';
import i18n from '@/locale';

export default {
  methods: {
    buildOptionText(pageSize: any): any {
      if (i18n.global.locale === LOCALE.ja) {
        return `${pageSize.value} / ページ`;
      }
      return `${pageSize.value} / page`;
    },

    showTotal(total: any, range: any): any {
      if (i18n.global.locale === LOCALE.ja) {
        return `${range[0]} - ${range[1]} 件 / ${total}件`;
      }
      return `${range[0]}-${range[1]} of ${total} items`;
    },

    randomUniqueID(): any {
      return uniqueId('row_');
    },
  },
};
