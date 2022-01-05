import {ACCEPT, START} from './NFA';
import visitNFA from './visitNFA';

import type {NFA} from './NFA';

/**
 * Creates a table-based printable form of an NFA, for debugging purposes.
 */
export default function stringifyNFA(nfa: NFA): string {
  const lines: Array<Array<unknown>> = [
    ['id', 'START?', 'ACCEPT?', 'to', 'on'],
  ];

  visitNFA(nfa, (node) => {
    if (!node.edges.length) {
      lines.push([
        node.id,
        node.flags & START ? 'Y' : 'N',
        node.flags & ACCEPT ? 'Y' : 'N',
        '-',
        '-',
      ]);
    } else {
      node.edges.forEach((edge) => {
        lines.push([
          node.id,
          node.flags & START ? 'Y' : 'N',
          node.flags & ACCEPT ? 'Y' : 'N',
          edge.to.id,
          edge.on,
        ]);
      });
    }
  });

  return lines
    .map((entries: Array<unknown>) => {
      return entries
        .map((entry) => {
          try {
            return JSON.stringify(entry).padEnd(12);
          } catch {
            return '[error]'.padEnd(12);
          }
        })
        .join('');
    })
    .join('\n');
}
