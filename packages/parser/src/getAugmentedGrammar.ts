import type {Grammar} from './Grammar';

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
    tokens: new Set(grammar.tokens),
    rules: [
      {
        lhs: `${startRule.lhs}'`,
        rhs: [startRule.lhs],
      },
      ...grammar.rules.map(({lhs, rhs, action}) => {
        if (action) {
          return {
            action,
            lhs,
            rhs: [...rhs],
          };
        } else {
          return {
            lhs,
            rhs: [...rhs],
          };
        }
      }),
    ],
  };
}
