const { override, addLessLoader, fixBabelImports, addPostcssPlugins } = require('customize-cra');

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  addLessLoader({
    lessOptions: {
      modifyVars: { '@brand-primary': '#F42403', '@brand-primary-tap': '#3c3c3c', '@hd': '1px' },
      // 设置自定义主题样式
      // 配置参数：https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less
      javascriptEnabled: true, // 允许js更改antd-mobile中的less变量
    },
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  // 按照设计稿计算根节点的样式
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: '37.5' })])
);
