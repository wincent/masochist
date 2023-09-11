import {describe, expect, it} from 'bun:test';

import compileRegExp from '../compileRegExp';

describe('compileRegExp()', () => {
  it('produces an optimized AST', () => {
    // Show that we merge character classes and sequences.
    expect(compileRegExp(/([05]|[aj])(foo)(bar)/)).toEqual({
      kind: 'Sequence',
      children: [
        {
          kind: 'CharacterClass',
          children: [
            {kind: 'Atom', value: '0'},
            {kind: 'Atom', value: '5'},
            {kind: 'Atom', value: 'a'},
            {kind: 'Atom', value: 'j'},
          ],
          negated: false,
        },
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/compileRegExp.test.ts`.
});
