import getAugmentedGrammar from './getAugmentedGrammar';
import groupRulesByLHS from './groupRulesByLHS';
import keyForRule from './keyForRule';

import type {Grammar, Item, ItemSet} from './types';

/**
 * Constructs "item sets" from the grammar, starting with the start rule.
 *
 * An item set contains rules from the grammar with a "dot" pointer placed
 * somewhere inside the RHS, indicating what has just been recognized or is
 * about to be recognized. For example, a rule like the following, with an added
 * "dot" (•) before the final `Expression`, would represent having just seen a
 * `PLUS` terminal and being about to see an `Expression` non-terminal.
 *
 *    BinaryExpression → Expression PLUS • Expression
 *
 * As already mentioned, the first item set begins with the grammar's start
 * rule. Whenever the dot is before a non-terminal, we can add the rules for
 * that non-terminal to the set.
 *
 * We create additional item sets by taking each and imagining that we've
 * provided a next symbol to advance the dot pointer.
 *
 * Why bother creating the item sets? Because we can use them to create a
 * transition table (see `itemSetsToTransitionTable()`) by determine which item
 * set to go to for each input.
 */
export default function getItemSets(grammar: Grammar) {
  const tokens = grammar.tokens;
  const rules = groupRulesByLHS(grammar);
  const augmentedGrammar = getAugmentedGrammar(grammar);
  const startRule = augmentedGrammar.rules[0];

  const i0: ItemSet = {
    items: [
      {
        lhs: startRule.lhs,
        rhs: startRule.rhs,
        dot: 0,
      },
    ],
    transitions: {},
  };

  const itemSets: {[key: string]: ItemSet} = {};

  // For each item in `itemSet`, add any non-terminals that appear after dots.
  function close(itemSet: ItemSet) {
    const added = new Set();
    for (const item of itemSet.items) {
      const key = keyForItem(item);
      added.add(key);
    }

    function add(symbol: string) {
      if (!tokens.has(symbol)) {
        for (const rhs of rules[symbol]) {
          const newItem: Item = {
            lhs: symbol,
            rhs,
            dot: 0,
          };
          const key = keyForItem(newItem);
          if (!added.has(key)) {
            added.add(key);
            itemSet.items.push(newItem);
            if (rhs[0]) {
              add(rhs[0]);
            }
          }
        }
      }
    }

    for (let i = 0; i < itemSet.items.length; i++) {
      const item = itemSet.items[i];
      if (item.dot < item.rhs.length) {
        const next = item.rhs[item.dot];
        add(next);
      }
    }
  }

  close(i0);

  itemSets[keyForItemSet(i0)] = i0;

  const processedItemSets = new Set<ItemSet>();

  while (true) {
    let addedSetCount = 0;

    for (const itemSet of Object.values(itemSets)) {
      if (processedItemSets.has(itemSet)) {
        continue;
      }

      processedItemSets.add(itemSet);

      const processedTransitions = new Set<string>();

      for (const item of itemSet.items) {
        const next = item.rhs[item.dot];
        if (next && !processedTransitions.has(next)) {
          processedTransitions.add(next);

          // Create new item set.
          const newItemSet: ItemSet = {
            items: [],
            transitions: {},
          };

          // Get all rules where dot is followed by `next`.
          for (const item of itemSet.items) {
            if (item.rhs[item.dot] === next) {
              newItemSet.items.push({
                lhs: item.lhs,
                rhs: item.rhs,
                dot: item.dot + 1,
              });
            }
          }

          close(newItemSet);

          const key = keyForItemSet(newItemSet);
          let index;

          if (itemSets[key]) {
            // Add transition to existing set.
            index = Object.keys(itemSets).indexOf(key);
          } else {
            // Add new set.
            index = Object.keys(itemSets).length;
            itemSets[key] = newItemSet;
            addedSetCount++;
          }

          itemSet.transitions[next] = index;
        }
      }
    }

    if (!addedSetCount) {
      break;
    }
  }

  return Object.values(itemSets);
}

function keyForItem(item: Item): string {
  return keyForRule(item.lhs, item.rhs) + `[${item.dot}]`;
}

/**
 * Returns a string that uniquely identifies the core of the supplied `itemSet`.
 *
 * This is used during transition table construction to merge together
 * equivalent sets, preventing an explosion in the number of states.
 */
function keyForItemSet(itemSet: ItemSet): string {
  return itemSet.items.map(keyForItem).sort().join('/');
}
