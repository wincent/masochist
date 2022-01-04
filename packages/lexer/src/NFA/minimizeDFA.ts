import NFAToDFA from './NFAToDFA';
import fromTransitionTable from './fromTransitionTable';
import removeDeadStates from './removeDeadStates';
import removeEpsilons from './removeEpsilons';
import removeUnreachableStates from './removeUnreachableStates';
import toTransitionTable from './toTransitionTable';
import transposeTable from './transposeTable';

import type {NFA} from './NFA';
// TODO: probably move this type into './NFA.ts'?
import type {TransitionTable} from './toTransitionTable';

/**
 * Minimizes a DFA (ie. returns an equivalent DFA that recognizes the same
 * language using the minimum possible number of states).
 *
 * We remove "dead" states (states that don't lead to an accept state) and
 * "unreachable" states (states that can't be reached from a start state), as
 * described in: https://en.wikipedia.org/wiki/DFA_minimization
 *
 * We use Brzozowski's (1962) algorithm to merge non-distinguisable states:
 *
 * > Essentially, the algorithm computes the automaton D(R(D(R(A)))), where D(A)
 * > computes the determinization of A by the well-known subset construction and
 * > R(A) is the reverse automaton of A."
 *
 * From: "DFA minimization: from Brzozowski to Hopcroft", by García, López, and
 * Vázquez de Parga
 * (https://m.riunet.upv.es/bitstream/handle/10251/27623/partial%20rev%20determ.pdf)
 */
export default function minimizeDFA(dfa: NFA): NFA {
  let table: TransitionTable;
  let nfa: NFA;

  // Reverse the DFA.
  dfa = removeUnreachableStates(dfa);
  dfa = removeDeadStates(dfa);
  table = toTransitionTable(dfa);
  table = transposeTable(table);
  nfa = fromTransitionTable(table);
  nfa = removeEpsilons(nfa);
  dfa = NFAToDFA(nfa);

  // Un-reverse the reversed DFA.
  dfa = removeUnreachableStates(dfa);
  dfa = removeDeadStates(dfa);
  table = toTransitionTable(dfa);
  table = transposeTable(table);
  nfa = fromTransitionTable(table);
  nfa = removeEpsilons(nfa);
  dfa = NFAToDFA(nfa);

  return dfa;
}
