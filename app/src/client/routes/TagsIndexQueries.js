import Relay from 'react-relay';

const TagsIndexQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default TagsIndexQueries;
