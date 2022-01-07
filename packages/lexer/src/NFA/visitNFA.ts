import type {NFA} from './NFA';

/**
 * Visits each node in an NFA exactly once by recursively walking transitions
 * from node to node, skipping any previously visited nodes.
 *
 * `preCallback` can be supplied to do a pre-order traversal (ie. effectively
 * visiting a node _before_ visiting the nodes reachable from it).
 *
 * `postCallback` can be used to do a post-order traversal (ie. effectivetly
 * visiting the node _after_ visiting any nodes reachable from it).
 *
 * For convenience, returns the visited node.
 */
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
  return node;
}
