import type {NFA} from './NFA';

export default function visitNFA(
  node: NFA,
  callback: (node: NFA) => void,
  seen: Set<NFA> = new Set<NFA>(),
) {
  seen.add(node);
  callback(node);
  for (const {to} of node.edges) {
    if (!seen.has(to)) {
      visitNFA(to, callback, seen);
    }
  }
}
