import {invariant} from '@masochist/common';

import type {Grammar} from './types';

/**
 * Checks `grammar` for validity, ensuring that it:
 *
 * - Has at least 1 rule.
 * - Uses all declared tokens.
 * - Does not use any undeclared tokens.
 * - Has no productions that use the same name as a token.
 *
 * In the future, it may also ensure that is:
 *
 * - Has no unreachable productions (in practice, indistinguishable from
 *   using an undeclared token).
 * - Has no duplicate productions (ie. multiple copies of the same RHS for a
 *   given LHS).
 * - May use epsilon productions, but only as an alternative for other rule(s)
 *   with the same LHS.
 */
export default function validateGrammar(grammar: Grammar): Grammar {
  const errors: Array<string> = [];
  const warnings: Array<string> = [];

  if (!grammar.rules.length) {
    errors.push('Grammar has no rules');
  }

  const declaredTokens = new Set(grammar.tokens.keys());
  const declaredProductions = new Set([...grammar.rules.map((rule) => {
    return rule.lhs;
  })]);

  for (const production of declaredProductions) {
    if (declaredTokens.has(production)) {
      errors.push(
        `Grammar uses token name (${production}) as a production name`,
      );
    }
  }

  const usedTokens = new Set<string>();
  const usedProductions = new Set<string>();

  for (const rule of grammar.rules) {
    for (const symbol of rule.rhs) {
      if (declaredProductions.has(symbol) && declaredTokens.has(symbol)) {
        errors.push(
          `Rule uses ambiguous symbol (${symbol}) which could be token or production)`,
        );
      } else if (declaredProductions.has(symbol)) {
        usedProductions.add(symbol);
      } else if (declaredTokens.has(symbol)) {
        usedTokens.add(symbol);
      } else {
        errors.push(`Grammar uses unknown symbol (${symbol})`);
      }
    }
  }

  for (const token of declaredTokens) {
    if (!usedTokens.has(token)) {
      warnings.push(`Token (${token}) is declared but not used`);
    }
  }

  for (const production of declaredProductions) {
    if (!usedProductions.has(production)) {
      warnings.push(
        `Production (${production}) is declared but not referenced`,
      );
    }
  }
  for (const token of usedTokens) {
    if (!declaredTokens.has(token)) {
      errors.push(`Token ${token} is used but not declared`);
    }
  }

  for (const warning of warnings) {
    console.log(`[warn] ${warning}`);
  }
  invariant(!errors.length, errors.map((error) => `- ${error}`).join('\n'));

  // TODO more...
  return grammar;
}
