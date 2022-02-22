<template>
  <div class="project__search">
    <form @submit.prevent="onSubmit">
      <a-row type="flex">
        <a-col flex="5">
          <!-- Group -->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.group_name') }}</label>

              <div class="form-select">
                <a-select
                  v-model:value="form.groupId"
                  show-arrow
                  :max-tag-count="0"
                  option-label-prop="label"
                  dropdown-class-name="multiple-select-custom"
                  mode="multiple"
                  :placeholder="$t('project.group_placeholder')"
                  style="width: 288px"
                >
                  <a-select-option v-for="group in dataGroups" :key="group.id" :value="group.id">
                    {{ group.name }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <!--./Group -->

          <!-- Accounts -->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.account_name') }}</label>

              <div class="form-select">
                <a-select
                  v-model:value="form.accountId"
                  show-arrow
                  :max-tag-count="0"
                  option-label-prop="label"
                  dropdown-class-name="multiple-select-custom"
                  mode="multiple"
                  :placeholder="$t('project.accounts_placeholder')"
                  style="width: 288px"
                >
                  <a-select-option
                    v-for="account in dataAccounts"
                    :key="account.id"
                    :value="account.id"
                  >
                    {{ account.fullname }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
          </div>
          <!-- ./Accounts -->

          <!-- Status -->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.status') }}</label>
              <div class="form-checkbox">
                <a-checkbox-group
                  v-model:value="form.statusId"
                  name="projectStatuses"
                  :options="dataStatuses"
                />
              </div>
            </div>
          </div>
          <!-- ./Status -->
        </a-col>

        <a-col flex="5">
          <!--Date From-->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.updated_date') }}</label>

              <div class="form-select">
                <a-range-picker
                  v-model:value="form.updatedDateValue"
                  format="YYYY-MM-DD"
                  :placeholder="['YYYY/MM/DD', 'YYYY/MM/DD']"
                >
                  <template #suffixIcon>
                    <calendar-outlined />
                  </template>
                </a-range-picker>
              </div>
            </div>
          </div>
          <!--./Date From -->

          <!--Date From-->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.statistics_from_month') }}</label>

              <div class="form-select">
                <a-range-picker
                  :placeholder="['YYYY/MM', 'YYYY/MM']"
                  format="YYYY-MM"
                  :value="form.statisticsDateValue"
                  :mode="mode"
                  @panelChange="handleStatisticsDateValue2"
                  @change="handleStatisticsDateValue"
                />
              </div>
            </div>
          </div>
          <!--./Date From -->

          <!-- Accuracy -->
          <div class="form-group">
            <div class="form-content">
              <label class="form-label">{{ $t('project.accuracy_name') }}</label>
              <div class="form-checkbox">
                <a-checkbox-group
                  v-model:value="form.accuracyId"
                  name="projectAccuracies"
                  :options="dataAccuracies"
                />
              </div>
            </div>
          </div>
          <!-- ./Accuracy -->
        </a-col>
      </a-row>

      <div class="project__search--btn">
        <a-button key="back" type="default" @click="clearForm" style="width: 150px"
          >{{ $t('common.handle_cancel') }}
        </a-button>
        <a-button
          key="submit"
          type="primary"
          html-type="submit"
          :loading="loading"
          style="width: 150px"
        >
          <template #icon>
            <span class="btn-icon"> <icon-search /></span>
          </template>
          {{ $t('common.handle_ok') }}
        </a-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onBeforeMount } from 'vue';
  import { useForm } from 'vee-validate';
  import { useI18n } from 'vue-i18n';

  import { IconSearch } from '@/components/Icons';
  import { CalendarOutlined } from '@ant-design/icons-vue';

  import localeJa from 'ant-design-vue/es/locale/ja_JP';
  import localeEn from 'ant-design-vue/es/locale/en_US';

  export default defineComponent({
    name: 'ProjectSearchForm',

    components: { IconSearch, CalendarOutlined },

    setup() {
      const { handleSubmit } = useForm();
      const { t } = useI18n();

      const initForm = {
        groupId: [],
        accountId: [],
        updatedDateValue: [null, null],
        statisticsDateValue: [null, null],
        statusId: [],
        accuracyId: [],
      };

      const form = ref(JSON.parse(JSON.stringify(initForm)));
      const mode = ref<any>(['month', 'month']);

      const loading = ref<boolean>(false);

      const dataGroups = ref<any[]>([]);
      const dataAccounts = ref<any[]>([]);
      const dataStatuses = ref<any[]>([]);
      const dataAccuracies = ref<any[]>([]);

      onBeforeMount(() => {
        dataGroups.value = [
          {
            deposit_currency_code: 'VND',
            id: 1,
            name: 'gumiVietNam',
            withdrawal_currency_code: 'JPY',
          },
          {
            deposit_currency_code: 'JPY',
            id: 2,
            name: 'VAND',
            withdrawal_currency_code: 'JPY',
          },
          {
            deposit_currency_code: 'JPY',
            id: 3,
            name: 'VAND Creative',
            withdrawal_currency_code: 'VND',
          },
        ];

        dataAccounts.value = [
          {
            fullname: '杉野',
            id: 6,
          },
          {
            fullname: 'Meo Meo',
            id: 7,
          },
          {
            fullname: 'Bang',
            id: 8,
          },
        ];

        dataStatuses.value = [
          {
            label: '引合',
            value: 1,
          },
          {
            label: '調査中',
            value: 2,
          },
          {
            label: '概算見積(提案)',
            value: 3,
          },
          {
            label: '詳細見積',
            value: 4,
          },
          {
            label: '受注',
            value: 5,
          },
          {
            label: '開発中',
            value: 6,
          },
          {
            label: '検収済',
            value: 7,
          },
          {
            label: '請求済',
            value: 8,
          },
        ];

        dataAccuracies.value = [
          {
            label: 'S (受注)',
            value: 1,
          },
          {
            label: 'A (口頭受注)',
            value: 2,
          },
          {
            label: 'B (担当者発注)',
            value: 3,
          },
          {
            label: 'C (金額次第)',
            value: 4,
          },
          {
            label: 'D (とりあえず見積もり)',
            value: 5,
          },
          {
            label: 'E (引合)',
            value: 6,
          },
        ];
      });

      const handleStatisticsDateValue = (val: any[]) => {
        form.value.statisticsDateValue = val;
      };

      const handleStatisticsDateValue2 = (val: any[], mode: any[]) => {
        form.value.statisticsDateValue = val;
        mode.value = [
          mode[0] === 'date' ? 'month' : mode[0],
          mode[1] === 'date' ? 'month' : mode[1],
        ];
      };

      const clearForm = () => {
        form.value = JSON.parse(JSON.stringify(initForm));
      };

      const onSubmit = handleSubmit(() => {
        let data = { ...form.value };
        console.log(data);

        loading.value = true;
      });

      return {
        t,
        form,
        loading,
        mode,
        dataGroups,
        dataAccounts,
        dataStatuses,
        dataAccuracies,
        handleStatisticsDateValue,
        handleStatisticsDateValue2,
        clearForm,
        onSubmit,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .project__search {
    padding: 20px;
    border: 1px solid #eded;
    margin: 15px 15px 0;
    background-color: #fff;

    &--btn {
      text-align: right;
      margin-top: 15px;

      .ant-btn-primary {
        margin-left: 20px;
      }
    }

    .ant-row {
      .form-group {
        margin-bottom: 15px;
      }
    }
  }
</style>
