import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import {globalIdField} from 'graphql-relay';
import getHistoryURLForContentPath from '../../getHistoryURLForContentPath';
import Post from '../../models/Post';
import {nodeInterface, registerType} from '../definitions/node';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
import versionedInterface from '../interfaces/versionedInterface';
import HistoryType from './HistoryType';
import MarkupType from './MarkupType';

const PostType = registerType(
  new GraphQLObjectType({
    name: 'Post',
    description: 'A blog post',
    fields: {
      id: globalIdField('Post'),
      title: {
        type: GraphQLString,
        description: "The blog post's title",
      },
      body: {
        type: new GraphQLNonNull(MarkupType),
        resolve(post) {
          return {
            raw: post.body,
            format: post.format,
          };
        },
      },
      readTime: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'Estimate of time necessary to read the post, in minutes',
        resolve(post) {
          return Math.ceil(post.body.split(/\s+/).length / 250);
        },
      },
      description: {
        type: GraphQLString,
        description: 'Succinct summary of the post content',
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URL for the post',
        resolve: post => `/blog/${post.id}`,
      },
      history: {
        type: new GraphQLNonNull(HistoryType),
        resolve: ({format, id}) => ({
          url: getHistoryURLForContentPath(`/blog/${id}.${format}`),
        }),
      },
      ...tagsField,
      ...timestampFields,
    },
    interfaces: [nodeInterface, taggedInterface, versionedInterface],
    isTypeOf: object => object instanceof Post,
  }),
);

export default PostType;
