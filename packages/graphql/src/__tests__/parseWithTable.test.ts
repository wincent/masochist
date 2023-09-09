// These tests used to live in `@masochist/parser`, where `parseWithTable` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import Bun from 'bun';
import {describe, expect, it} from 'bun:test';
import {parseWithTable, makeNode} from '@masochist/parser';
import path from 'path';

import {grammar, table} from '../document';
import lex from '../lex';

describe('parseWithTable()', () => {
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

    expect(parseWithTable(table, tokens, grammar, makeNode)).toMatchSnapshot();
  });

  it.each([['source.graphql'], ['generated.graphql']])(
    'parses the %s corpus using the GraphQL grammar',
    async (corpus) => {
      const source = await Bun.file(
        path.join(import.meta.dir, '../../../../support', corpus),
      ).text();

      const tokens = [...lex(source)];
      expect(
        parseWithTable(table, tokens, grammar, makeNode),
      ).toMatchSnapshot();
    },
  );
});
