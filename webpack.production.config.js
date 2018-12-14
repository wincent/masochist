'use strict';

const AssetsPlugin = require('assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fse = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    '@babel/polyfill/noConflict',
    path.resolve(__dirname, 'src', 'client', 'app.js'),
  ],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        // [Note: these comments originally applied to the Uglify plug-in so
        // they may not apply to Terser.]
        //
        // To debug failed dead code elimination, add `mangle: false` here and
        // either `beautify: true` inside `output` (to visually inspect),
        // or use `source-map-explorer bundle.js bundle.js.map` (to explore a
        // treemap in a browser window).
        sourceMap: true,
      }),
    ],
  },
  mode: 'production',
  node: false,
  plugins: [
    new AssetsPlugin({
      fullPath: false,
      path: path.resolve(__dirname, 'dist'),
      prettyPrint: true,
    }),
    new ExtractTextPlugin({
      filename: 'styles-[hash].css',
      allChunks: true,
    }),
    new webpack.IgnorePlugin(
      new RegExp(
        '\\b(' +
          'applyOptimisticMutation|' +
          'requestRelaySubscriptions|' +
          'setRelayModernMutationConfigs' +
          ')\\b',
      ),
    ),
    function() {
      this.hooks.done.tapAsync(
        'copy-assets-from-dist-to-public-static',
        (stats, callback) => {
          stats.toJson().assetsByChunkName.main.forEach(asset => {
            // Copy each digest-ized asset from dist to public/static.
            fse.copySync(
              path.resolve(__dirname, 'dist', asset),
              path.resolve(__dirname, 'public', 'static', asset),
            );
          });
          callback();
        },
      );
    },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    targets: 'defaults',
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-flow',
              ],
              plugins: [
                [
                  'minify-replace',
                  {
                    replacements: [
                      {
                        identifierName: '__DEV__',
                        replacement: {
                          type: 'booleanLiteral',
                          value: false,
                        },
                      },
                    ],
                  },
                ],
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
