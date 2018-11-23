/**
 * @flow strict
 */

const inBrowser =
  typeof process === 'undefined' || String(process) !== '[object process]';

export default inBrowser;
