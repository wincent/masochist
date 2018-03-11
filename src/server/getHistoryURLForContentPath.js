/**
 * @flow
 */

import getURLForContentPath from './getURLForContentPath';

export default function getHistoryURLForContentPath(path: string): string {
  return getURLForContentPath('commits', path);
}
