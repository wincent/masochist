/**
 * @flow
 */

import {GraphQLList} from 'graphql';
import TagNameType from '../types/TagNameType';

import type Taggable from './connections/taggableConnection';
import type Tag from '../../models/Tag';

const tagsField = {
  tags: {
    // TODO: make this tags{name}?
    type: new GraphQLList(TagNameType),
    resolve: (record: Taggable): Array<Tag> => record.tags,
  },
};

export default tagsField;
