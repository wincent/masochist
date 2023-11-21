import {describe, expect, it} from 'bun:test';

import RegExpParser from '../RegExpParser';

import type {Node} from '../RegExpParser';

describe('RegExpParser', () => {
  it('parses a single atom', () => {
    expect(new RegExpParser(/a/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses a sequence of atoms', () => {
    expect(new RegExpParser(/foobar/).parse()).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('parses a sequence with the "i" flag', () => {
    expect(new RegExpParser(/abc/i).parse()).toEqual({
      kind: 'Sequence',
      children: [{
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'A'}, {kind: 'Atom', value: 'a'}],
        negated: false,
      }, {
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'B'}, {kind: 'Atom', value: 'b'}],
        negated: false,
      }, {
        kind: 'CharacterClass',
        children: [{kind: 'Atom', value: 'C'}, {kind: 'Atom', value: 'c'}],
        negated: false,
      }],
    });
  });

  it('parses a character class with the "i" flag', () => {
    const expected: Node = {
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: 'A', to: 'Z'}, {
        kind: 'Range',
        from: 'a',
        to: 'z',
      }],
      negated: false,
    };

    // Note how many different ways of writing a RegExp produce the same
    // result.
    expect(new RegExpParser(/[A-Z]/i).parse()).toEqual(expected);
    expect(new RegExpParser(/[a-z]/i).parse()).toEqual(expected);
    expect(new RegExpParser(/[A-Za-z]/i).parse()).toEqual(expected);
    expect(new RegExpParser(/[a-zA-Z]/i).parse()).toEqual(expected);
    expect(new RegExpParser(/[A-Za-z]/).parse()).toEqual(expected);
    expect(new RegExpParser(/[a-zA-Z]/).parse()).toEqual(expected);
  });

  it('parses alternates', () => {
    expect(new RegExpParser(/a|b/).parse()).toEqual({
      kind: 'Alternate',
      children: [{
        kind: 'Atom',
        value: 'a',
      }, {
        kind: 'Atom',
        value: 'b',
      }],
    });

    expect(new RegExpParser(/foo|bar/).parse()).toEqual({
      kind: 'Alternate',
      children: [{
        kind: 'Sequence',
        children: [{kind: 'Atom', value: 'f'}, {kind: 'Atom', value: 'o'}, {
          kind: 'Atom',
          value: 'o',
        }],
      }, {
        kind: 'Sequence',
        children: [{kind: 'Atom', value: 'b'}, {kind: 'Atom', value: 'a'}, {
          kind: 'Atom',
          value: 'r',
        }],
      }],
    });
  });

  it('parses a simple group', () => {
    expect(new RegExpParser(/(a)/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses a group containing a sequence of atoms', () => {
    expect(new RegExpParser(/(foobar)/).parse()).toEqual({
      kind: 'Sequence',
      children: [
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('parses a group with repetition', () => {
    expect(new RegExpParser(/(foo)+/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 1,
      maximum: Infinity,
      child: {
        kind: 'Sequence',
        children: [{kind: 'Atom', value: 'f'}, {kind: 'Atom', value: 'o'}, {
          kind: 'Atom',
          value: 'o',
        }],
      },
    });
  });

  it('simplifies nested groups', () => {
    expect(new RegExpParser(/((a))/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
    expect(new RegExpParser(/((((((a))))))/).parse()).toEqual({
      kind: 'Atom',
      value: 'a',
    });
  });

  it('parses "."', () => {
    expect(new RegExpParser(/./).parse()).toEqual({
      kind: 'Anything',
    });
  });

  it('parses ".+"', () => {
    expect(new RegExpParser(/.+/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 1,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".*"', () => {
    expect(new RegExpParser(/.*/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 0,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".?"', () => {
    expect(new RegExpParser(/.?/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 0,
      maximum: 1,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{3}"', () => {
    expect(new RegExpParser(/.{3}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 3,
      maximum: 3,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{2,}"', () => {
    expect(new RegExpParser(/.{2,}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 2,
      maximum: Infinity,
      child: {kind: 'Anything'},
    });
  });

  it('parses ".{2,7}"', () => {
    expect(new RegExpParser(/.{2,7}/).parse()).toEqual({
      kind: 'Repeat',
      minimum: 2,
      maximum: 7,
      child: {kind: 'Anything'},
    });
  });

  it('parses "\\w"', () => {
    expect(new RegExpParser(/\w/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: 'A', to: 'Z'},
        {kind: 'Range', from: 'a', to: 'z'},
        {kind: 'Range', from: '0', to: '9'},
        {kind: 'Atom', value: '_'},
      ],
      negated: false,
    });
  });

  it('parses "\\W"', () => {
    expect(new RegExpParser(/\W/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: 'A', to: 'Z'},
        {kind: 'Range', from: 'a', to: 'z'},
        {kind: 'Range', from: '0', to: '9'},
        {kind: 'Atom', value: '_'},
      ],
      negated: true,
    });
  });

  it('parses "\\n"', () => {
    expect(new RegExpParser(/\n/).parse()).toEqual({
      kind: 'Atom',
      value: '\n',
    });
  });

  it('parses "\\."', () => {
    expect(new RegExpParser(/\./).parse()).toEqual({
      kind: 'Atom',
      value: '.',
    });
  });

  it('parses a simple character class', () => {
    expect(new RegExpParser(/[ajz]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: 'a'}, {kind: 'Atom', value: 'j'}, {
        kind: 'Atom',
        value: 'z',
      }],
      negated: false,
    });
  });

  // TODO: probably want an optimizing function that instead expresses this
  // using negation; eg:
  //
  //  {
  //    kind: 'CharacterClass',
  //    children: [
  //      {kind: 'Atom', value: 'a'},
  //      {kind: 'Atom', value: 'j'},
  //      {kind: 'Atom', value: 'z'},
  //    ],
  //    negated: true,
  //  }
  //
  // if it is more economical to do so.
  it('parses a negated simple character class', () => {
    expect(new RegExpParser(/[^ajz]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        // {kind: 'Atom', value: 'a'},
        // {kind: 'Atom', value: 'j'},
        // {kind: 'Atom', value: 'z'},
        {kind: 'Range', from: '\u0000', to: '`'},
        {kind: 'Range', from: 'b', to: 'i'},
        {kind: 'Range', from: 'k', to: 'y'},
        {kind: 'Range', from: '{', to: '\uffff'},
      ],
      negated: false,
    });
  });

  it('parses a character class containing a range', () => {
    expect(new RegExpParser(/[adft-z]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: 'a'}, {kind: 'Atom', value: 'd'}, {
        kind: 'Atom',
        value: 'f',
      }, {kind: 'Range', from: 't', to: 'z'}],
      negated: false,
    });
  });

  it('parses a negated character class containing a range', () => {
    expect(new RegExpParser(/[^adft-z]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: '\u0000', to: '`'},
        {kind: 'Range', from: 'b', to: 'c'},
        {kind: 'Atom', value: 'e'},
        {kind: 'Range', from: 'g', to: 's'},
        {kind: 'Range', from: '{', to: '\uffff'},
      ],
      negated: false,
    });
  });

  it('treats "^" as a literal "^" when not the first thing in a character class', () => {
    expect(new RegExpParser(/[a^1]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '1'}, {kind: 'Atom', value: '^'}, {
        kind: 'Atom',
        value: 'a',
      }],
      negated: false,
    });
  });

  it('treats "." as a literal "." when inside a character class', () => {
    expect(new RegExpParser(/[a1.]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '.'}, {kind: 'Atom', value: '1'}, {
        kind: 'Atom',
        value: 'a',
      }],
      negated: false,
    });
  });

  it('treats "-" as a literal "-" at the start of a character class', () => {
    expect(new RegExpParser(/[-a5]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '-'}, {kind: 'Atom', value: '5'}, {
        kind: 'Atom',
        value: 'a',
      }],
      negated: false,
    });
  });

  it('treats "-" as a literal "-" at the end of a character class', () => {
    expect(new RegExpParser(/[a5-]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '-'}, {kind: 'Atom', value: '5'}, {
        kind: 'Atom',
        value: 'a',
      }],
      negated: false,
    });
  });

  it('simplifies a character class containing only one atom', () => {
    expect(new RegExpParser(/[x]/).parse()).toEqual({
      kind: 'Atom',
      value: 'x',
    });
  });

  it('simplifies a character class containing only one range', () => {
    expect(new RegExpParser(/[d-m]/).parse()).toEqual({
      kind: 'Range',
      from: 'd',
      to: 'm',
    });
  });

  it('simplifies a character class with a range containing one atom', () => {
    expect(new RegExpParser(/[b-b]/).parse()).toEqual({
      kind: 'Atom',
      value: 'b',
    });
  });

  it('parses a range with the "i" flag', () => {
    expect(new RegExpParser(/[X-c]/i).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: 'A', to: 'C'}, {
        kind: 'Range',
        from: 'X',
        to: 'c',
      }, {kind: 'Range', from: 'x', to: 'z'}],
      negated: false,
    });
  });

  it('parses an atom followed by "+"', () => {
    expect(new RegExpParser(/foo+/).parse()).toEqual({
      kind: 'Sequence',
      children: [{kind: 'Atom', value: 'f'}, {kind: 'Atom', value: 'o'}, {
        kind: 'Repeat',
        minimum: 1,
        maximum: Infinity,
        child: {kind: 'Atom', value: 'o'},
      }],
    });
  });

  it('complains if a "^" boundary assertion is used', () => {
    expect(() => new RegExpParser(/^foo/).parse()).toThrow(
      /boundary assertions are not supported/,
    );

    // Note that assertions are prohibited anywhere in the pattern.
    expect(() => new RegExpParser(/foo^bar/).parse()).toThrow(
      /boundary assertions are not supported/,
    );

    // But escaped versions are fine.
    expect(new RegExpParser(/\^foo/).parse()).toEqual({
      kind: 'Sequence',
      children: [{kind: 'Atom', value: '^'}, {kind: 'Atom', value: 'f'}, {
        kind: 'Atom',
        value: 'o',
      }, {kind: 'Atom', value: 'o'}],
    });

    // And it's ok inside character classes.
    expect(new RegExpParser(/[a^]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '^'}, {kind: 'Atom', value: 'a'}],
      negated: false,
    });
  });

  it('complains if a "$" boundary assertion is used', () => {
    expect(() => new RegExpParser(/foo$/).parse()).toThrow(
      /boundary assertions are not supported/,
    );

    // Note that assertions are prohibited anywhere in the pattern.
    expect(() => new RegExpParser(/foo$bar/).parse()).toThrow(
      /boundary assertions are not supported/,
    );

    // But escaped versions are fine.
    expect(new RegExpParser(/foo\$/).parse()).toEqual({
      kind: 'Sequence',
      children: [{kind: 'Atom', value: 'f'}, {kind: 'Atom', value: 'o'}, {
        kind: 'Atom',
        value: 'o',
      }, {kind: 'Atom', value: '$'}],
    });

    // And it's ok inside character classes.
    expect(new RegExpParser(/[$abc]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [{kind: 'Atom', value: '$'}, {
        kind: 'Range',
        from: 'a',
        to: 'c',
      }],
      negated: false,
    });
  });

  describe('regression tests', () => {
    it('handles Unicode escapes inside ranges inside character classes', () => {
      expect(new RegExpParser(/[\u0020-\uffff]/).parse()).toEqual({
        kind: 'Range',
        from: '\u0020',
        to: '\uffff',
      });
    });
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/removeEpsilons.test.ts`.
});
