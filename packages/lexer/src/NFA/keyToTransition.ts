import {ANYTHING, ATOM, EPSILON, RANGE} from './transitionToKey';

import type {Transition} from './NFA';

/**
 * Turns a "transition key" string back into a `Transition` value.
 *
 * See `transitionToKey()` for the inverse operation.
 */
export default function keyToTransition(transitionKey: string): Transition {
  if (transitionKey === EPSILON) {
    return null;
  } else if (transitionKey === ANYTHING) {
    return {kind: 'Anything'};
  } else if (transitionKey.startsWith(`${ATOM}:`)) {
    const value = transitionKey.slice(`${ATOM}:`.length);
    if (value.length !== 1) {
      throw new Error(
        `keyToTransition(): Expected Atom value length to be 1, was ${value.length}`,
      );
    }
    return {kind: 'Atom', value};
  } else if (transitionKey.startsWith(`${RANGE}:`)) {
    const value = transitionKey.slice(`${RANGE}:`.length);
    if (value.length !== 3) {
      throw new Error(
        `keyToTransition(): Expected Range value length to be 3, was ${value.length}`,
      );
    }
    if (value[1] !== '-') {
      throw new Error('keyToTransition(): Unexpected Range value format');
    }
    return {kind: 'Range', from: value[0], to: value[2]};
  } else {
    throw new Error(`keyToTransition(): Unexpected kind`);
  }
}
