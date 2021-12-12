import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

const {connectionType: searchConnection} = connectionDefinitions({
  connectionFields: {
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Total number of search results',
    },
  },
  name: 'SearchResult',
  nodeType: ContentType,
});

export default searchConnection;
