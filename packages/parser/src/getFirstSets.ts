import type {Grammar, SymbolSets} from './types';

/**
 * `first['A']` is the set of terminals which can appear as the first element of
 * any rule (or chain of rules) matching non-terminal `A`.
 *
 * We use "first sets" while computing "follow sets" (ie. lookahead heuristics)
 * in `getFollowSets()`.
 */
export default function getFirstSets(grammar: Grammar): SymbolSets {
  const tokens = grammar.tokens;

  const sets: {[nonTerminal: string]: Set<string | null>} = {};

  function add(lhs: string, symbol: string | null): boolean {
    if (!sets[lhs]) {
      sets[lhs] = new Set();
    }
    if (sets[lhs].has(symbol)) {
      return false;
    }
    sets[lhs].add(symbol);
    return true;
  }

  // Keep looping until we stop making forward progress.
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < grammar.rules.length; i++) {
      const {lhs, rhs} = grammar.rules[i];
      if (rhs.length) {
        for (let j = 0; j < rhs.length; j++) {
          const symbol = rhs[j];
          if (tokens.has(symbol)) {
            // For rule A → x, FIRST(A) contains x.
            if (add(lhs, symbol)) {
              done = false;
            }
            break;
          } else {
            if (!sets[symbol]) {
              done = false;
              break;
            }

            // For rule A → B C D:
            //    FIRST(A) contains FIRST(B) except ε.
            //    If FIRST(B) contains ε, FIRST(A) also contains FIRST(C) except ε
            //    etc.
            //    If FIRST(B), FIRST(C), FIRST(D) all contain ε, so does FIRST(A).
            const first = sets[symbol];
            let hasEpsilon = false;
            for (const symbol of first) {
              if (symbol === null) {
                hasEpsilon = true;
              } else {
                if (add(lhs, symbol)) {
                  done = false;
                }
              }
            }
            if (!hasEpsilon) {
              break;
            } else if (j === rhs.length - 1) {
              // Every symbol on rhs had an epsilon.
              if (add(lhs, null)) {
                done = false;
              }
            }
          }
        }
      } else {
        // For rule A → ε, FIRST(A) contains ε.
        if (add(lhs, null)) {
          done = false;
        }
      }
    }
  }

  return sets;
}
