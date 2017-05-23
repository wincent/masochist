/**
 * @flow
 */

import createErrorClass from './createErrorClass';

const message = 'RenderTextError';

export default createErrorClass(
  message,
  function (text: string) {
    return {message, text};
  }
);
