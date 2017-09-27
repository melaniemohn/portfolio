'use strict';

const LiveReloadPlugin = require('webpack-livereload-plugin')
    , devMode = require('.').isDevelopment
    , USE_FAST_SOURCE_MAPS = false

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: devMode && USE_FAST_SOURCE_MAPS
    ? 'cheap-module-eval-source-map'
    : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'] // MPM: removed 'stage-2'
        }
      }]
    }]
  },
  plugins: devMode
    ? [new LiveReloadPlugin({appendScriptTag: true})]
    : []
};
