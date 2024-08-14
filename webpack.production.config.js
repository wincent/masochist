'use strict';

const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const webpack = require('webpack');

const BUILDS = [
  {
    name: 'cjs',
    filename: 'bundle-[contenthash].js',
    targets: '> 0.5%, last 2 versions, Firefox ESR, not dead',
    terserOptions: {},
  },
  {
    name: 'mjs',
    filename: 'bundle-[contenthash].mjs',
    targets: {esmodules: true},
    terserOptions: {
      module: true,
    },
  },
];

module.exports = BUILDS.map(({name, filename, targets, terserOptions}) => {
  return {
    name,
    entry: [path.resolve(__dirname, 'src', 'client', 'app.js')],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: {
            condition: 'some',
            filename(filedata) {
              return `${filedata.filename}.LICENSE.txt`;
            },
            banner(file) {
              return `@license See: ${file}`;
            },
          },
          test: /\.m?js(\?.*)?$/i,
          terserOptions,
        }),
      ],
    },
    mode: 'production',
    devtool: false,
    node: false,
    plugins: [
      new AssetsPlugin({
        fullPath: false,
        path: path.resolve(__dirname, 'dist'),
        prettyPrint: true,
        update: true,
      }),
      new MiniCssExtractPlugin({
        filename: 'styles-[contenthash].css',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: new RegExp(
          '\\b(' +
            'applyOptimisticMutation|' +
            'requestRelaySubscriptions|' +
            'setRelayModernMutationConfigs' +
            ')\\b',
        ),
      }),
      new webpack.SourceMapDevToolPlugin({
        append: false,
        noSources: false,
        filename: '[file].map',
      }),
      function () {
        this.hooks.done.tapAsync(
          'copy-assets-from-dist-to-public-static',
          (stats, callback) => {
            Object.values(stats.toJson().assetsByChunkName).forEach((chunk) => {
              chunk.forEach((asset) => {
                // Copy each digest-ized asset from dist to public/static.
                const src = path.resolve(__dirname, 'dist', asset);
                const dest = path.resolve(__dirname, 'public', 'static', asset);
                fse.copySync(src, dest);
                if (fs.existsSync(src + '.map')) {
                  fse.copySync(src + '.map', dest + '.map');
                }
                if (fs.existsSync(src + '.LICENSE.txt')) {
                  fse.copySync(src + '.LICENSE.txt', dest + '.LICENSE.txt');
                }
              });
            });
            callback();
          },
        );
      },
    ],
    module: {
      rules: [
        {
          type: 'javascript/auto',
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
                      corejs: 2,
                      debug: false,
                      targets,
                      useBuiltIns: 'entry',
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
          type: 'javascript/esm',
          test: /\.mjs$/,
          resolve: {mainFields: ['module', 'main']},
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      corejs: 2,
                      debug: false,
                      targets,
                      useBuiltIns: 'entry',
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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.svg$/,
          type: 'asset/inline',
        },
      ],
    },
  };
});
