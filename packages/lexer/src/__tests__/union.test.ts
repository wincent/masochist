import {print} from '@masochist/codegen';
import {describe, expect, it} from 'bun:test';

import Token from '../Token';
import build from '../build';
import ignore from '../ignore';
import union from '../union';
import {getLexer} from './helper';

describe('union()', () => {
  it('prefers greedy matches', async () => {
    const table = union({
      ASSIGN: '=',
      EQUALS: '==',
      STRICT_EQUALS: '===',
      IGNORED: ignore(/ /),
    });

    const input = '= == ===';

    expect([...(await getLexer(table)).lex(input)]).toEqual([
      new Token('ASSIGN', 0, 1, input),
      new Token('EQUALS', 2, 4, input),
      new Token('STRICT_EQUALS', 5, 8, input),
    ]);

    // Visual inspection of the generated lexer shows why this works.
    expect(print(await build(table))).toMatchSnapshot();
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/union.test.ts`.
});