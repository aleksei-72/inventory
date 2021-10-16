const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.staging.inventory-platform.gq',
            changeOrigin: true,

            // remove prefix '/api/
            pathRewrite: {
                '^/api' : ''
            }
        })
    );
};