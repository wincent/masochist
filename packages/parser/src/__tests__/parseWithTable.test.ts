import {Token} from '@masochist/lexer';
import {describe, expect, it} from 'bun:test';

import getAugmentedGrammar from '../getAugmentedGrammar';
import getItemSets from '../getItemSets';
import getParseTable from '../getParseTable';
import itemSetsToTransitionTable from '../itemSetsToTransitionTable';
import parseWithTable, {makeNode} from '../parseWithTable';
import {epsilonGrammar, subsetGrammar, toyGrammar} from './grammars';

import type {ParseTree} from '../parseWithTable';

describe('parseWithTable()', () => {
  it('parses samples for the toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);
    const itemSets = getItemSets(toyGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, toyGrammar);
    const table = getParseTable(itemSets, transitionTable, toyGrammar);

    const input = '5 = * 10';
    const tokens: Array<Token> = [
      new Token('x', 0, 1, input),
      new Token('eq', 2, 3, input),
      new Token('star', 4, 5, input),
      new Token('x', 6, 8, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('5');
    expect(tokens[3].contents).toBe('10');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [{
        kind: 'N',
        children: [
          {
            kind: 'V',
            children: [tokens[0]],
          },
          tokens[1],
          {
            kind: 'E',
            children: [{
              kind: 'V',
              children: [tokens[2], {
                kind: 'E',
                children: [{
                  kind: 'V',
                  children: [tokens[3]],
                }],
              }],
            }],
          },
        ],
      }],
    });
  });

  it('parses samples for the subset grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(subsetGrammar);
    const itemSets = getItemSets(subsetGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, subsetGrammar);
    const table = getParseTable(itemSets, transitionTable, subsetGrammar);

    const input = '{foo bar baz}';
    const tokens: Array<Token> = [
      new Token('OPENING_BRACE', 0, 1, input),
      new Token('NAME', 1, 4, input),
      new Token('NAME', 5, 8, input),
      new Token('NAME', 9, 12, input),
      new Token('CLOSING_BRACE', 12, 13, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[1].contents).toBe('foo');
    expect(tokens[2].contents).toBe('bar');
    expect(tokens[3].contents).toBe('baz');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'Document',
      children: [{
        kind: 'Definition',
        children: [{
          kind: 'ExecutableDefinition',
          children: [{
            kind: 'OperationDefinition',
            children: [{
              kind: 'Selection',
              children: [{
                kind: 'Field',
                children: [tokens[1]],
              }],
            }, {
              kind: 'Selection',
              children: [{
                kind: 'Field',
                children: [tokens[2]],
              }],
            }, {
              kind: 'Selection',
              children: [{
                kind: 'Field',
                children: [tokens[3]],
              }],
            }],
          }],
        }],
      }],
    });
  });

  it('parses samples for the epsilon grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(epsilonGrammar);
    const itemSets = getItemSets(epsilonGrammar);
    const transitionTable = itemSetsToTransitionTable(itemSets, epsilonGrammar);
    const table = getParseTable(itemSets, transitionTable, epsilonGrammar);

    // First, with optional BAR present.
    let input = 'BAR{FOO}';
    let tokens: Array<Token> = [
      new Token('BAR', 0, 3, input),
      new Token('OPEN_BRACKET', 3, 4, input),
      new Token('FOO', 4, 7, input),
      new Token('CLOSE_BRACKET', 7, 8, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('BAR');
    expect(tokens[1].contents).toBe('{');
    expect(tokens[2].contents).toBe('FOO');
    expect(tokens[3].contents).toBe('}');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [{
        kind: 'Program',
        children: [
          {
            kind: 'BarOpt',
            children: [tokens[0]],
          },
          tokens[1],
          {
            kind: 'FooList',
            children: [tokens[2]],
          },
          tokens[3],
        ],
      }],
    });

    // Now, without optional BAR.
    input = '{FOO}';
    tokens = [
      new Token('OPEN_BRACKET', 0, 1, input),
      new Token('FOO', 1, 4, input),
      new Token('CLOSE_BRACKET', 4, 5, input),
    ];

    // Just confirming that I got the manually created tokens right.
    expect(tokens[0].contents).toBe('{');
    expect(tokens[1].contents).toBe('FOO');
    expect(tokens[2].contents).toBe('}');

    expect(
      parseWithTable<ParseTree>(table, tokens, augmentedGrammar, makeNode),
    ).toEqual({
      kind: 'S',
      children: [{
        kind: 'Program',
        children: [
          {
            kind: 'BarOpt',
            children: [],
          },
          tokens[0],
          {
            kind: 'FooList',
            children: [tokens[1]],
          },
          tokens[2],
        ],
      }],
    });
  });

  // See also: GraphQL-based tests in `@masochist/graphql`, specifically in
  // the file `src/__tests__/parseWithTable.test.ts`.
});
