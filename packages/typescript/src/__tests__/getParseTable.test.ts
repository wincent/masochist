// These tests used to live in `@masochist/parser`, where `getParseTable` is
// defined, but they depend on artifacts produced by `@masochist/typescript`, so
// we've moved them in here to avoid a circular dependency.

import {stringifyParseTable} from '@masochist/parser/src/internal';
import {describe, expect, it} from 'bun:test';

import {table} from '../statement';

describe('getParseTable()', () => {
  it('returns a ParseTable for the TypeScript grammar', () => {
    expect(stringifyParseTable(table)).toMatchSnapshot();
  });
});
