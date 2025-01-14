import {ast} from '@masochist/codegen';
import {filterEmpty} from '@masochist/codegen/src/internal';
import {StringScanner, objectMap, unreachable} from '@masochist/common';
import assert from 'node:assert';
import stringifyRule from './stringifyRule';

import type {Program, Statement} from '@masochist/types';
import type {ParseTable} from './getParseTable';
import type {Grammar, Rule} from './types';

type Options = {
  buildCommand?: string;
  name?: string;
};

export type Stats = {
  [buildStat: string]: number;
};

// A Grammar subtype representing a grammar that has semantic actions for all
// rules. A grammar must be of this type in order for us to build a static
// parser for it.
type StaticGrammar = Omit<Grammar, 'rules'> & {rules: Array<StaticRule>};
type StaticRule = Omit<Rule, 'action'> & {action: NonNullable<Rule['action']>};

function assertIsStaticGrammar(
  grammar: Grammar,
): asserts grammar is StaticGrammar {
  for (const rule of grammar.rules) {
    if (!rule.action) {
      throw new Error(
        `assertIsStaticGrammar(): supplied grammar is not static (no semantic action provided for rule: ${
          stringifyRule(rule)
        })`,
      );
    }
  }
}

export default function build(
  grammar: Grammar,
  table: ParseTable,
  stats: Stats = {},
  options: Options = {},
): Program {
  assert(grammar.rules.length);

  // The first rule in an augmented grammar doesn't actually produce anything.
  // Naughtily mutate the passed in grammar to make all rules StaticRule.
  grammar.rules[0].action = '{ return null; }';

  assertIsStaticGrammar(grammar);

  stats['grammarRules'] = grammar.rules.length;
  stats['parserStates'] = table.length;
  stats['semanticActions'] = 0;
  stats['actions'] = 0;
  stats['reduceActions'] = 0;
  stats['shiftActions'] = 0;
  stats['acceptActions'] = 0;

  const buildCommand = options.buildCommand
    ? `edit "build.ts", run "${options.buildCommand}" instead`
    : 'edit "build.ts" instead';

  const name = options.name || 'parse';

  // Assume that prologue defines types, and we should emit them.
  const emitTypes = !!grammar.prologue;

  return ast.program(filterEmpty(
    emitTypes ? ast.empty : ast.comment('@ts-nocheck'),
    ast.docComment(
      `vim: set nomodifiable : DO NOT EDIT - ${buildCommand}`,
      '',
      '@generated',
    ),
    // TODO: don't assume lexer is written to lex.ts
    ast.import('{Lexer, Token}', './lex'),
    ast.importType('{Gotos}', '@masochist/types'),
    grammar.prologue ? ast.rawStatement(grammar.prologue) : ast.empty,
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
        return ast.function({
          name: `r${i}`,
          arguments: Array(max)
            .fill(null)
            .map((_, i) => {
              const argument = variables.has(i + 1)
                ? `$${i + 1}`
                : `_$${i + 1}`;
              if (emitTypes) {
                const symbol = rule.rhs[i];
                const argumentType = grammar.tokens.has(symbol)
                  ? 'Token'
                  : symbol;
                return `${argument}: ${argumentType}`;
              } else {
                return argument;
              }
            }),
          body: [ast.rawStatement(
            rule.action
              .replace(/^{|}$/g, '') // Strip semantic action delimiters.
              .trim()
              .replace(/\$\$\s*=\s*/g, 'return '), // TODO: static analysis to make sure this is safe.
          )],
          type: emitTypes ?
            (
              // Dummy start rule for augmented grammar will return nothing.
              // All other rules return the type of the production.
              rule.lhs.endsWith("'") ? 'null' : rule.lhs
            ) :
            undefined,
        });
      } else {
        return ast.docComment(`r${i}: no production`);
      }
    }),
    // TODO: "as const" this (can't hurt, might help)
    ast.assign(
      'const',
      'actions',
      ast.array(
        table.map(([actions]) => {
          stats['actions']++;
          return ast.object(
            objectMap(actions, ([terminal, action]) => {
              if (action.kind === 'Reduce') {
                stats['reduceActions']++;
                return [terminal, ast.number(-action.rule)];
              } else if (action.kind === 'Shift') {
                stats['shiftActions']++;
                return [terminal, ast.number(action.state)];
              } else if (action.kind === 'Accept') {
                stats['acceptActions']++;
                return [terminal, ast.number(0)];
              } else {
                unreachable(action);
              }
            }),
          );
        }),
      ),
      {
        type: {
          kind: 'GenericType',
          name: 'Array',
          parameters: [{
            kind: 'ObjectType',
            members: [{
              kind: 'ObjectTypeIndex',
              keyName: {
                kind: 'Identifier',
                name: 'token',
              },
              keyType: {
                kind: 'NamedType',
                name: 'string',
              },
              valueType: {
                kind: 'NamedType',
                name: 'number',
              },
            }],
          }],
        },
      },
    ),
    // TODO: "as const" this (can't hurt, might help)
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
      {
        type: {
          kind: 'GenericType',
          name: 'Array',
          parameters: [{
            kind: 'NamedType',
            name: 'Gotos',
          }],
        },
      },
    ),
    // TODO: "as const" this (can't hurt, might help)
    ast.assign(
      'const',
      'rules',
      ast.array(
        grammar.rules.map((rule, i) => {
          return ast.object({
            production: ast.string(rule.lhs),
            pop: ast.number(rule.rhs.length),
            action: ast.identifier(`r${i}`),
          });
        }),
      ),
    ),
    ...ast.statements("const EOF = new Token('$', -1, -1, '');"),
    ast.default(
      ast.function({
        name,
        arguments: ['input: string'],
        // TODO: return type Production
        // (need to include assertIsProduction in order for that to work)
        // or return type $StartingProduction
        // (need assertion for that too)
        body: [...ast.statements(`
            const stack: Array<[Production | Token | null, number]> = [[null, 0]];
            const lexer = new Lexer(input);
            let token = lexer.next() || EOF;

            while (true) {
              const current = stack[stack.length - 1][1];
              const action = actions[current][token.name];

              if (action === undefined) {
                // TODO: maybe show stack here?
                throw new Error('syntax error at symbol ' + token.name);
              } else if (action < 0) {
                // Reduce.
                // TODO: compare Math.abs with -, but will have to implement
                // unary minus (currently only have it for literals)
                const {production, pop, action: code} = rules[Math.abs(action)];
                const popped: Array<Production | Token | null> = new Array(pop);
                for (let i = 0; i < pop; i++) {
                  const last = stack.pop()!;
                  popped[pop - i - 1] = last[0];
                }
                const next = stack[stack.length - 1][1];
                const target = gotos[next][production];

                // Use "as any" cast to suppress:
                // - TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
                stack.push([(code as any)(...popped), target]);
              } else if (action > 0) {
                // Shift.
                stack.push([token, action]);
                token = lexer.next() || EOF;
              } else if (action === 0) {
                // Accept.
                const [tree] = stack[1];
                return tree;
              }
            }
          `)],
      }),
    ),
  ));
}
