import type {Atom} from './RegExpParser';

/**
 * Sorts the supplied array of `atoms` by `value`.
 */
export default function sortAtoms(atoms: Array<Atom>): Array<Atom> {
  return atoms.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    } else if (a.value < b.value) {
      return -1;
    } else {
      return 0;
    }
  });
}
