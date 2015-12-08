import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {
  connectionArgs,
  connectionFromArraySlice,
  connectionFromPromisedArraySlice,
  getOffsetWithDefault,
  globalIdField,
} from 'graphql-relay';
import Article from './models/Article';
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
import postConnection from './schema/fields/connections/postConnection';
import snippetConnection from './schema/fields/connections/snippetConnection';
import tagConnection from './schema/fields/connections/tagConnection';
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
