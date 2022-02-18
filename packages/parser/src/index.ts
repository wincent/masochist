import {StringScanner} from '@masochist/common';

// Goal is to produce an LALR(1) parser from a grammar.

type Grammar = {
  tokens: Array<string>;
  rules: Array<Rule>;
};

type Rule = {
  lhs: string;
  rhs: Array<string>;
  action?: string;
};

type FirstSets = {
  [nonTerminal: string]: Set<string>;
};

type Item = {
  lhs: string;
  rhs: Array<string>;
  dot: number;
  lookahead: Set<string | null>;
};

type ItemSet = {
  items: Array<Item>;
  transitions: {[symbol: string]: number};
};

const MIDDLE_DOT = '\xb7';
const RIGHTWARDS_ARROW = '\u2192';

/**
 * Based on: https://spec.graphql.org/October2021/#sec-Document-Syntax
 */
export const grammar: Grammar = {
  tokens: ['CLOSING_BRACE', 'NAME', 'OPENING_BRACE'],
  rules: [
    {lhs: 'Document', rhs: ['DefinitionList']},
    {lhs: 'DefinitionList', rhs: ['Definition']},
    {
      lhs: 'DefinitionList',
      rhs: ['DefinitionList', 'Definition'],
      action: '{ $$ = [...$1, $2] }',
    },
    {lhs: 'Definition', rhs: ['ExecutableDefinition']},
    {lhs: 'ExecutableDefinition', rhs: ['OperationDefinition']},
    {lhs: 'OperationDefinition', rhs: ['SelectionSet']},
    {
      lhs: 'SelectionSet',
      rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
    },
    {lhs: 'SelectionList', rhs: ['Selection']},
    {
      lhs: 'SelectionList',
      rhs: ['SelectionList', 'Selection'],
      action: '{ $$ = [...$1, $2] }',
    },
    {lhs: 'Selection', rhs: ['Field']},
    {lhs: 'Field', rhs: ['NAME']},
  ],
};

export const grammarDeclaration = `
    %token CLOSING_BRACE NAME OPENING_BRACE

    Document → DefinitionList
    DefinitionList → Definition
    DefinitionList → DefinitionList Definition { $$ = [...$1, $2] }
    Definition → ExecutableDefinition
    ExecutableDefinition → OperationDefinition
    OperationDefinition → SelectionSet
    SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE
    SelectionList → Selection
    SelectionList → SelectionList Selection { $$ = [...$1, $2] }
    Selection → Field
    Field → NAME
`;

// TODO replace this with a parser generated by the generator
export function parseDSL(dsl: string): Grammar {
  const scanner = new StringScanner(dsl);
  const ws = /\s+/;
  const symbol = /\w+/;
  const tokens: Array<string> = [];
  const rules: Array<Rule> = [];
  while (!scanner.atEnd) {
    // Scan %tokens.
    if (scanner.scan(/%token\b/)) {
      const symbols = [];
      while (!scanner.atEnd) {
        scanner.scan(/[\t +]/);
        if (scanner.scan(symbol)) {
          symbols.push(scanner.last!);
        } else {
          break;
        }
      }
      if (symbols.length) {
        tokens.push(...symbols);
        continue;
      } else {
        throw new Error(
          `parseDSL(): expected at least one symbol after %token at ${scanner.fullContext}`,
        );
      }
    }

    // Scan rules.
    if (scanner.scan(/\w+/)) {
      const lhs = scanner.last!;
      scanner.scan(ws);
      scanner.expect(RIGHTWARDS_ARROW);
      scanner.scan(ws);
      const rhs = [scanner.expect(symbol)];
      let action = '';

      while (!scanner.atEnd) {
        scanner.scan(ws);
        if (scanner.scan('{')) {
          // Scan action.
          let depth = 1;
          action = '{';

          while (depth && !scanner.atEnd) {
            if (scanner.scan('{')) {
              action += '{';
              depth++;
            }
            if (scanner.scan(/[^\{\}]+/)) {
              action += scanner.last!;
            }
            if (scanner.scan('}')) {
              action += '}';
              depth--;
            }
          }
          if (depth) {
            throw new Error(
              `parseDSL(): Unbalanced braces in action at ${scanner.fullContext}`,
            );
          }
        } else if (scanner.peek(/\w+\s*\u2192/)) {
          break;
        } else if (scanner.scan(symbol)) {
          rhs.push(scanner.last!);
        } else if (scanner.scan(/\W+/)) {
          throw new Error(
            `parseDSL(): Unexpected input at ${scanner.fullContext}`,
          );
        }
      }

      if (action) {
        rules.push({lhs, rhs, action});
      } else {
        rules.push({lhs, rhs});
      }
      continue;
    }

    if (scanner.scan(ws)) {
      continue;
    }

    throw new Error(`parseDSL(): Unexpected input at ${scanner.fullContext}`);
  }
  return {tokens, rules};
}

function groupRulesByLHS(grammar: Grammar): {
  [lhs: string]: Array<Array<string>>;
} {
  const rules: {[lhs: string]: Array<Array<string>>} = {};

  for (const {lhs, rhs} of grammar.rules) {
    if (!rules[lhs]) {
      rules[lhs] = [rhs];
    } else {
      rules[lhs].push(rhs);
    }
  }

  return rules;
}

/**
 * `first['A']` is the set of terminals which can appear as the first element of
 * any rule (or chain of rules) matching non-terminal `A`.
 */
export function getFirstSets(grammar: Grammar): FirstSets {
  const tokens = new Set(grammar.tokens);
  const rules = groupRulesByLHS(grammar);
  const first: FirstSets = {};

  // Do a depth-first post-order traversal with guard to check for cycles.
  const seen = new Set<string>();

  function visit(lhs: string) {
    seen.add(lhs);
    for (const rhs of rules[lhs]) {
      for (const symbol of rhs) {
        if (!tokens.has(symbol) && !seen.has(symbol)) {
          visit(symbol);
        }
      }
    }

    if (!first[lhs]) {
      first[lhs] = new Set();
    }

    for (const [next] of rules[lhs]) {
      if (tokens.has(next)) {
        first[lhs].add(next);
      } else {
        for (const terminal of first[next]) {
          first[lhs].add(terminal);
        }
      }
    }
  }

  visit(Object.keys(rules)[0]);

  return first;
}

export function getItemSets(grammar: Grammar) {
  const first = getFirstSets(grammar);
  const tokens = new Set(grammar.tokens);
  const rules = groupRulesByLHS(grammar);
  const startRule = grammar.rules[0];

  // Augment the grammar by starting with I[0], a new rule that leads to the
  // original start rule; eg. grammar:
  //
  //      S -> a
  //
  // effectively becomes:
  //
  //      S' -> S $ (where "$" represents EOF, indicated by `null` lookahead)
  //      S -> a
  //
  const i0: ItemSet = {
    items: [
      {
        lhs: `${startRule.lhs}'`,
        rhs: [startRule.lhs],
        lookahead: new Set([null]),
        dot: 0,
      },
    ],
    transitions: {},
  };

  const itemSets: {[key: string]: ItemSet} = {};

  // For each item in `itemSet`, add any non-terminals that appear after dots.
  function close(itemSet: ItemSet) {
    const added = new Set(itemSet.items.map(({lhs}) => lhs));
    for (let i = 0; i < itemSet.items.length; i++) {
      const item = itemSet.items[i];
      if (item.dot < item.rhs.length) {
        const next = item.rhs[item.dot];
        if (!tokens.has(next) && !added.has(next)) {
          added.add(next);
          for (const rhs of rules[next]) {
            const follow = item.rhs[item.dot + 1];
            const lookahead = follow
              ? first[follow] || new Set([follow])
              : new Set([null]);
            itemSet.items.push({
              lhs: next,
              rhs,
              lookahead,
              dot: 0,
            });
          }
        }
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
                lookahead: item.lookahead,
              });
            }
          }

          close(newItemSet);

          const key = keyForItemSet(newItemSet);
          let index;

          if (itemSets[key]) {
            // Merge into existing set.
            const itemsByKey: {[key: string]: Item} = {};
            for (const item of newItemSet.items) {
              itemsByKey[keyForItem(item)] = item;
            }
            const existingSet = itemSets[key];
            index = Object.keys(itemSets).indexOf(key);
            for (const item of existingSet.items) {
              for (const symbol of itemsByKey[keyForItem(item)].lookahead) {
                item.lookahead.add(symbol);
              }
            }
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

type TransitionTable = Array<{[symbol: string]: number | undefined}>;

export function itemSetsToTransitionTable(
  itemSets: Array<ItemSet>,
  grammar: Grammar,
): TransitionTable {
  const table: TransitionTable = [];

  const terminals = [...grammar.tokens].sort();
  const nonTerminals = grammar.rules.map(({lhs}) => lhs).sort();

  for (const itemSet of itemSets) {
    const entries: {[symbol: string]: number | undefined} = {};
    for (const symbol of [...nonTerminals, ...terminals]) {
      const target = itemSet.transitions[symbol];
      if (target !== undefined) {
        entries[symbol] = target;
      }
    }
    table.push(entries);
  }

  return table;
}

/**
 * Turns a rule like:
 *
 *     A -> B C
 *
 * in item set 0 into:
 *
 *      A   ->   B     C
 *     0 4      0 2   2 7
 *
 * (Assuming A in item set 0 transitions to 4, B in item set 0 transitions to 2,
 * and C in item set 2 transitions to 7).
 */
export function extendedGrammarForItemSets(
  itemSets: Array<ItemSet>,
  grammar: Grammar, // TODO: decide whether this is necessary
) {
  const rules = [];
  for (let i = 0; i < itemSets.length; i++) {
    const itemSet = itemSets[i];
    for (const item of itemSet.items) {
      if (item.dot === 0) {
        const first = item.rhs[0];
        const target = itemSet.transitions[first];
        const lhs = `${i}/${item.lhs}/${target}`;

        let current = i;
        const rhs = item.rhs.map((symbol) => {
          const target = itemSets[current].transitions[symbol];
          const annotated = `${current}/${symbol}/${target}`;
          current = target;
          return annotated;
        });

        rules.push({lhs, rhs});
      }
    }
  }

  return rules;
}

function keyForItem(item: Item): string {
  return `${item.lhs}[${item.dot}]:${item.rhs.join('-')}`;
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

/**
 * Debugging helper.
 */
export function stringifyItemSets(itemSets: Array<ItemSet>): string {
  let output = '';

  for (let i = 0; i < itemSets.length; i++) {
    const itemSet = itemSets[i];
    output += `I${i}:\n`;

    for (const {lhs, rhs, dot, lookahead} of itemSet.items) {
      output += `  ${lhs}`;
      output += ` ${RIGHTWARDS_ARROW}`;
      for (let i = 0; i <= rhs.length; i++) {
        if (i === dot) {
          output += ` ${MIDDLE_DOT}`;
        }
        if (i !== rhs.length) {
          output += ` ${rhs[i]}`;
        }
      }
      output += ', ';
      output +=
        '{' +
        Array.from(lookahead)
          .map((symbol) => (symbol === null ? '$' : symbol))
          .join(', ') +
        '}';
      output += '\n';
    }

    if (i < itemSets.length - 1) {
      output += '\n';
    }
  }

  return output;
}
