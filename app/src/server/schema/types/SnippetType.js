import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {
  connectionArgs,
  getOffsetWithDefault,
  globalIdField,
} from 'graphql-relay';
import Snippet from '../../models/Snippet';
import {nodeInterface, registerType} from '../definitions/node';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
import MarkupType from './MarkupType';

const SnippetType = registerType(
  new GraphQLObjectType({
    name: 'Snippet',
    description: 'A snippet',
    fields: {
      id: globalIdField('Snippet'),
      title: {
        type: GraphQLString,
        description: "The snippet's title",
        // NOTE: i might want to include human-readable id here as well...
        // to make it easy to generate URLs etc
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
      description: {
        type: GraphQLString,
        description: 'Succinct summary of the snippet content',
        resolve: snippet => snippet.description,
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
  }),
);

export default SnippetType;
