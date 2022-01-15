import equalTransitions from './equalTransitions';

import type {Edge} from './NFA';

/**
 * Edges are considered equal if they point to the same `to` target node based
 * on an equivalent condition.
 */
export function equalEdges(a: Edge, b: Edge): boolean {
  return a.to === b.to && equalTransitions(a.on, b.on);
}
