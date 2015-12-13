import Relay from 'react-relay';

const SearchQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default SearchQueries;
