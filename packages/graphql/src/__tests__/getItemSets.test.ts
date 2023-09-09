// These tests used to live in `@masochist/parser`, where `getItemSets` is
// defined, but they depend on artifacts produced by `@masochist/graphql`, so
// we've moved them in here to avoid a circular dependency.

import {describe, expect, it} from 'bun:test';
import {stringifyItemSets} from '@masochist/parser';

import {itemSets} from '../document';

describe('getItemSets()', () => {
  it('produces item sets for the GraphQL grammar', () => {
    expect('\n' + stringifyItemSets(itemSets)).toMatchSnapshot();
  });
});
