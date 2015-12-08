import {connectionDefinitions} from 'graphql-relay';
import TaggableType from '../../types/TaggableType';

const {connectionType: taggableConnection} =
  connectionDefinitions({name: 'Taggable', nodeType: TaggableType});

export default taggableConnection;
