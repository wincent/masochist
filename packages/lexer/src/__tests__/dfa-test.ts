import DFA from '../DFA';

describe('DFA()', () => {
  it('handles sequences', () => {
    expect(new DFA(/stuff/).table).toEqual([
      [['s', 1]],
      [['t', 2]],
      [['u', 3]],
      [['f', 4]],
      [['f', 5]],
    ]);
  });

  it('handles alternation', () => {
    expect(new DFA(/a|b|c|d|e/).table).toEqual([
      [
        ['a', 1],
        ['b', 1],
        ['c', 1],
        ['d', 1],
        ['e', 1],
      ],
    ]);
  });
});
