/**
 * @flow
 */

import {GraphQLList} from 'graphql';
import TagType from '../types/TagType';

const tagsField = {
  tags: {
    // TODO: make this tags{name}?
    type: new GraphQLList(TagType),
    resolve: record => record.tags,
  },
};

export default tagsField;
