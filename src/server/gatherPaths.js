/**
 * @flow strict
 */

type RouteConfig = $ReadOnlyArray<{
  path: string,
}>;

/**
 * Parses a RouteConfig object and returns a list of Express-style path
 * patterns ("/", "/blog", "/blog/*" etc).
 */
export default function gatherPaths(config: RouteConfig): $ReadOnlyArray<string> {
  const paths = [];
  config.forEach(route => {
    if (route.path === '*') {
      // Skip the catch-all.
      return;
    }

    const path = route.path.replace(/:\w+/, '*');
    paths.push(path);
  });
  return paths;
}
