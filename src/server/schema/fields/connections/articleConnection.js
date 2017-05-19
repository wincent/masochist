import {connectionDefinitions} from 'graphql-relay';
import ArticleType from '../../types/ArticleType';

const {connectionType: articleConnection} = connectionDefinitions({
  name: 'Article',
  nodeType: ArticleType,
});

export default articleConnection;
