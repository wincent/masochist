import {getParser} from '@masochist/parser/src/internal';

import Bun from 'bun';
import {describe, expect, it} from 'bun:test';
import path from 'path';

import lexer from '../lexer';
import parseSchema from '../parseSchema';
import {grammar, table} from '../schema';

describe('parse()', async () => {
  // We run these tests against a fresh copy of the parser, derived at runtime
  // from "schema.grammar", but also against a copy of the parser as written
  // to "parseSchema.ts". This allows us to do hacky things like inject debug
  // statements into the parser on disk for trouble-shooting purposes, if
  // needed.
  describe.each([[
    'parser dynamically derived from grammar',
    await getParser(grammar, table, lexer),
  ], ['parser persisted to disk', parseSchema]])(
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

          expect(() => parse(input)).toThrow(
            'SCHEMA type requires a "query" operation type',
          );
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

          expect(() => parse(input)).toThrow(
            'operation types may only appear once each in SCHEMA type',
          );
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
            members: ['Article', 'Page', 'Post', 'Snippet'],
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
            members: ['Article', 'Page', 'Post', 'Snippet'],
            description:
              'A piece of content (an Article, a Page, a Post, or a Snippet)',
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
            members: ['Article', 'Page', 'Post', 'Snippet'],
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
            members: ['Article', 'Page', 'Post', 'Snippet'],
            description:
              'A piece of content (an Article, a Page, a Post, or a Snippet)',
          }],
        });
      });

      it('parses an object type', () => {
        const input = `
          type History {
            url: String!
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'OBJECT_TYPE',
            name: 'History',
            implements: [],
            fields: [{
              kind: 'FIELD',
              name: 'url',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'String',
                },
              },
            }],
          }],
        });
      });

      it('parses an object type with descriptions', () => {
        const input = `
          """
          Revision history for the object
          """
          type History {
            """
            URL showing revision history for the object
            """
            url: String!
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'OBJECT_TYPE',
            name: 'History',
            description: 'Revision history for the object',
            implements: [],
            fields: [{
              kind: 'FIELD',
              name: 'url',
              description: 'URL showing revision history for the object',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'String',
                },
              },
            }],
          }],
        });
      });

      it('parses an object type with an "implements" keyword', () => {
        const input = `
          """
          A blog post
          """
          type Post implements Node & Tagged & Versioned {
            """
            The ID of an object
            """
            id: ID!

            """
            The blog post's title
            """
            title: String
            body: Markup!

            """
            Estimate of time necessary to read the post, in minutes
            """
            readTime: Int!

            """
            Succinct summary of the post content
            """
            description: String

            """
            URL for the post
            """
            url: String!
            history: History!
            tags: [TagName!]!

            """
            When the content was first created
            """
            createdAt: DateTime

            """
            When the content was last updated
            """
            updatedAt: DateTime
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'OBJECT_TYPE',
            name: 'Post',
            description: 'A blog post',
            implements: ['Node', 'Tagged', 'Versioned'],
            fields: [{
              kind: 'FIELD',
              name: 'id',
              description: 'The ID of an object',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'ID',
                },
              },
            }, {
              kind: 'FIELD',
              name: 'title',
              description: "The blog post's title",
              arguments: [],
              type: {
                kind: 'NAMED_TYPE',
                name: 'String',
              },
            }, {
              kind: 'FIELD',
              name: 'body',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'Markup',
                },
              },
            }, {
              kind: 'FIELD',
              name: 'readTime',
              description:
                'Estimate of time necessary to read the post, in minutes',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'Int',
                },
              },
            }, {
              kind: 'FIELD',
              name: 'description',
              description: 'Succinct summary of the post content',
              arguments: [],
              type: {
                kind: 'NAMED_TYPE',
                name: 'String',
              },
            }, {
              kind: 'FIELD',
              name: 'url',
              description: 'URL for the post',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'String',
                },
              },
            }, {
              kind: 'FIELD',
              name: 'history',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'History',
                },
              },
            }, {
              kind: 'FIELD',
              name: 'tags',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'LIST_TYPE',
                  type: {
                    kind: 'NON_NULL_TYPE',
                    type: {
                      kind: 'NAMED_TYPE',
                      name: 'TagName',
                    },
                  },
                },
              },
            }, {
              kind: 'FIELD',
              name: 'createdAt',
              description: 'When the content was first created',
              arguments: [],
              type: {
                kind: 'NAMED_TYPE',
                name: 'DateTime',
              },
            }, {
              kind: 'FIELD',
              name: 'updatedAt',
              description: 'When the content was last updated',
              arguments: [],
              type: {
                kind: 'NAMED_TYPE',
                name: 'DateTime',
              },
            }],
          }],
        });
      });

      it('parses an enum type', () => {
        const input = `
          enum MARKUP_FORMAT_TYPE {
            C
            HTML
            M
            MD
            PATCH
            RB
            SH
            TXT
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'ENUM_TYPE',
            name: 'MARKUP_FORMAT_TYPE',
            values: [{
              kind: 'ENUM_VALUE',
              name: 'C',
            }, {
              kind: 'ENUM_VALUE',
              name: 'HTML',
            }, {
              kind: 'ENUM_VALUE',
              name: 'M',
            }, {
              kind: 'ENUM_VALUE',
              name: 'MD',
            }, {
              kind: 'ENUM_VALUE',
              name: 'PATCH',
            }, {
              kind: 'ENUM_VALUE',
              name: 'RB',
            }, {
              kind: 'ENUM_VALUE',
              name: 'SH',
            }, {
              kind: 'ENUM_VALUE',
              name: 'TXT',
            }],
          }],
        });
      });

      it('parses an enum type with descriptions', () => {
        const input = `
          """
          Floop borgen.
          """
          enum BIMBOM {
            """
            ROFLMAO.
            """
            CROOP
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'ENUM_TYPE',
            name: 'BIMBOM',
            description: 'Floop borgen.',
            values: [{
              kind: 'ENUM_VALUE',
              name: 'CROOP',
              description: 'ROFLMAO.',
            }],
          }],
        });
      });

      it('rejects an enum type with a banned word', () => {
        const input = `
          enum MY_BAD {
            THING
            false
          }
        `;

        expect(() => parse(input)).toThrow(
          'enum values may not include "true", "false" or "null"',
        );
      });

      it('parses an interface', () => {
        const input = `
          """
          An object with an ID
          """
          interface Node {
            """
            The id of the object.
            """
            id: ID!
          }
        `;

        expect(parse(input)).toEqual({
          kind: 'TYPE_SYSTEM_DOCUMENT',
          definitions: [{
            kind: 'INTERFACE',
            name: 'Node',
            description: 'An object with an ID',
            fields: [{
              kind: 'FIELD',
              name: 'id',
              description: 'The id of the object.',
              arguments: [],
              type: {
                kind: 'NON_NULL_TYPE',
                type: {
                  kind: 'NAMED_TYPE',
                  name: 'ID',
                },
              },
            }],
          }],
        });
      });

      it('parses the schema corpus', async () => {
        const source = await Bun.file(
          path.join(import.meta.dir, '../../../../support/schema.graphql'),
        ).text();

        expect(parse(source)).toMatchSnapshot();
      });
    },
  );
});
