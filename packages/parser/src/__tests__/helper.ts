import {ast, print, walk} from '@masochist/codegen';
import {Token} from '@masochist/lexer';
import {getLexer} from '@masochist/lexer/src/internal';
import assert from 'node:assert';
import {createContext, runInContext} from 'node:vm';

import build from '../build';

import type {TransitionTable} from '@masochist/lexer';
import type {
  DocComment,
  ExportDefaultDeclaration,
  ImportStatement,
  NonNullExpression,
  RawStatement,
  Type,
} from '@masochist/types';

import type {ParseTable} from '../getParseTable';
import type {Grammar} from '../types';

/**
 * We use `getParser()`, not to test the lexer and parsers that are currently
 * written to disk but rather the ones that _would_ be written if we were to
 * regenerate them right now.
 */
export async function getParser<T = unknown>(
  grammar: Grammar,
  parseTable: ParseTable,
  lexerTable: TransitionTable,
): Promise<(input: string) => T> {
  // Build lexer.
  const {Lexer} = await getLexer(lexerTable);
  const node = build(grammar, parseTable);

  walk(node, {
    // Strip type annotations.
    //
    // Argument types:
    //
    // - `function parse(input: string)` → `function parse(input)`
    //
    // Return types:
    //
    // - `function r3(): StatementList { ... }` → `function r3() { ... }`
    //
    // Assignment statement types:
    //
    // - `const actions: Actions = [...]` → `const actions = [...]`
    // - `const gotos: Gotos = [...]` → `const gotos = [...]`
    // - `const popped: Array<Production | Token | null> = []` →
    //   `const popped = []`
    //
    // Casts:
    //
    // - `code as any` → `code`.
    Type(_type: Type) {
      return null;
    },

    // Remove doc comments.
    DocComment(_comment: DocComment) {
      return null;
    },

    // Hoist function out from `export default` declaration.
    // ie. `export default function parse()` -> `parse = function parse()`
    ExportDefaultDeclaration(declaration: ExportDefaultDeclaration) {
      if (declaration.declaration.kind === 'FunctionDeclaration') {
        return ast.assign(null, 'parse', {
          kind: 'FunctionExpression',
          arguments: declaration.declaration.arguments,
          name: declaration.declaration.name,
          body: declaration.declaration.body,
        });
      } else {
        return null;
      }
    },

    // Remove `import {Lexer, Token} from './lex'` statement.
    ImportStatement(_statement: ImportStatement) {
      return null;
    },

    // `stack.pop()!` → `stack.pop()`
    NonNullExpression(expression: NonNullExpression) {
      return expression.expression;
    },

    // Skip the prologue.
    RawStatement(statement: RawStatement) {
      if (statement.statement.match(/\bimport type\b/)) {
        // Skip the entire prologue; it's only for types.
        // TODO: actually flag the prologue with a marker
        return null;
      } else {
        return undefined; // Avoid TS7030: Not all code paths return a value.
      }
    },
  });

  // Run the generated module in a sandbox.
  const code = print(node);
  const context: {
    Lexer: typeof Lexer;
    Token: typeof Token;
    parse?: (input: string) => unknown;
  } = {
    Lexer,
    Token,
  };
  createContext(context);
  runInContext(code, context);

  assert(context.parse);

  return context.parse as (input: string) => T;
}
