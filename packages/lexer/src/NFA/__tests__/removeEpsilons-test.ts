import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';
import visitNFA from '../visitNFA';

import type {Flags, NFA} from '../NFA';

describe('removeEpsilons()', () => {
  it('does nothing to an NFA created from an atom', () => {
    // No epsilons to remove.
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a/)))).toEqual({
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

  it('does nothing to an NFA created from an "anything" dot', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/./)))).toEqual({
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

  it('removes epsilons from an NFA created from a sequence', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/foo/)))).toEqual({
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
                  id: 3,
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
    });
  });

  it('removes epsilons from an NFA created from an alternate', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a|b|c/)))).toEqual({
      id: 6,
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'c'},
          to: {
            id: 5,
            flags: ACCEPT,
            edges: [],
          },
        },
        {
          on: {kind: 'Atom', value: 'b'},
          to: {
            id: 3,
            flags: ACCEPT,
            edges: [],
          },
        },
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

  it('removes epsilons from an NFA created from a character class', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/[a-z0]/)))).toEqual({
      id: 4,
      flags: START,
      edges: [
        {
          on: {kind: 'Range', from: 'a', to: 'z'},
          to: {
            id: 3,
            flags: ACCEPT,
            edges: [],
          },
        },
        {
          on: {kind: 'Atom', value: '0'},
          to: {
            id: 1,
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('removes epsilons from an NFA created with a "?" quantifier', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a?/)))).toEqual({
      id: 2,
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

  it('removes epsilons from an NFA created with a "*" quantifier', () => {
    // Initial NFA:
    //
    //    (2) ----- [null] -----> (0) ----- [a] -----> (1) -----> [null] -----> (2)
    //    START/                  NONE                 ACCEPT                   (circular)
    //    ACCEPT
    //
    // will transform into:
    //
    //    (2) ----- [a] -----> (1) ----- [a] -----> (1)
    //    START/               ACCEPT               (circular)
    //    ACCEPT
    const start: NFA = {
      id: 2,
      flags: (START | ACCEPT) as Flags,
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
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a*/)))).toEqual(start);
  });

  it('removes epsilons from an NFA created with a "+" quantifier', () => {
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
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a+/)))).toEqual(start);
  });

  it('removes epsilons from an NFA created with a "{3}" quantifier', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a{3}/)))).toEqual({
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
                  id: 3,
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
    });
  });

  it('removes epsilons from an NFA created with a "{2,4}" quantifier', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a{2,4}/)))).toEqual({
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
                  id: 3,
                  flags: ACCEPT,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'a'},
                      to: {
                        id: 5,
                        flags: ACCEPT,
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
    });
  });

  // RegExps taken from:
  //
  //    https://github.com/wincent/masochist/blob/d224383b088a1f44/packages/compiler/src/lex.ts
  //
  // With only modification being removing non-capturing group syntax
  // (`(?:...)`).
  //
  describe('removing epsilons from "real world" regular expressions', () => {
    it('ensures no epsilons in ESCAPED_CHARACTER', () => {
      expect(
        countEpsilons(
          removeEpsilons(regExpToNFA(compileRegExp(/\\["\\\/bfnrt]/))),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in ESCAPED_UNICODE', () => {
      expect(
        countEpsilons(
          removeEpsilons(regExpToNFA(compileRegExp(/\\u[0-9A-Fa-f]{4}/))),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in EXPONENT_PART', () => {
      expect(
        countEpsilons(
          removeEpsilons(regExpToNFA(compileRegExp(/[eE][+-]?\d+/))),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in FRACTIONAL_PART', () => {
      expect(
        countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(/\.\d+/)))),
      ).toBe(0);
    });

    it('ensures no epsilons in INTEGER_PART', () => {
      expect(
        countEpsilons(
          removeEpsilons(regExpToNFA(compileRegExp(/-?(0|[1-9]\d*)/))),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in LINE_TERMINATOR', () => {
      expect(
        countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(/\n|\r\n|\r/)))),
      ).toBe(0);
    });

    it('ensures no epsilons in SOURCE_CHARACTER', () => {
      expect(
        countEpsilons(
          removeEpsilons(
            regExpToNFA(compileRegExp(/[\u0009\u000a\u000d\u0020-\uffff]/)),
          ),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in NAME', () => {
      expect(
        countEpsilons(
          removeEpsilons(regExpToNFA(compileRegExp(/[_A-Za-z][_0-9A-Za-z]*/))),
        ),
      ).toBe(0);
    });

    it('ensures no epsilons in WHITESPACE', () => {
      expect(
        countEpsilons(removeEpsilons(regExpToNFA(compileRegExp(/[\t ]+/)))),
      ).toBe(0);
    });
  });
});

function countEpsilons(nfa: NFA): number {
  let count = 0;

  visitNFA(nfa, ({edges}) => {
    edges.forEach(({on}) => {
      if (on === null) {
        count++;
      }
    });
  });

  return count;
}

/**
 * Create a table-based printable form of an NFA, for debugging purposes.
 */
function stringify(nfa: NFA): string {
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
