import compileRegExp from '../compileRegExp';
import regExpToNFA, {ACCEPT, NONE, START} from '../regExpToNFA';

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
      id: 7,
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
                  flags: NONE,
                  edges: [
                    {
                      on: null,
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
                  flags: NONE,
                  edges: [
                    {
                      on: null,
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
                  flags: NONE,
                  edges: [
                    {
                      on: null,
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
    });
  });
});
