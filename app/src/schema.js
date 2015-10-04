'use strict';

import Promise from 'bluebird';
import {
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
  nodeDefinitions,
  globalIdField,
} from 'graphql-relay';
import wikify from './wikify';

class User {}
class Article {}

const {nodeField, nodeInterface} = nodeDefinitions(
  function resolveObjectFromID(globalId) {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      // TODO: change this, obviously
      return {name: 'Greg'};
    } else if (type === 'Article') {
      // TODO: plug-in article loader here
      return {id: globalId, title: 'yep'};
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
      hello: {
        type: GraphQLString,
        resolve() {
          // Demo only.
          return wikify([{wikitext: "'''world'''"}]);
        }
      }
    }
  })
});

export default schema;
