'use strict';

const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const fse = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'client', 'app.js')],
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
    new ExtractTextPlugin({
      filename: 'styles-[contenthash].css',
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    function() {
      this.plugin('done', function(stats) {
        stats.toJson().assetsByChunkName.main.forEach(function(asset) {
          // Copy each digest-ized asset from dist to public/static.
          fse.copySync(
            path.resolve(__dirname, 'dist', asset),
            path.resolve(__dirname, 'public', 'static', asset),
          );
        });
      });
    },
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          // No arrow function, because we want `this` to be:
          // http://webpack.github.io/docs/loaders.html#loader-context
          return [autoprefixer];
        },
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0'],
              plugins: ['dev-expression', 'relay'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader',
        }),
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000',
      },
    ],
  },
};
