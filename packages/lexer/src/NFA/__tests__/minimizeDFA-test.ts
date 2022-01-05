import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import minimizeDFA from '../minimizeDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import sortEdges from '../sortEdges';

import type {NFA} from '../NFA';

describe('minimizeDFA()', () => {
  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('minimizing DFAs from "real world" regular expressions', () => {
    it('minimizes a DFA for ESCAPED_CHARACTER', () => {
      expect(minimize(/\\["\\\/bfnrt]/)).toEqual({
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: '\\'},
            to: {
              id: 1,
              flags: NONE,
              edges: [
                {
                  on: {kind: 'Atom', value: 't'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'r'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'n'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'f'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'b'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '\\'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '/'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '"'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
              ],
            },
          },
        ],
      });
    });

    xit('minimizes a DFA for ESCAPED_UNICODE', () => {
      console.log(JSON.stringify(minimize(/\\u[0-9A-Fa-f]{4}/), null, 2));
      return;
      expect(minimize(/\\u[0-9A-Fa-f]{4}/)).toEqual({});
    });
  });
});

function minimize(regExp: RegExp): NFA {
  return minimizeDFA(
    sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
  );
}
