import RegExpParser from '../RegExpParser';

describe('RegExpParser', () => {
  it('parses a single atom', () => {
    expect(new RegExpParser(/a/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses a sequence of atoms', () => {
    expect(new RegExpParser(/foobar/).parse()).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('parses alternates', () => {
    expect(new RegExpParser(/a|b/).parse()).toEqual({
      kind: 'Alternate',
      children: [
        {
          kind: 'Atom',
          value: 'a',
        },
        {
          kind: 'Atom',
          value: 'b',
        },
      ],
    });

    expect(new RegExpParser(/foo|bar/).parse()).toEqual({
      kind: 'Alternate',
      children: [
        {
          kind: 'Sequence',
          children: [
            {kind: 'Atom', value: 'f'},
            {kind: 'Atom', value: 'o'},
            {kind: 'Atom', value: 'o'},
          ],
        },
        {
          kind: 'Sequence',
          children: [
            {kind: 'Atom', value: 'b'},
            {kind: 'Atom', value: 'a'},
            {kind: 'Atom', value: 'r'},
          ],
        },
      ],
    });
  });

  it('parses a simple group', () => {
    expect(new RegExpParser(/(a)/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses a group containing a sequence of atoms', () => {
    expect(new RegExpParser(/(foobar)/).parse()).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('parses a group with repetition', () => {
    expect(new RegExpParser(/(foo)+/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 1,
      maximum: Infinity,
      child: {
        kind: 'Sequence',
        children: [
          {kind: 'Atom', value: 'f'},
          {kind: 'Atom', value: 'o'},
          {kind: 'Atom', value: 'o'},
        ],
      },
    });
  });

  it('simplifies nested groups', () => {
    expect(new RegExpParser(/((a))/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
    expect(new RegExpParser(/((((((a))))))/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses "."', () => {
    expect(new RegExpParser(/./).parse()).toEqual({
      kind: 'Anything',
    });
  });

  it('parses ".+"', () => {
    expect(new RegExpParser(/.+/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 1,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".*"', () => {
    expect(new RegExpParser(/.*/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 0,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".?"', () => {
    expect(new RegExpParser(/.?/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 0,
      maximum: 1,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{3}"', () => {
    expect(new RegExpParser(/.{3}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 3,
      maximum: 3,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{2,}"', () => {
    expect(new RegExpParser(/.{2,}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 2,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{2,7}"', () => {
    expect(new RegExpParser(/.{2,7}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 2,
      maximum: 7,
      child: {kind: 'Anything'},
    });
  });

  it('parses "\\w"', () => {
    expect(new RegExpParser(/\w/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: 'A', to: 'Z'},
        {kind: 'Range', from: 'a', to: 'z'},
        {kind: 'Range', from: '0', to: '9'},
        {kind: 'Atom', value: '_'},
      ],
      negated: false,
    });
  });

  it('parses "\\W"', () => {
    expect(new RegExpParser(/\W/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: 'A', to: 'Z'},
        {kind: 'Range', from: 'a', to: 'z'},
        {kind: 'Range', from: '0', to: '9'},
        {kind: 'Atom', value: '_'},
      ],
      negated: true,
    });
  });

  it('parses "\\n"', () => {
    expect(new RegExpParser(/\n/).parse()).toEqual({
      kind: 'Atom',
      value: '\n',
    });
  });

  it('parses "\\."', () => {
    expect(new RegExpParser(/\./).parse()).toEqual({
      kind: 'Atom',
      value: '.',
    });
  });

  it('parses a simple character class', () => {
    expect(new RegExpParser(/[ajz]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'j'},
        {kind: 'Atom', value: 'z'},
      ],
      negated: false,
    });
  });

  it('parses a negated simple character class', () => {
    expect(new RegExpParser(/[^ajz]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'j'},
        {kind: 'Atom', value: 'z'},
      ],
      negated: true,
    });
  });

  it('parses a character class containing a range', () => {
    expect(new RegExpParser(/[adft-z]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'd'},
        {kind: 'Atom', value: 'f'},
        {kind: 'Range', from: 't', to: 'z'},
      ],
      negated: false,
    });
  });

  it('parses a negated character class containing a range', () => {
    expect(new RegExpParser(/[^adft-z]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'd'},
        {kind: 'Atom', value: 'f'},
        {kind: 'Range', from: 't', to: 'z'},
      ],
      negated: true,
    });
  });

  it('treats "^" as a literal "^" when not the first thing in a character class', () => {
    expect(new RegExpParser(/[a^1]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '^'},
        {kind: 'Atom', value: '1'},
      ],
      negated: false,
    });
  });

  it('treats "." as a literal "." when inside a character class', () => {
    expect(new RegExpParser(/[a1.]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '1'},
        {kind: 'Atom', value: '.'},
      ],
      negated: false,
    });
  });

  it('treats "-" as a literal "-" at the start of a character class', () => {
    expect(new RegExpParser(/[-a5]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: '-'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '5'},
      ],
      negated: false,
    });
  });

  it('treats "-" as a literal "-" at the end of a character class', () => {
    expect(new RegExpParser(/[a5-]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '5'},
        {kind: 'Atom', value: '-'},
      ],
      negated: false,
    });
  });

  it('simplifies a character class containing only one atom', () => {
    expect(new RegExpParser(/[x]/).parse()).toEqual({
      kind: 'Atom',
      value: 'x',
    });
  });

  it('simplifies a character class containing only one range', () => {
    expect(new RegExpParser(/[d-m]/).parse()).toEqual({
      kind: 'Range',
      from: 'd',
      to: 'm',
    });
  });

  it('simplifies a character class with a range containing one atom', () => {
    expect(new RegExpParser(/[b-b]/).parse()).toEqual({
      kind: 'Atom',
      value: 'b',
    });
  });

  it('parses an atom followed by "+"', () => {
    expect(new RegExpParser(/foo+/).parse()).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {
          kind: 'Repeat',
          minimum: 1,
          maximum: Infinity,
          child: {kind: 'Atom', value: 'o'},
        },
      ],
    });
  });

  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('real-world examples', () => {
    it('matches ESCAPED_CHARACTER RegExp', () => {
      expect(new RegExpParser(/\\["\\\/bfnrt]/).parse()).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "kind": "Atom",
              "value": "\\\\",
            },
            Object {
              "children": Array [
                Object {
                  "kind": "Atom",
                  "value": "\\"",
                },
                Object {
                  "kind": "Atom",
                  "value": "\\\\",
                },
                Object {
                  "kind": "Atom",
                  "value": "/",
                },
                Object {
                  "kind": "Atom",
                  "value": "b",
                },
                Object {
                  "kind": "Atom",
                  "value": "f",
                },
                Object {
                  "kind": "Atom",
                  "value": "n",
                },
                Object {
                  "kind": "Atom",
                  "value": "r",
                },
                Object {
                  "kind": "Atom",
                  "value": "t",
                },
              ],
              "kind": "CharacterClass",
              "negated": false,
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches ESCAPED_UNICODE RegExp', () => {
      expect(new RegExpParser(/\\u[0-9A-Fa-f]{4}/).parse())
        .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "kind": "Atom",
              "value": "\\\\",
            },
            Object {
              "kind": "Atom",
              "value": "u",
            },
            Object {
              "child": Object {
                "children": Array [
                  Object {
                    "from": "0",
                    "kind": "Range",
                    "to": "9",
                  },
                  Object {
                    "from": "A",
                    "kind": "Range",
                    "to": "F",
                  },
                  Object {
                    "from": "a",
                    "kind": "Range",
                    "to": "f",
                  },
                ],
                "kind": "CharacterClass",
                "negated": false,
              },
              "kind": "Repeat",
              "maximum": 4,
              "minimum": 4,
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches EXPONENT_PART RegExp', () => {
      expect(new RegExpParser(/[eE][+-]?\d+/).parse()).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "children": Array [
                Object {
                  "kind": "Atom",
                  "value": "e",
                },
                Object {
                  "kind": "Atom",
                  "value": "E",
                },
              ],
              "kind": "CharacterClass",
              "negated": false,
            },
            Object {
              "child": Object {
                "children": Array [
                  Object {
                    "kind": "Atom",
                    "value": "+",
                  },
                  Object {
                    "kind": "Atom",
                    "value": "-",
                  },
                ],
                "kind": "CharacterClass",
                "negated": false,
              },
              "kind": "Repeat",
              "maximum": 1,
              "minimum": 0,
            },
            Object {
              "child": Object {
                "from": "0",
                "kind": "Range",
                "to": "9",
              },
              "kind": "Repeat",
              "maximum": Infinity,
              "minimum": 1,
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches FRACTIONAL_PART RegExp', () => {
      expect(new RegExpParser(/\.\d+/).parse()).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "kind": "Atom",
              "value": ".",
            },
            Object {
              "child": Object {
                "from": "0",
                "kind": "Range",
                "to": "9",
              },
              "kind": "Repeat",
              "maximum": Infinity,
              "minimum": 1,
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches INTEGER_PART RegExp', () => {
      expect(new RegExpParser(/-?(0|[1-9]\d*)/).parse()).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "child": Object {
                "kind": "Atom",
                "value": "-",
              },
              "kind": "Repeat",
              "maximum": 1,
              "minimum": 0,
            },
            Object {
              "children": Array [
                Object {
                  "kind": "Atom",
                  "value": "0",
                },
                Object {
                  "children": Array [
                    Object {
                      "from": "1",
                      "kind": "Range",
                      "to": "9",
                    },
                    Object {
                      "child": Object {
                        "from": "0",
                        "kind": "Range",
                        "to": "9",
                      },
                      "kind": "Repeat",
                      "maximum": Infinity,
                      "minimum": 0,
                    },
                  ],
                  "kind": "Sequence",
                },
              ],
              "kind": "Alternate",
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches LINE_TERMINATOR RegExp', () => {
      expect(new RegExpParser(/\n|\r\n|\r/).parse()).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "kind": "Atom",
              "value": "
        ",
            },
            Object {
              "children": Array [
                Object {
                  "kind": "Atom",
                  "value": "
        ",
                },
                Object {
                  "kind": "Atom",
                  "value": "
        ",
                },
              ],
              "kind": "Sequence",
            },
            Object {
              "kind": "Atom",
              "value": "
        ",
            },
          ],
          "kind": "Alternate",
        }
      `);
    });

    it('matches SOURCE_CHARACTER RegExp', () => {
      expect(new RegExpParser(/[\u0009\u000a\u000d\u0020-\uffff]/).parse())
        .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "kind": "Atom",
              "value": "	",
            },
            Object {
              "kind": "Atom",
              "value": "
        ",
            },
            Object {
              "kind": "Atom",
              "value": "
        ",
            },
            Object {
              "from": " ",
              "kind": "Range",
              "to": "\\\\",
            },
            Object {
              "kind": "Atom",
              "value": "u",
            },
            Object {
              "kind": "Atom",
              "value": "f",
            },
            Object {
              "kind": "Atom",
              "value": "f",
            },
            Object {
              "kind": "Atom",
              "value": "f",
            },
            Object {
              "kind": "Atom",
              "value": "f",
            },
          ],
          "kind": "CharacterClass",
          "negated": false,
        }
      `);
    });

    it('matches NAME RegExp', () => {
      expect(new RegExpParser(/[_A-Za-z][_0-9A-Za-z]*/).parse())
        .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "children": Array [
                Object {
                  "kind": "Atom",
                  "value": "_",
                },
                Object {
                  "from": "A",
                  "kind": "Range",
                  "to": "Z",
                },
                Object {
                  "from": "a",
                  "kind": "Range",
                  "to": "z",
                },
              ],
              "kind": "CharacterClass",
              "negated": false,
            },
            Object {
              "child": Object {
                "children": Array [
                  Object {
                    "kind": "Atom",
                    "value": "_",
                  },
                  Object {
                    "from": "0",
                    "kind": "Range",
                    "to": "9",
                  },
                  Object {
                    "from": "A",
                    "kind": "Range",
                    "to": "Z",
                  },
                  Object {
                    "from": "a",
                    "kind": "Range",
                    "to": "z",
                  },
                ],
                "kind": "CharacterClass",
                "negated": false,
              },
              "kind": "Repeat",
              "maximum": Infinity,
              "minimum": 0,
            },
          ],
          "kind": "Sequence",
        }
      `);
    });

    it('matches WHITESPACE RegExp', () => {
      expect(new RegExpParser(/[\t ]+/).parse()).toMatchInlineSnapshot(`
        Object {
          "child": Object {
            "children": Array [
              Object {
                "kind": "Atom",
                "value": "	",
              },
              Object {
                "kind": "Atom",
                "value": " ",
              },
            ],
            "kind": "CharacterClass",
            "negated": false,
          },
          "kind": "Repeat",
          "maximum": Infinity,
          "minimum": 1,
        }
      `);
    });
  });
});

// TODO: tests that show "i" flag is correctly handled
