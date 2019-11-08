import utf8 from './utf8';

/**
 * Skein 512-512 (v1.3) algorithm.
 *
 * Based on public domain sample code at:
 *
 * @see http://www.h2database.com/skein/
 *
 * For full description:
 *
 * @see http://www.skein-hash.info/sites/default/files/skein1.3.pdf
 */
export default function skein(text: string | Array<number>): string {
  const message = typeof text === 'string' ? Array.from(utf8(text)) : text;

  /**
   * Skein is defined in terms of 64-bit numbers, which we represent in JS as
   * tuples containing a high-order and low-order word, each of 32 bits.
   *
   * Section 3.3 "A Full Specification of Threefish" and
   * Section 3.4 "A Full Specification of UBI"
   *
   * Tweak `T` is a string of 16 bytes (128 bits), represented here by two
   * 64-bit tuples:
   *
   * - Bits 0-95: Position (bytes in input processed so far).
   * - Bits 96-111: Reserved (set to 0).
   * - Bits 112-118: Tree level (set to 0).
   * - Bit 119: Bit pad (used for non-integral inputs; set to 0).
   * - Bits 120-125: Type (see Section 3.5.1; start with 4, "configuration block").
   * - Bit 126: Set when processing first block.
   * - Bit 127: Set when processing last block.
   *
   * Note that the position count always includes the "current" (ie. pending)
   * block's contents: that is, the block that will be processed in the next
   * `block()` call.
   */
  let tweak: Array<[number, number]> = [
    [0, 32], // Bytes processed so far; will be 32-bytes (configuration string).
    // prettier-ignore
    [
      (
        0x80 + // Last = 1.
        0x40 + // First = 1.
        0x4 // Type = 4 (Configuration block).
      ) << 24,
      0
    ],
  ];

  const c: Array<[number, number]> = [];

  // Section 3.5.2 "The Configuration String"
  //
  // 32 bytes in all:
  //
  // - Bytes 0-3 (4 bytes): Schema identifier ("SHA3")
  // - Bytes 4-5 (2 bytes): Version number (0x01).
  // - Bytes 6-7 (2 bytes): Reserved (set to 0).
  // - Bytes 8-15 (8 bytes): `N0` Output length in bits.
  // - Byte 16 (1 byte): `Yl`, Tree leaf size encoding (0 because not used).
  // - Byte 17 (1 byte): `Yf`, Tree fan-out encoding (0 because not used).
  // - Byte 18 (1 byte): `Ym`, Maximum tree height (0 because not used).
  // - Bytes 19-32 (13 bytes): Reserved (set to 0).
  //
  const buffer = Array.from(
    // prettier-ignore
    utf8(
      'SHA3' + // 4-byte schema identifier.
      '\x01\x00' + // 2-byte version (1), in little-endian order.
      '\x00\x00' + // 2 reserved bytes.
      '\x00\x02' // Output length (512 bits), again in little-endian order.
    ),
  );

  let position = 0;

  block(c, tweak, buffer, position);

  tweak = [
    [0, 0],
    // prettier-ignore
    [
      (
        0x40 + // First = 1.
        0x30 // Type = 48 (Message).
      ) << 24,
      0
    ],
  ];

  let length = message.length;

  for (; length > 64; length -= 64, position += 64) {
    tweak[0][1] += 64; // Bytes processed so far (including pending block).
    block(c, tweak, message, position);
    tweak[1][0] = 0x30 << 24; // Type = 48 (Message); First/Last both 0 now.
  }

  tweak[0][1] += length; // Increase bytes processed so far.
  tweak[1][0] |= 0x80 << 24; // Last = 1, First = preserved.

  block(c, tweak, message, position);

  tweak[0][1] = 8; // Bytes processed so far (including pending block).
  tweak[1][0] =
    // prettier-ignore
    (
      0x80 + // Last = 1.
      0x40 + // First = 1.
      0x3f // Type = 63 (Output).
    ) << 24;

  block(c, tweak, [], 0);

  const hash = [];

  for (let i = 0; i < 64; i++) {
    const b = shiftRight(c[i >> 3], (i & 7) * 8)[1] & 255;

    hash.push((256 + b).toString(16).substring(1));
  }

  return hash.join('');
}

function rotateLeft(x: [number, number], n: number): [number, number] {
  return xor(shiftLeft(x, n), shiftRight(x, 64 - n));
}

function shiftLeft(
  x: [number, number] | undefined,
  n: number,
): [number, number] {
  if (x === undefined) {
    return [0, 0];
  }

  if (n > 32) {
    return [x[1] << (n - 32), 0];
  }

  if (n === 32) {
    return [x[1], 0];
  }

  if (n === 0) {
    return x;
  }

  return [(x[0] << n) | (x[1] >>> (32 - n)), x[1] << n];
}

function shiftRight(
  x: [number, number] | undefined,
  n: number,
): [number, number] {
  if (x === undefined) {
    return [0, 0];
  }

  if (n > 32) {
    return [0, x[0] >>> (n - 32)];
  }

  if (n === 32) {
    return [0, x[0]];
  }

  if (n === 0) {
    return x;
  }

  return [x[0] >>> n, (x[0] << (32 - n)) | (x[1] >>> n)];
}

function add(
  x: [number, number],
  y: [number, number] | undefined,
): [number, number] {
  if (y === undefined) {
    return x;
  }

  let lsw = (x[1] & 0xffff) + (y[1] & 0xffff);
  let msw = (x[1] >>> 16) + (y[1] >>> 16) + (lsw >>> 16);
  const lowOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

  lsw = (x[0] & 0xffff) + (y[0] & 0xffff) + (msw >>> 16);
  msw = (x[0] >>> 16) + (y[0] >>> 16) + (lsw >>> 16);
  const highOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);

  return [highOrder, lowOrder];
}
function xor(
  a: [number, number],
  b: [number, number] | undefined,
): [number, number] {
  if (b === undefined) {
    return a;
  }

  return [a[0] ^ b[0], a[1] ^ b[1]];
}

function block(
  c: Array<[number, number]>,
  tweak: Array<[number, number]>,
  b: Array<number>,
  offset: number,
) {
  // Section 3.3.1 "MIX functions" (see Table 4).
  //
  // `R` defines rotation constants used to rotate-left.
  //
  // prettier-ignore
  const R = [
    46, 36, 19, 37, 33, 42, 14, 27, 17, 49, 36, 39, 44, 56, 54, 9, 39,
    30, 34, 24, 13, 17, 10, 50, 25, 29, 39, 43, 8, 22, 56, 35,
  ];

  const x = [];

  const t: Array<[number, number]> = [];

  // Section 3.3.2 "The Key Schedule".
  c[8] = [0x1bd11bda, 0xa9fc1a22];

  for (let i = 0; i < 8; i++) {
    for (let j = 7, k = offset + i * 8 + 7; j >= 0; j--, k--) {
      t[i] = shiftLeft(t[i], 8);
      t[i][1] |= b[k] & 255;
    }

    x[i] = add(t[i], c[i]);
    c[8] = xor(c[8], c[i]);
  }

  x[5] = add(x[5], tweak[0]);
  x[6] = add(x[6], tweak[1]);

  tweak[2] = xor(tweak[0], tweak[1]);

  for (let round = 1; round <= 18; round++) {
    const p = 16 - ((round & 1) << 4);
    for (let i = 0; i < 16; i++) {
      // m: 0, 2, 4, 6, 2, 0, 6, 4, 4, 6, 0, 2, 6, 4, 2, 0
      const m = 2 * ((i + (1 + i + i) * (i >> 2)) & 3);
      const n = (1 + i + i) & 7;
      const r = R[p + i];

      // Section 3.3.1 "MIX function".
      x[m] = add(x[m], x[n]);
      x[n] = rotateLeft(x[n], r);
      x[n] = xor(x[n], x[m]);
    }

    for (let i = 0; i < 8; i++) {
      x[i] = add(x[i], c[(round + i) % 9]);
    }

    x[5] = add(x[5], tweak[round % 3]);
    x[6] = add(x[6], tweak[(round + 1) % 3]);
    x[7] = add(x[7], [0, round]);
  }

  for (let i = 0; i < 8; i++) {
    c[i] = xor(t[i], x[i]);
  }
}
