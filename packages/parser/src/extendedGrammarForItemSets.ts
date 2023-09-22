import type {Grammar, ItemSet} from './types';

/**
 * Turns a rule like:
 *
 *     A → B C
 *
 * into a rule with start and end states annotated:
 *
 *      A  →  B    C
 *     0 4   0 2  2 7
 *
 * ie. the rule is in item set 0, transitioning on A to 4, on B to 2, and from
 * there, on C to 7. As an implementation detail, the annotations are encoded in
 * the string representation as "0/A/4", "0/B/2", and "2/C/7" respectively.
 *
 * For, an epsilon production:
 *
 *     A → ε
 *
 * we'd annotate like this:
 *
 *     A  →  ε
 *    0 5
 *
 * Again, the start and end states are encoded as "0/A/5".
 */
export default function extendedGrammarForItemSets(
  itemSets: Array<ItemSet>,
  grammar: Grammar,
): Grammar {
  const rules = [];
  const tokens: Grammar['tokens'] = new Map();
  const originalTokens = grammar.tokens;
  for (let i = 0; i < itemSets.length; i++) {
    const itemSet = itemSets[i];
    for (const item of itemSet.items) {
      if (item.dot === 0) {
        const target = itemSet.transitions[item.lhs];
        const lhs = `${i}/${item.lhs}/${target ?? '$'}`;
        let current = i;
        const rhs = item.rhs.map((symbol) => {
          const target = itemSets[current].transitions[symbol];
          const annotated = `${current}/${symbol}/${target}`;
          const originalToken = originalTokens.get(symbol);
          if (originalToken) {
            tokens.set(annotated, originalToken);
          }
          current = target;
          return annotated;
        });
        rules.push({lhs, rhs});
      }
    }
  }

  return {
    rules,
    tokens,
  };
}
