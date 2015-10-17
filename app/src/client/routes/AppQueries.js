import Relay from 'react-relay';

const AppQueries = {
  node: () => Relay.QL`query { node(id: $id) }`,
};

export default AppQueries;
