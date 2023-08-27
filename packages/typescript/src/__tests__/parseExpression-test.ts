// TODO: once parser has stabilized, do same thing we do in lex-test.ts and run
// tests against what _would_ be written to disk as opposed to just importing
// built artifact.
import parseExpression from '../parseExpression';

describe('parseExpression()', () => {
  it('it parses a strict equality binary expression', () => {
    const input = 'foo === 1.5';
    expect(parseExpression(input)).toMatchInlineSnapshot(`
      {
        "kind": "BinaryExpression",
        "lexpr": {
          "kind": "Identifier",
          "name": "foo",
        },
        "operator": "===",
        "rexpr": {
          "base": 10,
          "kind": "NumberValue",
          "value": 1.5,
        },
      }
    `);
  });
});
