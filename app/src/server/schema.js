import Promise from 'bluebird';
import {
  GraphQLList,
  GraphQLNonNull,
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
import DateTimeType from './schema/types/DateTimeType';
import {getClient} from '../common/redis';
import wikify from './wikify';

class User {
  constructor() {
    this.name = 'Gregory';
  }
}

const {nodeField, nodeInterface} = nodeDefinitions(
  function resolveObjectFromID(globalId, {rootValue}) {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return new User();
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

function unbase64(i) {
  return ((new Buffer(i, 'base64')).toString('ascii'));
}

function cursorToOffset(cursor) {
  const PREFIX = 'arrayconnection:';
  return parseInt(unbase64(cursor).substring(PREFIX.length), 10);
}

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
      resolve: user => user.name,
    },
    articles: {
      type: articleConnection,
      description: 'Articles visible to this user',
      args: connectionArgs,
      resolve: async (user, args, {rootValue}) => {
        const offset = args.after ? cursorToOffset(args.after) : 0;
        // TODO make this a static method on Article?
        const results = await getClient()
          .zrevrangeAsync('masochist:articles-index', offset, offset + args.first);
        const paddedResults = new Array(offset).concat(...results);
        return connectionFromPromisedArray(
          rootValue.loaders.articleLoader.loadMany(paddedResults),
          args
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
      type: new GraphQLNonNull(GraphQLString),
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
      type: new GraphQLNonNull(GraphQLString),
      description: "The article's title",
      resolve(article) {
        return article.title;
      }
    },
    createdAt: {
      type: DateTimeType,
      description: 'Date and time when article was first created',
      resolve(article) {
        return article.createdAt;
      },
    },
    updatedAt: {
      type: DateTimeType,
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
        resolve: () => new User(),
      },
    }
  })
});

export default schema;
