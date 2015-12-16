import Relay from 'react-relay';

const PageQueries  = {
  page: () => Relay.QL`query { node(id: $id) }`,
};

export default PageQueries;
