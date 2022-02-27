import type {Grammar} from './types';

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
