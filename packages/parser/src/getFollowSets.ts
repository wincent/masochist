import getFirstSets from './getFirstSets';

import type {Grammar} from './types';

type FollowSets = {
  [nonTerminal: string]: Set<string | null>;
};

export default function getFollowSets(grammar: Grammar) {
  const tokens = grammar.tokens;
  const startRule = grammar.rules[0];
  const first = getFirstSets(grammar);
  const followSets: FollowSets = {
    [startRule.lhs]: new Set([null]),
  };

  // For rule, "A → a B b", add everything in FIRST(b) except ε to FOLLOW(B).
  for (let i = 1; i < grammar.rules.length; i++) {
    const {rhs} = grammar.rules[i];
    for (let j = 0; j < rhs.length; j++) {
      const current = rhs[j];
      if (!tokens.has(current)) {
        const next = rhs[j + 1];
        if (next) {
          for (const symbol of first[next] || [next]) {
            if (symbol !== null) {
              followSets[current] = followSets[current] || new Set();
              followSets[current].add(symbol);
            }
          }
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
      // FOLLOW(B) to FOLLOW(A).
      const previous = rhs[rhs.length - 2];
      if (previous && !tokens.has(previous) && last && !tokens.has(last)) {
        if (first[last]?.has(null)) {
          if (followSets[previous]) {
            for (const symbol of followSets[previous]) {
              followSets[lhs] = followSets[lhs] || new Set();
              if (!followSets[lhs].has(symbol)) {
                followSets[lhs].add(symbol);
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
