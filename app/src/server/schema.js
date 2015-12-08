import Promise from 'bluebird';
import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLUnionType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import {Kind} from 'graphql/language';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArraySlice,
  connectionFromPromisedArraySlice,
  cursorToOffset,
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
import tagsField from './schema/fields/tagsField';
import timestampFields from './schema/fields/timestampFields';
import taggedInterface from './schema/interfaces/taggedInterface';
import MarkupType from './schema/types/MarkupType';
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

async function getRedirectedArticle(redirect, articleLoader) {
  const match = redirect.match(/^\s*\[\[(.+)\]\]\s*$/);
  if (match) {
    return await articleLoader.load(match[1]);
  }
}

async function resolveRedirects(article, {loaders}) {
  // TODO detect and disallow (or warn about) multi-hop redirects?
  while (article.redirect) {
    let targetArticle = await getRedirectedArticle(
      article.redirect,
      loaders.Article
    );
    if (targetArticle) {
      article = targetArticle;
    } else {
      break;
    }
  }
  return article;
}

const articleType = registerType(new GraphQLObjectType({
  name: 'Article',
  description: 'A wiki article',
  fields: {
    id: globalIdField('Article'),
    title: {
      type: GraphQLString,
      description: "The article's title",
      resolve: article => article.title,
    },
    resolvedTitle: {
      type: GraphQLString,
      description: 'The title of the article after resolving redirects',
      resolve: async (article, args, {rootValue}) => {
        article = await resolveRedirects(article, rootValue);
        return article.title;
      },
    },
    redirect: {
      type: GraphQLString,
      description:
        'The destination ([[wiki article]] or URL) the article should ' +
        'redirect to',
      resolve: article => article.redirect,
    },
    body: {
      type: MarkupType,
      resolve: async (article, args, {rootValue}) => {
        article = await resolveRedirects(article, rootValue);
        return {
          format: article.format,
          raw: article.body,
        };
      },
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the article',
      resolve: article => `/wiki/${article.id.replace(/ /g, '_')}`,
    },
    tags: {
      type: new GraphQLList(TagNameType),
      resolve: async (article, args, {rootValue}) => {
        article = await resolveRedirects(article, rootValue);
        return article.tags;
      },
    },
    ...timestampFields,
  },
  interfaces: [nodeInterface, taggedInterface],
  isTypeOf: object => object instanceof Article,
}));

const {connectionType: articleConnection} =
  connectionDefinitions({name: 'Article', nodeType: articleType});

const pageType = registerType(new GraphQLObjectType({
  name: 'Page',
  description: 'A page',
  fields: {
    id: globalIdField('Page'),
    title: {
      type: GraphQLString,
      description: "The page's title",
      resolve: page => page.title,
    },
    body: {
      type: MarkupType,
      resolve(page) {
        return {
          raw: page.body,
          format: page.format,
        };
      },
    },
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the page',
      resolve: page => `/pages/${page.id}`,
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface, taggedInterface],
  isTypeOf: object => object instanceof Page,
}));

const postType = registerType(new GraphQLObjectType({
  name: 'Post',
  description: 'A blog post',
  fields: {
    id: globalIdField('Post'),
    title: {
      type: GraphQLString,
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
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the post',
      resolve: post => `/blog/${post.id}`,
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface, taggedInterface],
  isTypeOf: object => object instanceof Post,
}));

const {connectionType: postConnection} =
  connectionDefinitions({name: 'Post', nodeType: postType});

const snippetType = registerType(new GraphQLObjectType({
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
    url: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'URL for the snippet',
      resolve: snippet => `/snippets/${snippet.id}`,
    },
    ...tagsField,
    ...timestampFields,
  },
  interfaces: [nodeInterface, taggedInterface],
  isTypeOf: object => object instanceof Snippet,
}));

const {connectionType: snippetConnection} =
  connectionDefinitions({name: 'Snippet', nodeType: snippetType});


const taggableType = new GraphQLUnionType({
  name: 'Taggable',
  types: [
    articleType,
    pageType,
    postType,
    snippetType,
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
