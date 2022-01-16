import {escapeForRegExp} from '@masochist/common';

import {START} from './NFA/NFA';
import NFAToDFA from './NFA/NFAToDFA';
import applyLabel from './NFA/applyLabel';
import clearFlag from './NFA/clearFlag';
import fromTransitionTable from './NFA/fromTransitionTable';
import minimizeDFA from './NFA/minimizeDFA';
import regExpToNFA from './NFA/regExpToNFA';
import removeEpsilons from './NFA/removeEpsilons';
import sortEdges from './NFA/sortEdges';
import testFlag from './NFA/testFlag';
import toTransitionTable from './NFA/toTransitionTable';
import transposeTable from './NFA/transposeTable';
import visitNFA from './NFA/visitNFA';
import compileRegExp from './compileRegExp';

import type {NFA} from './NFA/NFA';
import type {TransitionTable} from './NFA/TransitionTable';

/**
 * I have no idea if `discriminate` is a good name for this function, but its
 * job is to discriminate accept states based on the labels of the transitions
 * that lead to them. That is, if "a" and "b" both lead to an accept state N,
 * but they have labels "A" and "B" respectively, we want to split state N into
 * two states, each with the corresponding label.
 *
 * If this can't be done without introducing non-determinism (ie. if it would
 * produce an NFA), we wind of unioning the labels _without_ splitting the
 * states (ie. the single state winds up with labels "A" and "B"), which may not
 * be very useful in practice, but hasn't come up so far in the machines I'm
 * using in this project.
 */
export default function discriminate(nfa: NFA): NFA {
  // Transpose first because this makes it easier to examine all _inbound_
  // edges, seeing as nodes only record their _outbound_ edges.
  let table = toTransitionTable(nfa);
  table = transposeTable(table);

  // Back to NFA so that we can conveniently visit it.
  nfa = fromTransitionTable(table);

  nfa = visitNFA(nfa, (node) => {
    if (testFlag(node.flags, START)) {
      // This is a start state, which means it was an accept state in the
      // original NFA. Partition edges by labels to see if any discrimination is
      // required.
      // and any edge has labels
      // and the labels aren't all the same, split (copy the states, embedding label in each state)
      // if they are all the same, just embed the label(s) in the state
      //
      // need to be careful here not to go too far (and undo too many of the effects of minimization)
      // and also, not to introduce any non-determinism
    }
  });

  table = toTransitionTable(nfa);
  table = transposeTable(table);

  return fromTransitionTable(table);
}
