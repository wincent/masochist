import {ast} from '@masochist/codegen';
import {StringScanner, objectMap} from '@masochist/common';

import {table} from './definition';

import type {ObjectValue, Program, Statement} from '@masochist/codegen';

import type {Action, ParseTable} from './getParseTable';
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
        // TODO: check for used variables and pass only those?
        return ast.function(
          `r${i}`,
          Array.from(variables)
            .sort()
            .map((variable) => `$${variable}`),
          [ast.rawStatement(rule.action), ast.return('$$')],
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
          return ast.object(
            objectMap(actions, ([terminal, action]) => {
              if (!action) {
                // TODO: decide what to do here (doesn't happen for our use case).
                return [terminal, ast.object({kind: ast.string('Accept')})];
              } else if (action.kind === 'Reduce') {
                return [
                  terminal,
                  ast.object({
                    kind: ast.string('Reduce'),
                    action: ast.identifier(`r${action.rule}`),
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
