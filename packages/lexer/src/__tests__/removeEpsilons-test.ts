import compileRegExp from '../compileRegExp';
import regExpToNFA, {ACCEPT, NONE, START} from '../regExpToNFA';
import removeEpsilons from '../removeEpsilons';

import type {Flags, NFA} from '../regExpToNFA';

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
});
