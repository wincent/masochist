/**
 * @flow strict
 */

/**
 * Crude HTML tag stripper. Intended for use on well-formed input.
 */
export default function stripTags(input: string): string {
  return input.replace(/(<[^>]+>)/g, '');
}
