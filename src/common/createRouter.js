/**
 * @flow
 */

import Router from 'universal-router';

import routeConfig from './routeConfig';

type History = {
  push: (target: string) => void,
  replace: (target: string) => void,
};

export type MasochistRouter = Router & {
  history: History,
};

export default function createRouter(
  history: mixed,
  api: mixed,
): MasochistRouter {
  const router = new Router(routeConfig, {
    /**
     * Just like default resolver, but we support an optional "prepare"
     * function that can return a modified copy of the params.
     */
    resolveRoute(context, params) {
      const {action, prepare} = context.route;
      if (typeof action === 'function') {
        return action(
          {
            ...context,
            api,
          },
          typeof prepare === 'function' ? prepare(params) : params,
        );
      }
    },
  });
  router.history = history;
  return router;
}
