/**
 * @flow
 */

import createErrorClass from './createErrorClass';

export default createErrorClass('InternalRedirectError', function(target: string) {
  const message = `Internal redirect - Location: ${target}`;
  return {message, target};
});
