'use strict'; // eslint-disable-line

import '../common/unhandledRejection';
import '../server/configureNpm';

import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import path from 'path';
import {createMemoryHistory} from 'history';
import React from 'react';
import {renderToNodeStream} from 'react-dom/server';
import {promisify} from 'util';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
} from 'relay-runtime';

import App from '../client/components/App';
import HTTPError from '../client/components/HTTPError';
import ExternalRedirectError from '../common/ExternalRedirectError';
import InternalRedirectError from '../common/InternalRedirectError';
import NotFoundError from '../common/NotFoundError';
import RenderTextError from '../common/RenderTextError';
import getRequestBody from '../common/getRequestBody';
import routeConfig from '../common/routeConfig';
import createRouter from '../common/createRouter';
import gatherPaths from './gatherPaths';
import getAssetURL from './getAssetURL';
import getCanonicalURLForRequest from './getCanonicalURLForRequest';
import graphQLMiddleware from './graphQLMiddleware';
import feed from './actions/feed';
import runQuery from './runQuery';
import renderError from './views/renderError';
import renderIndex from './views/renderIndex';

const APP_PORT = 3000;

const app = express();

const readFile = promisify(fs.readFile);

app.disable('x-powered-by');

let styles = null;
const getStyles = async function () {
  if (!styles && !__DEV__) {
    // Expect to be running out of dist.
    const css = path.join(
      __dirname,
      '../../public/static',
      require('../webpack-assets').main.css,
    );
    styles = await readFile(css);
  }
  return styles;
};

function templateHandler(renderer, locals = {}) {
  return (request, response) => {
    response.set('Content-Type', 'text/html');
    const stream = renderer({
      ...locals,
      cjs: getAssetURL(
        '/static/' +
          (__DEV__ ? 'bundle.js' : require('../webpack-assets').main.js),
      ),
      mjs: getAssetURL(
        '/static/' +
          (__DEV__ ? 'bundle.js' : require('../webpack-assets').main.mjs),
      ),
    });
    stream.pipe(response, {end: false});
    stream.on('end', () => response.end());
  };
}

// "/", "/blog", "/blog/*" etc.
const appRoutes = gatherPaths(routeConfig);

// Additional config for specific routes.
const extraLocals = {
  '/': {
    home: '/blog.rss',
  },
  '/blog': {
    alternate: '/blog.rss',
  },
  '/blog/*': {
    home: '/blog.rss',
  },
};

appRoutes.forEach((route) => {
  app.get(route, async (request, response) => {
    const history = createMemoryHistory({
      initialEntries: [request.originalUrl],
      initialIndex: 0,
    });
    const cache = {};
    const environment = new Environment({
      network: Network.create((operation, variables) => {
        return runQuery(operation.id, variables)
          .then((result) => {
            const key = getRequestBody(operation, variables);
            cache[key] = result;
            return result;
          })
          .catch((error) => console.log('runQuery() error:', error));
        // TODO: really handle errors
      }),
      store: new Store(new RecordSource()),
    });
    const api = {
      environment,
      fetchQuery: fetchQuery.bind(null, environment),
    };
    const router = createRouter(history, api);

    function resolve(location) {
      return router
        .resolve({
          pathname: location.pathname,
        })
        .then(({component, description, title}) => {
          return {
            description,
            pageContent: renderToNodeStream(
              <App router={router}>{component}</App>,
            ),
            title,
          };
        })
        .catch((error) => {
          if (error instanceof ExternalRedirectError) {
            response.redirect(error.code, error.target);
            return null;
          } else if (error instanceof InternalRedirectError) {
            return resolve(error.target);
          } else if (error instanceof RenderTextError) {
            response.set('Content-Type', error.type);
            response.send(error.text);
            return null;
          } else if (!(error instanceof NotFoundError)) {
            console.log('resolve() error:', error);
          }
          const code = error instanceof NotFoundError ? 404 : 500;
          response.status(code);
          return {
            pageContent: renderToNodeStream(
              <App router={router}>
                <HTTPError code={code}>{error.component}</HTTPError>
              </App>,
            ),
          };
        });
    }
    const resolved = await resolve(history.location);
    if (resolved) {
      // May be null if we had a redirect.
      const {description, pageContent, title} = resolved;
      const locals = {
        canonical: getCanonicalURLForRequest(request),
        cache: JSON.stringify(cache),
        description,
        pageContent,
        styles: getStyles(),
        title,
        ...extraLocals[route],
      };
      return templateHandler(renderIndex, locals)(request, response);
    }
  });
});

app.use('/graphql', bodyParser.json(), graphQLMiddleware);

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
  compiler.hooks.compilation.tap('compilation-started', () => {
    console.log('Starting bundle...');
    bundleStart = Date.now();
  });
  compiler.hooks.done.tap('compilation-completed', () => {
    console.log('Bundle finished in ' + (Date.now() - bundleStart) + 'ms.');
  });
  const bundler = new WebpackDevServer(
    {
      hot: true,
      port: APP_PORT + 1,
      static: {
        publicPath: '/static/',
      },
    },
    compiler,
  );
  bundler.startCallback(() => {
    console.log(
      'Webpack dev server listening at http://localhost:%s',
      APP_PORT + 1,
    );
  });
  app.all('/static/*', (request, response) => {
    return proxy.web(request, response, {
      target: 'http://localhost:' + (APP_PORT + 1) + '/static',
      prependPath: false,
    });
  });

  proxy.on('error', (error) => console.log('Proxy error: %s', error));
}

app.get('/heartbeat', (request, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('༼ つ ◕_◕ ༽つ');
});

// In production, nginx should handle this, but in case it doesn't:
app.use(
  express.static(path.join(__dirname, '..', '..', 'public'), {
    extensions: ['html'], // Given foobar, try for foobar.html
    redirect: false, // Prevent redirect from issues to issues/
  }),
);

function errorPage(code, message, request, response) {
  return {
    html: () => {
      const history = createMemoryHistory({
        initialEntries: [request.originalUrl],
        initialIndex: 0,
      });
      const router = createRouter(history);
      const pageContent = renderToNodeStream(
        <App router={router}>
          <HTTPError code={code} />
        </App>,
      );
      const locals = {
        code,
        message,
        pageContent,
        styles: getStyles(),
      };
      templateHandler(renderError, locals)(request, response);
    },
    json: () => response.send({error: code, message}),
    text: () => response.send(`${code} ${message}`),
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

app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
