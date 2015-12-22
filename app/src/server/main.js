'use strict'; // eslint-disable-line

import 'babel-polyfill';
import '../common/devFallback';
import '../common/unhandledRejection';
import './isomorphicHack';

import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App';
import HTTPError from '../client/components/HTTPError';
import routeConfig from '../common/routeConfig';
import gatherPaths from './gatherPaths';
import getAssetURL from './getAssetURL';
import getLoaders from './getLoaders';
import getCanonicalURLForRequest from './getCanonicalURLForRequest';
import feed from './actions/feed';
import schema from './schema';

const APP_PORT = 3000;

const app = express();

app.disable('x-powered-by');

app.set('views', path.join(__dirname, 'views'));
if (__DEV__) {
  app.set('view engine', 'jade');
} else {
  app.set('view engine', 'js');
  app.engine('js', require('compiled-jade-render'));
}

function jadeHandler(resource, extraLocals = {}) {
  return async (request, response) => {
    const canonical = await getCanonicalURLForRequest(request);
    const locals = {
      bundle: getAssetURL(
        '/static/' + (__DEV__ ? 'bundle.js' : require('../webpack-assets').main.js)
      ),
      styles: __DEV__ ?
        null :
        getAssetURL('/static/' + require('../webpack-assets').main.css),
      canonical,
      production: !__DEV__,
      ...extraLocals,
    };
    response.render(resource, locals);
  };
}

// "/", "/blog", "/blog/*" etc.
const appRoutes = gatherPaths(routeConfig);

// Additional config for specific routes.
const extraLocals = {
  '/blog': {
    alternate: '/blog.rss',
  },
  '/blog/*': {
    home: '/blog.rss',
  },
};

appRoutes.forEach(route => {
  app.get(route, jadeHandler('index', extraLocals[route]))
});

app.use('/graphql', (request, response, next) => {
  const options = {
    rootValue: {
      loaders: getLoaders(),
    },
    graphiql: __DEV__,
    schema,
  };

  return graphqlHTTP(request => options)(request, response, next);
});

app.get('/blog.rss', async (request, response) => {
  const feedContent = await feed();
  response.set('Content-Type', 'application/rss+xml');
  response.send(feedContent);
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

app.get('/heartbeat', (request, response) => {
  response.send('༼ つ ◕_◕ ༽つ');
});

// In production, nginx should handle this, but in case it doesn't:
app.use(express.static(
  path.join(__dirname, '..', '..', 'public'),
  {
    extensions: ['html'], // Given foobar, try for foobar.html
    redirect: false, // Prevent redirect from issues to issues/
  },
));

function errorPage(error, message, request, response) {
  return {
    html: () => {
      const pageContent = ReactDOMServer.renderToStaticMarkup(
        <App>
          <HTTPError code={error} />
        </App>
      );

      jadeHandler('error', {error, message, pageContent})(request, response);
    },
    json: () => response.send({error, message}),
    text: () => response.send(`${error} ${message}`),
  };
}

app.use((request, response, next) => {
  response.status(404);
  response.format(errorPage(404, 'Not Found', request, response));
});

app.use((error, request, response, next) => {
  response.status(500);
  response.format(errorPage(500, 'Internal Server Error', request, response));
});

const server = app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
