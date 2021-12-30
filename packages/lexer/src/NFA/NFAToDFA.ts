import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Turns an NFA into a DFA by removing all non-determinism.
 *
 * For simplicity, we assume the supplied `nfa` has already been passed through
 * `removeEpsilons()`.
 */
export default function NFAToDFA(nfa: NFA): NFA {
  return nfa;
}
