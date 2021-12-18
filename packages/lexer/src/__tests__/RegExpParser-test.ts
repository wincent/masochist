import RegExpParser from '../RegExpParser';

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

  it('parses alternates', () => {
    expect(new RegExpParser(/a|b/).parse()).toEqual({
      kind: 'Alternate',
      children: [
        {
          kind: 'Atom',
          value: 'a',
        },
        {
          kind: 'Atom',
          value: 'b',
        },
      ],
    });

    expect(new RegExpParser(/foo|bar/).parse()).toEqual({
      kind: 'Alternate',
      children: [
        {
          kind: 'Sequence',
          children: [
            {kind: 'Atom', value: 'f'},
            {kind: 'Atom', value: 'o'},
            {kind: 'Atom', value: 'o'},
          ],
        },
        {
          kind: 'Sequence',
          children: [
            {kind: 'Atom', value: 'b'},
            {kind: 'Atom', value: 'a'},
            {kind: 'Atom', value: 'r'},
          ],
        },
      ],
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
        children: [
          {kind: 'Atom', value: 'f'},
          {kind: 'Atom', value: 'o'},
          {kind: 'Atom', value: 'o'},
        ],
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
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'j'},
        {kind: 'Atom', value: 'z'},
      ],
    });
  });

  it('parses a character class containing a range', () => {
    expect(new RegExpParser(/[adft-z]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'd'},
        {kind: 'Atom', value: 'f'},
        {kind: 'Range', from: 't', to: 'z'},
      ],
    });
  });

  it('treats "." as a literal "." when inside a character class', () => {
    expect(new RegExpParser(/[a1.]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '1'},
        {kind: 'Atom', value: '.'},
      ],
    });
  });

  it('treats "-" as a literal "-" at the start of a character class', () => {
    expect(new RegExpParser(/[-a5]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: '-'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '5'},
      ],
    });
  });

  it('treats "-" as a literal "-" at the end of a character class', () => {
    expect(new RegExpParser(/[a5-]/).parse()).toEqual({
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: '5'},
        {kind: 'Atom', value: '-'},
      ],
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
});
// TODO: tests to show simplification eg. ((((((a))))))) = a
// also (a) = a
// and [a] = a
// TODO: tests that show "i" flag is correctly handled
