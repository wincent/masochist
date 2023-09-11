// These tests used to live in `@masochist/parser`, where `parseWithTable` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {getLexer} from '@masochist/lexer/src/internal';
import {parseWithTable, makeNode} from '@masochist/parser';
import Bun from 'bun';
import {beforeAll, describe, expect, it} from 'bun:test';
import path from 'path';

import {grammar, table as parseTable} from '../document';
import {default as lexerTable} from '../lexer';

describe('parseWithTable()', () => {
  let lex: ReturnType<typeof getLexer>['lex'];

  beforeAll(() => {
    lex = getLexer(lexerTable).lex;
  });

  it('parses a simple document using the GraphQL grammar', () => {
    const tokens = [
      ...lex(`
        query IndexQuery @deprecated(since: "2001-01-01") @live {
          foo
          barAlias: bar
          baz {
            qux @defer
          }

          ...BareFragment
          ...FragmentWithDirective @yo

          ...on SomeType {
            stuff
          }
        }

        query NewQuery(
          $count: Int = 10
          $sizes: [Int] = [100, 200] @log
          $factor: Int!
          $stuff: [Int]!
          $limits: Limits = {min: 100, max: 1000}
        ) {
          hai(count: $count, factor: 20, sizes: [25, 50]) @something(times: $count)
        }

        fragment BareFragment on Thing @fast {
          contents
        }
    `),
    ];

    expect(
      parseWithTable(parseTable, tokens, grammar, makeNode),
    ).toMatchSnapshot();
  });

  it.each([['source.graphql'], ['generated.graphql']])(
    'parses the %s corpus using the GraphQL grammar',
    async (corpus) => {
      const source = await Bun.file(
        path.join(import.meta.dir, '../../../../support', corpus),
      ).text();

      const tokens = [...lex(source)];
      expect(
        parseWithTable(parseTable, tokens, grammar, makeNode),
      ).toMatchSnapshot();
    },
  );
});
