'use strict';

import Promise from 'bluebird';
import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {Kind} from 'graphql/language';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';
import Article from './Article';
import wikify from './wikify';

class User {}

const {nodeField, nodeInterface} = nodeDefinitions(
  function resolveObjectFromID(globalId, {rootValue}) {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      // TODO: change this, obviously
      return {name: 'Greg'};
    } else if (type === 'Article') {
      return rootValue.loaders.articleLoader.load(id);
    } else {
      return null;
    }
  },
  function resolveGraphQLTypeFromObject(object) {
    if (object instanceof User) {
      return userType;
    } else if (object instanceof Article) {
      return articleType;
    } else {
      return null;
    }
  },
);

function coerceDate(value) {
  if (value instanceof Date) {
    // 1. Stringify from object to: '"2015-10-04T00:31:05.300Z"'.
    // 2. Parse to unwrap back to string: "2015-10-04T00:31:05.300Z".
    return JSON.parse(JSON.stringify(value));
  } else {
    return null;
  }
}

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A JSON-style (ISO 8601) date',
  serialize: coerceDate,
  parseValue: coerceDate,
  parseLiteral(valueAST) {
    if (valueAST.kind !== Kind.STRING) {
      return null;
    }
    const date = new Date(valueAST.value);
    if (isNaN(date.getTime())) {
      return null; // Invalid date.
    }
    if (valueAST.value !== JSON.parse(JSON.stringify(date))) {
      return null; // Invalid date format.
    }
    return date;
  },
});

const tagType = new GraphQLScalarType({
  name: 'Tag',
  description: 'A tag',
  serialize: String,
  parseValue: String,
  parseLiteral(ast) {
    return ast.kind === Kind.STRING ? ast.value : null;
  }
});

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'A person who uses the application',
  fields: () => ({
    id: globalIdField('User'),
    name: {
      type: GraphQLString,
      description: "The user's name",
    },
    articles: {
      type: articleConnection,
      description: 'Articles visible to this user',
      args: connectionArgs,
      resolve: (user, args, {rootValue}) => {
        return connectionFromPromisedArray(
          // TODO: plug-in article intex here
          rootValue.loaders.articleLoader.loadMany(['ABNF', 'OS X "must haves"']),
          args // eg. first: 10
        );
      },
    },
  }),
  interfaces: [nodeInterface],
});

const markupType = new GraphQLObjectType({
  name: 'Markup',
  description: 'The textual markup for a piece of content',
  fields: () => ({
    raw: {
      // TODO: make this non-null
      type: GraphQLString,
      description: 'Unprocessed plain-text source of the markup',
      resolve: markup => markup.raw,
    },
    format: {
      // TODO: use an enum for this
      type: GraphQLString,
      description: 'The format of the markup source',
      resolve: markup => markup.format,
    },
    html: {
      type: GraphQLString,
      description: 'HTML output of transformed markup',
      resolve(markup) {
        if (markup.format === 'wikitext') {
          // TODO: allow variables here do control format (eg base heading level
          // etc)
          // TODO: make wikify interface a little more pleasant to use
          return wikify([{wikitext: markup.raw}])
            .then(data => JSON.parse(data).results[0]);
        } else {
          throw new Error('Unsupported markup format `' + markup.format + '`');
        }
      },
    },
  }),
});

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'A wiki article',
  fields: () => ({
    id: globalIdField('Article'),
    title: {
      type: GraphQLString,
      description: "The article's title",
      resolve(article) {
        return article.title;
      }
    },
    createdAt: {
      type: DateTime,
      description: 'Date and time when article was first created',
      resolve(article) {
        return article.createdAt;
      },
    },
    updatedAt: {
      type: DateTime,
      description: 'Date and time when article was last updated',
      resolve(article) {
        return article.updatedAt;
      },
    },
    tags: {
      // TODO: make this tags{name}
      type: new GraphQLList(tagType),
      resolve(article) {
        return article.tags;
      },
    },
    body: {
      type: markupType,
      resolve(article) {
        // TODO: handle redirects
        return {
          raw: article.body,
          format: article.format,
        };
      },
    }
  }),
  interfaces: [nodeInterface],
});

var {connectionType: articleConnection} =
  connectionDefinitions({name: 'Article', nodeType: articleType});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      node: nodeField,
      viewer: {
        type: userType,
        // TODO: get actual user
        resolve: () => ({name: 'Greg'}),
      },
    }
  })
});

export default schema;
