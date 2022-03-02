import {StringScanner, invariant} from '@masochist/common';
import {Token} from '@masochist/lexer';
import vm from 'vm';

import getAugmentedGrammar from './getAugmentedGrammar';

import type {ParseTable} from './getParseTable';
import type {Grammar} from './types';

type ParseTree = {
  kind: string;
  children: Array<ParseTree | Token>;
};

type Production = ParseTree | Token | null;

/**
 * Dynamically parse using supplied parse table.
 *
 * For testing purposes only; for "real" parsers we want to write out a static
 * (generated) parser artifact with proper type info, actions, and so on.
 */
export default function parseWithTable(
  table: ParseTable,
  tokens: Array<Token>,
  grammar: Grammar,
): ParseTree {
  const EOF = new Token('$', -1, -1, '');

  const augmentedGrammar = getAugmentedGrammar(grammar);
  const stack: Array<[Production, number]> = [[null, 0]];
  let pointer = 0;

  const context = vm.createContext({$$: undefined});

  while (pointer <= tokens.length) {
    const [, current] = stack[stack.length - 1];
    invariant(typeof current === 'number' && current < table.length);

    const [actions] = table[current];
    const token = tokens[pointer] ?? EOF;

    const action = actions[token.name];

    if (!action) {
      throw new Error(
        `parseWithTable(): Syntax error (no action for ${token.name} (token index ${pointer}) in state ${current})`,
      );
    } else if (action.kind === 'Accept') {
      invariant(pointer === tokens.length);

      // Expect initial state + accept state.
      invariant(stack.length === 2);
      const [tree] = stack[1];
      assertParseTree(tree);
      return tree;
    } else if (action.kind === 'Shift') {
      stack.push([token, action.state]);
      pointer++;
    } else if (action.kind === 'Reduce') {
      const {lhs, rhs, action: code} = augmentedGrammar.rules[action.rule];
      const popped = [];
      invariant(stack.length > rhs.length);
      for (let i = 0; i < rhs.length; i++) {
        const [node] = stack.pop()!;
        assertParseTreeOrToken(node);
        // TODO: if we have an action, don't set items that aren't used in the action
        popped[rhs.length - i - 1] = node; // Production.
      }
      const [, next] = stack[stack.length - 1];
      invariant(typeof next === 'number' && next < table.length);
      const [, gotos] = table[next];
      const target = gotos[lhs];
      invariant(target);
      if (code) {
        // TODO: in a real implementation of this, would cache this instead of
        // re-scanning it every time.
        const scanner = new StringScanner(code);
        while (!scanner.atEnd) {
          scanner.scan(/[^$]+/);
          if (scanner.scan('$')) {
            const variable = scanner.scan(/\d+/);
            if (variable) {
              context[`$${variable}`] = popped[parseInt(variable, 10) - 1];
            } else if (!scanner.scan(/\$/)) {
              throw new Error(`parseWithTable(): Bad action - ${code}`);
            }
          }
        }
        context['$$'] = undefined;
        vm.runInContext(code, context);
        invariant(context['$$'], 'production was undefined');
        stack.push([context['$$'], target]);
      } else {
        stack.push([
          {
            kind: lhs,
            children:
              popped.length === 1 && Array.isArray(popped[0])
                ? popped[0]
                : popped,
          },
          target,
        ]);
      }
    }
  }

  throw new Error('parseWithTable(): Unreachable');
}

function assertParseTreeOrToken(
  node: ParseTree | Token | null,
): asserts node is ParseTree | Token {
  invariant(node);
}

function assertParseTree(
  node: ParseTree | Token | null,
): asserts node is ParseTree {
  invariant(node);
  invariant(Object.hasOwnProperty.call(node, 'kind'));
}
