import getFirstSets from './getFirstSets';

import type {Grammar, SymbolSets} from './types';

export default function getFollowSets(grammar: Grammar): SymbolSets {
  const tokens = grammar.tokens;
  const startRule = grammar.rules[0];
  const first = getFirstSets(grammar);
  const followSets: SymbolSets = {
    [startRule.lhs]: new Set([null]),
  };

  // For rule, "A → a B b", add everything in FIRST(b) except ε to FOLLOW(B).
  for (let i = 1; i < grammar.rules.length; i++) {
    const {rhs} = grammar.rules[i];
    // Walk backwards so we can propagate through symbols that contain epsilon
    // productions (eg. in a rule like `A → B C D e`, if both `C` and `D`
    // contain epsilon, they are "transparent" and allow `B` to see all the way
    // through to `e`).
    for (let j = rhs.length - 2; j >= 0; j--) {
      const current = rhs[j];
      if (!tokens.has(current)) {
        const next = rhs[j + 1];
        if (!tokens.has(next)) {
          // Both `current` and `next` are non-terminals
          let hasEpsilon = false;
          for (const symbol of first[next]) {
            if (symbol === null) {
              hasEpsilon = true;
            } else {
              followSets[current] = followSets[current] || new Set();
              followSets[current].add(symbol);
            }
          }
          if (hasEpsilon) {
            // Need to add everything from FOLLOW(next) too.
            for (const symbol of followSets[next] || []) {
              followSets[current] = followSets[current] || new Set();
              followSets[current].add(symbol);
            }
          }
        } else {
          // `current` is non-terminal, `next` is terminal, so FOLLOW(current)
          // contains `next`.
          followSets[current] = followSets[current] || new Set();
          followSets[current].add(next);
        }
      }
    }
  }

  // Will keep looping until we stop making forward progress.
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < grammar.rules.length; i++) {
      const {lhs, rhs} = grammar.rules[i];

      // For rule, "A -> a B", add everything in FOLLOW(A) to FOLLOW(B).
      const last = rhs[rhs.length - 1];
      if (last && !tokens.has(last)) {
        followSets[lhs] = followSets[lhs] || new Set();
        followSets[last] = followSets[last] || new Set();
        for (const symbol of followSets[lhs]) {
          if (!followSets[last].has(symbol)) {
            followSets[last].add(symbol);
            done = false;
          }
        }
      }

      // For rule, "A -> a B b", if ε is in FIRST(b), add everything in
      // FOLLOW(A) to FOLLOW(B).
      const previous = rhs[rhs.length - 2];
      if (previous && !tokens.has(previous) && last && !tokens.has(last)) {
        if (first[last]?.has(null)) {
          if (followSets[lhs]) {
            for (const symbol of followSets[lhs]) {
              followSets[previous] = followSets[previous] || new Set();
              if (!followSets[previous].has(symbol)) {
                followSets[previous].add(symbol);
                done = false;
              }
            }
          }
        }
      }
    }
  }

  return followSets;
}
