import type {Transition} from './NFA';

export const EPSILON = 0x03b5; // "GREEK SMALL LETTER EPSILON".

/**
 * Returns a human-readable representation of the `Transition` for debugging and
 * illustration purposes.
 */
export default function stringifyTransition(transition: Transition): string {
  if (transition === null) {
    return String.fromCodePoint(EPSILON);
  } else if (transition.kind === 'Anything') {
    return '.';
  } else if (transition.kind === 'Atom') {
    return `${transition.value}`;
  } else {
    return `${transition.from}-${transition.to}`;
  }
}
