/**
 * @flow
 */

import stableStringify from './stableStringify';

export default function getRequestBody(
  {id}: {id: string},
  variables: {[string]: mixed},
) {
  return stableStringify({id, variables});
}
