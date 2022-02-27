import getFirstSets from './getFirstSets';

import type {Grammar} from './Grammar';

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

  // For rule, "A → a B b", add everything in FIRST(b) to FOLLOW(B).
  for (let i = 1; i < grammar.rules.length; i++) {
    const {rhs} = grammar.rules[i];
    for (let j = 0; j < rhs.length; j++) {
      if (!tokens.has(rhs[j])) {
        // Non-terminal.
        if (rhs[j + 1]) {
          for (const symbol of first[rhs[j + 1]] || [rhs[j + 1]]) {
            followSets[rhs[j]] = followSets[rhs[j]] || new Set();
            followSets[rhs[j]].add(symbol);
          }
        }
      }
    }
  }

  // For rule, "A -> a B", add everything in FOLLOW(A) to FOLLOW(B).
  // Will keep looping until we stop making forward progress.
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < grammar.rules.length; i++) {
      const {lhs, rhs} = grammar.rules[i];
      for (let j = 0; j < rhs.length; j++) {
        if (!tokens.has(rhs[j])) {
          // Non-terminal.
          if (!rhs[j + 1]) {
            if (followSets[lhs]) {
              for (const symbol of followSets[lhs]) {
                followSets[rhs[j]] = followSets[rhs[j]] || new Set();
                if (!followSets[rhs[j]].has(symbol)) {
                  followSets[rhs[j]].add(symbol);
                  done = false;
                }
              }
            }
          }
        }
      }
    }
  }

  return followSets;
}
