import utf8 from '../utf8';

/**
 * Helper to return the list of codepoints in an ASCII string
 */
function ascii(text: string) {
  const codePoints = [];

  for (let i = 0; i < text.length; i++) {
    const codePoint = text.codePointAt(i)!;

    if (codePoint > 0x7f) {
      throw new Error('ascii(): text is not ASCII');
    }

    codePoints.push(codePoint);
  }

  return codePoints;
}

test('converting an empty string', () => {
  expect(Array.from(utf8(''))).toEqual([]);
});

test('converting an ASCII string', () => {
  expect(Array.from(utf8('foo'))).toEqual(ascii('foo'));
});

test('converting a string which requires a two-byte encoding', () => {
  // Code points \u0080 through \u07ff.
  expect(Array.from(utf8('foo \u0128\u02ff bar'))).toEqual([
    ...ascii('foo '),
    // \u0128 (0b000100101000) -> 110xxxxx 10yyyyyy
    //            ^    ^
    //            xxxxxyyyyyy
    ...[0b11000100, 0b10101000],
    // \u02ff (0b000101111111) -> 110xxxxx 10yyyyyy
    //            ^    ^
    //            xxxxxyyyyyy
    ...[0b11001011, 0b10111111],
    ...ascii(' bar'),
  ]);
});

test('converting a string which requires a three-byte encoding', () => {
  // Code points \u0800 through \uffff.
  expect(Array.from(utf8('foo \u0fee\uface bar'))).toEqual([
    ...ascii('foo '),
    // \u0fee (0b0000111111101110) -> 1110xxxx 10yyyyyy 10zzzzzz
    //           ^   ^     ^
    //           xxxxyyyyyyzzzzzz
    ...[0b11100000, 0b10111111, 0b10101110],
    // \uface (0b1111101011001110) -> 1110xxxx 10yyyyyy 10zzzzzz
    //           ^   ^     ^
    //           xxxxyyyyyyzzzzzz
    ...[0b11101111, 0b10101011, 0b10001110],
    ...ascii(' bar'),
  ]);
});

test('converting a string which requires a three-byte encoding', () => {
  // Code points \u{10000} through \u{10ffff}.
  expect(Array.from(utf8('foo \u{10f00d}\u{10feef} bar'))).toEqual([
    ...ascii('foo '),
    // \u{10f00d} (0b100001111000000001101) -> 11110www 10xxxxxx 10yyyyyy 10zzzzzz
    //               ^  ^     ^     ^
    //               wwwxxxxxxyyyyyyzzzzzz
    ...[0b11110100, 0b10001111, 0b10000000, 0b10001101],
    // \u{10feef} (0b100001111111011101111) -> 11110www 10xxxxxx 10yyyyyy 10zzzzzz
    //               ^  ^     ^     ^
    //               wwwxxxxxxyyyyyyzzzzzz
    ...[0b11110100, 0b10001111, 0b10111011, 0b10101111],
    ...ascii(' bar'),
  ]);
});
