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
  `),
  ).toEqual({
    definitions: [
      {
        kind: 'OPERATION',
        name: 'MyQuery',
        selections: [
          {
            alias: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
          {
            alias: undefined,
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
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: undefined,
          },
          {
            alias: undefined,
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

      Parsing: document » definition » operation » anonymousOperation » field » alias

      At: index 1 (line 1, column 2)

    > 1 | {}
        |  ^
  `);
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
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: 'label',
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
        kind: 'OPERATION',
        name: undefined,
        selections: [
          {
            alias: undefined,
            kind: 'FIELD',
            name: 'foo',
            selections: [
              {
                alias: undefined,
                kind: 'FIELD',
                name: 'bar',
                selections: [
                  {
                    alias: undefined,
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
