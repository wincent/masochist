import {describe, expect, it} from 'bun:test';

import build from '../build';

describe('build()', () => {
  // TODO: write toy tests here
  it('is a function', () => {
    expect(typeof build).toBe('function');
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/buildLexer.test.ts`.
});
