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

    expect(parse(input)).toMatchInlineSnapshot(`
      {
        "definitions": [
          {
            "directives": null,
            "kind": "FRAGMENT",
            "name": "Article",
            "on": {
              "kind": "NAMED_TYPE",
              "name": "Article",
            },
            "selections": [
              {
                "alias": null,
                "arguments": null,
                "directives": null,
                "kind": "FIELD",
                "name": "title",
                "selections": null,
              },
            ],
          },
        ],
        "kind": "DOCUMENT",
      }
    `);
  });
});
