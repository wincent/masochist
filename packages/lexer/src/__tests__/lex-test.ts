import {print} from '@masochist/codegen';
import {invariant} from '@masochist/common';

import {promises as fs} from 'fs';
import path from 'path';

import build from '../build';
import definition from '../definition';

/**
 * Note: We're not testing the lexer that's currently written to disk in
 * ../lex.ts, but rather the one that _would_ be written if we were to
 * regenerate it right now.
 */

describe('lex()', () => {
  let lex: (input: string) => Generator<
    {
      token: string;
      tokenStart: number;
      tokenEnd: number;
    },
    void,
    unknown
  >;

  beforeAll(() => {
    // Build lexer.
    const ast = build(definition);

    // Unwrap "export default function *lex(...) { [body] }" to just "[body]".
    // Conveniently, this means we don't have to strip the "input: string" type
    // annotation from the arguments list, because we're skipping the arguments
    // list.
    const statement = ast.statements.shift();
    invariant(statement);
    invariant(statement.kind === 'ExportDefaultDeclaration');
    invariant(statement.declaration.kind === 'FunctionDeclaration');
    ast.statements.unshift(...statement.declaration.body);

    // This is eval() in disguise:
    const GeneratorFunction = Object.getPrototypeOf(
      function* () {},
    ).constructor;
    lex = new GeneratorFunction('input', print(ast));
  });

  it('can lex a NAME token right at the end', () => {
    const tokens = [...lex('foo bar')];
    expect(tokens).toEqual([
      {token: 'NAME', tokenStart: 0, tokenEnd: 3},
      {token: 'NAME', tokenStart: 4, tokenEnd: 7},
    ]);
  });

  it('lexes an empty string', () => {
    const tokens = [...lex('')];
    expect(tokens).toEqual([]);
  });

  it('lexes whitespace', () => {
    const tokens = [...lex(' \t')];
    expect(tokens).toEqual([]);
  });

  it('lexes a comment', () => {
    const tokens = [...lex('# this is a comment')];
    expect(tokens).toEqual([]);
  });

  it('lexes multiple comments', () => {
    const tokens = [
      ...lex(`
        # this is a comment
        # this is another
      `),
    ];
    expect(tokens).toEqual([]);
  });

  it('lexes commas', () => {
    const tokens = [...lex(',,,')];
    expect(tokens).toEqual([]);
  });

  it('lexes names', () => {
    const tokens = [...lex('foo bar baz')];
    expect(tokens).toEqual([
      {token: 'NAME', tokenStart: 0, tokenEnd: 3},
      {token: 'NAME', tokenStart: 4, tokenEnd: 7},
      {token: 'NAME', tokenStart: 8, tokenEnd: 11},
    ]);
  });

  it('survives a stress test', async () => {
    // TODO: make some useful assertions instead of just confirming that this
    // doesn't blow up
    await expect(
      (async () => {
        const support = path.join(__dirname, '..', '..', '..', '..', 'support');
        for (const file of ['generated', 'schema', 'source']) {
          const text = (
            await fs.readFile(path.join(support, file + '.graphql'))
          ).toString();

          [...lex(text)];
        }
      })(),
    ).resolves.not.toThrow();
  });

  it('does something else', () => {
    const tokens = [
      ...lex(`
      query Crap {
        viewer {
          feed(first: 10, after: "cursor") {
            id
          }
        }
      }
    `),
    ];
    expect(tokens).toEqual([
      {token: 'NAME', tokenStart: 7, tokenEnd: 12},
      {token: 'NAME', tokenStart: 13, tokenEnd: 17},
      {token: 'OPENING_BRACE', tokenStart: 18, tokenEnd: 19},
      {token: 'NAME', tokenStart: 28, tokenEnd: 34},
      {token: 'OPENING_BRACE', tokenStart: 35, tokenEnd: 36},
      {token: 'NAME', tokenStart: 47, tokenEnd: 51},
      {token: 'OPENING_PAREN', tokenStart: 51, tokenEnd: 52},
      {token: 'NAME', tokenStart: 52, tokenEnd: 57},
      {token: 'COLON', tokenStart: 57, tokenEnd: 58},
      {token: 'NUMBER', tokenStart: 59, tokenEnd: 61},
      {token: 'NAME', tokenStart: 63, tokenEnd: 68},
      {token: 'COLON', tokenStart: 68, tokenEnd: 69},
      {token: 'STRING_VALUE', tokenStart: 70, tokenEnd: 78},
      {token: 'CLOSING_PAREN', tokenStart: 78, tokenEnd: 79},
      {token: 'OPENING_BRACE', tokenStart: 80, tokenEnd: 81},
      {token: 'NAME', tokenStart: 94, tokenEnd: 96},
      {token: 'CLOSING_BRACE', tokenStart: 107, tokenEnd: 108},
      {token: 'CLOSING_BRACE', tokenStart: 117, tokenEnd: 118},
      {token: 'CLOSING_BRACE', tokenStart: 125, tokenEnd: 126},
    ]);
  });

  describe('regression tests', () => {
    it('lexes a one-character punctuator between two NAME tokens', () => {
      // OPENING_BRACE was two wide, but should be one wide.
      expect([...lex('foo { bar')]).toEqual([
        {token: 'NAME', tokenStart: 0, tokenEnd: 3},
        {token: 'OPENING_BRACE', tokenStart: 4, tokenEnd: 5},
        {token: 'NAME', tokenStart: 6, tokenEnd: 9},
      ]);
    });

    it('lexes a one-character punctuator after a STRING_VALUE', () => {
      // CLOSING_PAREN was starting 1 character too far to the right.
      expect([...lex('"hey") {')]).toEqual([
        {token: 'STRING_VALUE', tokenStart: 0, tokenEnd: 5},
        {token: 'CLOSING_PAREN', tokenStart: 5, tokenEnd: 6},
        {token: 'OPENING_BRACE', tokenStart: 7, tokenEnd: 8},
      ]);
    });
  });
});
