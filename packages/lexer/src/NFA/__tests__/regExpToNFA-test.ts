import compileRegExp from '../../compileRegExp';
import {NUMBER} from '../../lexer';
import {ACCEPT, NONE, START} from '../NFA';
import regExpToNFA from '../regExpToNFA';
import toTransitionTable from '../toTransitionTable';

import type {Flags, NFA} from '../NFA';

describe('regExpToNFA()', () => {
  it('creates an NFA from an atom', () => {
    expect(regExpToNFA(compileRegExp(/a/))).toEqual({
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
    });
  });

  it('creates an NFA from an "anything" dot', () => {
    expect(regExpToNFA(compileRegExp(/./))).toEqual({
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

  it('creates an NFA from a sequence', () => {
    expect(regExpToNFA(compileRegExp(/foo/))).toEqual({
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
                on: null,
                to: {
                  id: 2,
                  flags: NONE,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'o'},
                      to: {
                        id: 3,
                        flags: NONE,
                        edges: [
                          {
                            on: null,
                            to: {
                              id: 4,
                              flags: NONE,
                              edges: [
                                {
                                  on: {kind: 'Atom', value: 'o'},
                                  to: {
                                    id: 5,
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
    });
  });

  it('creates an NFA from an alternate', () => {
    expect(regExpToNFA(compileRegExp(/a|b|c/))).toEqual({
      id: 6,
      flags: START,
      edges: [
        {
          on: null,
          to: {
            id: 0,
            flags: NONE,
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
          },
        },
        {
          on: null,
          to: {
            id: 2,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'b'},
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
          on: null,
          to: {
            id: 4,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'c'},
                to: {
                  id: 5,
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

  it('creates an NFA from a character class', () => {
    expect(regExpToNFA(compileRegExp(/[a-z0]/))).toEqual({
      id: 4,
      flags: START,
      edges: [
        {
          on: null,
          to: {
            id: 0,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: '0'},
                to: {
                  id: 1,
                  flags: ACCEPT,
                  edges: [],
                },
              },
            ],
          },
        },
        {
          on: null,
          to: {
            id: 2,
            flags: NONE,
            edges: [
              {
                on: {kind: 'Range', from: 'a', to: 'z'},
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
    });
  });

  it('creates an NFA with a "?" quantifier', () => {
    expect(regExpToNFA(compileRegExp(/a?/))).toEqual({
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

  it('creates an NFA with a "*" quantifier', () => {
    const start: NFA = {
      id: 2,
      flags: (START | ACCEPT) as Flags,
      edges: [
        {
          on: null,
          to: {
            id: 0,
            flags: NONE,
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
          },
        },
      ],
    };
    start.edges[0].to.edges[0].to.edges.push({on: null, to: start});
    expect(regExpToNFA(compileRegExp(/a*/))).toEqual(start);
  });

  it('creates an NFA with a "+" quantifier', () => {
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
    start.edges[0].to.edges.push({on: null, to: start});
    expect(regExpToNFA(compileRegExp(/a+/))).toEqual(start);
  });

  it('creates an NFA with a "{3}" quantifier', () => {
    expect(regExpToNFA(compileRegExp(/a{3}/))).toEqual({
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
                on: null,
                to: {
                  id: 2,
                  flags: NONE,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'a'},
                      to: {
                        id: 3,
                        flags: NONE,
                        edges: [
                          {
                            on: null,
                            to: {
                              id: 4,
                              flags: NONE,
                              edges: [
                                {
                                  on: {kind: 'Atom', value: 'a'},
                                  to: {
                                    id: 5,
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
    });
  });

  it('creates an NFA with a "{2,4}" quantifier', () => {
    expect(regExpToNFA(compileRegExp(/a{2,4}/))).toEqual({
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
                on: null,
                to: {
                  id: 2,
                  flags: NONE,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'a'},
                      to: {
                        id: 3,
                        flags: ACCEPT,
                        edges: [
                          {
                            on: null,
                            to: {
                              id: 4,
                              flags: NONE,
                              edges: [
                                {
                                  on: {kind: 'Atom', value: 'a'},
                                  to: {
                                    id: 5,
                                    flags: ACCEPT,
                                    edges: [
                                      {
                                        on: null,
                                        to: {
                                          id: 6,
                                          flags: NONE,
                                          edges: [
                                            {
                                              on: {kind: 'Atom', value: 'a'},
                                              to: {
                                                id: 7,
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
          },
        },
      ],
    });
  });

  it('creates an NFA from NUMBER', () => {
    expect(toTransitionTable(regExpToNFA(compileRegExp(NUMBER)))).toEqual({
      acceptStates: new Set([42, 25, 37, 41]),
      startStates: new Set([0]),
      transitions: [
        /* 0 */ new Map([
          ['Atom:-', new Set([1])],
          ['Epsilon', new Set([9])],
        ]),
        /* 1 */ new Map([['Epsilon', new Set([9])]]),
        /* 2 */ new Map([['Atom:0', new Set([3])]]),
        /* 3 */ new Map([['Epsilon', new Set([42])]]),
        /* 4 */ new Map([['Range:1-9', new Set([5])]]),
        /* 5 */ new Map([['Epsilon', new Set([8])]]),
        /* 6 */ new Map([['Range:0-9', new Set([7])]]),
        /* 7 */ new Map([['Epsilon', new Set([42, 8])]]),
        /* 8 */ new Map([['Epsilon', new Set([42, 6])]]),
        /* 9 */ new Map([['Epsilon', new Set([2, 4])]]),
        /* 10 */ new Map([['Atom:.', new Set([11])]]),
        /* 11 */ new Map([['Epsilon', new Set([12])]]),
        /* 12 */ new Map([['Range:0-9', new Set([13])]]),
        /* 13 */ new Map([['Epsilon', new Set([12, 18])]]),
        /* 14 */ new Map([['Atom:E', new Set([15])]]),
        /* 15 */ new Map([['Epsilon', new Set([23])]]),
        /* 16 */ new Map([['Atom:e', new Set([17])]]),
        /* 17 */ new Map([['Epsilon', new Set([23])]]),
        /* 18 */ new Map([['Epsilon', new Set([14, 16])]]),
        /* 19 */ new Map([['Atom:+', new Set([20])]]),
        /* 20 */ new Map([['Epsilon', new Set([24])]]),
        /* 21 */ new Map([['Atom:-', new Set([22])]]),
        /* 22 */ new Map([['Epsilon', new Set([24])]]),
        /* 23 */ new Map([['Epsilon', new Set([19, 21, 24])]]),
        /* 24 */ new Map([['Range:0-9', new Set([25])]]),
        /* 25 */ new Map([['Epsilon', new Set([24])]]),
        /* 26 */ new Map([['Atom:E', new Set([27])]]),
        /* 27 */ new Map([['Epsilon', new Set([35])]]),
        /* 28 */ new Map([['Atom:e', new Set([29])]]),
        /* 29 */ new Map([['Epsilon', new Set([35])]]),
        /* 30 */ new Map([['Epsilon', new Set([26, 28])]]),
        /* 31 */ new Map([['Atom:+', new Set([32])]]),
        /* 32 */ new Map([['Epsilon', new Set([36])]]),
        /* 33 */ new Map([['Atom:-', new Set([34])]]),
        /* 34 */ new Map([['Epsilon', new Set([36])]]),
        /* 35 */ new Map([['Epsilon', new Set([31, 33, 36])]]),
        /* 36 */ new Map([['Range:0-9', new Set([37])]]),
        /* 37 */ new Map([['Epsilon', new Set([36])]]),
        /* 38 */ new Map([['Atom:.', new Set([39])]]),
        /* 39 */ new Map([['Epsilon', new Set([40])]]),
        /* 40 */ new Map([['Range:0-9', new Set([41])]]),
        /* 41 */ new Map([['Epsilon', new Set([40])]]),
        /* 42 */ new Map([['Epsilon', new Set([10, 30, 38])]]),
      ],
    });
  });

  describe('regressions', () => {
    it('creates an NFA with a "?" quantifier in a sequence', () => {
      const start: NFA = {
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
                  on: null,
                  to: {
                    id: 2,
                    flags: NONE,
                    edges: [
                      {
                        on: {kind: 'Atom', value: 'b'},
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
      };
      start.edges.push({
        on: null,
        to: start.edges[0].to.edges[0].to,
      });
      expect(regExpToNFA(compileRegExp(/a?b/))).toEqual(start);
    });
  });
});
