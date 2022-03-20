import {print} from '@masochist/codegen';
import {invariant} from '@masochist/common';
import vm from 'vm';

import {promises as fs} from 'fs';
import path from 'path';

import Token from '../Token';
import build from '../build';
import definition from '../definition';

/**
 * Note: We're not testing the lexer that's currently written to disk in
 * ../lex.ts, but rather the one that _would_ be written if we were to
 * regenerate it right now.
 */

describe('lex()', () => {
  let lex: (input: string) => Generator<Token, void, unknown>;

  beforeAll(() => {
    // Build lexer.
    const ast = build(definition);

    // Remove `import Token from './Token'` statement.
    invariant(ast.statements.shift()?.kind === 'ImportStatement');

    // Remove TS property declarations from Lexer class.
    invariant(ast.statements[2]);
    invariant(ast.statements[2].kind === 'ClassDeclaration');
    invariant(ast.statements[2].body.shift()?.kind === 'PropertyDeclaration');
    invariant(ast.statements[2].body.shift()?.kind === 'PropertyDeclaration');
    invariant(ast.statements[2].body.shift()?.kind === 'PropertyDeclaration');
    invariant(ast.statements[2].body.shift()?.kind === 'PropertyDeclaration');

    // Remove TS type annotation from constructor method argument.
    invariant(ast.statements[2].body[0].kind === 'MethodDefinition');
    ast.statements[2].body[0].value.arguments = ['input'];

    // Hoist function out from `export default` declaration.
    invariant(ast.statements[3]);
    invariant(ast.statements[3].kind === 'ExportDefaultDeclaration');
    invariant(ast.statements[3].declaration.kind === 'FunctionDeclaration');
    invariant(ast.statements[3].declaration.name === '*lex');
    ast.statements[3] = ast.statements[3].declaration;

    // Remove TS type annotation from function argument.
    ast.statements[3].arguments = ['input'];

    // Elaborate hack to run generated module.
    const code = print(ast);
    const context = {
      Token,
      *lex(_input: string): Generator<Token, void, unknown> {}, // Placeholder.
    };
    vm.createContext(context);
    vm.runInContext(code, context);

    lex = context.lex;
  });

  it('can lex a NAME token right at the end', () => {
    const input = 'foo bar';
    const tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 3, input),
      new Token('NAME', 4, 7, input),
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
    const input = 'foo bar baz';
    const tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 3, input),
      new Token('NAME', 4, 7, input),
      new Token('NAME', 8, 11, input),
    ]);

    // Note that token contents can be recovered.
    expect(tokens[0].contents).toBe('foo');
    expect(tokens[1].contents).toBe('bar');
    expect(tokens[2].contents).toBe('baz');
  });

  it('lexes an FRAGMENT and ON tokens', () => {
    const input = 'fragment foo on bar';
    const tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('FRAGMENT', 0, 8, input),
      new Token('NAME', 9, 12, input),
      new Token('ON', 13, 15, input),
      new Token('NAME', 16, 19, input),
    ]);

    // Note that token contents can be recovered.
    expect(tokens[0].contents).toBe('fragment');
    expect(tokens[1].contents).toBe('foo');
    expect(tokens[2].contents).toBe('on');
    expect(tokens[3].contents).toBe('bar');
  });

  it('lexes "on" when it is a substring inside a NAME token', () => {
    const input = 'aaa_on on_bbb ccc_on_ddd';
    const tokens = [...lex(input)];
    expect(tokens).toEqual([
      new Token('NAME', 0, 6, input),
      new Token('NAME', 7, 13, input),
      new Token('NAME', 14, 24, input),
    ]);

    // Note that token contents can be recovered.
    expect(tokens[0].contents).toBe('aaa_on');
    expect(tokens[1].contents).toBe('on_bbb');
    expect(tokens[2].contents).toBe('ccc_on_ddd');
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

  it('lexes a named query with some arguments', () => {
    const input = `
      query Crap {
        viewer {
          feed(first: 10, after: "cursor") {
            id
          }
        }
      }
    `;
    expect([...lex(input)]).toEqual([
      new Token('NAME', 7, 12, input),
      new Token('NAME', 13, 17, input),
      new Token('OPENING_BRACE', 18, 19, input),
      new Token('NAME', 28, 34, input),
      new Token('OPENING_BRACE', 35, 36, input),
      new Token('NAME', 47, 51, input),
      new Token('OPENING_PAREN', 51, 52, input),
      new Token('NAME', 52, 57, input),
      new Token('COLON', 57, 58, input),
      new Token('NUMBER', 59, 61, input),
      new Token('NAME', 63, 68, input),
      new Token('COLON', 68, 69, input),
      new Token('STRING_VALUE', 70, 78, input),
      new Token('CLOSING_PAREN', 78, 79, input),
      new Token('OPENING_BRACE', 80, 81, input),
      new Token('NAME', 94, 96, input),
      new Token('CLOSING_BRACE', 107, 108, input),
      new Token('CLOSING_BRACE', 117, 118, input),
      new Token('CLOSING_BRACE', 125, 126, input),
    ]);
  });

  describe('regression tests', () => {
    it('lexes a one-character punctuator between two NAME tokens', () => {
      // OPENING_BRACE was two wide, but should be one wide.
      const input = 'foo { bar';
      expect([...lex(input)]).toEqual([
        new Token('NAME', 0, 3, input),
        new Token('OPENING_BRACE', 4, 5, input),
        new Token('NAME', 6, 9, input),
      ]);
    });

    it('lexes a one-character punctuator after a STRING_VALUE', () => {
      // CLOSING_PAREN was starting 1 character too far to the right.
      const input = '"hey") {';
      expect([...lex(input)]).toEqual([
        new Token('STRING_VALUE', 0, 5, input),
        new Token('CLOSING_PAREN', 5, 6, input),
        new Token('OPENING_BRACE', 7, 8, input),
      ]);
    });
  });
});
