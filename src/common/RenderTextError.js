/**
 * @noflow
 */

import createErrorClass from './createErrorClass';

const message = 'RenderTextError';

export default createErrorClass(message, function(text: string, type: string) {
  return {message, text, type};
});
