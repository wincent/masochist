'use strict'; // eslint-disable-line

import '../common/devFallback';
import '../common/unhandledRejection';

import bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import fs from 'fs';
import path from 'path';
import createHistory from 'history/createMemoryHistory';
import React from 'react';
import {renderToStaticNodeStream} from 'react-dom/server';
import {promisify} from 'util';
import {Readable} from 'stream';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
} from 'relay-runtime';

import App from '../client/components/App';
import DocumentTitle from '../client/components/DocumentTitle';
import HTTPError from '../client/components/HTTPError';
import NotFoundError from '../common/NotFoundError';
import RedirectError from '../common/RedirectError';
import RenderTextError from '../common/RenderTextError';
import getRequestBody from '../common/getRequestBody';
import routeConfig from '../common/routeConfig';
import createRouter from '../common/createRouter';
import QueryCache from './QueryCache';
import escapeHTML from './escapeHTML';
import gatherPaths from './gatherPaths';
import getAssetURL from './getAssetURL';
import getLoaders from './getLoaders';
import getCanonicalURLForRequest from './getCanonicalURLForRequest';
import feed from './actions/feed';
import schema from './schema';
import runQuery from './runQuery';

const APP_PORT = 3000;

const app = express();

const queryCache = new QueryCache();

const readFile = promisify(fs.readFile);

app.disable('x-powered-by');

let styles = null;
const getStyles = async function() {
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

// TODO: move these into a separate file
function squishWhitespace(string: string): string {
  return string.replace(/\s*\n\s*/g, '');
}

function raw(string) {
  return {__safe: string};
}

function template(strings, ...args) {
  // Make one interpolated array of strings and args to make later processing
  // easier.
  const items = [];
  for (let i = 0; i < strings.length; i++) {
    items.push(raw(squishWhitespace(strings[i])));
    if (i < args.length) {
      items.push(args[i]);
    }
  }

  let waiting = false;
  const chunks = [];

  return new Readable({
    read(size) {
      let buffering = false;

      // Flush any previously dumped chunks.
      while (chunks.length) {
        if (!this.push(chunks.shift())) {
          return;
        }
      }

      const tick = () => {
        while (items.length) {
          if (waiting) {
            return;
          }

          const item = items.shift();
          if (item == null) {
            continue;
          } else if (typeof item === 'string') {
            if (!this.push(escapeHTML(item))) {
              return;
            }
          } else if (typeof item === 'object' && item.hasOwnProperty('__safe')) {
            if (!this.push(item.__safe)) {
              return;
            }
          } else if (typeof item.then === 'function') {
            // Quacks like a Promise.
            waiting = true;
            item.then(value => {
              waiting = false;
              items.unshift(value);
              process.nextTick(tick);
            })
            .catch(err => {
              process.nextTick(() => this.emit('error', err));
            });
            return;
          } else if (
            typeof item.on === 'function' &&
            typeof item.pipe === 'function'
          ) {
            // Quacks like a stream.
            waiting = true;
            item.on('data', data => {
              const string = data.toString();
              if (buffering) {
                chunks.push(string);
              } else {
                if (!this.push(string)) {
                  buffering = true;
                }
              }
            });
            item.on('end', () => {
              waiting = false;
              if (!buffering) {
                process.nextTick(tick);
              }
            });
            item.on('err', err => {
              process.nextTick(() => this.emit('error', err));
            });
            return;
          } else {
            // User passed 0, false, NaN, or something truthy
            // that didn't get caught by duck-typing checks; coerce to string.
            const string = '' + item;
            if (!this.push(string)) {
              return;
            }
          }
        }
        this.push(null);
      }

      tick();
    }
  });
}

function renderError(locals) {
  const {
    error,
    message,
    styles,
  } = locals;
  return template`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${
          styles.then(s => s ? template`<style>${raw(s)}</style>` : null)
        }
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${error} ${message} · wincent.com</title>
      </head>
      <body>
        <div id="root">${pageContent}</div>
  `;
}

function renderIndex(locals) {
  const {
    alternate,
    bundle,
    cache,
    canonical,
    description,
    home,
    pageContent,
    styles,
    title,
  } = locals;
  return template`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        ${
          styles.then(s => s ? template`<style>${raw(s)}</style>` : null)
        }
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
        <meta property="og:title" content="${title}">
        <meta property="og:image" content="https://wincent.com/assets/static/logo.png">
        ${
          description ?
            template`<meta property="og:description" content="${description}">` :
            null
        }
        ${
          canonical.then(c => c ?
            template`
              <link rel="canonical" href="${canonical}">
              <meta property="og:url" content="${canonical}">
            ` :
            null
          )
        }
        ${
          alternate ?
            template`<link rel="alternate" type="application/rss+xml" href="${alternate}">` :
            null
        }
        ${
          home ?
            template`<link rel="home" type="application/rss+xml" href="${home}">` :
            null
        }
      </head>
      <body>
        <div id="relay-root">${pageContent}</div>
        <script>var MasochistCache = ${raw(cache)};</script>
        <script src="${bundle}" /></script>
  `;
}

function templateHandler(renderer, locals = {}) {
  return (request, response) => {
    const stream = renderer({
      ...locals,
      bundle: getAssetURL(
        '/static/' +
          (__DEV__ ? 'bundle.js' : require('../webpack-assets').main.js),
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

appRoutes.forEach(route => {
  app.get(route, async (request, response) => {
    const history = createHistory({
      initialEntries: [request.originalUrl],
      initialIndex: 0,
    });
    const router = createRouter(history);
    const cache = {};
    const environment = new Environment({
      network: Network.create((operation, variables) => {
        const query = queryCache.getQuery(operation.id);
        return runQuery(query, variables)
          .then(result => {
            const key = getRequestBody(operation, variables);
            cache[key] = result;
            return result;
          })
          .catch(error => console.log('got an error', error));
        // TODO: really handle errors
      }),
      store: new Store(new RecordSource()),
    });
    const api = {
      environment,
      fetchQuery: fetchQuery.bind(null, environment),
    };

    function resolve(location) {
      return router
        .resolve({
          api,
          pathname: location.pathname,
        })
        .then(({component, description}) => {
          return {
            description,
            pageContent: renderToStaticNodeStream(
              <App router={router}>{component}</App>,
            ),
          };
        })
        .catch(error => {
          if (error instanceof RedirectError) {
            response.redirect(error.code, error.target);
            return null;
          } else if (error instanceof RenderTextError) {
            response.set('Content-Type', error.type);
            response.send(error.text);
            return null;
          }
          const code = error instanceof NotFoundError ? 404 : 500;
          response.status(code);
          return {
            pageContent: renderToStaticNodeStream(
              <App router={router}>
                <HTTPError code={code} />
              </App>,
            ),
          };
        });
    }
    const resolved = await resolve(history.location);
    // BUG: at the time we call rewind, we haven't actually rendered yet, so
    // will need to move away from DocumentTitle.
    const title = DocumentTitle.rewind();
    if (resolved) {
      // May be null if we had a redirect.
      const {description, pageContent} = resolved;
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

app.use(bodyParser.json());
app.use('/graphql', (request, response, next) => {
  // Totally hacked in persisted-query support:
  let query;
  if (request.body && request.body.id) {
    query = queryCache.getQuery(request.body.id);
    request.body.query = query;
  }
  if (!__DEV__ && !query) {
    // In prod, we only accept persisted queries (to prevent abuse).
    response.status(400).send('Bad Request');
    return;
  }
  const options = {
    rootValue: {
      loaders: getLoaders(),
    },
    // TODO: something like this in __DEV__
    // errorFormat: error => ({
    //   message: error.message,
    //   locations: error.locations,
    //   stack: error.stack,
    // }),
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
  });
  bundler.listen(APP_PORT + 1, 'localhost', () => {
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

  proxy.on('error', error => console.log('Proxy error: %s', error));
}

app.get('/heartbeat', (request, response) => {
  response.send('༼ つ ◕_◕ ༽つ');
});

// In production, nginx should handle this, but in case it doesn't:
app.use(
  express.static(path.join(__dirname, '..', '..', 'public'), {
    extensions: ['html'], // Given foobar, try for foobar.html
    redirect: false, // Prevent redirect from issues to issues/
  }),
);

function errorPage(error, message, request, response) {
  return {
    html: () => {
      const history = createHistory({
        initialEntries: [request.originalUrl],
        initialIndex: 0,
      });
      const router = createRouter(history);
      const pageContent = renderToStaticNodeStream(
        <App router={router}>
          <HTTPError code={error} />
        </App>,
      );
      const locals = {
        error,
        message,
        pageContent,
        styles: getStyles(),
      };
      templateHandler(renderError, locals)(request, response);
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

app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
