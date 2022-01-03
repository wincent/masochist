import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import NFAToDFA from '../NFAToDFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';

import type {Flags, NFA} from '../NFA';

describe('NFAToDFA()', () => {
  it('creates the DFA from an atom', () => {
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a/))))).toEqual({
      id: 0,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            edges: [],
            flags: ACCEPT,
          },
        },
      ],
      flags: START,
    });
  });

  it('creates a DFA created from an "anything" dot', () => {
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/./))))).toEqual({
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Anything'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('creates a DFA from a sequence', () => {
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/foo/))))).toEqual(
      {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: 'f'},
            to: {
              id: 1,
              flags: NONE,
              edges: [
                {
                  on: {kind: 'Atom', value: 'o'},
                  to: {
                    id: 2,
                    flags: NONE,
                    edges: [
                      {
                        on: {kind: 'Atom', value: 'o'},
                        to: {
                          id: 3,
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
    );
  });

  it('creates a DFA from an alternate', () => {
    expect(
      NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a|b|c/)))),
    ).toEqual({
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'c'},
          to: {
            id: 1,
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
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 3,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('creates a DFA from a character class', () => {
    expect(
      NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/[a-z0]/)))),
    ).toEqual({
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [],
          },
        },
        {
          on: {kind: 'Atom', value: '0'},
          to: {
            id: 2,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('creates a DFA from a "?" quantifier', () => {
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a?/))))).toEqual({
      id: 0,
      flags: START | ACCEPT,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('creates a DFA from a "*" quantifier', () => {
    const start: NFA = {
      id: 0,
      flags: (START | ACCEPT) as Flags,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [], // Circular reference will go here.
          },
        },
      ],
    };
    start.edges[0].to.edges.push({
      on: {kind: 'Atom', value: 'a'},
      to: start.edges[0].to,
    });
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a*/))))).toEqual(
      start,
    );
  });

  it('creates a DFA from a "+" quantifier', () => {
    const start: NFA = {
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    };
    start.edges[0].to.edges.push({
      on: {kind: 'Atom', value: 'a'},
      to: start.edges[0].to,
    });
    expect(NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a+/))))).toEqual(
      start,
    );
  });

  it('creates a DFA from a "{3}" quantifier', () => {
    expect(
      NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a{3}/)))),
    ).toEqual({
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'a'},
                to: {
                  id: 2,
                  flags: NONE,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'a'},
                      to: {
                        id: 3,
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
    });
  });

  it('creates a DFA from a "{2,4}" quantifier', () => {
    expect(
      NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/a{2,4}/)))),
    ).toEqual({
      id: 0,
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            id: 1,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'a'},
                to: {
                  id: 2,
                  flags: ACCEPT,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'a'},
                      to: {
                        id: 3,
                        flags: ACCEPT,
                        edges: [
                          {
                            on: {kind: 'Atom', value: 'a'},
                            to: {
                              id: 4,
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
    });
  });

  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('building DFAs from "real world" regular expressions', () => {
    it('builds a DFA for ESCAPED_CHARACTER', () => {
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/\\["\\\/bfnrt]/)))),
      ).toEqual({
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
                  on: {kind: 'Atom', value: '"'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '/'},
                  to: {
                    id: 3,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '\\'},
                  to: {
                    id: 4,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'b'},
                  to: {
                    id: 5,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'f'},
                  to: {
                    id: 6,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'n'},
                  to: {
                    id: 7,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 'r'},
                  to: {
                    id: 8,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: 't'},
                  to: {
                    id: 9,
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

    it('builds a DFA for ESCAPED_UNICODE', () => {
      expect(
        NFAToDFA(
          removeEpsilons(regExpToNFA(compileRegExp(/\\u[0-9A-Fa-f]{4}/))),
        ),
      ).toEqual({
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
                      {
                        on: {kind: 'Range', from: '0', to: '9'},
                        to: {
                          id: 3,
                          flags: NONE,
                          edges: [
                            {
                              on: {kind: 'Range', from: '0', to: '9'},
                              to: {
                                id: 6,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'A', to: 'F'},
                              to: {
                                id: 7,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'a', to: 'f'},
                              to: {
                                id: 8,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                      {
                        on: {kind: 'Range', from: 'A', to: 'F'},
                        to: {
                          id: 4,
                          flags: NONE,
                          edges: [
                            {
                              on: {kind: 'Range', from: '0', to: '9'},
                              to: {
                                id: 6,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'A', to: 'F'},
                              to: {
                                id: 7,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'a', to: 'f'},
                              to: {
                                id: 8,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                      {
                        on: {kind: 'Range', from: 'a', to: 'f'},
                        to: {
                          id: 5,
                          flags: NONE,
                          edges: [
                            {
                              on: {kind: 'Range', from: '0', to: '9'},
                              to: {
                                id: 6,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'A', to: 'F'},
                              to: {
                                id: 7,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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
                            {
                              on: {kind: 'Range', from: 'a', to: 'f'},
                              to: {
                                id: 8,
                                flags: NONE,
                                edges: [
                                  {
                                    on: {kind: 'Range', from: '0', to: '9'},
                                    to: {
                                      id: 9,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'A', to: 'F'},
                                    to: {
                                      id: 10,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    on: {kind: 'Range', from: 'a', to: 'f'},
                                    to: {
                                      id: 11,
                                      flags: NONE,
                                      edges: [
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: '0',
                                            to: '9',
                                          },
                                          to: {
                                            id: 12,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'A',
                                            to: 'F',
                                          },
                                          to: {
                                            id: 13,
                                            flags: ACCEPT,
                                            edges: [],
                                          },
                                        },
                                        {
                                          on: {
                                            kind: 'Range',
                                            from: 'a',
                                            to: 'f',
                                          },
                                          to: {
                                            id: 14,
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

    xit('builds a DFA for EXPONENT_PART', () => {
      const start: NFA = {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: 'e'},
            to: {
              id: 1,
              flags: NONE,
              edges: [],
            },
          },
          {
            on: {kind: 'Atom', value: 'E'},
            to: {
              id: 2,
              flags: NONE,
              edges: [
                {
                  on: {kind: 'Atom', value: '+'},
                  to: {
                    id: 3,
                    flags: NONE,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Atom', value: '-'},
                  to: {
                    id: 4,
                    flags: NONE,
                    edges: [],
                  },
                },
                {
                  on: {kind: 'Range', from: '0', to: '9'},
                  to: {
                    id: 5,
                    flags: ACCEPT,
                    edges: [], // Circular reference will go here.
                  },
                },
              ],
            },
          },
        ],
      };
      start.edges[1].to.edges[2].to.edges.push({
        on: {kind: 'Range', from: '0', to: '9'},
        to: start.edges[1].to.edges[2].to,
      });
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/[eE][+-]?\d+/)))),
      ).toEqual(start);
    });

    xit('builds a DFA for FRACTIONAL_PART', () => {
      const start: NFA = {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: '.'},
            to: {
              id: 1,
              flags: NONE,
              edges: [
                {
                  on: {kind: 'Range', from: '0', to: '9'},
                  to: {
                    id: 2,
                    flags: ACCEPT,
                    edges: [], // Circular reference will go here.
                  },
                },
              ],
            },
          },
        ],
      };
      start.edges[0].to.edges[0].to.edges.push({
        on: {kind: 'Range', from: '0', to: '9'},
        to: start.edges[0].to.edges[0].to,
      });
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/\.\d+/)))),
      ).toEqual(start);
    });

    xit('builds a DFA for INTEGER_PART', () => {
      const start: NFA = {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: '-'},
            to: {
              id: 1,
              // TODO: confirm that the existence of this state isn't indicative of a bug...
              // (I strongly suspect that it is)
              // TODO: alternatively, confirm that dead-state removal removes this kind of state
              flags: NONE,
              edges: [],
            },
          },
          {
            on: {kind: 'Atom', value: '0'},
            to: {
              id: 2,
              flags: ACCEPT,
              edges: [],
            },
          },
          {
            on: {kind: 'Range', from: '1', to: '9'},
            to: {
              id: 3,
              flags: ACCEPT,
              edges: [
                {
                  on: {kind: 'Range', from: '0', to: '9'},
                  to: {
                    id: 4,
                    flags: ACCEPT,
                    edges: [], // Circular references will go here.
                  },
                },
              ],
            },
          },
        ],
      };
      start.edges[2].to.edges[0].to.edges.push({
        on: {kind: 'Range', from: '0', to: '9'},
        to: start.edges[2].to.edges[0].to,
      });
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/-?(0|[1-9]\d*)/)))),
      ).toEqual(start);
    });

    it('builds a DFA for LINE_TERMINATOR', () => {
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/\n|\r\n|\r/)))),
      ).toEqual({
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: '\r'},
            to: {
              id: 1,
              flags: ACCEPT,
              edges: [
                {
                  on: {kind: 'Atom', value: '\n'},
                  to: {
                    id: 3,
                    flags: ACCEPT,
                    edges: [],
                  },
                },
              ],
            },
          },
          {
            on: {kind: 'Atom', value: '\n'},
            to: {
              id: 2,
              flags: ACCEPT,
              edges: [],
            },
          },
        ],
      });
    });

    it('builds a DFA for SOURCE_CHARACTER', () => {
      expect(
        NFAToDFA(
          removeEpsilons(
            regExpToNFA(compileRegExp(/[\u0009\u000a\u000d\u0020-\uffff]/)),
          ),
        ),
      ).toEqual({
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Range', from: ' ', to: '\uffff'},
            to: {
              id: 1,
              flags: ACCEPT,
              edges: [],
            },
          },
          {
            on: {kind: 'Atom', value: '\r'},
            to: {
              id: 2,
              flags: ACCEPT,
              edges: [],
            },
          },
          {
            on: {kind: 'Range', from: '\t', to: '\n'},
            to: {
              id: 3,
              flags: ACCEPT,
              edges: [],
            },
          },
        ],
      });
    });

    xit('builds a DFA for NAME', () => {
      const start: NFA = {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Range', from: 'a', to: 'z'},
            to: {
              id: 1,
              flags: NONE,
              edges: [],
            },
          },
          {
            on: {kind: 'Atom', value: '_'},
            to: {
              id: 2,
              flags: NONE,
              edges: [],
            },
          },
          {
            on: {kind: 'Range', from: 'A', to: 'Z'},
            to: {
              id: 3,
              flags: ACCEPT,
              edges: [
                {
                  on: {kind: 'Range', from: '0', to: '9'},
                  to: {
                    id: 4,
                    flags: ACCEPT,
                    edges: [], // Circular references will go here.
                  },
                },
                {
                  on: {kind: 'Range', from: 'A', to: 'Z'},
                  to: {
                    id: 5,
                    flags: ACCEPT,
                    edges: [], // Circular references will go here.
                  },
                },
                {
                  on: {kind: 'Atom', value: '_'},
                  to: {
                    id: 6,
                    flags: ACCEPT,
                    edges: [], // Circular references will go here.
                  },
                },
                {
                  on: {kind: 'Range', from: 'a', to: 'z'},
                  to: {
                    id: 7,
                    flags: ACCEPT,
                    edges: [], // Circular references will go here.
                  },
                },
              ],
            },
          },
        ],
      };
      start.edges[2].to.edges[0].to.edges.push(
        {
          on: {kind: 'Range', from: '0', to: '9'},
          to: start.edges[2].to.edges[0].to,
        },
        {
          on: {kind: 'Range', from: 'A', to: 'Z'},
          to: start.edges[2].to.edges[1].to,
        },
        {
          on: {kind: 'Atom', value: '_'},
          to: start.edges[2].to.edges[2].to,
        },
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: start.edges[2].to.edges[3].to,
        },
      );
      start.edges[2].to.edges[1].to.edges.push(
        {
          on: {kind: 'Range', from: '0', to: '9'},
          to: start.edges[2].to.edges[0].to,
        },
        {
          on: {kind: 'Range', from: 'A', to: 'Z'},
          to: start.edges[2].to.edges[1].to,
        },
        {
          on: {kind: 'Atom', value: '_'},
          to: start.edges[2].to.edges[2].to,
        },
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: start.edges[2].to.edges[3].to,
        },
      );
      start.edges[2].to.edges[2].to.edges.push(
        {
          on: {kind: 'Range', from: '0', to: '9'},
          to: start.edges[2].to.edges[0].to,
        },
        {
          on: {kind: 'Range', from: 'A', to: 'Z'},
          to: start.edges[2].to.edges[1].to,
        },
        {
          on: {kind: 'Atom', value: '_'},
          to: start.edges[2].to.edges[2].to,
        },
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: start.edges[2].to.edges[3].to,
        },
      );
      start.edges[2].to.edges[3].to.edges.push(
        {
          on: {kind: 'Range', from: '0', to: '9'},
          to: start.edges[2].to.edges[0].to,
        },
        {
          on: {kind: 'Range', from: 'A', to: 'Z'},
          to: start.edges[2].to.edges[1].to,
        },
        {
          on: {kind: 'Atom', value: '_'},
          to: start.edges[2].to.edges[2].to,
        },
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: start.edges[2].to.edges[3].to,
        },
      );
      expect(
        NFAToDFA(
          removeEpsilons(regExpToNFA(compileRegExp(/[_A-Za-z][_0-9A-Za-z]*/))),
        ),
      ).toEqual(start);
    });

    it('builds a DFA for WHITESPACE', () => {
      const start: NFA = {
        id: 0,
        flags: START,
        edges: [
          {
            on: {kind: 'Atom', value: ' '},
            to: {
              id: 1,
              flags: ACCEPT,
              edges: [], // Circular references will go here.
            },
          },
          {
            on: {kind: 'Atom', value: '\t'},
            to: {
              id: 2,
              flags: ACCEPT,
              edges: [], // Circular references will go here.
            },
          },
        ],
      };
      start.edges[0].to.edges.push(
        {
          on: {kind: 'Atom', value: ' '},
          to: start.edges[0].to,
        },
        {
          on: {kind: 'Atom', value: '\t'},
          to: start.edges[1].to,
        },
      );
      start.edges[1].to.edges.push(
        {
          on: {kind: 'Atom', value: ' '},
          to: start.edges[0].to,
        },
        {
          on: {kind: 'Atom', value: '\t'},
          to: start.edges[1].to,
        },
      );
      expect(
        NFAToDFA(removeEpsilons(regExpToNFA(compileRegExp(/[\t ]+/)))),
      ).toEqual(start);
    });
  });
});
