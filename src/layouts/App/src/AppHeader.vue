<template>
  <a-layout-header class="header" mode="horizontal">
    <div class="header__content">
      <div class="header__content--left">
        <breadcrumb />
      </div>
      <div class="header__content--right">
        <profile />
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import { Breadcrumb } from '@/components/Breadcrumb';
  import { Profile } from '@/components/Profile';

  export default defineComponent({
    name: 'AppHeader',

    components: {
      Breadcrumb,
      Profile,
    },
  });
</script>

<style lang="scss" scoped>
  @import '@/styles/shared/variables';
  @import '@/styles/shared/mixins';

  .header {
    position: fixed;
    left: 232px;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: $color-grey-100;
    box-shadow: 0 1px 0 #f0f0f0;
    height: 56px;
    line-height: 28px;
    padding: 0 32px;
    transition: transform 0.3s ease-in-out, left 0.3s ease-in-out;

    &__content {
      @include flexbox(center, center);
      padding: 12px 0;

      &--left {
        flex-grow: 1;
      }

      &--right {
        @include flexbox(center, center);
      }
    }

    .header__search.is-badge {
      &:after {
        position: absolute;
        top: 0;
        right: -30%;
        height: 16px;
        width: 16px;
        background-color: $color-additional-red-6;
        content: ' ';
        border-radius: 50%;
      }
    }
  }
</style>
