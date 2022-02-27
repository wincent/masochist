import {invariant} from '@masochist/common';

import {RIGHTWARDS_ARROW} from './Grammar';
import extendedGrammarForItemSets from './extendedGrammarForItemSets';
import getAugmentedGrammar from './getAugmentedGrammar';
import getFollowSets from './getFollowSets';
import keyForRule from './keyForRule';

import type {ItemSet} from '.';
import type {Grammar} from './Grammar';
import type {TransitionTable} from './itemSetsToTransitionTable';

export type Action =
  | {
      kind: 'Accept';
    }
  | {
      kind: 'Reduce';
      rule: number;
    }
  | {
      kind: 'Shift';
      state: number;
    };

type Actions = {
  [terminal: string]: Action | undefined;
};

type Gotos = {
  [nonTerminal: string]: number | null;
};

export type ParseTable = Array<[Actions, Gotos]>;

export default function getParseTable(
  itemSets: Array<ItemSet>,
  transitionTable: TransitionTable,
  grammar: Grammar,
): ParseTable {
  const extendedGrammar = extendedGrammarForItemSets(itemSets, grammar);
  const augmentedGrammar = getAugmentedGrammar(grammar);
  const startRule = augmentedGrammar.rules[0];
  const tokens = grammar.tokens;

  const table: ParseTable = [];

  // Add `Accept` action for `$` (EOF) symbol where item set contains start
  // rule with dot at the end.
  let acceptCount = 0;
  for (const itemSet of itemSets) {
    const actions: Actions = {};
    const gotos: Gotos = {};

    for (const {lhs, rhs, dot} of itemSet.items) {
      if (lhs === startRule.lhs && dot === rhs.length) {
        actions['$'] = {kind: 'Accept'};

        // We could break here, but instead we're going to integrity-check that
        // there is only one accept state at the end.
        acceptCount++;
      }
    }

    table.push([actions, gotos]);
  }
  invariant(acceptCount === 1, `acceptCount (${acceptCount}) must be 1`);

  // Copy non-terminals from transition table to gotos.
  transitionTable.forEach((transitions, source) => {
    for (const [symbol, target] of Object.entries(transitions)) {
      invariant(target);
      if (!tokens.has(symbol)) {
        const gotos = table[source][1];
        gotos[symbol] = target;
      }
    }
  });

  // Copy terminals from transition table as shift actions.
  transitionTable.forEach((transitions, source) => {
    for (const [symbol, target] of Object.entries(transitions)) {
      invariant(target);
      if (tokens.has(symbol)) {
        const actions = table[source][0];
        actions[symbol] = {
          kind: 'Shift',
          state: target,
        };
      }
    }
  });

  // Prepare data structure for quick look-up of rule indices.
  const ruleIndices: {[ruleString: string]: number} = {};
  augmentedGrammar.rules.forEach(({lhs, rhs}, i) => {
    ruleIndices[keyForRule(lhs, rhs)] = i;
  });

  // Map follow sets to extended grammar rules.
  const follows = getFollowSets(extendedGrammar);
  for (const rule of extendedGrammar.rules) {
    const [, lhs, end] = rule.lhs.split('/');
    if (end === '$') {
      continue; // "$"/EOF was already handled above.
    }

    const rhs = rule.rhs.map((symbol) => {
      const [, rhs] = symbol.split('/');
      return rhs;
    });

    // Get the item set from the original grammar that corresponds to extended
    // grammar rule.
    const itemSet = rule.rhs[rule.rhs.length - 1].split('/')[2];

    const ruleNumber = ruleIndices[keyForRule(lhs, rhs)];
    const actions = table[parseInt(itemSet, 10)][0];
    for (const follow of follows[rule.lhs]) {
      const [, symbol] = (follow ?? '0/$/0').split('/');
      const action = actions[symbol];
      if (action) {
        if (
          action.kind === 'Accept' ||
          (action.kind === 'Reduce' && action.rule !== ruleNumber) ||
          action.kind === 'Shift'
        ) {
          throw new Error(
            `getParseTable(): ${action.kind}/Reduce conflict - ` +
              `existing ${action.kind} (${
                action.kind === 'Reduce'
                  ? action.rule
                  : action.kind === 'Shift'
                  ? action.state
                  : 'n/a'
              }) for state ${itemSet} ` +
              `processing rule: ${lhs} ${RIGHTWARDS_ARROW} ${rhs.join(' ')}`,
          );
        }
      } else {
        actions[symbol] = {kind: 'Reduce', rule: ruleNumber};
      }
    }
  }

  return table;
}
