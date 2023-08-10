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
      'vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make parser" instead',
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
    // TODO: replace
    ast.rawStatement(`
      const table = null; // TODO: put actual table in here...
      const grammar = null; // TODO: put actual augmented grammar in here...
      const EOF = new Token('$', -1, -1, '');

      export default function parse(input) {
        const stack = [[null, 0]];
        const lexer = new Lexer(input);

        let token;

        // TODO: handle EOF here
        while ((token = lexer.next())) {
          // ie. Pretty much the same as 'parseWithTable'; I removed some invariants for readability.
          const [, current] = stack[stack.length - 1];
          const [actions] = table[current];
          const action = actions[token.name];

          if (!action) {
            //throw new Error(
            //  \`parseWithTable(): Syntax error (no action for $ {token.name} (token index $ {pointer}) [$ {token.contents}] in state $ {current})\`,
            //);
          } if (action.kind === 'Accept') {
            // Expect initial state + accept state.
            const [tree] = stack[1];
            return tree;
          } else if (action.kind === 'Shift') {
            stack.push([token, action.state]);
          } else if (action.kind === 'Reduce') {
            const {lhs, rhs} = grammar.rules[action.rule];
            const popped: Array<P | Token | null> = [];
            for (let i = 0; i < rhs.length; i++) {
              const [node] = stack.pop()!;
              popped[rhs.length - i - 1] = node;
            }
            const [, next] = stack[stack.length - 1];
            const [, gotos] = table[next];
            const target = gotos[lhs];
            const code = ACTIONS[action.rule];
            if (code) {
              stack.push([code(...popped), target]);
            } else {
              stack.push([makeNode(lhs, popped), target]);
            }
          }
        }
      }
    `),
  ]);
}
