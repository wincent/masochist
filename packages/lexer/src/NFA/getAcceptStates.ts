import {ACCEPT} from './NFA';
import testFlag from './testFlag';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

export default function getAcceptStates(nfa: NFA): Array<NFA> {
  const found: Array<NFA> = [];
  visitNFA(nfa, (node) => {
    if (testFlag(node.flags, ACCEPT)) {
      found.push(node);
    }
  });
  return found;
}
