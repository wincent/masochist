// These tests used to live in `@masochist/lexer`, where `compileRegExp` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {compileRegExp} from '@masochist/lexer/src/internal';
import {describe, expect, it} from 'bun:test';

import {NUMBER} from '../lexer';

describe('compileRegExp()', () => {
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
