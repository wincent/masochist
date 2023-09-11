import {describe, expect, it} from 'bun:test';

import dotifyTransitionTable from '../dotifyTransitionTable';

describe('dotifyTransitionTable()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof dotifyTransitionTable).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/dotifyTransitionTable.test.ts`.
});
