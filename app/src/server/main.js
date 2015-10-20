'use strict'; // eslint-disable-line

import '../common/devFallback';

import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import getArticleLoader from './getArticleLoader';
import getPageLoader from './getPageLoader';
import getPostLoader from './getPostLoader';
import getSnippetLoader from './getSnippetLoader';
import getTagLoader from './getTagLoader';
import getWikitextLoader from './getWikitextLoader';
import schema from './schema';
import getCanonicalURLForRequest from './getCanonicalURLForRequest';

const APP_PORT = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));

function staticHandler(...resource) {
  return (request, response) => (
    response.sendFile(path.join(__dirname, '..', '..', 'public', ...resource))
  );
}

function jadeHandler(...resource) {
  return (request, response) => response.render(
    'index.jade',
    {canonical: getCanonicalURLForRequest(request)},
  );
}

const appRoutes = [
  '/',
  '/blog',
  '/blog/*',
  '/pages/*',
  '/snippets',
  '/snippets/*',
  '/tags',
  '/tags/*',
  '/wiki',
  '/wiki/*',
];

appRoutes.forEach(route => app.get(route, jadeHandler('index.html')));

app.get('/static/normalize.css', staticHandler('static', 'normalize.css'));
app.get('/static/skeleton.css', staticHandler('static', 'skeleton.css'));

app.use('/graphql', (request, response, next) => {
  const options = {
    rootValue: {
      loaders: {
        articleLoader: getArticleLoader(),
        pageLoader: getPageLoader(),
        postLoader: getPostLoader(),
        snippetLoader: getSnippetLoader(),
        tagLoader: getTagLoader(),
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
}

// In production, nginx should handle this, but in case it doesn't:
app.use(express.static(
  path.join(__dirname, '..', '..', 'public'),
  {
    extensions: ['html'], // Given foobar, try for foobar.html
    redirect: false, // Prevent redirect from issues to issues/
  },
));


const server = app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
