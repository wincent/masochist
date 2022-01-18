import {dedent} from '@masochist/common';

import compileRegExp from '../../compileRegExp';
import {INTEGER_PART} from '../../lexer';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';
import stringifyTransitionTable from '../stringifyTransitionTable';
import toTransitionTable from '../toTransitionTable';

import type {TransitionTable} from '../TransitionTable';

describe('stringifyTransitionTable()', () => {
  it('stringifies a transition table', () => {
    const table = getTable(INTEGER_PART);
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
    }`);
  });
});

function getTable(regExp: RegExp): TransitionTable {
  return toTransitionTable(
    sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
  );
}
