import type {Transition} from './NFA';

export default function equalTransitions(
  a: Transition,
  b: Transition,
): boolean {
  if (a === b) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.kind === 'Atom' && b.kind === 'Atom') {
    return a.value === b.value;
  }
  if (a.kind === 'Range' && b.kind === 'Range') {
    return a.from === b.from && a.to === b.to;
  }
  if (a.kind === 'Anything' && b.kind === 'Anything') {
    return true;
  }
  return false;
  // TODO: later on am going to need something more sophisticated in order to
  // detect overlaps (eg. "." overlaps with "a-z" etc)
}
