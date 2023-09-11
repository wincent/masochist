import {describe, expect, it} from 'bun:test';

import fromTransitionTable from '../fromTransitionTable';

describe('fromTransitionTable()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof fromTransitionTable).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/fromTransitionTable.test.ts`.
});
