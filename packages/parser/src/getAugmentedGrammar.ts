import type {Grammar} from './types';

/**
 * Augment the grammar by starting with a new rule that leads to the original
 * start rule; eg. grammar:
 *
 *      S -> a
 *
 * effectively becomes:
 *
 *      S' -> S $ (where "$" represents EOF)
 *      S -> a
 */
export default function getAugmentedGrammar(grammar: Grammar): Grammar {
  const startRule = grammar.rules[0];

  // And now, much singing and dancing to return a deep copy of the grammar.
  return {
    tokens: new Map(grammar.tokens.entries()),
    rules: [
      {
        lhs: `${startRule.lhs}'`,
        rhs: [startRule.lhs],
      },
      ...grammar.rules.map(({lhs, rhs, action, precedence}) => {
        return {
          action,
          lhs,
          rhs: [...rhs],
          precedence,
        };
      }),
    ],
  };
}
