const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, //设置为true即是less
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ff3412' },
            // 设置自定义主题样式
            // 配置参数：https://ant.design/docs/react/customize-theme-cn
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
