import {ast} from '@masochist/codegen';
import {StringScanner, objectMap} from '@masochist/common';

import type {Program, Statement} from '@masochist/codegen';
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
  stats['actions'] = 0;

  return ast.program([
    // TODO: remove the @ts-nocheck once the file is good.
    ast.comment('@ts-nocheck'),
    ast.docComment(
      'vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make parser" instead',
      '',
      '@generated',
    ),
    ast.import('{Lexer, Token}', '@masochist/lexer'),
    ...grammar.rules.map((rule, i): Statement => {
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
        const max = variables.size ? Math.max(...variables) : 0;
        // TODO: check for used variables and pass only those?
        return ast.function(
          `r${i}`,
          Array(max)
            .fill(null)
            .map((_, i) => {
              if (variables.has(i + 1)) {
                return `$${i + 1}`;
              } else {
                return `_$${i + 1}`;
              }
            }),
          [
            ast.assign('let', '$$', ast.undefined),
            ast.rawStatement(rule.action),
            ast.return('$$'),
          ],
        );
      } else {
        return ast.docComment(`r${i}: no production`);
      }
    }),
    ast.assign(
      'const',
      'actions',
      ast.array(
        table.map(([actions]) => {
          stats['actions']++;
          return ast.object(
            objectMap(actions, ([terminal, action]) => {
              if (action.kind === 'Reduce') {
                return [
                  terminal,
                  ast.object({
                    // TODO: the pointers and the names are horribly confusing
                    kind: ast.string('Reduce'),
                    rule: ast.number(action.rule),
                  }),
                ];
              } else if (action.kind === 'Shift') {
                return [
                  terminal,
                  ast.object({
                    kind: ast.string('Shift'),
                    state: ast.number(action.state),
                  }),
                ];
              } else if (action.kind === 'Accept') {
                return [terminal, ast.object({kind: ast.string('Accept')})];
              } else {
                throw new Error('Unreachable');
              }
            }),
          );
        }),
      ),
    ),
    ast.assign(
      'const',
      'gotos',
      ast.array(
        table.map(([, gotos]) => {
          // TODO: teach various places in ast to auto-coerce using ast.object?
          // (challenge is that many nodes look like AST objects already...)
          return ast.object(
            objectMap(gotos, ([nonTerminal, target]) => {
              if (target === null) {
                throw new Error('Not supported');
              }
              return [nonTerminal, ast.number(target)];
            }),
          );
        }),
      ),
    ),
    ast.assign(
      'const',
      'rules',
      ast.array(
        grammar.rules.map((rule, i) => {
          return ast.object({
            production: ast.string(rule.lhs),
            pop: ast.number(rule.rhs.length),
            action:
              i === 0
                ? ast.rawExpression('() => {} /* dummy placeholder */')
                : ast.identifier(`r${i}`),
          });
        }),
      ),
    ),
    // TODO: replace
    ast.rawStatement(`
      const EOF = new Token('$', -1, -1, '');

      export default function parse(input) {
        const stack = [[null, 0]];
        const lexer = new Lexer(input);

        let token = lexer.next() || EOF;

        while (true) {
          const [, current] = stack[stack.length - 1];
          const action = actions[current][token.name];

          if (!action) {
            throw new Error('syntax error');
          } if (action.kind === 'Accept') {
            // Expect initial state + accept state.
            const [tree] = stack[1];
            return tree;
          } else if (action.kind === 'Shift') {
            stack.push([token, action.state]);
            token = lexer.next() || EOF;
          } else if (action.kind === 'Reduce') {
            // TODO: instead of pop, set length?
            const {production, pop, action: code} = rules[action.rule];
            const popped: Array<P | Token | null> = [];
            for (let i = 0; i < pop; i++) {
              const [node] = stack.pop()!;
              popped[pop - i - 1] = node;
            }
            const [, next] = stack[stack.length - 1];
            const target = gotos[next][production];
            if (code) {
              stack.push([code(...popped), target]);
            } else {
              throw new Error('to use static parser must provide semantic action for every production');
            }
          }
        }
      }
    `),
  ]);
}
