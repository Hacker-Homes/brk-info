const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.dev.js',
    path: __dirname + '/client/dist'
  }
});
