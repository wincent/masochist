import {connectionDefinitions} from 'graphql-relay';
import PostType from '../../types/PostType';

const {connectionType: postConnection} =
  connectionDefinitions({name: 'Post', nodeType: PostType});

export default postConnection;
