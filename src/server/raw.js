/**
 * @flow strict
 */

export default function raw(string: string): {|__safe: string|} {
  return {__safe: string};
}
