/**
 * @flow
 */

import Router from 'universal-router';

import routeConfig from './routeConfig';

/**
 * Just like default resolver, but we support an optional "prepare"
 * function that can return a modified copy of the params.
 */
function resolve(context, params) {
  const {action, prepare} = context.route;
  if (typeof action === 'function') {
    return action(
      context,
      typeof prepare === 'function' ? prepare(params) : params,
    );
  }
}

type History = {
  push: (target: string) => void,
  replace: (target: string) => void,
};

export type MasochistRouter = {
  history: History,
};

export default function createRouter(
  history: mixed,
  resolver: mixed = resolve,
): MasochistRouter {
  const router = new Router(routeConfig, {
    resolveRoute: resolver,
  });
  router.history = history;
  return router;
}
