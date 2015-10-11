import Relay from 'react-relay';

const SnippetQueries = {
  snippet: () => Relay.QL`query { node(id: $id) }`,
};

export default SnippetQueries;
