import permute from '../permute';

describe('permute()', () => {
  it('permutes an empty array', () => {
    expect(permute([])).toEqual([[]]);
  });

  it('permutes a array of one item', () => {
    expect(permute(['foo'])).toEqual([['foo']]);
  });

  it('permutes a array of two items', () => {
    expect(permute(['a', 'b'])).toEqual([['a', 'b'], ['b', 'a']]);
  });

  it('permutes an array of 3 items', () => {
    expect(permute([1, 2, 3])).toEqual([
      [1, 2, 3],
      [2, 1, 3],
      [3, 1, 2],
      [1, 3, 2],
      [2, 3, 1],
      [3, 2, 1],
    ]);
  });
});
