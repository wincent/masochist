import {describe, expect, it} from 'bun:test';

import compileRegExp from '../../compileRegExp';
import {ACCEPT, NONE, START} from '../NFA';
import regExpToNFA from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';

import type {Flags, NFA} from '../NFA';

describe('removeEpsilons()', () => {
  it('does nothing to an NFA created from an atom', () => {
    // No epsilons to remove.
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a/)))).toEqual({
      id: 0,
      flags: START,
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
    });
  });

  it('does nothing to an NFA created from an "anything" dot', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/./)))).toEqual({
      id: 0,
      flags: START,
      edges: [{
        on: {kind: 'Anything'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
    });
  });

  it('removes epsilons from an NFA created from a sequence', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/foo/)))).toEqual({
      id: 0,
      flags: START,
      edges: [{
        on: {kind: 'Atom', value: 'f'},
        to: {
          id: 1,
          flags: NONE,
          edges: [{
            on: {kind: 'Atom', value: 'o'},
            to: {
              id: 3,
              flags: NONE,
              edges: [{
                on: {kind: 'Atom', value: 'o'},
                to: {
                  id: 5,
                  flags: ACCEPT,
                  edges: [],
                },
              }],
            },
          }],
        },
      }],
    });
  });

  it('removes epsilons from an NFA created from an alternate', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a|b|c/)))).toEqual({
      id: 6,
      flags: START,
      edges: [{
        on: {kind: 'Atom', value: 'c'},
        to: {
          id: 5,
          flags: ACCEPT,
          edges: [],
        },
      }, {
        on: {kind: 'Atom', value: 'b'},
        to: {
          id: 3,
          flags: ACCEPT,
          edges: [],
        },
      }, {
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
    });
  });

  it('removes epsilons from an NFA created from a character class', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/[a-z0]/)))).toEqual({
      id: 4,
      flags: START,
      edges: [{
        on: {kind: 'Range', from: 'a', to: 'z'},
        to: {
          id: 3,
          flags: ACCEPT,
          edges: [],
        },
      }, {
        on: {kind: 'Atom', value: '0'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
    });
  });

  it('removes epsilons from an NFA created with a "?" quantifier', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a?/)))).toEqual({
      id: 0,
      flags: START | ACCEPT,
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
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
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
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
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: ACCEPT,
          edges: [],
        },
      }],
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
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: NONE,
          edges: [{
            on: {kind: 'Atom', value: 'a'},
            to: {
              id: 3,
              flags: NONE,
              edges: [{
                on: {kind: 'Atom', value: 'a'},
                to: {
                  id: 5,
                  flags: ACCEPT,
                  edges: [],
                },
              }],
            },
          }],
        },
      }],
    });
  });

  it('removes epsilons from an NFA created with a "{2,4}" quantifier', () => {
    expect(removeEpsilons(regExpToNFA(compileRegExp(/a{2,4}/)))).toEqual({
      id: 0,
      flags: START,
      edges: [{
        on: {kind: 'Atom', value: 'a'},
        to: {
          id: 1,
          flags: NONE,
          edges: [{
            on: {kind: 'Atom', value: 'a'},
            to: {
              id: 3,
              flags: ACCEPT,
              edges: [{
                on: {kind: 'Atom', value: 'a'},
                to: {
                  id: 5,
                  flags: ACCEPT,
                  edges: [{
                    on: {kind: 'Atom', value: 'a'},
                    to: {
                      id: 7,
                      flags: ACCEPT,
                      edges: [],
                    },
                  }],
                },
              }],
            },
          }],
        },
      }],
    });
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/NFA/__tests__/removeEpsilons.test.ts`.
});
