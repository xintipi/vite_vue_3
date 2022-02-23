<template>
  <section class="project">
    <project-search-form />

    <div class="project__options">
      <div class="project__buttons">
        <a-tooltip color="#fff" :title="$t('project.export_csv')">
          <a-button type="link" @click="exportCSV">
            <template #icon>
              <span class="btn-icon"><icon-line-down /></span>
            </template>
          </a-button>
        </a-tooltip>

        <a-button type="primary" @click="$router.push({ name: 'project-create' })">
          <template #icon>
            <span class="btn-icon"><icon-line-add /></span>
          </template>
          {{ $t('project.add_project_link') }}
        </a-button>
      </div>
    </div>

    <div class="project__table">
      <a-table
        class="list-table"
        v-click-outside="tabOutsideTable"
        :columns="columns"
        :data-source="dataSource"
        :row-key="(record) => record.id"
        :loading="loading"
        :show-sorter-tooltip="false"
        :pagination="{
          ...pagination,
          showTotal: showTotal,
        }"
        :custom-row="customRow"
        :row-selection="rowSelection"
        :scroll="{ y: height - 520.5 }"
        size="middle"
        @change="handleChange"
      >
        <template #created_at="{ text: created_at }">
          {{ $moment(created_at).format('YYYY/MM/DD') }}
        </template>

        <template #divisions="{ text: divisions }">
          {{
            divisions === 0
              ? $t('company.customer')
              : divisions === 1
              ? $t('company.partner')
              : $t('company.both')
          }}
        </template>
      </a-table>

      <modal-action
        ref="refAction"
        v-model:visible="visibleRecord.visible"
        @delete="popupDelete = true"
        @close="closeRecord"
      />

      <modal-delete
        class="ref__delete"
        v-model:visible="popupDelete"
        :name="visibleRecord.name"
        @delete="deleteRecord"
      />
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent, ref, computed, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  import { IconLineAdd, IconLineDown } from '@/components/Icons';
  import { ModalAction, ModalDelete } from '@/components/Modal';
  import ProjectSearchForm from '@/pages/project/_components/ProjectSearchForm.vue';

  import { usePaginateSetting } from '@/hooks/usePaginateSetting';
  import { convertPagination } from '@/utils';
  import CompanyJson from '@/dummy/company.json';

  export default defineComponent({
    name: 'Index',

    components: {
      ProjectSearchForm,
      ModalAction,
      ModalDelete,
      IconLineAdd,
      IconLineDown,
    },

    setup() {
      const { t } = useI18n();
      const { showTotal } = usePaginateSetting();

      const dataSource = ref<any[]>([]);
      const loading = ref<boolean>(false);
      const pagination = ref<any>({});
      const visibleRecord = ref<any>({});
      const height = ref<number>(0);
      const refAction = ref();
      const refDelete = ref();
      const popupDelete = ref(false);

      const state = ref({ selectedRowKeys: [] });
      let tempRow = ref<any[]>([]);

      const columns = computed(() => {
        return [
          {
            title: t('company.company_created_at'),
            dataIndex: 'created_at',
            key: 'created_at',
            slots: { customRender: 'created_at' },
            sorter: true,
          },
          {
            title: t('company.company_name'),
            dataIndex: 'name',
            key: 'name',
            sorter: true,
          },
          {
            title: t('company.company_code'),
            dataIndex: 'code',
            key: 'code',
            sorter: true,
          },
          {
            title: t('company.country'),
            dataIndex: 'country_name',
            key: 'country_name',
            sorter: true,
          },
          {
            title: t('company.currency'),
            dataIndex: 'currency_code',
            key: 'currency_code',
          },
          {
            title: t('company.classification'),
            dataIndex: 'divisions',
            key: 'divisions',
            slots: { customRender: 'divisions' },
          },
        ];
      });

      const rowSelection = computed(() => {
        return {
          selectedRowKeys: state.value.selectedRowKeys,
          columnWidth: 0,
          type: 'radio',
        };
      });

      onMounted(() => {
        const { result } = CompanyJson;

        dataSource.value = result.data;
        pagination.value = { ...convertPagination(result.meta) };

        // get inner height
        getInnerHeight();
        window.addEventListener('resize', getInnerHeight);
      });

      const tabOutsideTable = (event) => {
        const refModalDelete = document.querySelector('.ref__delete');
        const lists = [refAction.value?.$el, refModalDelete].filter(Boolean);

        if (lists.length === 0) return;

        const isOutside = lists.every((el) => !(el === event.target || el.contains(event.target)));

        if (isOutside) {
          closeRecord();
        }
      };

      const closeRecord = () => {
        visibleRecord.value.visible = false;
        state.value.selectedRowKeys = [];
        tempRow.value = [];
      };

      const deleteRecord = () => {
        console.log('aaa');
      };

      const getInnerHeight = () => {
        height.value = window.innerHeight;
      };

      const customRow = (record) => {
        return {
          onClick: () => {
            selectRow(record);
          },
        };
      };

      const selectRow = (record) => {
        visibleRecord.value = { ...record };
        if (tempRow.value.length && tempRow.value[0] === record.id) {
          state.value.selectedRowKeys = [];
          tempRow.value = [];
          visibleRecord.value.visible = false;
        } else {
          state.value.selectedRowKeys = [record.id] as any;
          tempRow.value = [record.id];
          visibleRecord.value.visible = true;
        }
      };

      const handleChange = async (_pagination, _filters, sorter) => {
        visibleRecord.value.visible = false;

        switch (sorter.order) {
          case 'ascend':
            sorter.order = 'asc';
            break;
          case 'descend':
            sorter.order = 'desc';
            break;
          default:
            sorter.order = '';
            break;
        }
      };

      const exportCSV = () => {
        console.log('export');
      };

      return {
        loading,
        pagination,
        dataSource,
        columns,
        rowSelection,
        height,
        visibleRecord,
        refAction,
        refDelete,
        popupDelete,
        tabOutsideTable,
        closeRecord,
        deleteRecord,
        handleChange,
        showTotal,
        customRow,
        exportCSV,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/shared/mixins';
  @import '@/styles/shared/variables';

  .project {
    .ant-table-column-sorters {
      display: flex !important;
      align-items: center !important;

      .ant-table-column-sorter {
        margin-bottom: 4px;
      }
    }

    &__options {
      @include flexbox(flex-end, flex-end);
      flex-direction: column;
      margin: 10px 15px 10px 0;
    }

    &__buttons {
      display: flex;
      align-content: center;

      .ant-btn-icon-only {
        display: inherit;
      }

      button + button {
        margin-left: 16px;
      }
    }

    &__pagination {
      margin-top: 16px;
    }

    &__list {
      white-space: nowrap;

      .ant-table-placeholder {
        padding-top: 48px;
      }

      .ant-table-thead {
        tr > th:first-child {
          width: 12px;
          height: 12px;
        }
      }

      .ant-table-tbody {
        tr > td:first-child {
          width: 12px;
          height: 12px;
        }
      }

      .column-read {
        width: 12px;
        height: 12px;

        .point-status {
          width: 12px;
          height: 12px;
          margin: 0;
          border-radius: 50%;
        }

        .text-status {
          margin-bottom: 0;
        }
      }
    }

    .btn-memo svg {
      pointer-events: none;
    }

    table tbody > tr {
      &.is-clicked-row > td {
        background-color: $color-primary-1 !important;
      }

      td {
        cursor: pointer;

        &:first-child {
          padding-left: 12px !important;
        }
      }
    }

    table thead tr th:first-child {
      padding-left: 12px !important;
    }
  }
</style>
