/**
 * @flow strict
 */

import stableStringify from '@wincent/stable-stringify';

export default function getRequestBody(
  {id}: {id: string},
  variables: {[string]: mixed},
) {
  return stableStringify({id, variables});
}
