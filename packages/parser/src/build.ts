import {ast} from '@masochist/codegen';
import {StringScanner} from '@masochist/common';

import type {Expression, NullValue, Program} from '@masochist/codegen';

import type {ParseTable} from './getParseTable';
import type {Grammar} from './types';

export type Stats = {
  [buildStat: string]: number;
};

export default function build(
  grammar: Grammar,
  table: ParseTable,
  stats: Stats = {},
): Program {
  stats['grammarRules'] = grammar.rules.length;
  stats['parserStates'] = table.length;
  stats['semanticActions'] = 0;

  return ast.program([
    // TODO: remove the @ts-nocheck once the file is good.
    ast.comment('@ts-nocheck'),
    ast.docComment(
      'vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make lexer" instead',
      '',
      '@generated',
    ),
    ast.assign(
      'const',
      'ACTIONS',
      ast.array(
        grammar.rules.map((rule): Expression | NullValue => {
          if (rule.action && rule.action !== '') {
            stats['semanticActions']++;
            const variables = new Set<number>();
            const scanner = new StringScanner(rule.action);
            while (!scanner.atEnd) {
              scanner.scan(/[^$]+/);
              if (scanner.scan('$')) {
                const variable = scanner.scan(/\d+/);
                if (variable) {
                  variables.add(parseInt(variable, 10));
                } else {
                  scanner.scan(/\$/);
                }
              }
            }
            // TODO: check for used variables and pass only those?
            return {
              kind: 'FunctionExpression',
              arguments: Array.from(variables)
                .sort()
                .map((variable) => `$${variable}`),
              body: [ast.rawStatement(rule.action), ast.return('$$')],
            };
          } else {
            return ast.null;
          }
        }),
      ),
    ),
  ]);
}
