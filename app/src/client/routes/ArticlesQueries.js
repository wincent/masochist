import Relay from 'react-relay';

const ArticlesQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default ArticlesQueries;
