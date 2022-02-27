import {RIGHTWARDS_ARROW} from './Grammar';

// Goal is to produce an LALR(1) parser from a grammar.

import type {Grammar} from './Grammar';
import type {Action, ParseTable} from './getParseTable';

// TODO: Apart from the augmented rule, could avoid storing `lhs`/`rhs` and instead just store index of rule in original grammar.
export type Item = {
  lhs: string;
  rhs: Array<string>;
  dot: number;
};

export type ItemSet = {
  items: Array<Item>;
  transitions: {[symbol: string]: number};
};

/**
 * Based on: https://spec.graphql.org/October2021/#sec-Document-Syntax
 */
/*
export const grammar: Grammar = {
  tokens: new Set(['CLOSING_BRACE', 'NAME', 'OPENING_BRACE']),
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
*/

/*
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
*/

/**
 * Debugging helper.
 */
export function stringifyGrammar(grammar: Grammar): string {
  let output =
    [...grammar.tokens]
      .sort()
      .map((token) => `%token ${token}`)
      .join('\n') + '\n\n';

  output += grammar.rules
    .map(({lhs, rhs, action}, i) => {
      if (action) {
        return `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${rhs.join(' ')} {${action}}`;
      } else {
        return `r${i}: ${lhs} ${RIGHTWARDS_ARROW} ${rhs.join(' ')}`;
      }
    })
    .join('\n');

  return output + '\n';
}

/**
 * Debugging helper
 */
export function stringifyParseTable(parseTable: ParseTable): string {
  const rows: Array<Array<string>> = [];

  function actionToString(action: Action | null): string {
    if (!action) {
      return ' ';
    } else if (action.kind === 'Accept') {
      return ' accept ';
    } else if (action.kind === 'Shift') {
      return ` s${action.state} `;
    } else if (action.kind === 'Reduce') {
      return ` r${action.rule} `;
    } else {
      throw new Error('actionToString(): Unreachable');
    }
  }

  function gotoToString(target: number | null): string {
    if (typeof target === 'number') {
      return ` ${target.toString()} `;
    } else {
      return ' ';
    }
  }

  const terminals: Array<string> = Array.from(
    parseTable.reduce((acc, [actions]) => {
      for (const action of Object.keys(actions)) {
        acc.add(action);
      }
      return acc;
    }, new Set<string>()),
  ).sort((a, b) => {
    // Make sure "$" goes at the end.
    if (a === '$') {
      return 1;
    } else if (b === '$') {
      return -1;
    } else {
      return a.localeCompare(b, 'en');
    }
  });

  const nonTerminals: Array<string> = Array.from(
    parseTable.reduce((acc, [, gotos]) => {
      for (const goto of Object.keys(gotos)) {
        acc.add(goto);
      }
      return acc;
    }, new Set<string>()),
  ).sort();

  rows.push([
    ' State ',
    ...terminals.map((terminal) => ` ${terminal} `),
    ...nonTerminals.map((nonTerminal) => `${nonTerminal} `),
  ]);

  parseTable.forEach(([actions, gotos], i) => {
    rows.push([
      ` ${i.toString()} `,
      ...terminals.map((key) => actionToString(actions[key] || null)),
      ...nonTerminals.map((key) => gotoToString(gotos[key] || null)),
    ]);
  });

  const widths: Array<number> = new Array(
    1 + terminals.length + nonTerminals.length,
  ).fill(0);

  rows.forEach((row) => {
    widths.forEach((column, i) => {
      widths[i] = Math.max(column, row[i].length);
    });
  });

  const padded = rows.map((columns) => {
    return (
      '|' +
      columns.map((item, i) => item.padStart(widths[i], ' ')).join('|') +
      '|'
    );
  });
  const header = padded.shift();
  const separator =
    '|' + widths.map((width) => '-'.repeat(width)).join('|') + '|';

  return [header, separator, ...padded].join('\n') + '\n';
}
