/**
 * @flow strict
 */

import getURLForContentPath from './getURLForContentPath';

export default function getEditURLForContentPath(path: string): string {
  return getURLForContentPath('edit', path);
}
