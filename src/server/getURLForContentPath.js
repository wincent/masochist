/**
 *  strict
 */

export default function getURLForContentPath(type, path) {
  // TODO: possibly assert about `path` format here (expect /foo/etc).
  return `https://github.com/wincent/masochist/${type}/content/content${path}`;
}
