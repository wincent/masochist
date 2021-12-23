import sortAtoms from './sortAtoms';

import type {Atom, CharacterClass} from './RegExpParser';

/**
 * Normalizes a character class.
 *
 * - A `negated: true` class is turned into a `negated: false` equivalent.
 * - Duplicate atoms are removed.
 * - Contiguous atoms are expressed as ranges.
 */
export default function normalizeCharacterClass(
  characterClass: CharacterClass,
): CharacterClass {
  // Step 1. Expand ranges.
  let atoms: Array<Atom> = characterClass.children.flatMap((child) => {
    if (child.kind === 'Atom') {
      return [child];
    } else {
      const start = child.from.charCodeAt(0);
      const finish = child.to.charCodeAt(0);
      const atoms: Array<Atom> = [];
      for (let i = start; i <= finish; i++) {
        atoms.push({kind: 'Atom', value: String.fromCharCode(i)});
      }
      return atoms;
    }
  });

  // Step 2. Sort atoms.
  sortAtoms(atoms);

  // Step 3. Remove duplicates.
  for (let i = atoms.length - 1; i >= 0; i--) {
    if (i - 1 >= 0 && atoms[i - 1].value === atoms[i].value) {
      atoms.splice(i, 1);
    }
  }

  // Step 4. If negated, produce inversion; otherwise, collapse atoms to ranges.
  const children: Array<Atom | Range> = [];
  if (characterClass.negated) {
    let previous = 0x0000;
    for (const atom of atoms) {
      const current = atom.value.charCodeAt(0);
      if (previous === current - 1) {
        children.push({kind: 'Atom', value: String.fromCharCode(previous)});
      } else if (previous < current) {
        children.push({
          kind: 'Range',
          from: String.fromCharCode(previous),
          to: String.fromCharCode(current - 1),
        });
      }
      previous = current + 1;
    }
    if (previous < 0xfffe) {
      children.push({
        kind: 'Range',
        from: String.fromCharCode(previous),
        to: '\uffff',
      });
    } else if (previous === 0xfffe) {
      children.push({kind: 'Atom', value: '\uffff'});
    }
  } else {
    let from: number | null = null;
    let previous: number | null = null;
    for (const atom of atoms) {
      const current = atom.value.charCodeAt(0);
      if (from === null) {
        from = current;
        previous = current;
      } else if (previous !== null && current === previous + 1) {
        // Extend range.
        previous = current;
      } else if (previous !== null) {
        if (from === previous) {
          children.push({kind: 'Atom', value: String.fromCharCode(previous)});
        } else {
          children.push({
            kind: 'Range',
            from: String.fromCharCode(from),
            to: String.fromCharCode(previous),
          });
        }
        from = current;
        previous = current;
      }
    }
    if (from !== null && previous !== null) {
      if (from === previous) {
        children.push({kind: 'Atom', value: String.fromCharCode(previous)});
      } else {
        children.push({
          kind: 'Range',
          from: String.fromCharCode(from),
          to: String.fromCharCode(previous),
        });
      }
    }
  }
  return {
    kind: 'CharacterClass',
    children,
    negated: false,
  };
}
