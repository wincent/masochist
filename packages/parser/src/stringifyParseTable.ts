import {unreachable} from '@masochist/common';

import type {Action, ParseTable} from './getParseTable';

/**
 * Debugging helper
 */
export default function stringifyParseTable(parseTable: ParseTable): string {
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
      unreachable(action);
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
  const separator = '|' + widths.map((width) => '-'.repeat(width)).join('|') +
    '|';

  return [header, separator, ...padded].join('\n') + '\n';
}
