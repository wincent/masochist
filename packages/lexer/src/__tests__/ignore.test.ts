import {describe, expect, it} from 'bun:test';

import ignore from '../ignore';

describe('ignore()', () => {
  // TODO: add some toy tests here
  it('is a function', () => {
    expect(typeof ignore).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/union.test.ts`.
});
