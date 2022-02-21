import type { UserConfig } from 'vite';
import pkg from './package.json';
import moment from 'moment';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: moment().format('YYYY-MM-DD HH:mm:ss'),
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (): UserConfig => {
  // command === 'build' ? '/vite_vue_3/' : ''
  return {
    base: './',
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ],
    },
    server: {
      host: true,
      port: 8000,
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    define: {
      // setting vue-i18-next
      // Suppress warning
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/main.scss";',
        },
      },
    },
    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: [vue()],
    optimizeDeps: {
      include: [
        '@ant-design/icons-vue',
        'ant-design-vue/es/locale/ja_JP',
        'ant-design-vue/es/locale/en_US',
      ],
    },
  };
};
