import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {Kind} from 'graphql/language';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromPromisedArraySlice,
  cursorToOffset,
  fromGlobalId,
  getOffsetWithDefault,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';
import Article from './Article';
import Snippet from './Snippet';
import Post from './Post';
import tagsField from './schema/fields/tagsField';
import timestampFields from './schema/fields/timestampFields';
import MarkupType from './schema/types/MarkupType';

class User {
  constructor() {
    this.name = 'Anonymous visitor';
  }
}

const {nodeField, nodeInterface} = nodeDefinitions(
  function resolveObjectFromID(globalId, {rootValue}) {
    const {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return new User();
    } else if (type === 'Article') {
      return rootValue.loaders.articleLoader.load(id);
    } else if (type === 'Post') {
      return rootValue.loaders.postLoader.load(id);
    } else if (type === 'Snippet') {
      return rootValue.loaders.snippetLoader.load(id);
    } else {
      return null;
    }
  },
  function resolveGraphQLTypeFromObject(object) {
    if (object instanceof User) {
      return userType;
    } else if (object instanceof Article) {
      return articleType;
    } else if (object instanceof Post) {
      return postType;
    } else if (object instanceof Snippet) {
      return snippetType;
    } else {
      return null;
    }
  },
);

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
      description: 'Wiki articles visible to this user',
      args: connectionArgs,
      resolve: async (user, args, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const [articles, totalCount] = await Article.readIndex(count, offset);
        return connectionFromPromisedArraySlice(
          rootValue.loaders.articleLoader.loadMany(articles),
          args,
          {
            sliceStart: offset,
            arrayLength: totalCount,
          },
        );
      },
    },
    posts: {
      type: postConnection,
      description: 'Blog posts visible to this user',
      args: connectionArgs,
      resolve: async (user, args, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const [posts, totalCount] = await Post.readIndex(count, offset);
        return connectionFromPromisedArraySlice(
          rootValue.loaders.postLoader.loadMany(posts),
          args,
          {
            sliceStart: offset,
            arrayLength: totalCount,
          },
        );
      },
    },
    snippets: {
      type: snippetConnection,
      description: 'Snippets visible to this user',
      args: connectionArgs,
      resolve: async (user, args, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const [snippets, totalCount] = await Snippet.readIndex(count, offset);
        return connectionFromPromisedArraySlice(
          rootValue.loaders.snippetLoader.loadMany(snippets),
          args,
          {
            sliceStart: offset,
            arrayLength: totalCount,
          },
        );
      },
    },
  }),
  interfaces: [nodeInterface],
});

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'A wiki article',
  fields: {
    id: globalIdField('Article'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The article's title",
      resolve: article => article.title,
    },
    body: {
      type: MarkupType,
      resolve(article) {
        // TODO: handle redirects
        return {
          raw: article.body,
          format: article.format,
        };
      },
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface],
});

const {connectionType: articleConnection} =
  connectionDefinitions({name: 'Article', nodeType: articleType});

const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'A blog post',
  fields: {
    id: globalIdField('Post'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The blog post's title",
      resolve: post => post.title,
    },
    body: {
      type: MarkupType,
      resolve(post) {
        return {
          raw: post.body,
          format: post.format,
        };
      },
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface],
});

const {connectionType: postConnection} =
  connectionDefinitions({name: 'Post', nodeType: postType});

const snippetType = new GraphQLObjectType({
  name: 'Snippet',
  description: 'A snippet',
  fields: {
    id: globalIdField('Snippet'),
    title: {
      type: GraphQLString,
      description: "The snippet's title",
      resolve: snippet => snippet.title || `Snippet #${snippet.id}`,
    },
    body: {
      type: MarkupType,
      resolve(snippet) {
        return {
          raw: snippet.body,
          format: snippet.format,
        };
      },
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface],
});

const {connectionType: snippetConnection} =
  connectionDefinitions({name: 'Snippet', nodeType: snippetType});

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
