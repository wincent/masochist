import Relay from 'react-relay';

const PostQueries  = {
  post: () => Relay.QL`query { node(id: $id) }`,
};

export default PostQueries;
