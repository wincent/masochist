/**
 * @flow
 */

import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

import type Tag from '../../../models/Tag';
export type Taggable = {tags: Array<Tag>};

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
