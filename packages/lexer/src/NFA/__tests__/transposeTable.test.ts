import {describe, expect, it} from 'bun:test';

import transposeTable from '../transposeTable';

describe('transposeTable()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof transposeTable).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/transposeTable.test.ts`.
});
