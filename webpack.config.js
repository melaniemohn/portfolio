'use strict';

module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
          presets: ['react']
        }
      }]
    }
  };
