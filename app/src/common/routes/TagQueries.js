import Relay from 'react-relay';

const TagQueries  = {
  tag: () => Relay.QL`query { node(id: $id) }`,
};

export default TagQueries;
