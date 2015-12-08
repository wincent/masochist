import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArraySlice,
  connectionFromPromisedArraySlice,
  getOffsetWithDefault,
  globalIdField,
} from 'graphql-relay';
import Article from './models/Article';
import Page from './models/Page';
import Post from './models/Post';
import Snippet from './models/Snippet';
import Tag from './models/Tag';
import User from './models/User';
import {
  nodeField,
  nodeInterface,
  registerType,
} from './schema/definitions/node';
import articleConnection from './schema/fields/connections/articleConnection';
import tagsField from './schema/fields/tagsField';
import timestampFields from './schema/fields/timestampFields';
import taggedInterface from './schema/interfaces/taggedInterface';
import ArticleType from './schema/types/ArticleType';
import MarkupType from './schema/types/MarkupType';
import PageType from './schema/types/PageType';
import PostType from './schema/types/PostType';
import SnippetType from './schema/types/SnippetType';
import TagNameType from './schema/types/TagNameType';

const userType = registerType(new GraphQLObjectType({
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
          rootValue.loaders.Article.loadMany(articles),
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
          rootValue.loaders.Post.loadMany(posts),
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
          rootValue.loaders.Snippet.loadMany(snippets),
          args,
          {
            sliceStart: offset,
            arrayLength: totalCount,
          },
        );
      },
    },
    tags: {
      type: tagConnection,
      description: 'Tags visible to this user',
      args: connectionArgs,
      resolve: async (user, args, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const [tags, totalCount] = await Tag.readIndex(count, offset);
        return {
          count: totalCount,
          ...connectionFromArraySlice(
            tags,
            args,
            {
              sliceStart: offset,
              arrayLength: totalCount,
            },
          ),
        };
      },
    },
  }),
  interfaces: [nodeInterface],
}));

const {connectionType: postConnection} =
  connectionDefinitions({name: 'Post', nodeType: PostType});

const {connectionType: snippetConnection} =
  connectionDefinitions({name: 'Snippet', nodeType: SnippetType});

const taggableType = new GraphQLUnionType({
  name: 'Taggable',
  types: [
    ArticleType,
    PageType,
    PostType,
    SnippetType,
  ],
});

const {connectionType: taggableConnection} =
  connectionDefinitions({name: 'Taggable', nodeType: taggableType});

const tagType = registerType(new GraphQLObjectType({
  name: 'Tag',
  description: 'A tag',
  fields: {
    id: globalIdField('Tag'),
    name: {
      type: new GraphQLNonNull(TagNameType),
      description: "The tag's name",
      resolve: tag => tag.name,
    },
    count: {
      type: GraphQLInt,
      description: 'Count of items tagged with the tag',
      resolve: tag => tag.count,
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the tag',
      resolve: tag => `/tags/${tag.id}`,
    },
    taggables: {
      type: taggableConnection,
      description: 'Items tagged with a particular tag',
      args: connectionArgs,
      resolve: async (tag, args, {rootValue}) => {
        // Cap count to avoid abuse.
        const count = Math.max(args.first, 10);
        const offset = getOffsetWithDefault(args.after, -1) + 1;
        const {loaders} = rootValue;
        const promisedContent = tag.taggables
          .slice(offset, offset + count)
          .map(typeAndId => {
            // TODO: These should probably be globalIds, manual splitting is
            // probably a smell.
            const [type, id] = typeAndId.split(':');
            switch (type) {
              case 'wiki':
                return loaders.Article.load(id);
              case 'blog':
                return loaders.Post.load(id);
              case 'pages':
                return loaders.Page.load(id);
              case 'snippets':
                return loaders.Snippet.load(id);
              default:
                // TODO throw here?
            }
          });
        return connectionFromPromisedArraySlice(
          Promise.all(promisedContent),
          args,
          {
            sliceStart: offset,
            arrayLength: tag.taggables.length,
          },
        );
      },
    },
  },
  interfaces: [nodeInterface],
}));

const {connectionType: tagConnection} = connectionDefinitions({
  connectionFields: {
    count: {
      type: GraphQLInt,
      description: 'Total number of tags',
      resolve: connection => connection.count,
    },
  },
  name: 'Tag',
  nodeType: tagType,
});

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
