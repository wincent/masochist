/**
 * @flow
 */

import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

import type Tag from '../../../models/Tag';
export type Taggable = {tags: Array<Tag>};

const {connectionType: taggableConnection} = connectionDefinitions({
  name: 'Taggable',
  nodeType: ContentType,
});

export default taggableConnection;
