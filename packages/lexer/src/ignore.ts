import {START} from './NFA/NFA';
import NFAToDFA from './NFA/NFAToDFA';
import clearFlag from './NFA/clearFlag';
import minimizeDFA from './NFA/minimizeDFA';
import regExpToNFA from './NFA/regExpToNFA';
import removeEpsilons from './NFA/removeEpsilons';
import sortEdges from './NFA/sortEdges';
import toTransitionTable from './NFA/toTransitionTable';
import visitNFA from './NFA/visitNFA';
import compileRegExp from './compileRegExp';

import type {TransitionTable} from './NFA/toTransitionTable';

/**
 * Returns a TransitionTable corresponding to a minimized DFA that recognizes
 * any of the supplied patterns.
 */
export default function ignore(...patterns: Array<RegExp>): TransitionTable {
  // Renumber states to ensure that they're all unique.
  let id = 1;

  return toTransitionTable(
    minimizeDFA(
      sortEdges(
        NFAToDFA(
          removeEpsilons({
            id: 0,
            flags: START,
            edges: patterns.map((pattern) => ({
              on: null,
              to: (() => {
                const nfa = regExpToNFA(compileRegExp(pattern));
                nfa.flags = clearFlag(nfa.flags, START);
                return visitNFA(nfa, (node) => (node.id = id++));
              })(),
            })),
          }),
        ),
      ),
    ),
  );
}
