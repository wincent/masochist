import {pathToRegexp} from 'universal-router/browser';

import routeConfig from './routeConfig';

const CATCH_ALL_ROUTE = '*';

let routeMap = null;

function getRouteMap() {
  if (!routeMap) {
    routeMap = new Map(
      routeConfig.map(config => {
        if (config.path !== CATCH_ALL_ROUTE) {
          return [pathToRegexp(config.path), config];
        }
      }).filter(Boolean)
    );
  }
  return routeMap;
}

/**
 * Matches paths only.
 */
export default function matchRoute(path) {
  for (let [regexp, route] of getRouteMap()) {
    if (regexp.test(path)) {
      return route;
    }
  }
}
