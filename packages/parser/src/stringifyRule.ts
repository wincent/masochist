import {EPSILON, RIGHTWARDS_ARROW} from './Constants';

import type {Rule} from './types';

export default function stringifyRule(
  {lhs, rhs}: Pick<Rule, 'lhs' | 'rhs'>,
): string {
  return `${lhs} ${RIGHTWARDS_ARROW} ${rhs.length ? rhs.join(' ') : EPSILON}`;
}
