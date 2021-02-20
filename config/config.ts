import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'template系统',
  dva: {
    hmr: true,
    immer: true,
  },
  define: {
    'process.env.NODE_DEV': process.env.NODE_ENV,
  },
  theme: {
    'primary-color': '#FF552E',
  },
  history: { type: 'browser' },
  // proxy: {
  //   '/api': {
  //     target: 'http://oms.58v5.cn',
  //     // pathRewrite: { '^/admin': '' },
  //     changeOrigin: true,
  //   }
  // },
});
