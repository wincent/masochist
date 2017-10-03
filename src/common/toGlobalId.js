/**
 * @flow
 */

import inBrowser from '../client/inBrowser';

function base64(string: string) {
  // graphql-relay always uses `Buffer`, but we do environment detection.
  if (inBrowser) {
    return btoa(string);
  } else {
    return new Buffer(string, 'utf8').toString('base64');
  }
}

/**
 * Copy of toGlobalId from graphql-relay package, to avoid pulling graphql into
 * client side bundle.
 */
export default function toGlobalId(type: string, id: string) {
  return base64([type, id].join(':'));
}
