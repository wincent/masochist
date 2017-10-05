/**
 * @noflow
 */

const GITHUB_BASE =
  'https://github.com/wincent/masochist/commits/content/content';

export default function getHistoryURLForContentPath(path: string): string {
  // TODO: possibly assert about `path` format here (expect /foo/etc).
  return GITHUB_BASE + path;
}
