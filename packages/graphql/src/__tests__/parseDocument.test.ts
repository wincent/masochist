import {getParser} from '@masochist/parser/src/internal';

import Bun from 'bun';
import {beforeAll, describe, expect, it} from 'bun:test';
import path from 'path';

import {grammar, table} from '../document';
import lexer from '../lexer';

describe('parse()', () => {
  let parse: ReturnType<typeof getParser>;

  beforeAll(() => {
    parse = getParser(grammar, table, lexer);
  });

  it('parses a simple document using the GraphQL grammar', () => {
    const input = `
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
    `;

    expect(parse(input)).toMatchSnapshot();
  });

  it.each([['source.graphql'], ['generated.graphql']])(
    'parses the %s corpus using the GraphQL grammar',
    async (corpus) => {
      const source = await Bun.file(
        path.join(import.meta.dir, '../../../../support', corpus),
      ).text();

      expect(parse(source)).toMatchSnapshot();
    },
  );
});
