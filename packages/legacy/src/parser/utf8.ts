/**
 * Used to allocate a buffer that is `X_FACTOR` times larger than would be
 * needed to store a string containing only ASCII code points (the common case).
 *
 * If the buffer ends up being undersize, we reallocate. If it ends up being
 * oversize, we trim it before returning. Both operations should be efficient
 * enough because:
 *
 * > If the source array is a typed array, the two arrays may share the same
 * > underlying `ArrayBuffer`; the JavaScript engine will intelligently copy
 * > the source range of the buffer to the destination range.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set
 */
const X_FACTOR = 1.2;

/**
 * Simple function to convert a JavaScript (UTF-16) string to an array of UTF-8
 * bytes.
 */
export default function utf8(text: string): Uint8Array {
  // Add an additional padding of 4 here so that short ASCII strings
  // (eg. "foo") don't trigger an immediate realloc.
  let capacity = Math.ceil(text.length * X_FACTOR) + 4;

  let buffer = new Uint8Array(capacity);
  let source = 0;
  let destination = 0;

  // Note that String.prototype.length is UTF-16 character count, so a
  // codepoint like \u{10ffff} (which is encoded as a surrogate pair)
  // adds 2 to the string length.
  for (source = 0; source < text.length; source++) {
    if (destination + 4 > capacity) {
      // Reallocate to a larger buffer.
      capacity = Math.ceil(capacity * X_FACTOR);

      const target = new Uint8Array(capacity);
      target.set(buffer);
      buffer = target;
    }

    const code = text.codePointAt(source)!;

    if (code <= 0x007f) {
      buffer[destination++] = code;
    } else if (code <= 0x07ff) {
      buffer[destination++] = (code >> 6) | 0xc0;
      buffer[destination++] = (code & 0x3f) | 0x80;
    } else if (code <= 0xffff) {
      buffer[destination++] = (code >> 12) | 0xe0;
      buffer[destination++] = ((code >> 6) & 0x3f) | 0x80;
      buffer[destination++] = (code & 0x3f) | 0x80;
    } else {
      // \u{10000} through \u{10ffff}
      buffer[destination++] = (code >> 18) | 0xf0;
      buffer[destination++] = ((code >> 12) & 0x3f) | 0x80;
      buffer[destination++] = ((code >> 6) & 0x3f) | 0x80;
      buffer[destination++] = (code & 0x3f) | 0x80;

      // In JS, these code points are encoded as a surrogate pair, so
      // skip over the second character.
      source++;
    }
  }

  if (destination < capacity) {
    // Trim to match final size.
    buffer = buffer.slice(0, destination);
  }

  return buffer;
}
