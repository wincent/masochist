/**
 *  strict
 */

import getURLForContentPath from './getURLForContentPath';

export default function getEditURLForContentPath(path) {
  return getURLForContentPath('edit', path);
}
