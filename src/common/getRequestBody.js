/**
 * @flow
 */

import stableStringify from './stableStringify';

export default function getRequestBody({id}, variables) {
  return stableStringify({id, variables});
}
