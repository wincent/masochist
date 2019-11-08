import utf8 from './utf8';

/**
 * Based on public domain sample code at:
 *
 * @see http://www.h2database.com/skein/
 */
export default function skein(s) {
  var msg = Array.from(utf8(s));
  // final: 0x80; first: 0x40; conf: 0x4; msg: 0x30; out: 0x3f
  var tweak = [[0, 32], [(0x80 + 0x40 + 0x4) << 24, 0]],
    c = [];
  var buff = Array.from(utf8('SHA3\u0001\u0000\u0000\u0000\u0000\u0002'));
  block(c, tweak, buff, 0);
  tweak = [[0, 0], [(0x40 + 0x30) << 24, 0]];
  var len = msg.length,
    pos = 0;
  for (; len > 64; len -= 64, pos += 64) {
    tweak[0][1] += 64;
    block(c, tweak, msg, pos);
    tweak[1][0] = 0x30 << 24;
  }
  tweak[0][1] += len;
  tweak[1][0] |= 0x80 << 24;
  block(c, tweak, msg, pos);
  tweak[0][1] = 8;
  tweak[1][0] = (0x80 + 0x40 + 0x3f) << 24;
  block(c, tweak, [], 0);
  for (var hash = [], i = 0; i < 64; i++) {
    var b = shiftRight(c[i >> 3], (i & 7) * 8)[1] & 255;
    hash.push((256 + b).toString(16).substring(1));
  }
  return hash.join('');
}
function shiftLeft(x, n) {
  if (x == null) return [0, 0];
  if (n > 32) return [x[1] << (n - 32), 0];
  if (n == 32) return [x[1], 0];
  if (n == 0) return x;
  return [(x[0] << n) | (x[1] >>> (32 - n)), x[1] << n];
}
function shiftRight(x, n) {
  if (x == null) return [0, 0];
  if (n > 32) return [0, x[0] >>> (n - 32)];
  if (n == 32) return [0, x[0]];
  if (n == 0) return x;
  return [x[0] >>> n, (x[0] << (32 - n)) | (x[1] >>> n)];
}
function add(x, y) {
  if (y == null) return x;
  var lsw = (x[1] & 0xffff) + (y[1] & 0xffff);
  var msw = (x[1] >>> 16) + (y[1] >>> 16) + (lsw >>> 16);
  var lowOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);
  lsw = (x[0] & 0xffff) + (y[0] & 0xffff) + (msw >>> 16);
  msw = (x[0] >>> 16) + (y[0] >>> 16) + (lsw >>> 16);
  var highOrder = ((msw & 0xffff) << 16) | (lsw & 0xffff);
  return [highOrder, lowOrder];
}
function xor(a, b) {
  if (b == null) return a;
  return [a[0] ^ b[0], a[1] ^ b[1]];
}
function block(c, tweak, b, off) {
  var R = [
    46,
    36,
    19,
    37,
    33,
    42,
    14,
    27,
    17,
    49,
    36,
    39,
    44,
    56,
    54,
    9,
    39,
    30,
    34,
    24,
    13,
    17,
    10,
    50,
    25,
    29,
    39,
    43,
    8,
    22,
    56,
    35,
  ];
  var x = [],
    t = [];
  // c[8] = [0x55555555, 0x55555555];
  c[8] = [0x1bd11bda, 0xa9fc1a22];
  for (var i = 0; i < 8; i++) {
    for (var j = 7, k = off + i * 8 + 7; j >= 0; j--, k--) {
      t[i] = shiftLeft(t[i], 8);
      t[i][1] |= b[k] & 255;
    }
    x[i] = add(t[i], c[i]);
    c[8] = xor(c[8], c[i]);
  }
  x[5] = add(x[5], tweak[0]);
  x[6] = add(x[6], tweak[1]);
  tweak[2] = xor(tweak[0], tweak[1]);
  for (var round = 1; round <= 18; round++) {
    var p = 16 - ((round & 1) << 4);
    for (var i = 0; i < 16; i++) {
      // m: 0, 2, 4, 6, 2, 0, 6, 4, 4, 6, 0, 2, 6, 4, 2, 0
      var m = 2 * ((i + (1 + i + i) * (i >> 2)) & 3);
      var n = (1 + i + i) & 7;
      var r = R[p + i];
      x[m] = add(x[m], x[n]);
      x[n] = xor(shiftLeft(x[n], r), shiftRight(x[n], 64 - r));
      x[n] = xor(x[n], x[m]);
    }
    for (var i = 0; i < 8; i++) x[i] = add(x[i], c[(round + i) % 9]);
    x[5] = add(x[5], tweak[round % 3]);
    x[6] = add(x[6], tweak[(round + 1) % 3]);
    x[7] = add(x[7], [0, round]);
  }
  for (var i = 0; i < 8; i++) c[i] = xor(t[i], x[i]);
}
