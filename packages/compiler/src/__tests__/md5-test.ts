import md5 from '../md5';

test('hashing the empty string', () => {
  expect(md5('')).toBe('d41d8cd98f00b204e9800998ecf8427e');
});

test('small differences in input lead to large differences in output', () => {
  expect(md5('The quick brown fox jumps over the lazy dog')).toBe(
    '9e107d9d372bb6826bd81d3542a419d6',
  );
  expect(md5('The quick brown fox jumps over the lazy dog.')).toBe(
    'e4d909c290d0fb1ca068ffaddf22cbd0',
  );
});
