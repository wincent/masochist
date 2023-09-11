// These tests used to live in `@masochist/parser`, where
// `itemSetsToTransitionTable` is defined, but they depend on artifacts produced
// by `@masochist/graphql`, so we've moved them in here to avoid a circular
// dependency.

import {describe, expect, it} from 'bun:test';
import {itemSetsToTransitionTable} from '@masochist/parser';
import {stringifyTransitionTable} from '@masochist/parser/src/internal';

import {itemSets, unaugmentedGrammar} from '../document';

describe('itemSetsToTransitionTable()', () => {
  it('returns a transition table for the GraphQL grammar', () => {
    expect(
      '\n' +
        stringifyTransitionTable(
          itemSetsToTransitionTable(itemSets, unaugmentedGrammar),
          unaugmentedGrammar,
        ),
    ).toMatchSnapshot();
  });
});
