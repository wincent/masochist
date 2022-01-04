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
    it('minimizes a DFA for ESCAPED_UNICODE', () => {
      expect(minimize(/\\u[0-9A-Fa-f]{4}/)).toEqual({
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
                  on: {kind: 'Atom', value: 'u'},
                  to: {
                    id: 2,
                    flags: NONE,
                    edges: [
                      // BUG: things go wrong from here
                      {
                        on: {kind: 'Range', from: 'a', to: 'f'},
                        to: {
                          id: 3,
                          flags: NONE,
                          edges: [
                            {
                              on: {kind: 'Range', from: 'a', to: 'f'},
                              to: {
                                id: 4,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 5,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 6,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      });
    });
  });
});

function minimize(regExp: RegExp): NFA {
  return minimizeDFA(
    sortEdges(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(regExp))))),
  );
}
