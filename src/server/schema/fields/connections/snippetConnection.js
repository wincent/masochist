import {connectionDefinitions} from 'graphql-relay';
import SnippetType from '../../types/SnippetType';

const {connectionType: snippetConnection} = connectionDefinitions({
  name: 'Snippet',
  nodeType: SnippetType,
});

export default snippetConnection;
