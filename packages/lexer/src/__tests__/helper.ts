import {ast, print, walk} from '@masochist/codegen';
import assert from 'node:assert';
import {createContext, runInContext} from 'node:vm';

import Token from '../Token';
import build from '../build';

import type {
  DocComment,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  PropertyDeclaration,
  Type,
} from '@masochist/types';

import type {TransitionTable} from '../NFA/TransitionTable';

interface Lexer {
  input: string;
  state: number;
  tokenStart: number;
  index: number;

  constructor(input: string): Lexer;

  emit(name: string, end: number, input: string): Token;

  next(): Token | null;
}

/**
 * We use `getLexer()`, not to test the lexer that's currently written to disk
 * but rather the one that _would_ be written if we were to regenerate it right
 * now.
 */
export async function getLexer(table: TransitionTable): Promise<{
  Lexer: Lexer;
  lex: (input: string) => Generator<Token, void, unknown>;
}> {
  // Build lexer.
  const node = await build(table);

  walk(node, {
    // Remove doc comments.
    DocComment(_comment: DocComment) {
      return null;
    },

    // Hoist function out from `export default` declaration:
    // ie. `export default function *lex()` -> `lex = function *lex()`
    ExportDefaultDeclaration(declaration: ExportDefaultDeclaration) {
      if (declaration.declaration.kind === 'FunctionDeclaration') {
        return ast.assign(null, 'lex', {
          kind: 'FunctionExpression',
          arguments: declaration.declaration.arguments,
          name: declaration.declaration.name,
          body: declaration.declaration.body,
        });
      } else {
        return null;
      }
    },

    // Turn `export class Lexer` -> `Lexer = class Lexer`.
    ExportNamedDeclaration(declaration: ExportNamedDeclaration) {
      assert(declaration.declaration.kind === 'ClassDeclaration');
      return ast.assign(
        null,
        'Lexer',
        ast.classExpression(
          declaration.declaration.id,
          declaration.declaration.body,
        ),
      );
    },

    // Strip TS type annotations.
    // ie. `function *lex(input: string)` -> `function *lex(input)`
    // ie. `constructor(input: string)` -> `constructor(input)`
    Type(_type: Type) {
      return null;
    },

    // Strip TS property declarations (eg. `input: string` etc) from Lexer class.
    PropertyDeclaration(_declaration: PropertyDeclaration) {
      return null;
    },
  });

  // Run the generated module in a sandbox.
  const code = print(node);
  const context: {
    Lexer?: Lexer;
    Token: typeof Token;
    lex?: (input: string) => Generator<Token, void, unknown>;
  } = {
    Token,
  };
  createContext(context);
  runInContext(code, context);

  assert(context.Lexer);
  assert(context.lex);

  return {
    Lexer: context.Lexer,
    lex: context.lex,
  };
}
