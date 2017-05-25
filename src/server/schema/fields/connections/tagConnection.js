import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import TagType from '../../types/TagType';

const {connectionType: tagConnection} = connectionDefinitions({
  connectionFields: {
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Total number of tags',
    },
  },
  name: 'Tag',
  nodeType: TagType,
});

export default tagConnection;
