'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'app', 'app.js'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          stage: 0,
          plugins: ['./getRelayBabelPlugin.js'],
          // include: path.join(__dirname, 'src')
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'src')
      },
    ],
  }
};
