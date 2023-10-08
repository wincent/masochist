import {getParser} from '@masochist/parser/src/internal';

import Bun from 'bun';
import {describe, expect, it} from 'bun:test';
import path from 'path';

import parseSchema from '../parseSchema';
import {grammar, table} from '../schema';
import lexer from '../lexer';

describe('parse()', async () => {
  // We run these tests against a fresh copy of the parser, derived at runtime
  // from "schema.grammar", but also against a copy of the parser as written
  // to "parseSchema.ts". This allows us to do hacky things like inject debug
  // statements into the parser on disk for trouble-shooting purposes, if
  // needed.
  describe.each([[
    'parser dynamically derived from grammar',
    await getParser(grammar, table, lexer),
  ], [
    'parser persisted to disk',
    parseSchema,
  ]])(
    '%s',
    (_description, parse) => {
      describe('parsing schema definitions', () => {
        it('parses a schema definition', () => {
          const input = `
            schema {
              query: MyQueryRootType
              mutation: MyMutationRootType
              subscription: MySubscriptionRootType
            }
          `;

          expect(parse(input)).toEqual({
            kind: 'TYPE_SYSTEM_DOCUMENT',
            definitions: [{
              kind: 'SCHEMA',
              query: 'MyQueryRootType',
              mutation: 'MyMutationRootType',
              subscription: 'MySubscriptionRootType',
            }],
          });
        });

        it('parses a schema definition with a description', () => {
          const input = `
            """
            Something very important here.
            """
            schema {
              query: MyQueryRootType
              mutation: MyMutationRootType
              subscription: MySubscriptionRootType
            }
          `;

          expect(parse(input)).toEqual({
            kind: 'TYPE_SYSTEM_DOCUMENT',
            definitions: [{
              kind: 'SCHEMA',
              description: 'Something very important here.',
              query: 'MyQueryRootType',
              mutation: 'MyMutationRootType',
              subscription: 'MySubscriptionRootType',
            }],
          });
        });

        it('requires a query operation type', () => {
          const input = `
            schema {
              mutation: MyMutationRootType
              subscription: MySubscriptionRootType
            }
          `;

          expect(() => parse(input)).toThrow('SCHEMA type requires a "query" operation type');
        });

        it('disallows repeated types', () => {
          const input = `
            schema {
              query: MyQueryRootType
              mutation: MyMutationRootType
              mutation: MyMutationRootType
              subscription: MySubscriptionRootType
            }
          `;

          expect(() => parse(input)).toThrow('operation types may only appear once each in SCHEMA type');
        });
      });

      it('parses a scalar type definition', () => {
        const input = `scalar DateTime`;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'SCALAR',
            name: 'DateTime',
          }],
        });
      });

      it('parses a scalar type definition with a description', () => {
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

      it('parses a union type definition', () => {
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

      it('parses a union type definition with a description', () => {
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

      it('parses a union type definition with optional leading separator', () => {
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

      it('parses a union type definition with a description and optional leading separator', () => {
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
    },
  );
});
