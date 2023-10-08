import {getParser} from '@masochist/parser/src/internal';

import Bun from 'bun';
import {beforeAll, describe, expect, it} from 'bun:test';
import path from 'path';

import {grammar, table} from '../schema';
import lexer from '../lexer';

describe('parse()', () => {
  let parse: Awaited<ReturnType<typeof getParser>>;

  beforeAll(async () => {
    parse = await getParser(grammar, table, lexer);
  });

  it('parses a scalar type', () => {
    const input = `scalar DateTime`;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'SCALAR',
        name: 'DateTime',
      }],
    });
  });

  it('parses a scalar type with a description', () => {
    const input = `
      """
      A JSON-style (ISO 8601) date
      """
      scalar DateTime
    `;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'SCALAR',
        name: 'DateTime',
        description: 'A JSON-style (ISO 8601) date',
      }],
    });
  });

  it('parses a union type', () => {
    const input = `union Content = Article | Page | Post | Snippet`;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'UNION',
        name: 'Content',
        members: [
          'Article',
          'Page',
          'Post',
          'Snippet',
        ],
      }],
    });
  });

  it('parses a union type with a description', () => {
    const input = `
      """
      A piece of content (an Article, a Page, a Post, or a Snippet)
      """
      union Content = Article | Page | Post | Snippet
    `;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'UNION',
        name: 'Content',
        members: [
          'Article',
          'Page',
          'Post',
          'Snippet',
        ],
        description: 'A piece of content (an Article, a Page, a Post, or a Snippet)',
      }],
    });
  });

  it('parses a union type with optional leading separator', () => {
    const input = `
      union Content =
        | Article
        | Page
        | Post
        | Snippet
    `;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'UNION',
        name: 'Content',
        members: [
          'Article',
          'Page',
          'Post',
          'Snippet',
        ],
      }],
    });
  });

  it('parses a union type with a description and optional leading separator', () => {
    const input = `
      """
      A piece of content (an Article, a Page, a Post, or a Snippet)
      """
      union Content =
        | Article
        | Page
        | Post
        | Snippet
    `;

    expect(parse(input)).toEqual({
      kind: 'TYPE_SYSTEM_DOCUMENT',
      definitions: [{
        kind: 'UNION',
        name: 'Content',
        members: [
          'Article',
          'Page',
          'Post',
          'Snippet',
        ],
        description: 'A piece of content (an Article, a Page, a Post, or a Snippet)',
      }],
    });
  });
});
