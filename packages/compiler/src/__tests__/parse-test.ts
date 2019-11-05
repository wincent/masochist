import dedent from '../dedent';
import parse from '../parse';

test('parsing an empty document', () => {
  expect(() => parse('')).toThrow(
    /Document must contain at least one definition/,
  );

  expect(() => parse('# just a comment')).toThrow(
    /Document must contain at least one definition/,
  );
});

test('parsing a document with a named query', () => {
  expect(
    parse(`
      query MyQuery {
        foo
        bar
      }

      query LiveQuery @live {
        fancy
      }
  `),
  ).toEqual({
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: 'MyQuery',
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'bar',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
      {
        directives: [
          {
            arguments: undefined,
            kind: 'DIRECTIVE',
            name: 'live',
          },
        ],
        kind: 'OPERATION',
        name: 'LiveQuery',
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'fancy',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
    kind: 'DOCUMENT',
  });
});

test('parsing a document with an anonymous operation', () => {
  expect(
    parse(`
      {
        foo
        bar
      }
  `),
  ).toEqual({
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'bar',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
    kind: 'DOCUMENT',
  });
});

test('parsing a document with a non-exclusive anonymous operation', () => {
  expect(() =>
    parse(`
    {
      foo
    }

    {
      bar
    }
  `),
  ).toThrow(/Anonymous operation must be the only operation in the document/);

  expect(() =>
    parse(`
    query MyQuery {
      foo
    }

    {
      bar
    }
  `),
  ).toThrow(/Anonymous operation must be the only operation in the document/);
});

test('parsing an empty selection set', () => {
  expect(() => parse('{}')).toThrow(dedent`
    Parse error:

      Expected: alias

      Parsing: document » definition » operation » anonymousOperation » selectionSet » field » alias

      At: index 1 (line 1, column 2)

    > 1 | {}
        |  ^
  `);
});

test('parsing a document with trailing lexical tokens', () => {
  expect(() =>
    parse(dedent`
    {
      foo
    }} # <-- Note excess parenthesis here.
  `),
  ).toThrow(dedent`
    Parse error:

      Expected: end of input

      Parsing: document

      At: index 9 (line 3, column 2)

      1 | {
      2 |   foo
    > 3 | }} # <-- Note excess parenthesis here.
        |  ^
  `);
});

test('parsing a document with trailing ignored tokens', () => {
  expect(
    parse(dedent`
    {
      foo
    } # This comment is fine.
  `),
  ).toEqual({
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
    kind: 'DOCUMENT',
  });
});

test('parsing fields with aliases', () => {
  expect(
    parse(dedent`
      {
        label: foo
      }
  `),
  ).toEqual({
    kind: 'DOCUMENT',
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: 'label',
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
  });
});

test('parsing fields with nested selections', () => {
  expect(
    parse(dedent`
      {
        foo {
          bar {
            baz
          }
        }
      }
  `),
  ).toEqual({
    kind: 'DOCUMENT',
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: [
              {
                alias: undefined,
                arguments: undefined,
                directives: undefined,
                kind: 'FIELD',
                name: 'bar',
                selections: [
                  {
                    alias: undefined,
                    arguments: undefined,
                    directives: undefined,
                    kind: 'FIELD',
                    name: 'baz',
                  },
                ],
              },
            ],
          },
        ],
        type: 'QUERY',
      },
    ],
  });
});

test('parsing fields with arguments', () => {
  expect(
    parse(dedent`
      {
        profilePic(
          opacity: 0.5
          size: 100
        )
        search(
          locale: """en-US"""
          query: "cat pics"
        ) {
          result
        }
        thing(
          arg: null
          order: DESC
          dimensions: [100, 50],
        )
        nearby(
          location: {latitude: -50.1, longitude: 22.3}
        )
      }
  `),
  ).toEqual({
    kind: 'DOCUMENT',
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            arguments: [
              {
                kind: 'ARGUMENT',
                name: 'opacity',
                value: {
                  kind: 'FLOAT',
                  value: '0.5',
                },
              },
              {
                kind: 'ARGUMENT',
                name: 'size',
                value: {
                  kind: 'INT',
                  value: 100,
                },
              },
            ],
            directives: undefined,
            kind: 'FIELD',
            name: 'profilePic',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: [
              {
                kind: 'ARGUMENT',
                name: 'locale',
                value: {
                  block: true,
                  kind: 'STRING',
                  value: 'en-US',
                },
              },
              {
                kind: 'ARGUMENT',
                name: 'query',
                value: {
                  block: false,
                  kind: 'STRING',
                  value: 'cat pics',
                },
              },
            ],
            directives: undefined,
            kind: 'FIELD',
            name: 'search',
            selections: [
              {
                alias: undefined,
                arguments: undefined,
                directives: undefined,
                kind: 'FIELD',
                name: 'result',
                selections: undefined,
              },
            ],
          },
          {
            alias: undefined,
            arguments: [
              {
                kind: 'ARGUMENT',
                name: 'arg',
                value: {
                  kind: 'NULL',
                },
              },
              {
                kind: 'ARGUMENT',
                name: 'order',
                value: {
                  kind: 'ENUM',
                  value: 'DESC',
                },
              },
              {
                kind: 'ARGUMENT',
                name: 'dimensions',
                value: {
                  kind: 'LIST',
                  value: [
                    {
                      kind: 'INT',
                      value: 100,
                    },
                    {
                      kind: 'INT',
                      value: 50,
                    },
                  ],
                },
              },
            ],
            directives: undefined,
            kind: 'FIELD',
            name: 'thing',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: [
              {
                name: 'location',
                kind: 'ARGUMENT',
                value: {
                  kind: 'OBJECT',
                  fields: [
                    {
                      kind: 'OBJECT_FIELD',
                      name: 'latitude',
                      value: {
                        kind: 'FLOAT',
                        value: '-50.1',
                      },
                    },
                    {
                      kind: 'OBJECT_FIELD',
                      name: 'longitude',
                      value: {
                        kind: 'FLOAT',
                        value: '22.3',
                      },
                    },
                  ],
                },
              },
            ],
            directives: undefined,
            kind: 'FIELD',
            name: 'nearby',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
  });
});

test('parsing fields with directives', () => {
  expect(
    parse(dedent`
      {
        foo
        bar @defer
        baz @include(if: true)
        bing @skip(if: false)
      }
  `),
  ).toEqual({
    kind: 'DOCUMENT',
    definitions: [
      {
        directives: undefined,
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            arguments: undefined,
            directives: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: undefined,
            directives: [
              {
                arguments: undefined,
                kind: 'DIRECTIVE',
                name: 'defer',
              },
            ],
            kind: 'FIELD',
            name: 'bar',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: undefined,
            directives: [
              {
                arguments: [
                  {
                    kind: 'ARGUMENT',
                    name: 'if',
                    value: {
                      kind: 'BOOLEAN',
                      value: true,
                    },
                  },
                ],
                kind: 'DIRECTIVE',
                name: 'include',
              },
            ],
            kind: 'FIELD',
            name: 'baz',
            selections: undefined,
          },
          {
            alias: undefined,
            arguments: undefined,
            directives: [
              {
                arguments: [
                  {
                    kind: 'ARGUMENT',
                    name: 'if',
                    value: {
                      kind: 'BOOLEAN',
                      value: false,
                    },
                  },
                ],
                kind: 'DIRECTIVE',
                name: 'skip',
              },
            ],
            kind: 'FIELD',
            name: 'bing',
            selections: undefined,
          },
        ],
        type: 'QUERY',
      },
    ],
  });
});
