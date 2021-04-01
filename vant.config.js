module.exports = {
  name: 'self-vant',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/self-vant/',
    },
  },
  site: {
    title: 'self-vant',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'login-button',
            title: 'LoginButton 按钮',
          },
        ],
      },
    ],
  },
};
