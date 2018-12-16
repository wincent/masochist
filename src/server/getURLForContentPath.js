/**
 * @flow strict
 */

export default function getURLForContentPath(
  type: string,
  path: string,
): string {
  // TODO: possibly assert about `path` format here (expect /foo/etc).
  return `https://github.com/wincent/masochist/${type}/content/content${path}`;
}
