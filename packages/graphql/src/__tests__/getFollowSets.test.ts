// These tests used to live in `@masochist/parser`, where `getFollowSets` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {getItemSets} from '@masochist/parser';
import {
  extendedGrammarForItemSets,
  getFollowSets,
  stringifySymbolSets,
} from '@masochist/parser/src/internal';
import {describe, expect, it} from 'bun:test';

import {unaugmentedGrammar} from '../document';

describe('getFollowSets()', () => {
  it('produces follow sets for the GraphQL grammar', () => {
    expect(
      '\n' + stringifySymbolSets(getFollowSets(unaugmentedGrammar)),
    ).toMatchSnapshot();
  });

  it('produces follow sets for the extended GraphQL grammar', () => {
    const itemSets = getItemSets(unaugmentedGrammar);
    const extendedGrammar = extendedGrammarForItemSets(
      itemSets,
      unaugmentedGrammar,
    );
    expect(
      '\n' + stringifySymbolSets(getFollowSets(extendedGrammar)),
    ).toMatchSnapshot();
  });
});