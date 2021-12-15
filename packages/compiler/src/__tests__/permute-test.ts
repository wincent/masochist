import permute from '../permute';

test('permute an empty array', () => {
  expect(permute([])).toEqual([[]]);
});

test('permute a array of one item', () => {
  expect(permute(['foo'])).toEqual([['foo']]);
});

test('permute a array of two items', () => {
  expect(permute(['a', 'b'])).toEqual([
    ['a', 'b'],
    ['b', 'a'],
  ]);
});

test('permute an array of 3 items', () => {
  expect(permute([1, 2, 3])).toEqual([
    [1, 2, 3],
    [2, 1, 3],
    [3, 1, 2],
    [1, 3, 2],
    [2, 3, 1],
    [3, 2, 1],
  ]);
});
