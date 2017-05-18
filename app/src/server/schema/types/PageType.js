import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import Page from '../../models/Page';
import {nodeInterface, registerType} from '../definitions/node';
import getHistoryURLForContentPath from '../../getHistoryURLForContentPath';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
import versionedInterface from '../interfaces/versionedInterface';
import HistoryType from './HistoryType';
import MarkupType from './MarkupType';

const PageType = registerType(
  new GraphQLObjectType({
    name: 'Page',
    description: 'A page',
    fields: {
      id: globalIdField('Page'),
      title: {
        type: GraphQLString,
        description: "The page's title",
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
      description: {
        type: GraphQLString,
        description: 'Succinct summary of the page content',
      },
      url: {
        type: new GraphQLNonNull(GraphQLString),
        description: 'URL for the page',
        resolve: page => `/pages/${page.id}`,
      },
      history: {
        type: HistoryType,
        resolve: ({format, id}) => ({
          url: getHistoryURLForContentPath(`/pages/${id}.${format}`),
        }),
      },
      ...tagsField,
      ...timestampFields,
    },
    interfaces: [nodeInterface, taggedInterface, versionedInterface],
    isTypeOf: object => object instanceof Page,
  }),
);

export default PageType;
