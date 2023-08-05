import {ACCEPT, START} from './NFA';
import stringifyTransition from './stringifyTransition';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Creates a table-based printable form of an NFA, for debugging purposes.
 */
export default function stringifyNFA(nfa: NFA): string {
  const lines: Array<Array<string>> = [
    ['id', 'START?', 'ACCEPT?', 'labels', 'to', 'on'],
  ];

  visitNFA(nfa, (node) => {
    if (!node.edges.length) {
      lines.push([
        node.id.toString(),
        node.flags & START ? '*' : '-',
        node.flags & ACCEPT ? '*' : '-',
        formatSet(node.labels),
        '-',
        '-',
      ]);
    } else {
      node.edges.forEach((edge) => {
        lines.push([
          node.id.toString(),
          node.flags & START ? '*' : '-',
          node.flags & ACCEPT ? '*' : '-',
          formatSet(node.labels),
          edge.to.id.toString(),
          stringifyTransition(edge.on),
        ]);
      });
    }
  });

  const widths = lines.reduce(
    (acc: Array<number>, line) =>
      line.map((column, i) => Math.max(column.length, acc[i])),
    new Array(lines[0].length).fill(1),
  );

  lines.splice(
    1,
    0,
    widths.map((width) => '-'.repeat(width)),
  );

  return lines
    .map((entries) => {
      return entries.map((entry, i) => entry.padStart(widths[i])).join('  ');
    })
    .join('\n');
}

function formatSet(set?: Set<string>): string {
  if (set) {
    return `[${Array.from(set).join(', ')}]`;
  } else {
    return '-';
  }
}