/**
 * @flow
 */

/**
 * Parses a reacter-router router config object and returns a list of
 * Express-style path patterns ("/", "/blog", "/blog/*" etc).
 */
export default function gatherPaths(config, prefix = '') {
  const paths = [];
  config.forEach(route => {
    if (route.path === '*') {
      // Skip the catch-all.
      return;
    }

    const path = prefix + route.path.replace(/:\w+/, '*')
    paths.push(path);
    if (route.childRoutes) {
      paths.push(...gatherPaths(route.childRoutes, route.path));
    }
  });
  return paths;
}
