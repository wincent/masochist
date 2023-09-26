import {ast, print, walk} from '@masochist/codegen';
import {Token} from '@masochist/lexer';
import {getLexer} from '@masochist/lexer/src/internal';
import assert from 'node:assert';
import {createContext, runInContext} from 'node:vm';

import build from '../build';

import type {
  DocComment,
  ExportDefaultDeclaration,
  ImportStatement,
  RawStatement,
} from '@masochist/codegen';
import type {TransitionTable} from '@masochist/lexer';

import type {ParseTable} from '../getParseTable';
import type {Grammar} from '../types';

/**
 * We use `getParser()`, not to test the lexer and parsers that are currently
 * written to disk but rather the ones that _would_ be written if we were to
 * regenerate them right now.
 */
export async function getParser(
  grammar: Grammar,
  parseTable: ParseTable,
  lexerTable: TransitionTable,
): Promise<(input: string) => unknown> {
  // Build lexer.
  const {Lexer} = await getLexer(lexerTable);
  const node = build(grammar, parseTable);

  walk(node, {
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

    // Brutal hack to strip out a type annotation and a non-null assertion in
    // the middle of a multi-line RawStatement.
    // TODO: once this raw statement is gone, this will need to change
    RawStatement(statement: RawStatement) {
      if (statement.statement.match(/const popped:/)) {
        return {
          kind: 'RawStatement',
          statement: statement.statement
            .replace(/const popped(:\s*.+\s*=)/, 'const popped =')
            .replace('!;', ';'),
        };
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

  return context.parse;
}
