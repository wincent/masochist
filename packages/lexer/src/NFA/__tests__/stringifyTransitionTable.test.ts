import {describe, expect, it} from 'bun:test';

import stringifyTransitionTable from '../stringifyTransitionTable';

describe('stringifyTransitionTable()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof stringifyTransitionTable).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/stringifyTransitionTable.test.ts`.
});
