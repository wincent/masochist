import compileRegExp from '../compileRegExp';
import {NUMBER} from '../definition';

describe('compileRegExp()', () => {
  it('produces an optimized AST', () => {
    // Show that we merge character classes and sequences.
    expect(compileRegExp(/([05]|[aj])(foo)(bar)/)).toEqual({
      kind: 'Sequence',
      children: [
        {
          kind: 'CharacterClass',
          children: [
            {kind: 'Atom', value: '0'},
            {kind: 'Atom', value: '5'},
            {kind: 'Atom', value: 'a'},
            {kind: 'Atom', value: 'j'},
          ],
          negated: false,
        },
        {kind: 'Atom', value: 'f'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'o'},
        {kind: 'Atom', value: 'b'},
        {kind: 'Atom', value: 'a'},
        {kind: 'Atom', value: 'r'},
      ],
    });
  });

  it('can compile NUMBER', () => {
    // An example of a relatively complicated RegExp with groups and different
    // kinds of repetition.
    expect(compileRegExp(NUMBER)).toEqual({
      kind: 'Sequence',
      children: [
        {
          kind: 'Repeat',
          child: {kind: 'Atom', value: '-'},
          minimum: 0,
          maximum: 1,
        },
        {
          kind: 'Alternate',
          children: [
            {kind: 'Atom', value: '0'},
            {
              kind: 'Sequence',
              children: [
                {kind: 'Range', from: '1', to: '9'},
                {
                  kind: 'Repeat',
                  child: {kind: 'Range', from: '0', to: '9'},
                  minimum: 0,
                  maximum: Infinity,
                },
              ],
            },
          ],
        },
        {
          kind: 'Repeat',
          child: {
            kind: 'Alternate',
            children: [
              {
                kind: 'Sequence',
                children: [
                  {kind: 'Atom', value: '.'},
                  {
                    kind: 'Repeat',
                    child: {kind: 'Range', from: '0', to: '9'},
                    minimum: 1,
                    maximum: Infinity,
                  },
                  {
                    kind: 'CharacterClass',
                    children: [
                      {kind: 'Atom', value: 'E'},
                      {kind: 'Atom', value: 'e'},
                    ],
                    negated: false,
                  },
                  {
                    kind: 'Repeat',
                    child: {
                      kind: 'CharacterClass',
                      children: [
                        {kind: 'Atom', value: '+'},
                        {kind: 'Atom', value: '-'},
                      ],
                      negated: false,
                    },
                    minimum: 0,
                    maximum: 1,
                  },
                  {
                    kind: 'Repeat',
                    child: {kind: 'Range', from: '0', to: '9'},
                    minimum: 1,
                    maximum: Infinity,
                  },
                ],
              },
              {
                kind: 'Sequence',
                children: [
                  {
                    kind: 'CharacterClass',
                    children: [
                      {kind: 'Atom', value: 'E'},
                      {kind: 'Atom', value: 'e'},
                    ],
                    negated: false,
                  },
                  {
                    kind: 'Repeat',
                    child: {
                      kind: 'CharacterClass',
                      children: [
                        {kind: 'Atom', value: '+'},
                        {kind: 'Atom', value: '-'},
                      ],
                      negated: false,
                    },
                    minimum: 0,
                    maximum: 1,
                  },
                  {
                    kind: 'Repeat',
                    child: {kind: 'Range', from: '0', to: '9'},
                    minimum: 1,
                    maximum: Infinity,
                  },
                ],
              },
              {
                kind: 'Sequence',
                children: [
                  {kind: 'Atom', value: '.'},
                  {
                    kind: 'Repeat',
                    child: {kind: 'Range', from: '0', to: '9'},
                    minimum: 1,
                    maximum: Infinity,
                  },
                ],
              },
            ],
          },
          minimum: 0,
          maximum: 1,
        },
      ],
    });
  });
});
