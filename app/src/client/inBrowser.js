const inBrowser =
  typeof process === 'undefined' || '' + process !== '[object process]';

export default inBrowser;
