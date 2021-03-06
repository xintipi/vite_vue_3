<template>
  <a-popover
    v-model:visible="visible"
    trigger="click"
    placement="bottomRight"
    overlay-class-name="t-profile"
  >
    <a-button :class="['t-profile__btn-user', visible && 'is-active']">
      <icon-user />
    </a-button>

    <!-- Dropdown menu -->
    <template #content>
      <a-menu mode="inline">
        <a-menu-item class="menu__item" @click="handleShowSetting">
          <div class="menu__link">
            <setting-outlined />
            <span class="menu__link--text">{{ $t('user.setting') }}</span>
          </div>
        </a-menu-item>

        <a-menu-item class="menu__item" @click="handleShowProfile">
          <div class="menu__link">
            <user-outlined />
            <span class="menu__link--text">{{ $t('user.user_profile') }}</span>
          </div>
        </a-menu-item>

        <a-menu-item class="menu__item" @click="handleLogout">
          <div class="menu__link">
            <logout-outlined />
            <span class="menu__link--text">{{ $t('user.logout') }}</span>
          </div>
        </a-menu-item>
      </a-menu>
    </template>
  </a-popover>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

  import { IconUser } from '@/components/Icons';
  import { LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons-vue';
  import { useAuthStore } from '@/store/auth';

  export default defineComponent({
    name: 'Profile',

    components: {
      IconUser,
      LogoutOutlined,
      UserOutlined,
      SettingOutlined,
    },

    setup() {
      const visible = ref<boolean>(false);
      const router = useRouter();
      const auth = useAuthStore();

      const handleShowSetting = () => {
        console.log('setting');
        visible.value = false;
      };

      const handleShowProfile = () => {
        console.log('user profile');
        visible.value = false;
      };

      const handleLogout = () => {
        // clear all modules state
        auth.setLogout();
        router.push({ name: 'login' });
      };

      return {
        visible,
        handleShowSetting,
        handleShowProfile,
        handleLogout,
      };
    },
  });
</script>

<style lang="scss">
  @import '@/styles/shared/variables';
  @import '@/styles/shared/mixins';

  #imagePreview-avatar {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 50px;
    height: 50px;
  }

  .t-profile {
    svg {
      color: $color-grey-15;
      background-color: $color-grey-100;
      margin-right: 8px;
    }

    &__btn-user {
      @include flexbox(center, center);
      height: 32px;
      width: 32px;
      border-radius: 50%;
      padding: 0;

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:hover {
        background-color: $color-primary-6;
        color: $color-grey-100;
      }
    }

    &__btn-user.is-active {
      background-color: $color-primary-6;
      border-color: $color-primary-6;
      color: $color-grey-100;
    }

    .ant-menu {
      width: 203px;
      border: 0;

      .menu__item {
        .menu__link {
          color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          margin-left: 0;
          font-weight: 500;
        }
      }
    }

    .ant-popover-inner-content {
      padding: 0;
    }

    .ant-menu-root > .ant-menu-item,
    .ant-menu-root > .ant-menu-submenu > .ant-menu-submenu-title {
      @include flexbox(flex-start, center);
      padding: 8px 12px !important;
      font-size: 14px;
      line-height: 22px;
      height: auto;
      margin: 0;

      &:hover {
        background-color: $color-grey-94;
        color: $color-grey-15;
      }
    }

    .ant-menu-sub > .ant-menu-item {
      padding: 8px 12px 8px 24px !important;
      font-size: 14px;
      line-height: 22px;
      height: auto;
    }

    .ant-menu-inline .ant-menu-item {
      margin: 0;

      &:after {
        display: none;
      }
    }

    .ant-menu-item {
      @include flexbox(flex-start, center);

      &:hover {
        background-color: $color-grey-94;
        color: $color-grey-15;
      }
    }

    .ant-menu-submenu-selected,
    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
      background-color: $color-grey-100;
      color: $color-grey-15;

      &:hover {
        background-color: $color-grey-94;
        color: $color-grey-15;
      }
    }

    .ant-menu-submenu-active,
    .ant-menu-item-active {
      background-color: $color-grey-100;
      color: $color-grey-15;
    }

    .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow {
      &:before,
      &:after {
        background: $color-grey-15;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
          top 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .t-profile.ant-popover-placement-bottomRight {
    .ant-popover-content {
      margin-top: -5px;
    }
  }
</style>
