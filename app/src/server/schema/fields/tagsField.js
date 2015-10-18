/**
 * @flow
 */

import {GraphQLList} from 'graphql';
import TagNameType from '../types/TagNameType';

const tagsField = {
  tags: {
    // TODO: make this tags{name}?
    type: new GraphQLList(TagNameType),
    resolve: record => record.tags,
  },
};

export default tagsField;
