/**
 * @flow
 */

import createErrorClass from './createErrorClass';

const message = 'Render Text Error';

export default createErrorClass(
  message,
  function (text: string) {
    return {message, text};
  }
);
