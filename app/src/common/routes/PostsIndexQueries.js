import Relay from 'react-relay';

const PostsIndexQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default PostsIndexQueries;
