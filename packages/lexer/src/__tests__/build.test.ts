import {describe, expect, it} from 'bun:test';
import {print} from '@masochist/codegen';

import build from '../build';
import definition from '../definition';

import type {Stats} from '../build';

describe('build()', () => {
  it('builds an AST', () => {
    const ast = build(definition);
    expect(print(ast)).toMatchSnapshot();
  });

  it('reports stats', () => {
    const stats: Stats = {};

    build(definition, stats);

    expect(stats['startStates']).toBe(1);
    expect(stats['acceptStates']).toBe(36);
    expect(stats['totalStates']).toBe(57);
    expect(stats['ignoredTokens']).toBe(4);
    expect(stats['totalTokens']).toBe(36);
    expect(stats['inlineableAcceptStates']).toBe(16);
    expect(stats['inlinedAcceptStates']).toBe(16);
    expect(stats['inlinedSelfTransitions']).toBe(10);
  });
});
