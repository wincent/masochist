var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3001',
    path.resolve(__dirname, 'src', 'client', 'app.js'),
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
        include: path.resolve(__dirname, 'src')
      },
    ],
  },
  output: {
    // For the dev server, we don't actually write out files to disk, but we
    // must declare a path otherwise Webpack will complain. Match the
    // "production" config for consistency.
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: function() {
    // No arrow function, because we want `this` to be:
    // http://webpack.github.io/docs/loaders.html#loader-context
    return [autoprefixer];
  },
};
