import {describe, expect, it} from 'bun:test';

import RegExpParser from '../RegExpParser';
import normalizeCharacterClass from '../normalizeCharacterClass';

import type {CharacterClass, Node} from '../RegExpParser';

describe('normalizeCharacterClass()', () => {
  it('does nothing to an already normalized class', () => {
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'A'}, {kind: 'Atom', value: 'J'}, {
          kind: 'Atom',
          value: 'Q',
        }],
        negated: false,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: 'A'}, {kind: 'Atom', value: 'J'}, {
        kind: 'Atom',
        value: 'Q',
      }],
      negated: false,
    });
  });

  it('removes duplicates', () => {
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [
          {kind: 'Atom', value: 'A'},
          {kind: 'Atom', value: 'J'},
          {kind: 'Atom', value: 'Q'},
          {kind: 'Atom', value: 'J'},
          {kind: 'Atom', value: 'Q'},
        ],
        negated: false,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: 'A'}, {kind: 'Atom', value: 'J'}, {
        kind: 'Atom',
        value: 'Q',
      }],
      negated: false,
    });
  });

  it('sorts members', () => {
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'J'}, {kind: 'Atom', value: 'Q'}, {
          kind: 'Atom',
          value: 'A',
        }],
        negated: false,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: 'A'}, {kind: 'Atom', value: 'J'}, {
        kind: 'Atom',
        value: 'Q',
      }],
      negated: false,
    });
  });

  it('forms ranges for adjacent atoms', () => {
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'x'}, {kind: 'Atom', value: 'y'}, {
          kind: 'Atom',
          value: 'z',
        }],
        negated: false,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: 'x', to: 'z'}],
      negated: false,
    });
  });

  it('inverts a negated class containing a range', () => {
    // A range in "the middle".
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Range', from: 'H', to: 'P'}],
        negated: true,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: '\u0000', to: 'G'}, {
        kind: 'Range',
        from: 'Q',
        to: '\uffff',
      }],
      negated: false,
    });

    // Edge-case starting at \u0000.
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Range', from: '\u0000', to: 'P'}],
        negated: true,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: 'Q', to: '\uffff'}],
      negated: false,
    });

    // Edge-case ending at \uffff.
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Range', from: 'P', to: '\uffff'}],
        negated: true,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: '\u0000', to: 'O'}],
      negated: false,
    });
  });

  it('inverts a negated class containing two non-adjacent atoms', () => {
    expect(
      normalizeCharacterClass({
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'H'}, {kind: 'Atom', value: 'P'}],
        negated: true,
      }),
    ).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: '\u0000', to: 'G'}, {
        kind: 'Range',
        from: 'I',
        to: 'O',
      }, {kind: 'Range', from: 'Q', to: '\uffff'}],
      negated: false,
    });
  });

  function assertCharacterClass(node: Node): asserts node is CharacterClass {
    if (node.kind !== 'CharacterClass') {
      throw new Error('Needed CharacterClass');
    }
  }

  it('inverts nested negated classes (eg. \\D)', () => {
    const characterClass = new RegExpParser(/\D/).parse();
    assertCharacterClass(characterClass);
    expect(normalizeCharacterClass(characterClass)).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: '\u0000', to: '/'}, {
        kind: 'Range',
        from: ':',
        to: '\uffff',
      }],
      negated: false,
    });
  });
});
