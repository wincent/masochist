/**
 * @noflow
 */

import createErrorClass from './createErrorClass';

export default createErrorClass('NotFoundError', function(
  message: string,
  component,
) {
  return {message, component};
});
