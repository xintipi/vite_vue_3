<template>
  <a-modal v-model:visible="open" :title="$t('modal.title')" class="modal-delete" @cancel="handleCancel">
    <template #footer>
      <template v-if="locale === 'en'">
        <p>{{ $t('modal.message_en') }} {{ nameCompany }}?</p>
      </template>
      <template v-if="locale === 'ja'">
        <p>{{ nameCompany + $t('modal.message_ja') }}</p>
      </template>
      <a-button key="back" class="btn-close" @click="handleCancel">{{ $t('modal.cancel') }}</a-button>
      <a-button type="danger" class="btn-delete" @click="handleDelete">
        {{ $t('modal.delete') }}
      </a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, watch, ref, toRefs, PropType } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ModalDelete',

  props: {
    visible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    name: {
      type: String as PropType<string>,
      default: '',
      required: true
    }
  },

  emits: ['update:visible', 'delete'],

  setup(props, context) {
    const { visible } = toRefs<any>(props)
    const { name } = toRefs<any>(props)
    const open = ref<boolean>(props.visible)
    const nameCompany = ref<string>(props.name)
    const { locale } = useI18n()

    const handleCancel = () => {
      open.value = false
      context.emit('update:visible', false)
    }

    watch(visible, (val) => {
      open.value = val
    })

    watch(name, (val) => {
      nameCompany.value = val
    })

    const handleDelete = (evt: any) => {
      context.emit('delete', evt)
    }

    return {
      open,
      nameCompany,
      locale,
      handleCancel,
      handleDelete
    }
  }
})
</script>

<style lang="scss" scoped></style>
