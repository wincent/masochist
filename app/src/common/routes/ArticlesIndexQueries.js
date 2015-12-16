import Relay from 'react-relay';

const ArticlesIndexQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default ArticlesIndexQueries;
