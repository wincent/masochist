import compileRegExp from '../compileRegExp';
import regExpToNFA from '../regExpToNFA';

describe('regExpToNFA()', () => {
  it('creates an NFA from an atom', () => {
    expect(regExpToNFA(compileRegExp(/a/))).toEqual({
      kind: 'Start',
      edges: [
        {
          on: {kind: 'Atom', value: 'a'},
          to: {
            kind: 'Accept',
            edges: [],
          },
        },
      ],
    });
  });

  it('creates an NFA from a sequence', () => {
    expect(regExpToNFA(compileRegExp(/foo/))).toEqual({
      kind: 'Start',
      edges: [
        {
          on: {kind: 'Atom', value: 'f'},
          to: {
            kind: 'Internal',
            edges: [
              {
                on: null,
                to: {
                  kind: 'Internal',
                  edges: [
                    {
                      on: {kind: 'Atom', value: 'o'},
                      to: {
                        kind: 'Internal',
                        edges: [
                          {
                            on: null,
                            to: {
                              kind: 'Internal',
                              edges: [
                                {
                                  on: {kind: 'Atom', value: 'o'},
                                  to: {
                                    kind: 'Accept',
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
});
