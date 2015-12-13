import {connectionDefinitions} from 'graphql-relay';
import ContentType from '../../types/ContentType';

const {connectionType: taggableConnection} =
  connectionDefinitions({name: 'Taggable', nodeType: ContentType});

export default taggableConnection;
