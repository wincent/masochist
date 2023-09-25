import {EPSILON, RIGHTWARDS_ARROW} from './Constants';
import numericStringSort from './numericStringSort';

import type {Grammar} from './types';

/**
 * Debugging helper.
 */
export default function stringifyGrammar(grammar: Grammar): string {
  let output = '';

  // Output prologue
  if (grammar.prologue) {
    output = grammar.prologue + '\n';
  }

  // Output %token declarations.
  output += numericStringSort([...grammar.tokens.keys()])
    .map((token) => `%token ${token}`)
    .join('\n') + '\n\n';

  // Output precedence declarations (%left/%right).
  const operators: Array<['left' | 'right', Array<string>]> = [];

  for (const [name, token] of grammar.tokens) {
    const {precedence, associativity} = token;
    if (precedence !== undefined) {
      if (!associativity) {
        throw new Error(
          `stringifyGrammar(): token ${name} has precedence but not associativity`,
        );
      }
      let declaration = operators[precedence];
      if (!declaration) {
        declaration = operators[precedence] = [associativity, []];
      }
      operators[precedence][1].push(name);
    }
  }

  for (const tuple of operators) {
    // `tuple` will be `undefined` at index 0.
    if (tuple) {
      const [associativity, tokens] = tuple;
      output += `%${associativity} ${tokens.join(' ')}\n`;
    }
  }
  if (operators.length) {
    output += '\n';
  }

  const [startRule, ...otherRules] = grammar.rules.map(
    ({lhs, rhs, action, precedence}, i) => {
      const production = rhs.length ? rhs.join(' ') : EPSILON;
      return [
        `r${i}`,
        precedence ? `[precedence = ${precedence}]` : undefined,
        ':',
        lhs,
        RIGHTWARDS_ARROW,
        production,
        action,
      ]
        .filter(Boolean)
        .join(' ');
    },
  );

  output += [startRule, ...numericStringSort(otherRules)].join('\n');

  return output + '\n';
}
