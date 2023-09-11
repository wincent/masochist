import {describe, expect, it} from 'bun:test';

import stringifyNFA from '../stringifyNFA';

describe('stringifyNFA()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof stringifyNFA).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/stringifyNFA.test.ts`.
});
