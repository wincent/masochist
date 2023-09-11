import {describe, expect, it} from 'bun:test';

import minimizeDFA from '../minimizeDFA';

describe('minimizeDFA()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof minimizeDFA).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/minimizeDFA.test.ts`.
});
