// These tests used to live in `@masochist/parser`, where
// `extendedGrammarForItemSets` is defined, but they depend on artifacts
// produced by `@masochist/graphql`, so we've moved them in here to avoid a
// circular dependency.

import {describe, expect, it} from 'bun:test';
import {getItemSets} from '@masochist/parser';
import {
  extendedGrammarForItemSets,
  stringifyGrammar,
} from '@masochist/parser/src/internal';

import {unaugmentedGrammar} from '../document';

describe('extendedGrammarForItemSets()', () => {
  it('returns an extended grammar for the GraphQL grammar', () => {
    const itemSets = getItemSets(unaugmentedGrammar);
    const extendedGrammar = extendedGrammarForItemSets(
      itemSets,
      unaugmentedGrammar,
    );
    expect('\n' + stringifyGrammar(extendedGrammar)).toMatchSnapshot();
  });
});
