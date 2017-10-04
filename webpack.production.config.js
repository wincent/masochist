'use strict';

const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
  node: false,
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
    new webpack.optimize.UglifyJsPlugin({
      // To debug failed dead code elimination, add `mangle: false` here and
      // either `beautify: true` inside `output` (to visually inspect),
      // or use `source-map-explorer bundle.js bundle.js.map` (to explore a
      // treemap in a browser window).
      sourceMap: true,
      output: {comments: false}
    }),
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
              plugins: [
                ['minify-replace', {
                  replacements: [{
                    identifierName: '__DEV__',
                    replacement: {
                      type: 'booleanLiteral',
                      value: false,
                    },
                  }],
                }],
                'relay',
              ],
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
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
