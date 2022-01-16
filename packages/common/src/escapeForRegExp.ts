/**
 * Escapes `literal` for use in a RegExp.
 */
export default function escapeForRegExp(literal: string): string {
  // https://github.com/benjamingr/RegExp.escape/blob/master/EscapedChars.md
  return literal.replace(/[\^$\\.*+?()[\]{}|]/g, '\\$&');
}
