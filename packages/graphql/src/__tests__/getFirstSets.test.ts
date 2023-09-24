// These tests used to live in `@masochist/parser`, where `getFirstSets` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {
  getFirstSets,
  stringifySymbolSets,
} from '@masochist/parser/src/internal';
import {describe, expect, it} from 'bun:test';

import {unaugmentedGrammar} from '../document';

describe('getFirstSets()', () => {
  it('produces first sets for the GraphQL grammar', () => {
    expect(
      '\n' + stringifySymbolSets(getFirstSets(unaugmentedGrammar)),
    ).toMatchSnapshot();
  });
});
