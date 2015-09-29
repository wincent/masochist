'use strict';

import Relay from 'react-relay';

const AppQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default AppQueries;
