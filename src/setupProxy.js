const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/sun/*',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
      pathRewrite: function (path, req) {
        console.log(path.replace('/sun', '/api'));
        return path.replace('/sun', '/api') + '.json';
      },
    })
  );
};
