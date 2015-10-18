import Relay from 'react-relay';

const TagCloudQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default TagCloudQueries;
