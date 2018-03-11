import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {globalIdField} from 'graphql-relay';
import getHistoryURLForContentPath from '../../getHistoryURLForContentPath';
import getEditURLForContentPath from '../../getEditURLForContentPath';
import Article from '../../models/Article';
import {nodeInterface, registerType} from '../definitions/node';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
import versionedInterface from '../interfaces/versionedInterface';
import HistoryType from './HistoryType';
import MarkupType from './MarkupType';
import TagNameType from './TagNameType';

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
      loaders.Article,
    );
    if (targetArticle) {
      article = targetArticle;
    } else {
      break;
    }
  }
  return article;
}

const ArticleType = registerType(
  new GraphQLObjectType({
    name: 'Article',
    description: 'A wiki article',
    fields: {
      id: globalIdField('Article'),
      title: {
        type: GraphQLString,
        description: "The article's title",
      },
      resolvedTitle: {
        type: GraphQLString,
        description: 'The title of the article after resolving redirects',
        resolve: async (article, args, context, {rootValue}) => {
          article = await resolveRedirects(article, rootValue);
          return article.title;
        },
      },
      redirect: {
        type: GraphQLString,
        description:
          'The destination ([[wiki article]] or URL) the article should ' +
          'redirect to',
      },
      body: {
        type: new GraphQLNonNull(MarkupType),
        resolve: async (article, args, context, {rootValue}) => {
          article = await resolveRedirects(article, rootValue);
          return {
            format: article.format,
            raw: article.body,
          };
        },
      },
      description: {
        type: GraphQLString,
        description: 'Succinct summary of the article content',
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URL for the article',
        resolve: async (article, args, context, {rootValue}) => {
          article = await resolveRedirects(article, rootValue);
          const path = encodeURIComponent(article.id.replace(/ /g, '_'));
          return `/wiki/${path}`;
        },
      },
      tags: {
        type: new GraphQLNonNull(
          new GraphQLList(new GraphQLNonNull(TagNameType)),
        ),
        resolve: async (article, args, context, {rootValue}) => {
          article = await resolveRedirects(article, rootValue);
          return article.tags;
        },
      },
      editURL: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URL to edit the article',
        resolve: ({format, id}) => getEditURLForContentPath(
          `/wiki/${encodeURIComponent(id)}.${format}`,
        ),
      },
      history: {
        type: new GraphQLNonNull(HistoryType),
        resolve: ({format, id}) => ({
          url: getHistoryURLForContentPath(
            `/wiki/${encodeURIComponent(id)}.${format}`,
          ),
        }),
      },
      ...timestampFields,
    },
    interfaces: [nodeInterface, taggedInterface, versionedInterface],
    isTypeOf: object => object instanceof Article,
  }),
);

export default ArticleType;
