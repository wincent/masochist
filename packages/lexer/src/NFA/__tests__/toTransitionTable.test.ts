import {describe, expect, it} from 'bun:test';

import toTransitionTable from '../toTransitionTable';

describe('toTransitionTable()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof toTransitionTable).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/toTransitionTable.test.ts`.
});
