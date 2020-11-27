const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('../constants');
const proxySetting = require('./setProxy.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    open: true,
    hot: true,
    stats: 'errors-only',
    compress: true,
    clientLogLevel: 'silent',
    proxy: { ...proxySetting },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
