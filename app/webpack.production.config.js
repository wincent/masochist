'use strict';

var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client', 'app.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          stage: 0,
          plugins: [
            './babel/devBabelPlugin.js',
            './babel/getRelayBabelPlugin.js',
          ],
        },
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: path.resolve(__dirname, 'src'),
      }, {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
  postcss: function() {
    // No arrow function, because we want `this` to be:
    // http://webpack.github.io/docs/loaders.html#loader-context
    return [autoprefixer];
  },
};
