import {START} from './NFA';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

export default function getStartStates(nfa: NFA): Array<NFA> {
  const found: Array<NFA> = [];
  visitNFA(nfa, (node) => {
    if (testFlag(node.flags, START)) {
      found.push(node);
    }
  });
  return found;
}
