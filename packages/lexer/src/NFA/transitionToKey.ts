import type {Transition} from './NFA';

export const ANYTHING = 'Anything';
export const ATOM = 'Atom';
export const EPSILON = 'Epsilon';
export const RANGE = 'Range';

/**
 * Turns a `transition` into a key suitable for use in a `Map` or object.
 *
 * In an ideal world, we would have referentially transparent Transition
 * records that we could use directly as keys. Maybe we can do
 * that once JS (and TS) actually gets actual record types. See:
 * https://github.com/tc39/proposal-record-tuple
 */
export default function transitionToKey(transition: Transition): string {
  if (transition === null) {
    return EPSILON;
  } else if (transition.kind === 'Anything') {
    return ANYTHING;
  } else if (transition.kind === 'Atom') {
    return `${ATOM}:${transition.value}`;
  } else {
    return `${RANGE}:${transition.from}-${transition.to}`;
  }
}
