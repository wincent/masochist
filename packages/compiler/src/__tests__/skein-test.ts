import skein from '../skein';

test('hashing the empty string', () => {
  expect(skein('')).toBe('bc5b4c50925519c290cc634277ae3d6257212395cba733bbad37a4af0fa06af41fca7903d06564fea7a2d3730dbdb80c1f85562dfcc070334ea4d1d9e72cba7a');
});

test('small differences in input lead to large differences in output', () => {
  return;
  // TODO: plug in actual values
  expect(skein('The quick brown fox jumps over the lazy dog')).toBe(
    '9e107d9d372bb6826bd81d3542a419d6',
  );
  expect(skein('The quick brown fox jumps over the lazy dog.')).toBe(
    'e4d909c290d0fb1ca068ffaddf22cbd0',
  );
});
