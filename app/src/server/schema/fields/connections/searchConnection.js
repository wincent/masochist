import {GraphQLInt} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

const {connectionType: searchConnection} = connectionDefinitions({
  connectionFields: {
    count: {
      type: GraphQLInt,
      description: 'Total number of search results',
      resolve: connection => connection.count,
    },
  },
  name: 'SearchResult',
  nodeType: ContentType,
});

export default searchConnection;
