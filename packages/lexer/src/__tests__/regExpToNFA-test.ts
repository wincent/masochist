import compileRegExp from '../compileRegExp';
import regExpToNFA, {ACCEPT, NONE, START} from '../regExpToNFA';

describe('regExpToNFA()', () => {
  it('creates an NFA from an atom', () => {
    expect(regExpToNFA(compileRegExp(/a/))).toEqual({
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            flags: ACCEPT,
            edges: [],
          },
        },
      ],
    });
  });

  it('creates an NFA from a sequence', () => {
    expect(regExpToNFA(compileRegExp(/foo/))).toEqual({
      flags: START,
      edges: [
        {
          on: {kind: 'Atom', value: 'f'},
          to: {
            flags: NONE,
            edges: [
              {
                on: null,
                to: {
                  flags: NONE,
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'o'},
                      to: {
                        flags: NONE,
                        edges: [
                          {
                            on: null,
                            to: {
                              flags: NONE,
                              edges: [
                                {
                                  on: {kind: 'Atom', value: 'o'},
                                  to: {
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
    const accept = {
      flags: ACCEPT,
      edges: [],
    };
    expect(regExpToNFA(compileRegExp(/a|b|c/))).toEqual({
      flags: START,
      edges: [
        {
          on: null,
          to: {
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'a'},
                to: {
                  flags: NONE,
                  edges: [
                    {
                      on: null,
                      to: accept,
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
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'b'},
                to: {
                  flags: NONE,
                  edges: [
                    {
                      on: null,
                      to: accept,
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
            flags: NONE,
            edges: [
              {
                on: {kind: 'Atom', value: 'c'},
                to: {
                  flags: NONE,
                  edges: [
                    {
                      on: null,
                      to: accept,
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
