<template>
  <div class="box-btn" :class="{ show: visible }">
    <a-button class="btn-edit" @click="$emit('edit', $event)">
      <template #icon><form-outlined /></template>
      {{ $t('action.edit') }}
    </a-button>

    <a-button class="btn-delete" @click="$emit('delete', $event)">
      <template #icon><delete-outlined /></template>
      {{ $t('action.delete') }}
    </a-button>

    <a-button
      type="link"
      class="btn-close"
      @click="
        $emit('update:visible', false);
        $emit('close', $event);
      "
    >
      <template #icon>
        <span class="btn-icon"> <icon-close /></span>
      </template>
    </a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { FormOutlined, DeleteOutlined } from '@ant-design/icons-vue';

  import { IconClose } from '@/components/Icons';

  export default defineComponent({
    name: 'ModalAction',

    components: {
      FormOutlined,
      DeleteOutlined,
      IconClose,
    },

    props: {
      visible: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },

    emits: ['update:visible', 'edit', 'delete', 'close'],
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/shared/mixins';

  .ant-layout {
    position: relative;
    max-height: 100vh;

    .box-btn {
      background: $color-grey-100;
      display: flex;
      align-items: center;
      position: fixed;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 2px 2px 24px rgba(50, 50, 71, 0.25);
      border-radius: 5px;
      transition: ease-in-out 0.1s;
      opacity: 0;
      height: 0;
      padding: 0 15px;

      &.show {
        opacity: 1;
        height: 64px;
      }

      > .ant-btn {
        color: $color-primary-9;
        border-color: $color-primary-9;

        &:hover {
          color: $color-primary-6;
          border-color: $color-primary-6;
        }

        &.btn-delete {
          margin: 0 20px;
        }

        &.btn-close {
          @include flexbox(center, center);
          width: 16px;
          color: #bfbfbf;
          border-color: transparent;

          &:hover {
            color: $color-primary-6;
          }
        }
      }
    }
  }
</style>
