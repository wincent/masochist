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
            kind: 'FIELD',
            name: 'foo',
          },
          {
            kind: 'FIELD',
            name: 'bar',
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
            kind: 'FIELD',
            name: 'foo',
          },
          {
            kind: 'FIELD',
            name: 'bar',
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
  expect(() => parse('{}')).toThrow(
    /Expected at least one result from parseSelection()/,
  );
});
