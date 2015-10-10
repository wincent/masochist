'use strict'; // eslint-disable-line

// BUG: I shouldn't have to do this.
import 'babel-runtime/regenerator/runtime';

import getArticleLoader from './getArticleLoader';
import getSnippetLoader from './getSnippetLoader';
import getWikitextLoader from './getWikitextLoader';
import schema from './schema';
import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';

const APP_PORT = 3000;

// Set __DEV__ if started with `babel-node src/server/main.js` (or `npm run
// start`).
if (process.env.NODE_ENV !== 'production') {
  // Use `[]` syntax here to prevent devBabelPlugin from transforming this into
  // invalid code:
  //
  //   global.process.env.NODE_ENV !== 'production' = true;
  //
  // (which would produce "ReferenceError: Invalid left-hand side in
  // assignment").
  global['__DEV__'] = true
}

const app = express();

app.get(
  '/',
  (request, response) => (
    response.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'))
  ),
);

app.use('/graphql', (request, response, next) => {
  const options = {
    rootValue: {
      loaders: {
        articleLoader: getArticleLoader(),
        // postLoader: new DataLoader(ids => []),
        snippetLoader: getSnippetLoader(),
        wikitextLoader: getWikitextLoader(),
      },
    },
    graphiql: __DEV__,
    schema,
  };

  return graphqlHTTP(request => options)(request, response, next);
});

if (__DEV__) {
  const httpProxy = require('http-proxy');
  const WebpackDevServer = require('webpack-dev-server');
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');

  const proxy = httpProxy.createProxyServer();
  const compiler = webpack(webpackConfig);
  let bundleStart = null;
  compiler.plugin('compile', () => {
    console.log('Starting bundle...');
    bundleStart = Date.now();
  });
  compiler.plugin('done', () => {
    console.log('Bundle finished in ' + (Date.now() - bundleStart) + 'ms.');
  });
  const bundler = new WebpackDevServer(compiler, {
    publicPath: '/static/',
    hot: true,
    noInfo: true,
    stat: {
      colors: true,
    },
  });
  bundler.listen(APP_PORT + 1, 'localhost', () => {
    console.log('Webpack dev server listening at http://localhost:%s', APP_PORT + 1);
  });
  app.all('/static/*', (request, response) => {
    return proxy.web(request, response, {
      target: 'http://localhost:' + (APP_PORT + 1) + '/static',
      prependPath: false,
    })
  });

  proxy.on('error', error => console.log('Proxy error: %s', error));
} else {
  // In production, nginx should handle this, but in case it doesn't:
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));
}

const server = app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
