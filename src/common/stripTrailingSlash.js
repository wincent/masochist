/**
 * @flow
 */

export default function stripTrailingSlash(path: string): string {
  return path.replace(/\/+$/, '');
}
