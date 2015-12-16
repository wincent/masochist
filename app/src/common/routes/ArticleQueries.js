import Relay from 'react-relay';

const ArticleQueries  = {
  article: () => Relay.QL`query { node(id: $id) }`,
};

export default ArticleQueries;
