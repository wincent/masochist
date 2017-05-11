import Router from 'universal-router';

import routeConfig from './routeConfig';

/**
 * Just like default resolver, but we support an optional "prepare"
 * function that can return a modified copy of the params.
 */
function resolve(context, params) {
  const {action, prepare} = context.route;
  if (typeof action !== 'function') {
    return null;
  }
  if (typeof prepare === 'function') {
    const preparedParams = prepare(params);
    return action(
      {
        ...context,
        params: preparedParams,
      },
      preparedParams,
    );
  }
  return action(context, params);
}

export default function createRouter(history, resolver = resolve) {
  const router = new Router(routeConfig, {
    resolveRoute: resolver,
  });
  router.history = history;
  return router;
}
