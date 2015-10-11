import Relay from 'react-relay';

const PostsQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default PostsQueries;
