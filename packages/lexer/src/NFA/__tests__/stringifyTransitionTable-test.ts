import {dedent} from '@masochist/common';

import compileRegExp from '../../compileRegExp';
import {INTEGER_PART} from '../../lexer';
import {ACCEPT} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import stringifyTransitionTable from '../stringifyTransitionTable';
import testFlag from '../testFlag';
import toTransitionTable from '../toTransitionTable';
import visitNFA from '../visitNFA';

import type {TransitionTable} from '../TransitionTable';

describe('stringifyTransitionTable()', () => {
  it('stringifies a transition table that has labels leading to accept states ', () => {
    const table = getTable(INTEGER_PART, 'INTEGER_PART');
    expect(stringifyTransitionTable(table)).toEqual(dedent`{
      acceptStates: new Set([2, 3, 4]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:-', new Set([1])],
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 1 */ new Map([
          ['Atom:0', new Set([2])],
          ['Range:1-9', new Set([3])],
        ]),
        /* 2 */ new Map(),
        /* 3 */ new Map([['Range:0-9', new Set([4])]]),
        /* 4 */ new Map([['Range:0-9', new Set([4])]]),
      ],
      labels: [
        /* 0 */ new Map([
          ['Atom:0', {2: new Set(['INTEGER_PART'])}],
          ['Range:1-9', {3: new Set(['INTEGER_PART'])}],
        ]),
        /* 1 */ new Map([
          ['Atom:0', {2: new Set(['INTEGER_PART'])}],
          ['Range:1-9', {3: new Set(['INTEGER_PART'])}],
        ]),
        /* 2 */ undefined,
        /* 3 */ new Map([
          ['Range:0-9', {4: new Set(['INTEGER_PART'])}],
        ]),
        /* 4 */ new Map([
          ['Range:0-9', {4: new Set(['INTEGER_PART'])}],
        ]),
      ],
    }`);
  });
});

// TODO: this is the same as the one in the `toTransitionTable()` tests;
// extract it somewhere common, if I can come up with a reasonable name for
// it...
// TODO: going to have to extract the code that adds labels to edges anyway...
function getTable(regExp: RegExp, label?: string): TransitionTable {
  const dfa = sortEdges(
    NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp)))),
  );

  if (label) {
    // Add label to all edges that transition to accept states.
    visitNFA(dfa, ({edges}) => {
      for (const edge of edges) {
        if (testFlag(edge.to.flags, ACCEPT)) {
          if (!edge.labels) {
            edge.labels = new Set();
          }
          edge.labels.add(label);
        }
      }
    });
  }

  return toTransitionTable(dfa);
}
