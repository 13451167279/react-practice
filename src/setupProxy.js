const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', //配置请求前缀，当请求只有遇到端口号后带有/api的才会使用代理
    proxy({
      target: 'http://localhost:5000', //配置服务器地址
      changeOrigin: true,
      pathRewrite: { '^/api/': '' }, //清除 请求前缀
    })
  );
  app.use(
    '/api1',
    proxy({
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' },
    })
  );
};
