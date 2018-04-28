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

import {claimRefetchToken} from './RefetchTokenManager';
import InternalRedirectError from '../common/InternalRedirectError';
import NotFoundError from '../common/NotFoundError';
import RenderTextError from '../common/RenderTextError';
import createRouter from '../common/createRouter';
import getRequestBody from '../common/getRequestBody';
import App from './components/App';
import HTTPError from './components/HTTPError';

import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBehavior from 'scroll-behavior';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const router = createRouter(history);

// First render comes from the server, subsequent renders happen on client.
let render = function(element, container) {
  ReactDOM.hydrate(element, container);
  render = ReactDOM.render;
};

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
  readQuery(query, variables) {
    const {
      createOperationSelector,
      getOperation,
    } = environment.unstable_internal;
    const operation = createOperationSelector(getOperation(query), variables);
    const snapshot = environment.lookup(
      operation.fragment,
      operation.variables,
    );
    return snapshot.data;
  },
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
  if (location.state && location.state.refetchToken) {
    // A refetch container wants to update the URL without triggering a
    // full navigation (which would cause the compenent to unmount then
    // remount).  So, it flags the refetch via the state allowing us
    // to `return` early.  Alas, this breaks the back button, because
    // the state with the `refetch` property comes in again at that
    // time. Deleting/mutating the state doesn't work; adding the
    // location object to a "seen" `Set` doesn't work (copies get made);
    // so we have to use these once-only `refetchToken`s to decide
    // whether to ignore the navigation.
    if (claimRefetchToken(location.state.refetchToken)) {
      return;
    }
  }
  const variables = location.state && location.state.variables;
  await resolve(location, variables);
  scrollBehavior.updateScroll();
});

resolve(history.location);

let cachedComponent;

function resolve(location, variables) {
  if (window.MasochistCache) {
    // First time here, and we've come from server rendering.
    Object.entries(window.MasochistCache).forEach(([key, value]) => {
      cache.set(key, value);
    });
    // `delete` may throw.
    window.MasochistCache = undefined;
  } else {
    // Not first time here, so showing progress.
    render(
      <App router={router} showProgress={true}>
        {cachedComponent}
      </App>,
      root,
    );
  }

  return router
    .resolve({
      api,
      pathname: location.pathname,
      variables,
    })
    .then(({component}) => {
      cachedComponent = component;
      render(<App router={router}>{component}</App>, root);
    })
    .catch(error => {
      if (error instanceof InternalRedirectError) {
        return resolve(error.target);
      } else if (error instanceof RenderTextError) {
        window.location = location.pathname;
        return null;
      }
      const code = error instanceof NotFoundError ? 404 : 500;
      render(
        <App router={router}>
          <HTTPError code={code}>{error.component}</HTTPError>
        </App>,
        root,
      );
    });
}
