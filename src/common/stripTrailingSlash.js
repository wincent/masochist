/**
 *  strict
 */

export default function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '');
}
