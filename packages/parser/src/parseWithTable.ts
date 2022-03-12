import {StringScanner, invariant} from '@masochist/common';
import {Token} from '@masochist/lexer';
import vm from 'vm';

import getAugmentedGrammar from './getAugmentedGrammar';

import type {ParseTable} from './getParseTable';
import type {Grammar} from './types';

/**
 * Convenience, for use in tests.
 */
export type ParseTree = {
  kind: string;
  children: Array<ParseTree | Token | null>;
};

/**
 * Convenience, for use in tests.
 */
export function makeNode(
  lhs: string,
  children: Array<ParseTree | Token | null>,
): ParseTree | Token | null {
  return {
    kind: lhs,
    children:
      children.length === 1 && Array.isArray(children[0])
        ? children[0]
        : children,
  };
}

function debugLog(...items: Array<unknown>) {
  if (process.env['DEBUG']) {
    console.log(...items);
  }
}

/**
 * Dynamically parse using supplied parse table.
 *
 * For testing purposes only; for "real" parsers we want to write out a static
 * (generated) parser artifact with proper type info, actions, and so on.
 */
export default function parseWithTable<P>(
  table: ParseTable,
  tokens: Array<Token>,
  grammar: Grammar,
  makeNode: (
    lhs: string,
    children: Array<P | Token | null>,
  ) => P | Token | null,
): P | Token | null {
  const EOF = new Token('$', -1, -1, '');

  const augmentedGrammar = getAugmentedGrammar(grammar);
  const stack: Array<[P | Token | null, number]> = [[null, 0]];
  let pointer = 0;

  const context = vm.createContext({$$: undefined});
  const bindingsCache: {[code: string]: Array<number>} = {};

  while (pointer <= tokens.length) {
    const [, current] = stack[stack.length - 1];
    invariant(typeof current === 'number' && current < table.length);

    const [actions] = table[current];
    const token = tokens[pointer] ?? EOF;

    const action = actions[token.name];

    if (!action) {
      throw new Error(
        `parseWithTable(): Syntax error (no action for ${token.name} (token index ${pointer}) [${token.contents}] in state ${current})`,
      );
    } else if (action.kind === 'Accept') {
      debugLog('Accept');
      invariant(pointer === tokens.length);

      // Expect initial state + accept state.
      invariant(stack.length === 2);
      const [tree] = stack[1];
      return tree;
    } else if (action.kind === 'Shift') {
      debugLog('Shift:', token.name, action.state);
      stack.push([token, action.state]);
      pointer++;
    } else if (action.kind === 'Reduce') {
      const {lhs, rhs, action: code} = augmentedGrammar.rules[action.rule];
      const popped: Array<P | Token | null> = [];
      invariant(stack.length > rhs.length);
      for (let i = 0; i < rhs.length; i++) {
        const [node] = stack.pop()!;
        // TODO: if we have an action, don't set items that aren't used in the action
        popped[rhs.length - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      invariant(typeof next === 'number' && next < table.length);
      const [, gotos] = table[next];
      const target = gotos[lhs];
      invariant(target);
      debugLog('Reduce:', lhs, target);
      if (code) {
        if (!bindingsCache[code]) {
          const variables = [];
          const scanner = new StringScanner(code);
          while (!scanner.atEnd) {
            scanner.scan(/[^$]+/);
            if (scanner.scan('$')) {
              const variable = scanner.scan(/\d+/);
              if (variable) {
                variables.push(parseInt(variable, 10));
              } else {
                scanner.scan(/\$/);
              }
            }
          }
          bindingsCache[code] = variables;
        }
        for (const variable of bindingsCache[code]) {
          context[`$${variable}`] = popped[variable - 1];
        }
        context['$$'] = undefined;
        vm.runInContext(code, context);
        invariant(context['$$'] !== undefined, 'production was undefined');
        stack.push([context['$$'], target]);
      } else {
        stack.push([makeNode(lhs, popped), target]);
      }
    }
  }

  throw new Error('parseWithTable(): Unreachable');
}
