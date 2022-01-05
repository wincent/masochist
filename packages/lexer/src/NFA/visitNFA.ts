import type {NFA} from './NFA';

export default function visitNFA(
  node: NFA,
  preCallback?: null | ((node: NFA) => void),
  postCallback?: null | ((node: NFA) => void),
  seen?: Set<NFA>,
) {
  seen = seen || new Set();
  seen.add(node);
  preCallback && preCallback(node);
  for (const {to} of node.edges) {
    if (!seen.has(to)) {
      visitNFA(to, preCallback, postCallback, seen);
    }
  }
  postCallback && postCallback(node);
}
