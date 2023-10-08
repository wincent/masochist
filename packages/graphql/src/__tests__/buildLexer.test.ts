// These tests used to live in `@masochist/lexer`, where `build` is defined, but
// they depend on artifacts produced by `@masochist/graphql`, so we've moved
// them in here to avoid a circular dependency.

import {print} from '@masochist/codegen';
import {build} from '@masochist/lexer';
import {describe, expect, it} from 'bun:test';

import lexer from '../lexer';

import type {Stats} from '@masochist/lexer';

describe('build()', () => {
  it('builds an AST', async () => {
    const ast = await build(lexer);
    expect(print(ast)).toMatchSnapshot();
  });

  it('reports stats', async () => {
    const stats: Stats = {};

    await build(lexer, stats);

    expect(stats['startStates']).toBe(1);
    expect(stats['acceptStates']).toBe(101);
    expect(stats['totalStates']).toBe(122);
    expect(stats['ignoredTokens']).toBe(4);
    expect(stats['totalTokens']).toBe(101);
    expect(stats['inlineableAcceptStates']).toBe(16);
    expect(stats['inlinedAcceptStates']).toBe(16);
    expect(stats['inlinedSelfTransitions']).toBe(10);
  });
});
