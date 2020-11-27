const proxySettings = {
  '/api/': {
    target: 'xxx',
    changeOrigin: true,
  },
};

module.exports = proxySettings;
