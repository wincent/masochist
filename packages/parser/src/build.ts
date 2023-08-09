import {ast} from '@masochist/codegen';

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
    ast.assign(
      'const',
      'ACTIONS',
      ast.array(
        grammar.rules.map((rule): Expression | NullValue => {
          if (rule.action && rule.action !== '') {
            stats['semanticActions']++;
            // TODO: check for used variables and pass only those?
            return {
              kind: 'FunctionExpression',
              arguments: [],
              body: [
                // TODO: uncomment this:
                // ast.statement(rule.action),
                ast.return('$$'),
              ],
            };
          } else {
            return ast.null;
          }
        }),
      ),
    ),
  ]);
}
