import {GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {globalIdField} from 'graphql-relay';
import Page from '../../models/Page';
import {nodeInterface, registerType} from '../definitions/node';
import tagsField from '../fields/tagsField';
import timestampFields from '../fields/timestampFields';
import taggedInterface from '../interfaces/taggedInterface';
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
  }),
);

export default PageType;
