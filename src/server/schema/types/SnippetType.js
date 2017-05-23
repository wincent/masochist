import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {
  connectionArgs,
  getOffsetWithDefault,
  globalIdField,
} from 'graphql-relay';
import getHistoryURLForContentPath from '../../getHistoryURLForContentPath';
import Snippet from '../../models/Snippet';
import {nodeInterface, registerType} from '../definitions/node';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
import versionedInterface from '../interfaces/versionedInterface';
import HistoryType from './HistoryType';
import {
  default as MarkupType,
  MarkupFormatType,
} from './MarkupType';

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
        type: new GraphQLNonNull(MarkupType),
        resolve(snippet) {
          return {
            raw: snippet.body.trim(),
            format: snippet.format,
          };
        },
      },
      description: {
        type: GraphQLString,
        description: 'Succinct summary of the snippet content',
      },
      source: {
        type: GraphQLString,
        args: {
          format: {
            type: MarkupFormatType,
          },
        },
        description: 'Raw source of snippet',
        resolve(snippet, args) {
          if (!args.format || args.format === snippet.format) {
            return snippet.body.trim();
          } else {
            return null;
          }
        },
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URL for the snippet',
        resolve: snippet => `/snippets/${snippet.id}`,
      },
      history: {
        type: new GraphQLNonNull(HistoryType),
        resolve: ({format, id}) => ({
          url: getHistoryURLForContentPath(`/snippets/${id}.${format}`),
        }),
      },
      ...tagsField,
      ...timestampFields,
    },
    interfaces: [nodeInterface, taggedInterface, versionedInterface],
    isTypeOf: object => object instanceof Snippet,
  }),
);

export default SnippetType;
