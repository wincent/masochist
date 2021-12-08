/**
 * @flow
 */

import inBrowser from './inBrowser';

if (!inBrowser) {
  process.on('unhandledRejection', reason => {
    throw reason;
  });
}
