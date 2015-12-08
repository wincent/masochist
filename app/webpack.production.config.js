'use strict';

var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var fse = require('fs-extra');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client', 'app.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new AssetsPlugin({
      fullPath: false,
      path: path.resolve(__dirname, 'dist'),
      prettyPrint: true,
    }),
    new ExtractTextPlugin('styles-[hash].css', {allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    function() {
      this.plugin('done', function(stats) {
        stats.toJson().assetsByChunkName.main.forEach(function(asset) {
          // Copy each digest-ized asset from dist to public/static.
          fse.copySync(
            path.resolve(__dirname, 'dist', asset),
            path.resolve(__dirname, 'public', 'static', asset)
          );
        });
      });
    },
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            './babel/devBabelPlugin.js',
            './babel/getRelayBabelPlugin.js',
          ],
          presets: [
            'es2015',
            'react',
            'stage-0',
          ],
        },
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
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
