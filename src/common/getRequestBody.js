import stableStringify from '@wincent/stable-stringify';

export default function getRequestBody({id}, variables) {
  return stableStringify({id, variables});
}
