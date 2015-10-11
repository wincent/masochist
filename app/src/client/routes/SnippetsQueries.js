import Relay from 'react-relay';

const SnippetsQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default SnippetsQueries;
