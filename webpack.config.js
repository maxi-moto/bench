'use strict';

const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/bench.js',
  output: {
    filename: 'bench.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  ]
};

module.exports = config;
