import {dedent} from '@masochist/common';

// TODO: once parser has stabilized, do same thing we do in lex-test.ts and run
// tests against what _would_ be written to disk as opposed to just importing
// built artifact.
import parse from '../parse';

describe('parse()', () => {
  it('parses a sample for the real grammar', () => {
    // Same input as what's in "parseWithTable-test.ts".
    let input = dedent`
      fragment Article on Article {
        title
        # TODO: grow this example
      }
    `;

    // BUG: Result doesn't match expectations.
    //
    // Note this is super ugly right now because of the `Token` instances which
    // each include full copy of the `source`.
    expect(parse(input)).toMatchInlineSnapshot(`
      {
        "definitions": [
          {
            "directives": Token {
              "end": 19,
              "name": "ON",
              "source": "fragment Article on Article {
        title
        # TODO: grow this example
      }",
              "start": 17,
            },
            "kind": "FRAGMENT",
            "name": Token {
              "end": 8,
              "name": "FRAGMENT",
              "source": "fragment Article on Article {
        title
        # TODO: grow this example
      }",
              "start": 0,
            },
            "on": "Article",
            "selections": {
              "kind": "NAMED_TYPE",
              "name": "Article",
            },
          },
        ],
        "kind": "DOCUMENT",
      }
    `);
  });
});
