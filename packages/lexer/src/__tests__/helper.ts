import {ast, print, walk} from '@masochist/codegen';
import {createContext, runInContext} from 'node:vm';

import Token from '../Token';
import build from '../build';
import definition from '../definition';

import type {
  Argument,
  DocComment,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  ImportStatement,
  PropertyDeclaration,
} from '@masochist/codegen';

import type {TransitionTable} from '../NFA/TransitionTable';

/**
 * Note: We're not testing the lexer that's currently written to disk in
 * ../lex.ts, but rather the one that _would_ be written if we were to
 * regenerate it right now.
 */

export function getLexer(
  table: TransitionTable = definition,
): (input: string) => Generator<Token, void, unknown> {
  // Build lexer.
  const node = build(table);

  walk(node, {
    // Remove doc comments.
    DocComment(_comment: DocComment) {
      return null;
    },

    // Hoist function out from `export default` declaration.
    // ie. ExportDefaultDeclaration becomes FunctionDeclaration.
    // ie. `export default function *lex()` -> `function *lex()`
    ExportDefaultDeclaration(declaration: ExportDefaultDeclaration) {
      return declaration.declaration;
    },

    // Same for `export class Lexer` -> `class Lexer`.
    ExportNamedDeclaration(declaration: ExportNamedDeclaration) {
      return declaration.declaration;
    },

    // Remove `import Token from './Token'` statement.
    ImportStatement(_statement: ImportStatement) {
      return null;
    },

    // Strip TS type annotations from FunctionDeclaration arguments.
    // ie. `function *lex(input: string)` -> `function *lex(input)`
    // ie. `constructor(input: string)` -> `constructor(input)`
    Argument(argument: Argument) {
      if (argument.type) {
        return ast.argument(argument.name);
      } else {
        // Be explict, to pacify linter.
        return undefined;
      }
    },

    // Strip TS property declarations (eg. `input: string` etc) from Lexer class.
    PropertyDeclaration(_declaration: PropertyDeclaration) {
      return null;
    },
  });

  // Elaborate hack to run generated module.
  const code = print(node);
  const context = {
    Token,
    *lex(_input: string): Generator<Token, void, unknown> {}, // Placeholder.
  };
  createContext(context);
  runInContext(code, context);

  return context.lex;
}
