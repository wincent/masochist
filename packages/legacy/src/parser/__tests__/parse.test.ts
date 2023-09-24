import {dedent} from '@masochist/common';
import Bun from 'bun';
import {expect, test} from 'bun:test';
import path from 'node:path';

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

      query WithVariables($size: Int) {
        pic(width: $size)
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
      {
        directives: undefined,
        kind: 'OPERATION',
        name: 'WithVariables',
        selections: [
          {
            alias: undefined,
            arguments: [
              {
                kind: 'ARGUMENT',
                name: 'width',
                value: {
                  kind: 'VARIABLE',
                  name: 'size',
                },
              },
            ],
            directives: undefined,
            kind: 'FIELD',
            name: 'pic',
            selections: undefined,
          },
        ],
        type: 'QUERY',
        variables: [
          {
            kind: 'VARIABLE_DEFINITION',
            variable: {
              kind: 'VARIABLE',
              name: 'size',
            },
            type: {
              kind: 'NAMED_TYPE',
              name: 'Int',
            },
          },
        ],
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
  `)
  ).toThrow(/Anonymous operation must be the only operation in the document/);

  expect(() =>
    parse(`
    query MyQuery {
      foo
    }

    {
      bar
    }
  `)
  ).toThrow(/Anonymous operation must be the only operation in the document/);
});

test('parsing an empty selection set', () => {
  const RAQUO = '\u00bb'; // »
  expect(() => parse('{}')).toThrow(dedent`
    Parse error:

      Expected: alias

      Parsing: document ${RAQUO} definition ${RAQUO} operation ${RAQUO} anonymousOperation ${RAQUO} selectionSet ${RAQUO} field ${RAQUO} alias

      At: index 1
  `);
});

test('parsing a document with trailing lexical tokens', () => {
  expect(() =>
    parse(dedent`
    {
      foo
    }} # <-- Note excess parenthesis here.
  `)
  ).toThrow(dedent`
    Parse error:

      Expected: end of input

      Parsing: document

      At: index 9
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

test('parsing a fragment definition', () => {
  expect(
    parse(dedent`
      fragment Post on Post {
        id
        title
        url
        body {
          html(baseHeadingLevel: $baseHeadingLevel)
        }
        readTime
        ...Tags
        ...When
      }
    `),
  ).toMatchSnapshot();
});

test('parsing a query with an inline fragment', () => {
  expect(
    parse(dedent`
      query ArticleRouteQuery($baseHeadingLevel: Int!, $id: ID!) {
        node(id: $id) {
          ... on Article {
            # As a bonus, this also shows that we can parse fragment spreads.
            ...Article
            description
            redirect
            title
          }
        }
      }
    `),
  ).toMatchSnapshot();
});

test.each([['source.graphql'], ['generated.graphql']])(
  'integration with %s',
  async (corpus) => {
    const source = await Bun.file(
      path.join(import.meta.dir, '../../../../../support', corpus),
    ).text();

    expect(parse(source)).toMatchSnapshot();
  },
);
