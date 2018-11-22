/**
 * @flow
 */

import createErrorClass from './createErrorClass';

function descriptionForCode(code: number): string {
  switch (code) {
    case 301:
      return 'Moved Permanently';
    case 302:
      return 'Found';
    default:
      throw new Error(`Unsupported status code ${code}`);
  }
}

export default createErrorClass('ExternalRedirectError', function(
  target: string,
  code: number,
) {
  const message = `HTTP/1.1 ${code} ${descriptionForCode(code)} - Location: ${
    target
  }`;
  return {message, code, target};
});
