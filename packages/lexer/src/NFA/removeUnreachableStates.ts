import type {NFA} from './NFA';

/**
 * Removes unreachable states from an NFA.
 *
 * Note that our graph-based data structure means that there _cannot_ be any
 * unreachable states in an NFA, by definition, which means that this method is
 * a no-op and is provided only as a way of signalling from `minimizeDFA()` that
 * we require any minimal DFA to not have unreachable states.
 */
export default function removeUnreachableStates(nfa: NFA): NFA {
  return nfa;
}
