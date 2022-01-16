import {escapeForRegExp} from '@masochist/common';

import {START} from './NFA/NFA';
import NFAToDFA from './NFA/NFAToDFA';
import applyLabel from './NFA/applyLabel';
import clearFlag from './NFA/clearFlag';
import minimizeDFA from './NFA/minimizeDFA';
import regExpToNFA from './NFA/regExpToNFA';
import removeEpsilons from './NFA/removeEpsilons';
import sortEdges from './NFA/sortEdges';
import toTransitionTable from './NFA/toTransitionTable';
import visitNFA from './NFA/visitNFA';
import compileRegExp from './compileRegExp';

import type {TransitionTable} from './NFA/TransitionTable';

/**
 * Returns a TransitionTable corresponding to a minimized DFA that recognizes
 * any of the supplied patterns. This is intended to be used in a lexer/scanner
 * that wants to try multiple possible matches and then generate the "winning"
 * token, if any. As such, unlike the `ignore()` function, this DFA includes
 * labels that can be used to distinguish between transitions that arrive in
 * accept states which have been consolidated from multiple machines, but which
 * should produce distinct tokens.
 */
export default function union(patterns: {
  [label: string]: RegExp | string;
}): TransitionTable {
  // Renumber states to ensure that they're all unique.
  let id = 1;

  return toTransitionTable(
    minimizeDFA(
      sortEdges(
        NFAToDFA(
          removeEpsilons({
            id: 0,
            flags: START,
            edges: Object.entries(patterns).map(([label, pattern]) => ({
              on: null,
              to: (() => {
                const regExp =
                  typeof pattern === 'string'
                    ? new RegExp(escapeForRegExp(pattern))
                    : pattern;

                const nfa = regExpToNFA(compileRegExp(regExp));
                nfa.flags = clearFlag(nfa.flags, START);
                visitNFA(nfa, (node) => (node.id = id++));
                applyLabel(label, nfa);
                return nfa;
              })(),
            })),
          }),
        ),
      ),
    ),
  );
}
