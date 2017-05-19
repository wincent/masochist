import 'babel-polyfill';
import 'isomorphic-fetch';

import {
  Environment,
  Network,
  RecordSource,
  Store,
  fetchQuery,
} from 'relay-runtime';

import '../common/unhandledRejection';

import './normalize.css';
import './skeleton.css';

import createRouter from '../common/createRouter';
import getRequestBody from '../common/getRequestBody';
import App from './components/App';
import Progress from './components/Progress';
import HTTPError from './components/HTTPError';

import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBehavior from 'scroll-behavior';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const router = createRouter(history);

// Simplest possible request-response cache.
const cache = new Map();
const CACHE_SIZE = 20;

// TODO: extract a lot of this into a common place where it can be used on both
// server and client?
const environment = new Environment({
  network: Network.create((operation, variables) => {
    const body = getRequestBody(operation, variables);
    if (cache.has(body)) {
      return Promise.resolve(cache.get(body));
    }
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    }).then(response => {
      const json = response.json();
      if (response.ok) {
        if (cache.size > CACHE_SIZE) {
          Array.from(cache.keys())
            .slice(CACHE_SIZE)
            .forEach(key => cache.delete(key));
        }
        cache.set(body, json);
      }
      return json;
    });
  }),
  store: new Store(new RecordSource()),
});

const api = {
  environment,
  fetchQuery: fetchQuery.bind(null, environment),
};

const root = document.getElementById('relay-root');

const scrollStorage = {};

const scrollBehavior = new ScrollBehavior({
  addTransitionHook(hook) {
    const unlisten = history.block((location, action) => {
      hook();
    });
    return () => unlisten();
  },
  stateStorage: {
    read(location, key) {
      if (scrollStorage.hasOwnProperty(location.key)) {
        return scrollStorage[location.key];
      }
      return false;
    },
    save(location, key, value) {
      scrollStorage[location.key] = value;
    },
  },
  getCurrentLocation() {
    return history.location;
  },
  shouldUpdateScroll(prevLocation, location) {
    if (prevLocation && location.key === prevLocation.key) {
      // Trying to visit current path: scroll to top.
      return [0, 0];
    }

    // Default browser behavior.
    return true;
  },
});

const unlisten = history.listen(async (location, action) => {
  await resolve(location);
  scrollBehavior.updateScroll();
});

resolve(history.location);

function resolve(location, data) {
  if (window.MasochistCache) {
    // First time here, and we've come from server rendering.
    Object.entries(window.MasochistCache).forEach(([key, value]) => {
      cache.set(key, value);
    });
    // `delete` may throw.
    window.MasochistCache = undefined;
  } else {
    // Not first time here, so showing progress.
    // TODO: decide what to do do here; may not even want a progress bar...
    // but if we do one, probably want it to be nicely integrated
    // (would be nice to short-circuit if nothing needs to be fetched)
    // <App isLoading={true} /> to render previous or something
    ReactDOM.render(
      <App router={router}>
        <Progress />
      </App>,
      root,
    );
  }

  return router
    .resolve({
      api,
      path: location.pathname,
    })
    .then(({component}) => {
      ReactDOM.render(
        <App router={router}>
          {component}
        </App>,
        root,
      );
    })
    .catch(error => {
      console.error(error);
      ReactDOM.render(
        <App router={router}>
          {/* 500 is almost certainly not the right error code, but if we
            * get here things are already badly wrong.
            */}
          <HTTPError code={500} />
        </App>,
        root,
      );
    });
}
