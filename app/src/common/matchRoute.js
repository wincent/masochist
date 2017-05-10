import {pathToRegexp} from 'universal-router';

import routeConfig from './routeConfig';

const CATCH_ALL_ROUTE = '*';

let regexen = null;

function getRegexen() {
  if (!regexen) {
    regexen = [];
    routeConfig.forEach(({path}) => {
      if (path !== CATCH_ALL_ROUTE) {
        regexen.push(pathToRegexp(path));
      }
    });
  }
  return regexen;
}

/**
 * Matches paths only.
 */
export default function matchRoute(path) {
  return getRegexen().findIndex(regex => regex.test(path)) !== -1;
}
