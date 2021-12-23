import DFA from '../DFA';

describe('DFA()', () => {
  it('handles sequences', () => {
    expect(new DFA(/stuff/).table).toEqual([
      [[{kind: 'Atom', value: 's'}, 1]],
      [[{kind: 'Atom', value: 't'}, 2]],
      [[{kind: 'Atom', value: 'u'}, 3]],
      [[{kind: 'Atom', value: 'f'}, 4]],
      [[{kind: 'Atom', value: 'f'}, 5]],
      [], // Final (accept) state.
    ]);
  });

  it('handles alternation', () => {
    expect(new DFA(/a|b|c|d|e/).table).toEqual([
      [
        [{kind: 'Atom', value: 'a'}, 1],
        [{kind: 'Atom', value: 'b'}, 1],
        [{kind: 'Atom', value: 'c'}, 1],
        [{kind: 'Atom', value: 'd'}, 1],
        [{kind: 'Atom', value: 'e'}, 1],
      ],
      [], // Final (accept) state.
    ]);
  });

  it('handles a NAME-ish pattern like /[_a-z][_a-zd]*/i', () => {
    expect(new DFA(/[_a-z][_a-z\d]*/i).table).toEqual([
      [
        [{kind: 'Range', from: 'A', to: 'Z'}, 1],
        [{kind: 'Atom', value: '_'}, 1],
        [{kind: 'Range', from: 'a', to: 'z'}, 1],
      ],
      [
        // BUG: next state here should be 1, not 2
        [{kind: 'Range', from: '0', to: '9'}, 2],
        [{kind: 'Range', from: 'A', to: 'Z'}, 2],
        [{kind: 'Atom', value: '_'}, 2],
        [{kind: 'Range', from: 'a', to: 'z'}, 2],
      ],
      [], // Final (accept) state.
    ]);
  });
});
