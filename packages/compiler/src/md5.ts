const S11 = 7;
const S12 = 12;
const S13 = 17;
const S14 = 22;
const S21 = 5;
const S22 = 9;
const S23 = 14;
const S24 = 20;
const S31 = 4;
const S32 = 11;
const S33 = 16;
const S34 = 23;
const S41 = 6;
const S42 = 10;
const S43 = 15;
const S44 = 21;

/**
 * For "i" in 1 through 64, the entries in this table are "[t]he integer
 * part of 4294967296 times abs(sin(i)), where i is in radians".
 */
const T = [
  0xd76aa478,
  0xe8c7b756,
  0x242070db,
  0xc1bdceee,
  0xf57c0faf,
  0x4787c62a,
  0xa8304613,
  0xfd469501,
  0x698098d8,
  0x8b44f7af,
  0xffff5bb1,
  0x895cd7be,
  0x6b901122,
  0xfd987193,
  0xa679438e,
  0x49b40821,
  0xf61e2562,
  0xc040b340,
  0x265e5a51,
  0xe9b6c7aa,
  0xd62f105d,
  0x02441453,
  0xd8a1e681,
  0xe7d3fbc8,
  0x21e1cde6,
  0xc33707d6,
  0xf4d50d87,
  0x455a14ed,
  0xa9e3e905,
  0xfcefa3f8,
  0x676f02d9,
  0x8d2a4c8a,
  0xfffa3942,
  0x8771f681,
  0x6d9d6122,
  0xfde5380c,
  0xa4beea44,
  0x4bdecfa9,
  0xf6bb4b60,
  0xbebfbc70,
  0x289b7ec6,
  0xeaa127fa,
  0xd4ef3085,
  0x04881d05,
  0xd9d4d039,
  0xe6db99e5,
  0x1fa27cf8,
  0xc4ac5665,
  0xf4292244,
  0x432aff97,
  0xab9423a7,
  0xfc93a039,
  0x655b59c3,
  0x8f0ccc92,
  0xffeff47d,
  0x85845dd1,
  0x6fa87e4f,
  0xfe2ce6e0,
  0xa3014314,
  0x4e0811a1,
  0xf7537e82,
  0xbd3af235,
  0x2ad7d2bb,
  0xeb86d391,
];

/**
 * @see https://www.ietf.org/rfc/rfc1321.txt
 */
export default function md5(text: string): string {
  // Scan string to figure out UTF-8-encoded length.
  let bits = 0;

  for (let i = 0; i < text.length; i++) {
    const code = text.codePointAt(i)!;

    if (code <= 0x007f) {
      bits += 8;
    } else if (code <= 0x07ff) {
      bits += 16;
    } else if (code <= 0xffff) {
      bits += 24;
    } else if (code <= 0x10ffff) {
      bits += 32;
    }
  }

  // Allocate additional room for padding + 64-bit size value.
  const padding = 512 - ((bits + 8 + 64) % 512);

  // Convert to UTF-8 byte array.
  const x = new Uint8Array((bits + padding) / 8);

  for (let source = 0, destination = 0; source < text.length; source++) {
    const code = text.codePointAt(source)!;

    if (code <= 0x007f) {
      x[destination++] = code;
    } else if (code <= 0x07ff) {
      x[destination++] = (code >> 6) | 0xc0;
      x[destination++] = (code & 0x3f) | 0x80;
    } else if (code <= 0xffff) {
      x[destination++] = (code >> 12) | 0xe0;
      x[destination++] = ((code >> 6) & 0x3f) | 0x80;
      x[destination++] = (code & 0x3f) | 0x80;
    } else if (code <= 0x10ffff) {
      x[destination++] = (code >> 18) | 0xf0;
      x[destination++] = ((code >> 12) & 0x3f) | 0x80;
      x[destination++] = ((code >> 6) & 0x3f) | 0x80;
      x[destination++] = (code & 0x3f) | 0x80;
    }
  }

  // Add padding (initial 1-bit).
  x[bits / 8] = 0x80;

  // Add padding (0-bits).
  for (let i = bits / 8 + 1; i < (bits + padding - 64) / 8; i++) {
    x[i] = 0;
  }

  // Add size (technically 64 bits but assume less than 32 bits).
  x[bits + padding - 8] = 0;
  x[bits + padding - 7] = 0;
  x[bits + padding - 6] = 0;
  x[bits + padding - 5] = 0;
  x[bits + padding - 4] = bits & 0xff;
  x[bits + padding - 3] = (bits & 0xff00) >> 8;
  x[bits + padding - 2] = (bits & 0xff0000) >> 16;
  x[bits + padding - 1] = (bits & 0xff000000) >> 24;

  let a = 0x67452301;
  let b = 0xefcdab89;
  let c = 0x98badcfe;
  let d = 0x10325476;

  for (let i = 0; i < x.length; i += 16) {
    let initialA = a;
    let initialB = b;
    let initialC = c;
    let initialD = d;

    // Round 1.
    a = FF(a, b, c, d, x[i + 0], S11, T[1]);
    d = FF(d, a, b, c, x[i + 1], S12, T[2]);
    c = FF(c, d, a, b, x[i + 2], S13, T[3]);
    b = FF(b, c, d, a, x[i + 3], S14, T[4]);
    a = FF(a, b, c, d, x[i + 4], S11, T[5]);
    d = FF(d, a, b, c, x[i + 5], S12, T[6]);
    c = FF(c, d, a, b, x[i + 6], S13, T[7]);
    b = FF(b, c, d, a, x[i + 7], S14, T[8]);
    a = FF(a, b, c, d, x[i + 8], S11, T[9]);
    d = FF(d, a, b, c, x[i + 9], S12, T[10]);
    c = FF(c, d, a, b, x[i + 10], S13, T[11]);
    b = FF(b, c, d, a, x[i + 11], S14, T[12]);
    a = FF(a, b, c, d, x[i + 12], S11, T[13]);
    d = FF(d, a, b, c, x[i + 13], S12, T[14]);
    c = FF(c, d, a, b, x[i + 14], S13, T[15]);
    b = FF(b, c, d, a, x[i + 15], S14, T[16]);

    // Round 2.
    a = GG(a, b, c, d, x[i + 1], S21, T[17]);
    d = GG(d, a, b, c, x[i + 6], S22, T[18]);
    c = GG(c, d, a, b, x[i + 11], S23, T[19]);
    b = GG(b, c, d, a, x[i + 0], S24, T[20]);
    a = GG(a, b, c, d, x[i + 5], S21, T[21]);
    d = GG(d, a, b, c, x[i + 10], S22, T[22]);
    c = GG(c, d, a, b, x[i + 15], S23, T[23]);
    b = GG(b, c, d, a, x[i + 4], S24, T[24]);
    a = GG(a, b, c, d, x[i + 9], S21, T[25]);
    d = GG(d, a, b, c, x[i + 14], S22, T[26]);
    c = GG(c, d, a, b, x[i + 3], S23, T[27]);
    b = GG(b, c, d, a, x[i + 8], S24, T[28]);
    a = GG(a, b, c, d, x[i + 13], S21, T[29]);
    d = GG(d, a, b, c, x[i + 2], S22, T[30]);
    c = GG(c, d, a, b, x[i + 7], S23, T[31]);
    b = GG(b, c, d, a, x[i + 12], S24, T[32]);

    // Round 3.
    a = HH(a, b, c, d, x[i + 5], S31, T[33]);
    d = HH(d, a, b, c, x[i + 8], S32, T[34]);
    c = HH(c, d, a, b, x[i + 11], S33, T[35]);
    b = HH(b, c, d, a, x[i + 14], S34, T[36]);
    a = HH(a, b, c, d, x[i + 1], S31, T[37]);
    d = HH(d, a, b, c, x[i + 4], S32, T[38]);
    c = HH(c, d, a, b, x[i + 7], S33, T[39]);
    b = HH(b, c, d, a, x[i + 10], S34, T[40]);
    a = HH(a, b, c, d, x[i + 13], S31, T[41]);
    d = HH(d, a, b, c, x[i + 0], S32, T[42]);
    c = HH(c, d, a, b, x[i + 3], S33, T[43]);
    b = HH(b, c, d, a, x[i + 6], S34, T[44]);
    a = HH(a, b, c, d, x[i + 9], S31, T[45]);
    d = HH(d, a, b, c, x[i + 12], S32, T[46]);
    c = HH(c, d, a, b, x[i + 15], S33, T[47]);
    b = HH(b, c, d, a, x[i + 2], S34, T[48]);

    // Round 4.
    a = II(a, b, c, d, x[i + 0], S41, T[49]);
    d = II(d, a, b, c, x[i + 7], S42, T[50]);
    c = II(c, d, a, b, x[i + 14], S43, T[51]);
    b = II(b, c, d, a, x[i + 5], S44, T[52]);
    a = II(a, b, c, d, x[i + 12], S41, T[53]);
    d = II(d, a, b, c, x[i + 3], S42, T[54]);
    c = II(c, d, a, b, x[i + 10], S43, T[55]);
    b = II(b, c, d, a, x[i + 1], S44, T[56]);
    a = II(a, b, c, d, x[i + 8], S41, T[57]);
    d = II(d, a, b, c, x[i + 15], S42, T[58]);
    c = II(c, d, a, b, x[i + 6], S43, T[59]);
    b = II(b, c, d, a, x[i + 13], S44, T[60]);
    a = II(a, b, c, d, x[i + 4], S41, T[61]);
    d = II(d, a, b, c, x[i + 11], S42, T[62]);
    c = II(c, d, a, b, x[i + 2], S43, T[63]);
    b = II(b, c, d, a, x[i + 9], S44, T[64]);

    a = add(a, initialA);
    b = add(b, initialB);
    c = add(c, initialC);
    d = add(d, initialD);
  }

  // Convert `x` to hexadecimal string representation.
  return hex(a) + hex(b) + hex(c) + hex(d);
}

function F(x: number, y: number, z: number): number {
  return (x & y) | (~x & z);
}

function G(x: number, y: number, z: number): number {
  return (x & z) | (y & ~z);
}

function H(x: number, y: number, z: number): number {
  return x ^ y ^ z;
}

function I(x: number, y: number, z: number): number {
  return y ^ (x | ~z);
}

function FF(
  a: number,
  b: number,
  c: number,
  d: number,
  x: number,
  s: number,
  ac: number,
): number {
  a = add(add(a, F(b, c, d)), add(x, ac));

  return rotateLeft(a, s) + b;
}

function GG(
  a: number,
  b: number,
  c: number,
  d: number,
  x: number,
  s: number,
  ac: number,
): number {
  a = add(add(a, G(b, c, d)), add(x, ac));

  return rotateLeft(a, s) + b;
}

function HH(
  a: number,
  b: number,
  c: number,
  d: number,
  x: number,
  s: number,
  ac: number,
): number {
  a = add(add(a, H(b, c, d)), add(x, ac));

  return rotateLeft(a, s) + b;
}

function II(
  a: number,
  b: number,
  c: number,
  d: number,
  x: number,
  s: number,
  ac: number,
): number {
  a = add(add(a, I(b, c, d)), add(x, ac));

  return rotateLeft(a, s) + b;
}

/**
 * Add two 32-bit numbers.
 */
function add(a: number, b: number): number {
  return (a + b) & 0xffffffff;
}

/**
 * Returns a hexadecimal string representation of the 32-bit number `a`.
 */
function hex(a: number): string {
  const result = a.toString(16);

  return '0'.repeat(8 - result.length) + result;
}

/**
 * Rotate `x` left by `n` bits.
 */
function rotateLeft(x: number, n: number): number {
  return (x << n) | (x >> (32 - n));
}
