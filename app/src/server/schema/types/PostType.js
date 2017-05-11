import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import Post from '../../models/Post';
import {nodeInterface, registerType} from '../definitions/node';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
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
  }),
);

export default PostType;
