export default function quote(unquoted: string): string {
  if (unquoted.includes("'")) {
    // Use double-quoted string.
    const escaped = escape(unquoted).replace('"', '\\"');
    return `"${escaped}"`;
  } else {
    // Use single-quoted string.
    const escaped = escape(unquoted).replace("'", "\\'");
    return `'${escaped}'`;
  }
}

/**
 * Replaces non-ASCII characters, unprintable characters and non-space
 * whitespace characters with escapes.
 *
 * Note: this may not be totally robust, but it works for the input domain used
 * in this project. For edge cases that could trip this up (eg. octal escapes
 * etc), see: https://mathiasbynens.be/notes/javascript-escapes
 */
function escape(key: string): string {
  return key
    .replace('\\', '\\\\')
    .replace('\0', '\\0')
    .replace('\b', '\\b')
    .replace('\f', '\\f')
    .replace('\n', '\\n')
    .replace('\r', '\\r')
    .replace('\t', '\\t')
    .replace('\v', '\\v')
    .replace(/[\s\S]/g, (match) => {
      const c = match.charCodeAt(0);
      if (c >= 0x20 && c <= 0x7e) {
        return match;
      } else {
        return `\\u${c.toString(16).padStart(4, '0')}`;
      }
    });
}
