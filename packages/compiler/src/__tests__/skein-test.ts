import skein from '../skein';

test('hashing the empty string', () => {
  expect(skein('')).toBe(
    'bc5b4c50925519c290cc634277ae3d6257212395cba733bbad37a4af0fa06af41fca7903d06564fea7a2d3730dbdb80c1f85562dfcc070334ea4d1d9e72cba7a',
  );
});

test('small differences in input lead to large differences in output', () => {
  expect(skein('The quick brown fox jumps over the lazy dog')).toBe(
    '94c2ae036dba8783d0b3f7d6cc111ff810702f5c77707999be7e1c9486ff238a7044de734293147359b4ac7e1d09cd247c351d69826b78dcddd951f0ef912713',
  );
  expect(skein('The quick brown fox jumps over the lazy dog.')).toBe(
    '658223cb3d69b5e76e3588ca63feffba0dc2ead38a95d0650564f2a39da8e83fbb42c9d6ad9e03fbfde8a25a880357d457dbd6f74cbcb5e728979577dbce5436',
  );
});
