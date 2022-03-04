import type {Grammar} from './types';

/**
 * Using `lhs` as a key, collects the `rhs` of all matching rules into an array.
 *
 * Any `action` property of the `Rule` is not relevant here, so is ignored.
 */
export default function groupRulesByLHS(grammar: Grammar): {
  [lhs: string]: Array<Array<string>>;
} {
  const rules: {[lhs: string]: Array<Array<string>>} = {};

  for (const {lhs, rhs} of grammar.rules) {
    if (!rules[lhs]) {
      rules[lhs] = [rhs];
    } else {
      rules[lhs].push(rhs);
    }
  }

  return rules;
}
