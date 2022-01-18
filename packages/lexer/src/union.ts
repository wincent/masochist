import {escapeForRegExp} from '@masochist/common';

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

import type {NFA} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';

/**
 * Returns a TransitionTable corresponding to a minimized DFA that recognizes
 * any of the supplied patterns. This is intended to be used in a lexer/scanner
 * that wants to try multiple possible matches and then generate the "winning"
 * token, if any.
 */
export default function union(patterns: {
  [tokenName: string]: RegExp | string;
}): TransitionTable {
  // Renumber states to ensure that they're all unique.
  let id = 1;

  let nfa: NFA = {
    id: 0,
    flags: START,
    edges: Object.entries(patterns).map(([_tokenName, pattern]) => ({
      on: null,
      to: (() => {
        const regExp =
          typeof pattern === 'string'
            ? new RegExp(escapeForRegExp(pattern))
            : pattern;

        let nfa = regExpToNFA(compileRegExp(regExp));
        nfa = removeEpsilons(nfa);
        nfa = NFAToDFA(nfa);
        nfa = sortEdges(nfa);
        nfa = minimizeDFA(nfa);
        nfa = minimizeDFA(nfa);

        nfa.flags = clearFlag(nfa.flags, START);
        visitNFA(nfa, (node) => (node.id = id++));

        return nfa;
      })(),
    })),
  };

  nfa = removeEpsilons(nfa);
  nfa = NFAToDFA(nfa);

  return toTransitionTable(nfa);
}
