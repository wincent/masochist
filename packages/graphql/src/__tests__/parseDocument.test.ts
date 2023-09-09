import Bun from 'bun';
import {describe, expect, it} from 'bun:test';
import path from 'path';

// TODO: once parser has stabilized, do same thing we do in lex.test.ts and run
// tests against what _would_ be written to disk as opposed to just importing
// built artifact.
// NOTE: not a huge fan of the fact that the default function export in the
// generated file is called `parse()` and doesn't match the file name...
import parse from '../parseDocument';

describe('parse()', () => {
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
