<template>
  <a-modal
    v-model:visible="open"
    :title="$t('modal.title')"
    class="modal-delete"
    @cancel="handleCancel"
  >
    <template #footer>
      <template v-if="locale === 'en' && recordName">
        <p>{{ $t('modal.message_en') }} {{ recordName }}?</p>
      </template>

      <template v-if="locale === 'ja' && recordName">
        <p>{{ recordName + $t('modal.message_ja') }}</p>
      </template>

      <a-button key="back" type="default" class="btn-close" @click="handleCancel">{{
        $t('modal.cancel')
      }}</a-button>

      <a-button type="primary" danger class="btn-delete" @click="handleDelete">
        {{ $t('modal.delete') }}
      </a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, computed, ref, toRefs, watch, PropType } from 'vue';
  import { useI18n } from 'vue-i18n';

  export default defineComponent({
    name: 'ModalDelete',

    props: {
      visible: {
        type: Boolean as PropType<boolean | any>,
        default: false,
      },
      name: {
        type: String as PropType<string>,
        default: '',
        required: true,
      },
    },

    emits: ['update:visible', 'delete'],

    setup(props, { emit }) {
      const { locale } = useI18n();

      const { visible } = toRefs(props);
      const open = ref(props.visible);

      const recordName = computed(() => props.name);

      watch(visible, (val) => {
        open.value = val;
      });

      const handleCancel = () => {
        emit('update:visible', false);
      };

      const handleDelete = (evt) => {
        emit('delete', evt);
      };

      return {
        open,
        recordName,
        locale,
        handleCancel,
        handleDelete,
      };
    },
  });
</script>
