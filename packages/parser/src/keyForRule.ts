import {EPSILON} from './Constants';

/**
 * Given rules like:
 *
 *    A → b B C
 *    A → ε
 *
 * Produces these keys:
 *
 *    A:b-B-C
 *    A:ε
 */
export default function keyForRule(lhs: string, rhs: Array<string>): string {
  if (rhs.length) {
    return `${lhs}:${rhs.join('-')}`;
  } else {
    return `${lhs}:${EPSILON}`;
  }
}
