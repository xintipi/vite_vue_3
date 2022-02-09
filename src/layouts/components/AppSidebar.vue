<template>
  <a-layout-sider width="232" collapsed-width="66" class="aside-wrapper">
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppSidebar'
})
</script>

<style lang="scss">
@import '@/styles/shared/variables';

$width-sidebar: 232px;
$width-sidebar-collapse: 66px;
$width-sub-nav-collapse: 150px;

.aside {
  width: $width-sidebar;
  background-color: $color-primary-10;
  color: $color-grey-100;
  flex-grow: 0;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  height: 100vh;
  overflow: hidden;

  &:hover {
    overflow: auto;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__top {
    height: 80px;
  }

  &__link,
  &__top--toggle {
    display: block;
    padding: 8px 0 8px 24px;
    position: relative;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: $color-primary-3;
    }
  }

  &__link {
    &--arrow-icon {
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: 24px;
      margin-top: -7px;
    }

    &--nav-icon {
      margin-right: 8px;
      margin-bottom: -2px;
    }

    &--circle-icon {
      display: inline-block;
      margin-right: 12px;

      &:before {
        content: '';
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        background-color: $color-grey-100;
      }
    }

    &:hover {
      .aside__link--circle-icon:before {
        background-color: $color-primary-3;
      }
    }
  }

  &__list > :not(.is-dashboard),
  &__top--toggle {
    .aside__link--nav-icon {
      background-color: $color-primary-10;
    }
  }

  .is-active.aside__link:not(.is-dashboard, .aside__collapse--header),
  .is-active:not(.is-dashboard, .aside__collapse--header)
    .aside__link--nav-icon,
  .is-active:not(.is-dashboard, .aside__collapse--header) .aside__link--text,
  .router-link-exact-active,
  .router-link-exact-active > .aside__link--text {
    background-color: $color-primary-9;
    color: $color-primary-3;
    font-weight: 700;
  }

  .is-active.aside__link.aside__collapse--header {
    color: $color-primary-3;
    font-weight: 700;
  }

  &__link--circle-icon {
    display: inline-block;
    margin-right: 12px;

    &:before {
      content: '';
      display: block;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: $color-grey-100;
    }

    &:hover:before {
      background-color: $color-primary-3;
    }
  }

  &__sub-nav &__link {
    padding-left: 50px;
    color: $color-grey-100;

    &:hover {
      color: $color-primary-3;
    }
  }

  &__link--arrow-icon {
    transform: rotate(90deg);
    transition: transform 0.5s ease;
  }

  .is-sub-nav-open &__link--arrow-icon {
    transform: none;
  }

  &__top--toggle {
    svg {
      transition: transform 0.3s ease;
    }
  }
}

.aside__collapse {
  .ant-collapse-header {
    padding: 0;
    height: 38px;
    width: 100%;
    background-color: $color-primary-10;
  }

  .ant-collapse-extra {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .aside__link {
      color: $color-grey-100;

      &:hover {
        color: $color-primary-3;
      }
    }
  }

  .ant-collapse,
  .ant-collapse > .ant-collapse-item {
    border: 0;
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }

  .ant-collapse,
  .ant-collapse-content-box {
    background-color: $color-primary-10;
  }

  .ant-collapse-content {
    border: 0;
  }
}

.aside.is-collapse {
  width: $width-sidebar-collapse;
  position: relative;
  overflow: visible;

  .aside__link--text,
  .aside__link--arrow-icon,
  .aside__sub-nav {
    display: none;
  }

  .aside__list {
    position: relative;

    &:hover {
      .aside__link--text,
      .aside__sub-nav {
        display: block !important;
      }
    }
  }

  .aside__link--text,
  .aside__sub-nav {
    position: absolute;
    left: $width-sidebar-collapse;
    width: $width-sub-nav-collapse;
    border-left: 1px solid #fff;
  }

  .aside__link--text {
    top: 0;
    padding: 8px 0 8px 12px;
  }

  .aside__link:not(.router-link-exact-active) .aside__link--text {
    background-color: $color-primary-10;
  }

  .aside__sub-nav {
    top: 37px;
    background-color: $color-primary-10;
  }

  .aside__sub-nav .aside__link {
    padding-left: 12px;
  }

  .aside__top--toggle {
    svg {
      transform: scaleX(-1);
    }
  }
}

.aside-wrapper,
.aside-wrapper.ant-layout-sider-collapsed {
  transition: all 0.3s ease-in-out;
}
</style>
