import NFAToDFA from './NFAToDFA';
import fromTransitionTable from './fromTransitionTable';
import removeDeadStates from './removeDeadStates';
import removeEpsilons from './removeEpsilons';
import removeUnreachableStates from './removeUnreachableStates';
import toTransitionTable from './toTransitionTable';
import transposeTable from './transposeTable';

import type {NFA} from './NFA';
import type {TransitionTable} from './TransitionTable';

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
  // console.log(require('./stringifyTransitionTable').default(table));
  table = transposeTable(table);
  // console.log(require('./stringifyTransitionTable').default(table));
  nfa = fromTransitionTable(table);
  nfa = removeEpsilons(nfa);
  // console.log(
  // require('./stringifyTransitionTable').default(toTransitionTable(nfa)),
  // ); // there were no epsilons, so it is the same
  dfa = NFAToDFA(nfa);
  // console.log(
  //   require('./stringifyTransitionTable').default(toTransitionTable(dfa)),
  // ); // we now have a subtle problem

  // one of the states looks like this:
  //    /* 1 */ new Map([
  //      ['Atom:"', new Set([2])],
  //      ['Atom:\t', new Set([1])],
  //      ['Range: -!', new Set([1])],
  //      ['Range:#-[', new Set([1])],       // this overlaps with eg. Atom:b and others, so this is NOT a DFA
  //      ['Range:]-\uffff', new Set([1])],
  //      ['Atom:/', new Set([3])],
  //      ['Atom:\\', new Set([3])],
  //      ['Atom:b', new Set([3])],
  //      ['Atom:f', new Set([3])],
  //      ['Atom:n', new Set([3])],
  //      ['Atom:r', new Set([3])],
  //      ['Atom:t', new Set([3])],
  //      ['Range:0-9', new Set([4])],
  //      ['Range:A-F', new Set([4])],
  //      ['Range:a-f', new Set([4])],
  //    ]),
  //
  // therefore, in NFA to DFA, i need to tease apart these conditions

  // Un-reverse the reversed DFA.
  dfa = removeUnreachableStates(dfa);
  dfa = removeDeadStates(dfa);
  // console.log(
  //   require('./stringifyTransitionTable').default(toTransitionTable(dfa)),
  // ); // destroyed by here
  table = toTransitionTable(dfa);
  // console.log(require('./stringifyTransitionTable').default(table)); // destroyed by here
  table = transposeTable(table);
  // console.log(require('./stringifyTransitionTable').default(table)); // destroyed by here
  nfa = fromTransitionTable(table);
  nfa = removeEpsilons(nfa);
  dfa = NFAToDFA(nfa);
  // TODO: see if we need to remove dead AFTER this...

  return dfa;
}
