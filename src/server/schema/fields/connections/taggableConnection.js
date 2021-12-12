import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

const {connectionType: taggableConnection} = connectionDefinitions({
  connectionFields: {
    count: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Number of tags',
    },
  },
  name: 'Taggable',
  nodeType: ContentType,
});

export default taggableConnection;
